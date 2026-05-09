import React from 'react';
import { initScrollAnimations } from '../../utils/animations';
import gsap from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Article } from './mainpage/Article';
import { FAQ } from './mainpage/FAQ';
import { Consult } from './mainpage/Consult';
import { Cpages } from './mainpage/Cpages';
import { Endfooter } from './mainpage/Endfooter';
import { Hero } from './mainpage/Hero';
import { Proccess } from './mainpage/Proccess';
import { Product } from './mainpage/Product';
import { PUIThumbs } from './mainpage/PUIThumbs';
import { Testimonials } from './mainpage/Testimonials';
import "./mainpage/style/product.css";
import "./mainpage/style/section-cards.css";
import "./mainpage/style/init.css";

// Register plugin outside component to ensure it's ready
gsap.registerPlugin(ScrollTrigger);

function Main() {
  React.useEffect(() => {

    gsap.ticker.lagSmoothing(0);

    initScrollAnimations();

    // Refresh ScrollTrigger after initial render and animations
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, []);

  return (
    <div className="overflow-x-hidden text-white" style={{ background: "linear-gradient(135deg, #003D35, #091D1A)" }}>
      <Hero />
      <div className="gsap-reveal">
        <Cpages />
      </div>
      <div className="gsap-reveal">
        <PUIThumbs />
      </div>
      <div className="gsap-stagger-cards">
        <Product />
      </div>
      <div className="gsap-reveal">
        <Consult />
      </div>
      <div className="gsap-reveal">
        <Proccess />
      </div>
      <div className="gsap-stagger-cards">
        <Testimonials />
      </div>
      <div className="gsap-stagger-cards">
        <Article />
      </div>
      <div className="gsap-reveal">
        <FAQ />
      </div>
      <Endfooter />
    </div>
  );
}
export default Main;
