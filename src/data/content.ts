interface PageContent {
  heroTitle?: string
  heroDesc?: string
  heroWords?: string[]
  heroEnding?: string
  buttonText?: string
  waNavLabel?: string
  waNavMessage?: string
  waHeroLabel?: string
  waHeroMessage?: string
  waConsultLabel?: string
  waConsultMessage?: string
  aboutTitle?: string
  aboutDesc?: string
  aboutButton?: string
  aboutLink?: string
  aboutCompanyTitle?: string
  aboutCompanyDesc?: string
  aboutCompanyListIntro?: string
  aboutCompanyList?: string[]
  aboutCompanyOutro?: string
  feature1?: string
  feature2?: string
  feature3?: string
  featuresBadge?: string
  featuresTitle?: string
  featuresSubtitle?: string
  features?: Array<{title: string; desc: string; img: string}>
  labTitle?: string
  labDesc?: string
  labCards?: Array<{title: string; desc: string}>
  visiBadge?: string
  visiDesc?: string
  visiCompanyName?: string
  visiTitle?: string
  visiText?: string
  misiTitle?: string
  misiList?: Array<{text: string; icon?: string}>
  workHeroBadge?: string
  workHeroTitle?: string
  workHeroDesc?: string
  kriteriaBadge?: string
  kriteriaTitle?: string
  kriteriaList?: Array<{title: string; content: string}>
  workBadge?: string
  workTitle?: string
  workSteps?: Array<{title: string; desc: string}>
  processSectionTitle?: string
  processTitle?: string
  processDesc?: string
  processSteps?: Array<{title: string; desc: string; icon?: string}>
  processLinkText?: string
  processLinkHref?: string
  testimonialTitle?: string
  testimonialRating?: string
  testimonials?: Array<{name: string; text: string}>
  articleSectionTitle?: string
  articleSectionSubtitle?: string
  selectedArticleIds?: number[]
  consultTitle?: string
  consultSubtitle?: string
  consultButton?: string
  cardTitle?: string
  cardDesc?: string
  cardLinkText?: string
  cardLinkHref?: string
}

interface ConsultContent {
  consultTitle?: string
  consultSubtitle?: string
  consultButton?: string
  consultPhone?: string
  consultMessage?: string
  cardTitle?: string
  cardDesc?: string
  cardLinkText?: string
  cardLinkHref?: string
}

interface ContentData {
  [page: string]: PageContent
}

function parseContent(): ContentData {
  const el = document.getElementById('cms-content') as HTMLScriptElement | null
  if (el?.textContent) {
    try { return JSON.parse(el.textContent) } catch {}
  }
  return {}
}

const content = parseContent()

function getPageContent(page: string): PageContent {
  return content[page] || {}
}

function getConsultContent(): ConsultContent {
  return content.consult || {}
}

export { content, getPageContent, getConsultContent }
export type { PageContent, ConsultContent }
