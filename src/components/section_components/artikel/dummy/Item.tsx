import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

let articleData = {
    edukasi: [
        { id: 1, title: "Buku Koleksi", url: "https://picsum.photos/id/24/600/400" },
        { id: 2, title: "Suasana Belajar", url: "https://picsum.photos/id/1/600/400" },
        { id: 3, title: "Perpustakaan Klasik", url: "https://picsum.photos/id/20/600/400" },
        { id: 4, title: "Catatan Kuliah", url: "https://picsum.photos/id/119/600/400" },
        { id: 5, title: "Laptop Kerja", url: "https://picsum.photos/id/180/600/400" },
        { id: 6, title: "Ruang Kelas Kosong", url: "https://picsum.photos/id/367/600/400" },
        { id: 7, title: "Meja Komputer", url: "https://picsum.photos/id/486/600/400" },
        { id: 8, title: "Mikroskop Sains", url: "https://picsum.photos/id/514/600/400" },
        { id: 9, title: "Gaya Belajar", url: "https://picsum.photos/id/619/600/400" }
    ],
    berita: [
        { id: 10, title: "Koran Dunia", url: "https://picsum.photos/id/305/600/400" },
        { id: 11, title: "Kantor Media", url: "https://picsum.photos/id/122/600/400" },
        { id: 12, title: "Fotografi Pers", url: "https://picsum.photos/id/250/600/400" },
        { id: 13, title: "Update Kota", url: "https://picsum.photos/id/312/600/400" },
        { id: 14, title: "Gedung Komunikasi", url: "https://picsum.photos/id/442/600/400" },
        { id: 15, title: "Layar Informasi", url: "https://picsum.photos/id/674/600/400" },
        { id: 16, title: "Majalah Bisnis", url: "https://picsum.photos/id/334/600/400" },
        { id: 17, title: "Telepon Redaksi", url: "https://picsum.photos/id/145/600/400" },
        { id: 18, title: "Laporan Visual", url: "https://picsum.photos/id/431/600/400" }
    ],
    pesan: [
        { id: 19, title: "Amplop Surat", url: "https://picsum.photos/id/111/600/400" },
        { id: 20, title: "Mesin Tik Lama", url: "https://picsum.photos/id/429/600/400" },
        { id: 21, title: "Kotak Surat", url: "https://picsum.photos/id/513/600/400" },
        { id: 22, title: "Smartphone Chat", url: "https://picsum.photos/id/815/600/400" },
        { id: 23, title: "Alamat Pesan", url: "https://picsum.photos/id/729/600/400" },
        { id: 24, title: "Komunikasi Keyboard", url: "https://picsum.photos/id/160/600/400" },
        { id: 25, title: "Postcard", url: "https://picsum.photos/id/370/600/400" },
        { id: 26, title: "Koneksi Global", url: "https://picsum.photos/id/201/600/400" },
        { id: 27, title: "Alat Tulis", url: "https://picsum.photos/id/302/600/400" }
    ]
};

let allArticles = [
    ...articleData.edukasi.map(item => ({ ...item, category: 'Edukasi' })),
    ...articleData.berita.map(item => ({ ...item, category: 'Berita' })),
    ...articleData.pesan.map(item => ({ ...item, category: 'Pesan' }))
];

let Item = function () {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mobile menu
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredItems = activeCategory === 'Semua' 
        ? allArticles 
        : allArticles.filter(item => item.category === activeCategory);

    const categories = ['Semua', 'Edukasi', 'Berita', 'Pesan'];

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
        <div className="px-4 md:px-0"> 
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Artikel Terbaru</h2>
                <div className="relative">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 font-medium"
                    >
                        <span>Kategori: {activeCategory}</span>
                        <i className={`fa-solid fa-chevron-${isMenuOpen ? 'up' : 'down'} text-xs ml-2`}></i>
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
                                    ? "bg-[#008774] text-white shadow-md" 
                                    : "border border-gray-300 text-gray-500 hover:border-[#008774] hover:text-[#008774]"
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
                                src={item.url} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                            <span className="absolute top-3 right-3 bg-[#008774] text-white text-[10px] px-3 py-1 rounded-full">
                                {item.category}
                            </span>
                        </div>
                        <div className="text-[10px] text-gray-400 flex items-center gap-1 mb-1">
                            <i className="fa-solid fa-clock"></i> 20 Mei 2025
                        </div>
                        <h3 className="text-lg md:text-base font-bold text-gray-900 mb-2 group-hover:text-[#008774] transition-colors line-clamp-1">{item.title}</h3>
                        <p className="text-sm md:text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <a href="#" className="group text-[#00A294] text-xs font-semibold flex items-center gap-1">
                            Read More <i className="fa-solid fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
export { Item }