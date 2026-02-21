type LogMeta = Record<string, unknown>;

function formatEntry(level: string, message: string, meta?: LogMeta): string {
  const entry = { level, message, ...meta, timestamp: new Date().toISOString() };
  return JSON.stringify(entry);
}

const logger = {
  info(message: string, meta?: LogMeta) {
    if (process.env.NODE_ENV === "production") return;
    process.stdout.write(formatEntry("info", message, meta) + "\n");
  },
  warn(message: string, meta?: LogMeta) {
    process.stderr.write(formatEntry("warn", message, meta) + "\n");
  },
  error(message: string, error?: unknown) {
    const errorMeta =
      error instanceof Error
        ? { errorMessage: error.message, stack: error.stack }
        : { errorMessage: String(error) };
    process.stderr.write(formatEntry("error", message, errorMeta) + "\n");
  },
};

export default logger;
