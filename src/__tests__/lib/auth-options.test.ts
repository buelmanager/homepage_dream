import { describe, it, expect, vi } from 'vitest'

// Mock modules that auth-options imports at the top level
vi.mock('@/lib/prisma', () => ({ prisma: {} }))
vi.mock('@/lib/app-settings', () => ({ getDefaultSignupCredits: vi.fn() }))

import { redactEmail, createRequestId } from '@/lib/auth-options'

describe('redactEmail()', () => {
  it('redacts a normal email', () => {
    expect(redactEmail('user@example.com')).toBe('us***@example.com')
  })

  it('returns null for null input', () => {
    expect(redactEmail(null)).toBeNull()
  })

  it('returns null for undefined input', () => {
    expect(redactEmail(undefined)).toBeNull()
  })

  it('returns "***" when local part is 1 char or less', () => {
    expect(redactEmail('a@b.com')).toBe('***')
  })

  it('handles empty string', () => {
    expect(redactEmail('')).toBeNull()
  })
})

describe('createRequestId()', () => {
  it('returns a string', () => {
    expect(typeof createRequestId()).toBe('string')
  })

  it('contains a hyphen separator', () => {
    expect(createRequestId()).toContain('-')
  })

  it('returns unique values on successive calls', () => {
    const a = createRequestId()
    const b = createRequestId()
    expect(a).not.toBe(b)
  })
})
