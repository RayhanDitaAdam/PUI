import { useEffect } from 'react';
import Footer from '../__global/Footer';
import { Consult } from './carakerja/Consult';
import { Hero } from './carakerja/Hero';
import { ItemContext } from './carakerja/ItemContext';
import { ItemSec } from './carakerja/ItemSec';
import "./carakerja/style/init.css"
import { initScrollAnimations } from '../../utils/animations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function CaraKerja() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

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
        <ItemContext />
      </div>
      <div className="gsap-reveal">
        <ItemSec />
      </div>
      <div className="gsap-reveal">
        <Consult />
      </div>
      <Footer />
    </div>
  ); 
}

export default CaraKerja;
