import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import fs from 'fs'
import path from 'path'

const publishedPost = `---
title: Published Post
description: A published test post
date: "2025-01-15"
tags: [test, vitest]
published: true
thumbnail: /images/thumb.png
---

# Hello World

This is **bold** text.
`

const draftPost = `---
title: Draft Post
description: A draft post
date: "2025-01-20"
published: false
---

Draft content here.
`

const olderPost = `---
title: Older Post
description: An older published post
date: "2024-06-01"
tags: [old]
published: true
---

Older content.
`

describe('blog.ts — integration with fixture files in content/blog/', () => {
  // Write fixtures directly to BLOG_DIR so the real module can read them
  const BLOG_DIR = path.join(process.cwd(), 'content/blog')
  const fixtureFiles = [
    '__test_pub.md',
    '__test_draft.md',
    '__test_older.md',
  ]

  beforeAll(() => {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
    fs.writeFileSync(path.join(BLOG_DIR, '__test_pub.md'), publishedPost)
    fs.writeFileSync(path.join(BLOG_DIR, '__test_draft.md'), draftPost)
    fs.writeFileSync(path.join(BLOG_DIR, '__test_older.md'), olderPost)
  })

  afterAll(() => {
    for (const f of fixtureFiles) {
      const fp = path.join(BLOG_DIR, f)
      if (fs.existsSync(fp)) fs.unlinkSync(fp)
    }
  })

  it('getAllPosts() returns only published posts sorted by date desc', async () => {
    // Dynamic import to avoid module-level BLOG_DIR caching issues
    const { getAllPosts } = await import('@/lib/blog')
    const posts = getAllPosts()

    const testPosts = posts.filter((p) => p.slug.startsWith('__test_'))
    expect(testPosts.length).toBe(2) // published + older, not draft

    // Should be sorted newest first
    expect(testPosts[0].slug).toBe('__test_pub')
    expect(testPosts[1].slug).toBe('__test_older')
  })

  it('getAllPosts() parses frontmatter correctly', async () => {
    const { getAllPosts } = await import('@/lib/blog')
    const posts = getAllPosts()
    const pub = posts.find((p) => p.slug === '__test_pub')

    expect(pub).toBeDefined()
    expect(pub!.title).toBe('Published Post')
    expect(pub!.description).toBe('A published test post')
    expect(pub!.date).toBe('2025-01-15')
    expect(pub!.tags).toEqual(['test', 'vitest'])
    expect(pub!.thumbnail).toBe('/images/thumb.png')
  })

  it('getPostBySlug() returns HTML content for a published post', async () => {
    const { getPostBySlug } = await import('@/lib/blog')
    const post = await getPostBySlug('__test_pub')

    expect(post).not.toBeNull()
    expect(post!.title).toBe('Published Post')
    expect(post!.html).toContain('<strong>bold</strong>')
  })

  it('getPostBySlug() returns null for a draft post', async () => {
    const { getPostBySlug } = await import('@/lib/blog')
    const post = await getPostBySlug('__test_draft')

    expect(post).toBeNull()
  })

  it('getPostBySlug() returns null for non-existent slug', async () => {
    const { getPostBySlug } = await import('@/lib/blog')
    const post = await getPostBySlug('__test_nonexistent_slug_xyz')

    expect(post).toBeNull()
  })
})
