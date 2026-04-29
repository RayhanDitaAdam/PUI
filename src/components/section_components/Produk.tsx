import React from 'react';
import Footer from "../__global/Footer";
import Header from "../__global/Header";
import { Consult } from "./produk/Consult";
import { ItemContext } from "./produk/ItemContext";
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
                <Consult />
                <FAQ />
                <Footer />
            </div>
        </div>
    </>);
}
export { Produk };