import React from 'react';
import Footer from "../__global/Footer";
import Header from "../__global/Header";
import { Consult } from "./produk/Consult";
import { ItemContext } from "./produk/ItemContext";
import { MainSection } from "./produk/MainSection";
import "./produk/style/init.css"
// @ts-ignore
import Lenis from 'lenis';
import gsap from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

let Produk = function () {
    React.useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.8,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 2,
            infinite: false,
        });

        // Synchronize Lenis with GSAP ScrollTrigger
        lenis.on('scroll', () => {
            ScrollTrigger.update();
        });

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        window.scrollTo(0, 0);
        
        // Refresh ScrollTrigger after initial render
        setTimeout(() => {
            ScrollTrigger.refresh();
            window.scrollTo(0, 0);
        }, 100);

        return () => {
            lenis.destroy();
        };
    }, []);

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
export { Produk };