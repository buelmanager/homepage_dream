import { describe, it, expect } from 'vitest'
import crypto from 'crypto'
import { verifyStripeWebhookSignature } from '@/lib/stripe'

function createSignature(payload: string, secret: string, timestamp?: number) {
  const ts = timestamp ?? Math.floor(Date.now() / 1000)
  const sig = crypto
    .createHmac('sha256', secret)
    .update(`${ts}.${payload}`, 'utf8')
    .digest('hex')
  return { header: `t=${ts},v1=${sig}`, timestamp: ts }
}

describe('verifyStripeWebhookSignature()', () => {
  const secret = 'whsec_test_secret'
  const payload = '{"id":"evt_123"}'

  it('returns true for a valid signature', () => {
    const { header } = createSignature(payload, secret)
    expect(verifyStripeWebhookSignature(payload, header, secret)).toBe(true)
  })

  it('returns false for a wrong secret', () => {
    const { header } = createSignature(payload, secret)
    expect(verifyStripeWebhookSignature(payload, header, 'wrong_secret')).toBe(false)
  })

  it('returns false for an expired timestamp', () => {
    const oldTimestamp = Math.floor(Date.now() / 1000) - 600
    const { header } = createSignature(payload, secret, oldTimestamp)
    expect(verifyStripeWebhookSignature(payload, header, secret)).toBe(false)
  })

  it('returns false for a malformed header', () => {
    expect(verifyStripeWebhookSignature(payload, 'garbage', secret)).toBe(false)
  })

  it('returns false when no v1 signatures present', () => {
    const ts = Math.floor(Date.now() / 1000)
    expect(verifyStripeWebhookSignature(payload, `t=${ts}`, secret)).toBe(false)
  })
})
