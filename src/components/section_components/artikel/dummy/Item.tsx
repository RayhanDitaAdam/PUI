import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Clock, ChevronDown, ChevronUp } from "lucide-react";

import { articles } from '../../../../data/articles';

let allArticles = articles;

let Item = function () {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mobile menu
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredItems = activeCategory === 'Semua' 
        ? allArticles 
        : allArticles.filter(item => item.category === activeCategory);

    const categories = ['Semua', 'Edukasi', 'Investasi'];

    useEffect(() => {
        if (gridRef.current) {
            const items = gridRef.current.children;
            gsap.set(items, { opacity: 0, y: 20 });
            gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: 'all'
            });
        }
    }, [activeCategory]);

    return (
        <div className="px-2 md:px-0"> 
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Artikel Terbaru</h2>
                <div className="relative">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 font-medium"
                    >
                        <span>Kategori: {activeCategory}</span>
                        {isMenuOpen ? <ChevronUp className="w-3 h-3 ml-2" /> : <ChevronDown className="w-3 h-3 ml-2" />}
                    </button>


                    <div className={`
                        ${isMenuOpen ? 'flex' : 'hidden'} 
                        md:flex flex-col md:flex-row 
                        absolute md:static top-full left-0 right-0 z-10 
                        bg-white md:bg-transparent shadow-lg md:shadow-none 
                        border md:border-none rounded-md mt-2 md:mt-0 
                        p-2 md:p-0 space-y-2 md:space-y-0 md:space-x-2
                    `}>
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setIsMenuOpen(false);
                                }}
                                className={`px-5 py-1.5 rounded-md transition-all duration-300 text-sm font-medium ${
                                    activeCategory === cat 
                                    ? "bg-[#006658] text-white shadow-md" 
                                    : "border border-gray-300 text-gray-500 hover:border-[#006658] hover:text-[#006658]"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 mb-20">
                {filteredItems.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="w-full h-64 md:h-52 shadow-lg relative mb-4 overflow-hidden rounded-2xl">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                            <span className="absolute top-3 right-3 bg-[#006658] text-white text-[10px] px-3 py-1 rounded-full">
                                {item.category}
                            </span>
                        </div>
                        <div className="text-[10px] text-gray-400 flex items-center gap-1 mb-1">
                            <Clock className="w-3 h-3" /> {item.date}
                        </div>
                        <h3 className="text-lg md:text-base font-bold text-gray-900 mb-2 group-hover:text-[#006658] transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-sm md:text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">
                            {item.excerpt}
                        </p>
                        <a aria-label="Read full article" href={`/artikel/${item.slug}`} className="group text-[#00A294] text-xs font-semibold flex items-center gap-1">
                            Read More <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
export { Item }