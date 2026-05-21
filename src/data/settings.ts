export interface Settings {
  facebook: string
  instagram: string
  linkedin: string
  whatsapp: string
  phone: string
}

const defaults: Settings = {
  facebook: 'https://www.facebook.com/profile.php?id=61585918772400',
  instagram: 'https://www.instagram.com/pui.gadai',
  linkedin: 'https://www.linkedin.com/company/puigadai/about',
  whatsapp: '6282277777911',
  phone: '02172787020',
}

function readSettings(): Settings {
  const el = document.getElementById('cms-settings')
  if (!el) return defaults
  try {
    return { ...defaults, ...JSON.parse(el.textContent || '{}') }
  } catch {
    return defaults
  }
}

export const settings = readSettings()
