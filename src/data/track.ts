const API = 'http://localhost:3001'

function pixel() {
  return (window as any).fbq
}

export function trackEvent(type: 'page_view' | 'click', data: { page?: string; label?: string }) {
  // Internal analytics
  fetch(`${API}/api/track`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, page: data.page || location.pathname, label: data.label || '', referrer: document.referrer }),
  }).catch(() => {})

  // Meta Pixel for clicks
  if (type === 'click' && data.label) {
    const fbq = pixel()
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'WhatsAppClick', { content_name: data.label, content_category: 'WhatsApp' })
    }
  }
}

// Global WhatsApp click tracking for any WA link without explicit trackEvent
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest('a[href*="wa.me"]') as HTMLAnchorElement | null
    if (!link) return

    const fbq = pixel()
    if (typeof fbq !== 'function') return

    const existing = link.getAttribute('data-fbp')
    if (existing) {
      fbq('trackCustom', 'WhatsAppClick', { content_name: existing, content_category: 'WhatsApp' })
      return
    }

    const section = link.closest('section, header, footer, [id]')
    let label = 'wa-click'
    if (section) {
      const id = section.id || section.tagName.toLowerCase()
      label = `wa-${id}`
    }
    fbq('trackCustom', 'WhatsAppClick', { content_name: label, content_category: 'WhatsApp' })
  })
}
