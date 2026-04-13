// @ts-ignore
import gsap from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const initScrollAnimations = () => {
  // Fade in up animation for sections
  gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((elem: HTMLElement) => {
    gsap.fromTo(
      elem,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Stagger fade in for cards
  const cardGrids = gsap.utils.toArray<HTMLElement>('.gsap-stagger-cards');
  cardGrids.forEach((grid: HTMLElement) => {
    const cards = grid.querySelectorAll('.product-card, .review-card, .step-item, .article-card');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
          },
        }
      );
    }
  });
};

export { gsap, ScrollTrigger };
