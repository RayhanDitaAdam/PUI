export interface WorkStep {
  id: string;
  title: string;
  desc: string;
  idx: number;
}

export interface KriteriaBlock {
  type: 'p' | 'p-bold' | 'small' | 'list';
  text?: string;
  items?: string[];
}

export interface KriteriaItem {
  id: number;
  title?: string;
  icon: string;
  content: KriteriaBlock[];
}

export interface Product {
  id: number;
  title: string;
  desc: string;
  heroTitle?: string;
  heroDesc?: string;
  image: string;
  slug: string;
  variant?: string;
  workSteps?: WorkStep[];
  kriteria?: KriteriaItem[];
}

export function getProducts(): Product[] {
  const el = document.getElementById('cms-products') as HTMLScriptElement | null;
  if (el?.textContent) {
    try { return JSON.parse(el.textContent) }
    catch { }
  }
  return [];
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find(p => p.slug === slug);
}
