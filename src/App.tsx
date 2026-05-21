import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import FloatingWA from "./components/__global/FloatingWA";
import Analytics from "./components/__global/Analytics";
import { GeneratedSEO } from "./components/__global/GeneratedSEO";
import PageLayout from "./components/__global/PageLayout";
import { trackEvent } from "./data/track";
import "./css/all.css"

function TrackPageViews() {
  const location = useLocation();
  useEffect(() => { trackEvent("page_view", { page: location.pathname }); }, [location.pathname]);
  return null;
}

// Lazy load components
const Main = lazy(() => import("./components/section_components/Main"));
const Profil = lazy(() => import("./components/section_components/Profil"));
const CaraKerja = lazy(() => import("./components/section_components/CaraKerja"));
const D_1 = lazy(() => import("./components/section_components/artikel/D_1"));
const D_2 = lazy(() => import("./components/section_components/artikel/D_2"));
const Produk = lazy(() => import("./components/section_components/Produk").then(module => ({ default: module.Produk })));

// Loading component
const PageLoader = () => (
  <div className="fixed inset-0 bg-[#003D35] flex items-center justify-center z-50">
    <div className="animate-pulse">
      <img src="/assets/img/logo-pui.webp" alt="Loading..." className="w-32 opacity-50" />
    </div>
  </div>
);

function App () {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Analytics />
        <FloatingWA />
        <TrackPageViews />

        {/* Per-page SEO */}
        <Routes>
          <Route path="/" element={<GeneratedSEO page="home" />} />
          <Route path="/profil-perusahaan" element={<GeneratedSEO page="profil-perusahaan" />} />
          <Route path="/cara-kerja" element={<GeneratedSEO page="cara-kerja" />} />
          <Route path="/artikel" element={<GeneratedSEO page="artikel" />} />
          <Route path="/artikel/:slug" element={<GeneratedSEO page="artikel" />} />
          <Route path="/detail/produk/:slug" element={<GeneratedSEO page="home" />} />
        </Routes>

        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<PageLayout><Main /></PageLayout>} />
              <Route path="/profil-perusahaan" element={<PageLayout><Profil /></PageLayout>} />
              <Route path="/cara-kerja" element={<PageLayout><CaraKerja /></PageLayout>} />
              <Route path="/detail/produk/:slug" element={<PageLayout><Produk /></PageLayout>} />
              <Route path="/artikel" element={<D_1 />} />
              <Route path="/artikel/:slug" element={<D_2 />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  )
}
export default App;
