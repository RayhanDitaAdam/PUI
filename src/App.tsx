import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FloatingWA from "./components/__global/FloatingWA";
import Analytics from "./components/__global/Analytics";
import "./css/all.css"

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
    <BrowserRouter>
      <Analytics />
      <FloatingWA />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profil-perusahaan" element={<Profil />} />
            <Route path="/cara-kerja" element={<CaraKerja />} />
            <Route path="/artikel" element={<D_1 />} />
            <Route path="/artikel/:slug" element={<D_2 />} />
            <Route path="/detail/produk/:slug" element={<Produk />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  )
}
export default App;
