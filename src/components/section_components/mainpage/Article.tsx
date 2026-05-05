import { useRef, useEffect } from "react";
import { FaClock, FaArrowRight } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { articles } from "./_data/article.ts";

gsap.registerPlugin(ScrollTrigger);

let Article = function () {
  let scroll = useRef<HTMLDivElement>(null);

  useEffect(function () {
    const cards = gsap.utils.toArray(".article-card");
    gsap.fromTo(cards, 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: scroll.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="artikel-home" className="bg-white py-10 px-6 md:px-16 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-[#4D4D4D] mb-2">Artikel</h2>
          <p className="text-lg md:text-xl font-bold text-[#4D4D4D] leading-relaxed max-w-2xl">
            Eksplorasi insight eksklusif seputar pengelolaan aset bernilai tinggi, strategi likuidasi, dan tren finansial terkini.
          </p>
        </div>
        <a href="/artikel" className="flex items-center gap-2 text-[#006658] font-bold text-sm hover:underline uppercase tracking-wider">
          Lihat Selengkapnya 
          <FaArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Infinite/Responsive Slider Container */}
      {/* Di mobile: horizontal scroll dengan snap, Di desktop: grid standar */}
      <div 
        ref={scroll}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 gap-6 md:gap-10 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {articles.map((item) => (
          <div 
            key={item.id} 
            className="article-card min-w-[85%] md:min-w-0 snap-center flex flex-col bg-white rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-[4/5] md:aspect-auto">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
            
            <div className="py-4 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-gray-400 text-[10px] mb-2 uppercase tracking-wider font-semibold">
                <FaClock />
                {item.date}
              </div>
              <h3 className="text-lg font-bold text-[#111] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                {item.desc}
              </p>
              <a aria-label="Read full article" href={`/artikel/${item.slug}`} className="mt-auto flex items-center gap-2 text-[#006658] font-extrabold text-[11px] hover:gap-3 transition-all uppercase tracking-widest">
                Read More
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Article };