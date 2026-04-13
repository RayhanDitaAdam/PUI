import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section_components/Main";
import Profil from "./components/section_components/Profil";
import CaraKerja from "./components/section_components/CaraKerja";
import D_1 from "./components/section_components/artikel/D_1";
import D_2 from "./components/section_components/artikel/D_2";
import FloatingWA from "./components/__global/FloatingWA";
import "./css/all.css"

function App () {
  return (
    <BrowserRouter>
      <FloatingWA />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profil-perusahaan" element={<Profil />} />
        <Route path="/cara-kerja" element={<CaraKerja />} />
        <Route path="/artikel" element={<D_1 />} />
        <Route path="/artikel/lorem-ipsum-is-simple" element={<D_2 />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;