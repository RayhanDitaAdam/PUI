import { useEffect } from 'react';
import Footer from '../__global/Footer';
import { Consult } from '../__global/Consult';
import { Hero } from './carakerja/Hero';
import { ItemContext } from './carakerja/ItemContext';
import { ItemSec } from './carakerja/ItemSec';
import "./carakerja/style/init.css"
import { initScrollAnimations } from '../../utils/animations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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


    gsap.ticker.lagSmoothing(0);

    initScrollAnimations();
    
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, []);

  return (
    <div className='bg-white'>
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
