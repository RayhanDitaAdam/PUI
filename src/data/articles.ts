import { allArticlesContent } from "./articles_content";

interface Article {
  id: number
  slug: string
  title: string
  category: string
  date: string
  author: string
  image: string
  excerpt: string
  content: string
  isMain?: boolean
}

function getEmbeddedArticles(): Article[] | null {
  try {
    const el = document.getElementById("cms-articles");
    if (el?.textContent) return JSON.parse(el.textContent);
  } catch {}
  return null;
}

let merged: Article[];

const embedded = getEmbeddedArticles();
if (embedded) {
  const slugMap = new Map<string, Article>();
  for (const a of embedded) slugMap.set(a.slug, a);
  for (const a of allArticlesContent) {
    if (!slugMap.has(a.slug)) slugMap.set(a.slug, a);
  }
  merged = Array.from(slugMap.values());
} else {
  merged = allArticlesContent;
}

export const articles = merged;
