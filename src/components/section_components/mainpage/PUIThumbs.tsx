let PUIThumbs = function () {
    return (
        <div className="bg-white gsap-reveal">
            <div className="text-center py-16 md:py-24 px-6 md:px-0">
                <h1 className="text-3xl md:text-6xl font-extrabold text-[#003B33]">Pave Your Dreams</h1>
                <div>
                    <h1 className="py-3 text-xl md:text-4xl text-[#030303] font-thin">Likuidasi Barang Mewah Terpercaya</h1>
                    <p className="py-3 text-sm md:text-base text-black mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                        Kami melayani berbagai aset bernilai tinggi seperti jam tangan mewah, tas branded, berlian, <br className="hidden md:block" /> emas, hingga koleksi langka dengan proses transparan dan profesional.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a href="/artikel" className="mb-12 md:mb-16 p-2 text-sm font-bold text-[#007F6D] border-2 w-[300px] rounded-lg border-[#007F6D] cursor-pointer hover:bg-[#007F6D] hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center">
                        Pelajari Selengkapnya Tentang PUI
                    </a>
                </div>
                <div className="flex justify-center -mb-8 md:-mb-16">
                    <img className="w-full md:w-[1200px] h-auto object-contain" src="/assets/img/63959d55c77b0ac1ccf433618f2f6ac32f199cd6.png"/>
                </div>
            </div>
        </div>
    );
}
export { PUIThumbs }