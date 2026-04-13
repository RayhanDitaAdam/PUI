import { useEffect } from 'react';
import Footer from '../__global/Footer';
import { DuoCard } from './profil/DuoCard';
import { FinalContext } from './profil/FinalContext';
import { Hero } from './profil/Hero';
import { Items } from './profil/Items';
import { Lab } from './profil/Lab';
import "./profil/style/init.css"
import { initScrollAnimations } from '../../utils/animations';
import gsap from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// @ts-ignore
import Lenis from 'lenis';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function Profil() {
  useEffect(() => {
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='bg-gray-200'>
      <Hero />
      <div className="gsap-reveal">
        <DuoCard />
      </div>
      <div className="gsap-stagger-cards">
        <Items />
      </div>
      <div className="gsap-reveal">
        <Lab />
      </div>
      <div className="gsap-reveal">
        <FinalContext />
      </div>
      <Footer />
    </div>
  );
}

export default Profil;
