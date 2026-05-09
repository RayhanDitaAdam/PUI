import React from 'react';
import Footer from "../__global/Footer";
import Header from "../__global/Header";
import { Consult } from "../__global/Consult";
import { ItemContext } from "./produk/ItemContext";
import { Kriteria } from "./produk/Kriteria";
import { MainSection } from "./produk/MainSection";
import { FAQ } from "./mainpage/FAQ";
import "./produk/style/init.css"
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
        <div className="bg-gray-200">
            <Header />
            <div className="mt-10">
                <MainSection />
                <ItemContext />
                <Kriteria />
                <div className="gsap-reveal">
                    <Consult />
                </div>
                <FAQ />
                <Footer />
            </div>
        </div>
    </>);
}
export { Produk };
