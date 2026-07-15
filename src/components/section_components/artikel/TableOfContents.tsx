import { useState, useEffect } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents({ htmlContent }: { htmlContent: string }) {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlContent, 'text/html')
    const headings = doc.querySelectorAll('h2, h3')
    const toc: TocItem[] = []
    headings.forEach((h) => {
      const id = h.getAttribute('id') || h.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || ''
      if (!id) return
      toc.push({ id, text: h.textContent || '', level: h.tagName === 'H2' ? 2 : 3 })
    })
    setItems(toc)

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    // Wait for DOM to render, then observe
    const timer = setTimeout(() => {
      toc.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }, 200)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [htmlContent])

  if (items.length < 2) return null

  const scrollTo = (id: string) => {
    setActiveId(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="sticky top-28">
      <h4 className="text-sm font-bold text-[#003B33] uppercase tracking-wider mb-3 pb-2 border-b-2 border-[#C49A6C]">
        Daftar Isi
      </h4>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className={`text-left text-sm leading-snug transition-all duration-200 w-full ${
                item.level === 3 ? 'pl-4' : ''
              } ${
                  activeId === item.id
                    ? 'text-[#C49A6C] font-semibold'
                    : 'text-gray-500 hover:text-[#C49A6C]'
              }`}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
