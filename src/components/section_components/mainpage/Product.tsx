let Product = function () {
    const products = [
        {
            title: "Jam Tangan Mewah",
            desc: "PUI menyediakan layanan gadai jaminan mewah dari merek ternama seperti Rolex, Patek Philippe, Audemars Piguet, Omega, dan brand prestisius lainnya.",
            image: "/assets/img/a45fc430aa97c22576e74a861673646bbf66ce9e.png",
        },
        {
            title: "Logam mulia",
            desc: "PUI menghadirkan layanan gadai terpercaya untuk logam mulia seperti emas batangan dari UBS, Galeri 24, serta produk emas bersertifikat lainnya.",
            image: "/assets/img/414cd3630fa9cc6d8251ccb1128f151649ca43e9.png",
        },
        {
            title: "Perhiasan dan batu mulia",
            desc: "PUI menyediakan layanan gadai berbagai jenis perhiasan seperti Tiffany & Co., Cartier, Harry Winston, Bulgari, dan Graff.",
            image: "/assets/img/b66aced856067bdae66be6141bebc57002ffb69a.png",
        },
        {
            title: "Perhiasan Mewah",
            desc: "PUI menghadirkan layanan gadai perhiasan mewah dari merek ternama seperti Cartier, Tiffany & Co., Bulgari, Van Cleef & Arpels, dan lainnya.",
            image: "/assets/img/c0c7e308852f4d42b44a67e0409997954100aea7.png",
        },
        {
            title: "Kendaraan Premium",
            desc: "PUI menghadirkan layanan gadai kendaraan premium seperti Ferrari, Lamborghini, Rolls-Royce, Bentley, Porsche, dan Mercedes-Benz.",
            image: "/assets/img/7c58ab2f499ac33473f3ebb7e780a42adc2b46d3.png",
            image_1: "/assets/img/275d928d0acce97c08200ee8a8246b06a9062207.png"
        },
        {
            title: "Rare Collectibles",
            desc: "PUI menghadirkan layanan gadai koleksi langka seperti kartu koleksi, NFT, dan barang unik lainnya bernilai tinggi.",
            image: "/assets/img/53ced318beb9e9e4041c1594080cf2521fa77f15.png",
            variant: "rare"
        },
    ];
    return (
        <section style={{
            background: "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)"
        }} id="produk" className="text-white py-12 lg:pt-24 lg:pb-12 scroll-mt-20">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <p className="text-xl md:text-2xl text-[#9CA3AF] mb-1 md:mb-2 italic text-center">Our Product</p>
                <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#C49A6C] mb-3">
                    Layanan Likuiditas Aset Mewah
                </h2>
                <p className="text-center text-gray-400 md:text-gray-300 text-sm md:text-base mb-12 md:mb-16 max-w-2xl mx-auto">
                    Pergadaian Utama Indonesia (PUI) menyediakan layanan gadai komprehensif
                    untuk berbagai aset mewah, mulai <br className="hidden md:block" /> dari jam tangan premium, tas branded,
                    berlian, hingga emas dan perhiasan eksklusif.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-16">
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className={`product-card mb-8 md:mb-16 ${item.variant === "rare" ? "product-card-rare" : ""
                                }`}
                        >
                            <div className="bg-[#0000002d] border-t-[#0000002d] rounded-xl w-full h-32 md:h-44 flex items-center justify-center mb-4 md:mb-5 z-10 relative" style={{
                                borderBottomLeftRadius: "0px",
                                borderBottomRightRadius: "0px"
                            }}>
                                <div className="image-wrapper transform scale-75 md:scale-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`product-image ${item.image_1 ? "main" : "single"}`}
                                    />
                                    {item.image_1 && (
                                        <img
                                            src={item.image_1}
                                            alt={item.title}
                                            className="product-image second"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="p-2 mt-2 md:p-2 z-[100] text-left flex flex-col flex-grow relative">
                                <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-[10px] md:text-sm text-gray-400 md:text-gray-300 mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                                    {item.desc}
                                </p>
                                <button className="hover-premium-btn mt-auto text-[10px] md:text-sm border-2 border-[#5C5E3D] mb-2 md:mb-4 font-bold text-[#C49A6C] px-2 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-[15px] bg-[#C49A6C30]">
                                    Pelajari Selengkapnya
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export { Product };