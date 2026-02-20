import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn()', () => {
  it('returns a single class unchanged', () => {
    expect(cn('px-4')).toBe('px-4')
  })

  it('merges multiple classes', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2')
  })

  it('handles conditional classes', () => {
    expect(cn('px-4', false && 'py-2', 'text-sm')).toBe('px-4 text-sm')
  })

  it('resolves Tailwind conflicts (last wins)', () => {
    expect(cn('px-4', 'px-8')).toBe('px-8')
  })

  it('returns empty string for no input', () => {
    expect(cn()).toBe('')
  })

  it('handles undefined and null values', () => {
    expect(cn('px-4', undefined, null, 'py-2')).toBe('px-4 py-2')
  })
})
