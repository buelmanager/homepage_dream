import { describe, it, expect } from 'vitest'
import crypto from 'crypto'
import { verifyLemonWebhookSignature } from '@/lib/lemonsqueezy'

function createLemonSignature(payload: string, secret: string) {
  return crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex')
}

describe('verifyLemonWebhookSignature()', () => {
  const secret = 'lemon_test_secret'
  const payload = '{"meta":{"event_name":"order_created"}}'

  it('returns true for a valid signature', () => {
    const sig = createLemonSignature(payload, secret)
    expect(verifyLemonWebhookSignature(payload, sig, secret)).toBe(true)
  })

  it('returns false for a wrong secret', () => {
    const sig = createLemonSignature(payload, secret)
    expect(verifyLemonWebhookSignature(payload, sig, 'wrong_secret')).toBe(false)
  })

  it('returns false for a null header', () => {
    expect(verifyLemonWebhookSignature(payload, null, secret)).toBe(false)
  })

  it('returns false for mismatched length (triggers timingSafeEqual catch)', () => {
    expect(verifyLemonWebhookSignature(payload, 'short', secret)).toBe(false)
  })
})
