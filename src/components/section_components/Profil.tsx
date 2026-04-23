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

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function Profil() {
  useEffect(() => {

    gsap.ticker.lagSmoothing(0);

    initScrollAnimations();

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

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
