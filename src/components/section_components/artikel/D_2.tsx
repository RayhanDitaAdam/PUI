import Header from "../../__global/Header";
import Footer from "../../__global/Footer";
import { Item } from "./dummy_2/Item";
import { MainPost } from "./dummy_2/MainPost";
import "./dummy/style/init.css";
import { useEffect } from "react";
import { initScrollAnimations } from "../../../utils/animations";
import gsap from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// @ts-ignore
import Lenis from 'lenis';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function D_2() {
  useEffect(function () {
    document.body.style.backgroundColor = "#000";

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

    lenis.on('scroll', () => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.update();
      }
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    initScrollAnimations();

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    
    return function () {
      document.body.style.backgroundColor = "";
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white text-black">
      <Header />
      <div className="pt-[120px] pb-20">
        <div className="w-full mx-auto bg-white rounded-t-[50px] px-4 py-2 lg:p-14 md:p-10 pb-0 mb-10 text-black gsap-reveal">
          <MainPost />
          <Item />
        </div>
        <Footer showMap={false} showSecurity={false} isAttached={true} className="px-4 md:px-0" />
      </div>
    </div>
  ); 
}
export default D_2;
