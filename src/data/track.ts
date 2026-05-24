const API = 'http://localhost:3001'

declare const fbq: any

export function trackEvent(type: 'page_view' | 'click', data: { page?: string; label?: string }) {
  // Internal analytics
  fetch(`${API}/api/track`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, page: data.page || location.pathname, label: data.label || '', referrer: document.referrer }),
  }).catch(() => {})

  // Meta Pixel for clicks
  if (type === 'click' && data.label && typeof fbq === 'function') {
    fbq('trackCustom', 'Contact', { content_name: data.label })
  }
}

// Global WhatsApp click tracking for any WA link without explicit trackEvent
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest('a[href*="wa.me"]') as HTMLAnchorElement | null
    if (!link) return

    const existing = link.getAttribute('data-fbp')
    if (existing) {
      if (typeof fbq === 'function') fbq('trackCustom', 'Contact', { content_name: existing })
      return
    }

    // Auto-detect label from DOM context
    const section = link.closest('section, header, footer, [id]')
    let label = 'whatsapp-click'
    if (section) {
      const id = section.id || section.tagName.toLowerCase()
      label = `wa-${id}`
    }
    if (typeof fbq === 'function') fbq('trackCustom', 'Contact', { content_name: label })
  })
}
