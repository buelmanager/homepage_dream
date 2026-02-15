import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { z } from "zod/v4";

import { prisma } from "@/lib/prisma";
import { getDefaultSignupCredits } from "@/lib/app-settings";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: z.prettifyError(parsed.error) });
    }

    const { name, email, password } = parsed.data;
    const signupCredits = await getDefaultSignupCredits();

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        credits: signupCredits,
        role: "USER",
      },
    });

    await prisma.creditTransaction.create({
      data: {
        userId: user.id,
        amount: signupCredits,
        type: "SIGNUP_BONUS",
        description: `Welcome bonus credits (${signupCredits})`,
      },
    });

    return res
      .status(201)
      .json({ message: "Account created successfully", userId: user.id });
  } catch {
    return res.status(500).json({ error: "Internal server error" });
  }
}

