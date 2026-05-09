import React from 'react';
import Footer from "../__global/Footer";
import Header from "../__global/Header";
import { Consult } from "./mainpage/Consult";
import { ItemContext } from "./produk/ItemContext";
import { Kriteria } from "./produk/Kriteria";
import { MainSection } from "./produk/MainSection";
import { FAQ } from "./mainpage/FAQ";
import "./mainpage/style/init.css";
import "./mainpage/style/section-cards.css";
import "./mainpage/style/product.css";
import gsap from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

let Produk = function () {
    React.useEffect(() => {

        gsap.ticker.lagSmoothing(0);

        window.scrollTo(0, 0);
        
        // Refresh ScrollTrigger after initial render
        setTimeout(() => {
            ScrollTrigger.refresh();
            window.scrollTo(0, 0);
        }, 100);

    }, []);

    return (<>
        <div className="overflow-x-hidden text-white" style={{ background: "linear-gradient(135deg, #003D35, #091D1A)" }}>
            <Header />
            <div className="mt-10">
                <MainSection />
                <div className="gsap-reveal">
                    <ItemContext />
                </div>
                <div className="gsap-reveal">
                    <Kriteria />
                </div>
                <div className="gsap-reveal">
                    <Consult />
                </div>
                <div className="gsap-reveal">
                    <FAQ />
                </div>
                <Footer />
            </div>
        </div>
    </>);
}
export { Produk };
