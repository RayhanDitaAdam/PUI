import { Helmet } from "react-helmet-async";
import type { SeoEntry } from "../../services/cms";

const defaultSeo: Record<string, { title: string; description: string; ogImage?: string }> = {
  home: {
    title: "PUI Gadai - Solusi Dana Cepat Aset Mewah",
    description:
      "Pergadaian Utama Indonesia (PUI) melayani gadai tas branded, jam tangan mewah, dan perhiasan berlian dengan proses cepat dan aman.",
  },
  "profil-perusahaan": {
    title: "Profil Perusahaan | PUI Gadai",
    description:
      "Kenali lebih dekat Pergadaian Utama Indonesia (PUI) — mitra terpercaya untuk solusi likuiditas aset mewah Anda.",
  },
  "cara-kerja": {
    title: "Cara Kerja | PUI Gadai",
    description:
      "Pelajari bagaimana proses gadai aset mewah di PUI bekerja. Mulai dari konsultasi hingga pencairan dana cepat dan aman.",
  },
  artikel: {
    title: "Artikel | PUI Gadai",
    description:
      "Baca artikel dan insight seputar investasi aset mewah, gadai, dan tips keuangan dari PUI Gadai.",
  },
};

const CMS_URL = import.meta.env.VITE_CMS_URL ?? "";

function getEmbeddedSeo(): SeoEntry[] | null {
  try {
    const el = document.getElementById("cms-seo");
    if (el?.textContent) return JSON.parse(el.textContent);
  } catch {}
  return null;
}

export function GeneratedSEO({ page }: { page: string }) {
  const embedded = getEmbeddedSeo();
  const entry = embedded?.find((e) => e.page === page);

  const fallback = defaultSeo[page] || defaultSeo.home;
  const title = entry?.metaTitle || fallback.title;
  const description = entry?.metaDescription || fallback.description;
  const ogImage = entry?.ogImage || fallback.ogImage || null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={`${CMS_URL}${ogImage}`} />}
    </Helmet>
  );
}
