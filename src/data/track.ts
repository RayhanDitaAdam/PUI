const API = 'http://localhost:3001'

export function trackEvent(type: 'page_view' | 'click', data: { page?: string; label?: string }) {
  fetch(`${API}/api/track`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, page: data.page || location.pathname, label: data.label || '', referrer: document.referrer }),
  }).catch(() => {})
}
