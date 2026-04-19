import Footer from "../__global/Footer";
import Header from "../__global/Header";
import { Consult } from "./produk/Consult";
import { ItemContext } from "./produk/ItemContext";
import { MainSection } from "./produk/MainSection";
import "./produk/style/init.css"

let Produk = function () {
    return (<>
        <div className="bg-gray-200">
            <Header />
            <div className="mt-10">
                <MainSection />
                <ItemContext />
                <Consult />
                <Footer />
            </div>
        </div>
    </>);
}
export {Produk};