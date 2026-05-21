const CMS_URL = import.meta.env.VITE_CMS_URL ?? "";

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${CMS_URL}${endpoint}`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },

  seo: {
    getByPage(page: string) {
      return api.get<SeoEntry | null>(`/api/seo/${page}`);
    },
    getAll() {
      return api.get<SeoEntry[]>("/api/seo");
    },
  },

  articles: {
    getAll() {
      return api.get<Article[]>("/api/articles");
    },
  },

  products: {
    getAll() {
      return api.get<Product[]>("/api/products");
    },
  },

  testimonials: {
    getAll() {
      return api.get<Testimonial[]>("/api/testimonials");
    },
  },

  hero: {
    getByPage(page: string) {
      return api.get<HeroEntry | null>(`/api/hero?page=${page}`);
    },
  },
};

export interface SeoEntry {
  id: number;
  page: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string | null;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  thumbnail: string | null;
  slug: string;
  category: string | null;
  createdAt: string | null;
  author: string | null;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  imagePrimary: string;
  imageSecondary: string | null;
  slug: string;
  isRare: boolean | null;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  isDark: boolean | null;
}

export interface HeroEntry {
  id: number;
  page: string;
  title: string;
  description: string | null;
  imageDesktop: string | null;
  imageMobile: string | null;
  switcherWords: string | null;
}
