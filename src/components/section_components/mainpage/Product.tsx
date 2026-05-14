

let Product = function () {
    const products = [
        {
            title: "Jam Tangan",
            desc: "PUI menyediakan layanan gadai jaminan dari merek ternama seperti Audemars Piguet, Omega, Patek Philippe, Richard Mille, Rolex, dan lainnya.",
            image: "/assets/img/a45fc430aa97c22576e74a861673646bbf66ce9e.webp",
            slug: "jam-tangan"
        },
        {
            title: "Logam Mulia",
            desc: "PUI menghadirkan layanan gadai terpercaya untuk logam mulia seperti emas batangan dan produk emas lainnya.",
            image: "/assets/img/414cd3630fa9cc6d8251ccb1128f151649ca43e9.webp",
            slug: "emas"
        },
        {
            title: "Perhiasan dan Batu Mulia",
            desc: "PUI menyediakan layanan gadai berbagai jenis perhiasan seperti Bulgari, Cartier, Graff, Harry Winston, Tiffany & Co., Debeers, dan lainnya.",
            image: "/assets/img/b66aced856067bdae66be6141bebc57002ffb69a.webp",
            slug: "perhiasan"
        },
        {
            title: "Tas Branded",
            desc: "PUI menghadirkan layanan gadai tas branded dari merek ternama seperti Hermes, Dior, Chanel, dan lainnya.",
            image: "/assets/img/c0c7e308852f4d42b44a67e0409997954100aea7.webp",
            slug: "tas"
        },
        {
            title: "Kendaraan Premium",
            desc: "PUI menghadirkan layanan gadai kendaraan premium seperti Bentley, Ferrari, Lamborghini, Mercedes-Benz, Porsche, dan Rolls-Royce.",
            image: "/assets/img/275d928d0acce97c08200ee8a8246b06a9062207.webp",
            slug: "kendaraan"
        },
        {
            title: "Rare Collectibles",
            desc: "PUI menghadirkan layanan gadai koleksi langka seperti kartu koleksi, Lukisan, dan barang unik lainnya bernilai tinggi.",
            image: "/assets/img/53ced318beb9e9e4041c1594080cf2521fa77f15.webp",
            variant: "rare",
            slug: "koleksi"
        },
    ];
    return (
        <section id="produk" style={{
            background: "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)"
        }} className="text-white py-24 md:py-12 lg:pt-24 lg:pb-12 scroll-mt-20">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <p className="text-xl md:text-[1.125rem] lg:text-2xl text-[#9CA3AF] mb-1 md:mb-2 italic text-center">Our Product</p>
                <h2 className="text-center text-3xl md:text-[2.25rem] lg:text-5xl font-extrabold text-[#C49A6C] mb-3">
                    Layanan Pencairan Aset
                </h2>
                <p className="text-center text-gray-400 md:text-gray-300 text-sm md:text-[0.9375rem] lg:text-base mb-12 md:mb-16 max-xl mx-auto">
                    Pergadaian Utama Indonesia (PUI) menyediakan layanan gadai komprehensif untuk <br className="hidden md:block lg:hidden" />
                    berbagai aset, mulai dari jam tangan, tas branded, hingga <br className="hidden md:block lg:hidden" />
                    emas dan perhiasan eksklusif, dan Barang Kolektor.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-16 md:gap-x-[1.25rem] md:gap-y-[3.5rem] lg:gap-x-[6rem] lg:gap-y-[2.5rem]">
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className={`product-card max-w-[170px] mx-auto md:max-w-none md:w-[15.1875rem] h-full md:h-fit md:rounded-[1.1875rem] md:border-2 md:border-white/10 md:bg-[linear-gradient(96deg,rgba(0,112,90,0.03)_59.29%,rgba(255,255,255,0)_117.42%)] md:shadow-[-20px_32px_43px_0_rgba(0,0,0,0.10)] md:backdrop-blur-[10px] mb-0 md:mb-16 flex flex-col ${item.variant === "rare" ? "product-card-rare" : ""
                                }`}
                        >
                            <div className="bg-[#0000002d] border-t-[#0000002d] rounded-xl w-full h-36 md:h-44 flex items-center justify-center mb-4 md:mb-5 z-10 relative" style={{
                                borderBottomLeftRadius: "0px",
                                borderBottomRightRadius: "0px"
                            }}>
                                <div className={`image-wrapper transform md:scale-100 ${item.slug === "kendaraan" ? "scale-[1.45] md:!scale-[1.45] lg:!scale-[1.55]" : "scale-[1.05]"}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{
                                            width: item.slug === "emas" || item.slug === "koleksi" ? "10rem" : item.slug === "kendaraan" ? "19rem" : "13rem",
                                            height: item.slug === "emas" || item.slug === "koleksi" ? "10rem" : item.slug === "kendaraan" ? "19rem" : "13rem",
                                            marginTop: item.slug === "emas" || item.slug === "koleksi" || item.slug === "perhiasan" ? "0" : item.slug === "kendaraan" ? "5rem" : "1.5rem"
                                        }}
                                        className={`product-image ${item.slug === "kendaraan" ? "md:!w-[15rem] md:!h-[15rem] lg:!w-[19rem] lg:!h-[19rem]" : "md:!w-[11rem] md:!h-[11rem] lg:!w-[13rem] lg:!h-[13rem]"} single ${item.variant === "rare" ? "aspect-[51/76]" : ""}`}
                                    />
                                </div>
                            </div>
                            <div className="mx-[0.5rem] p-1 mt-1 md:mx-[0.625rem] lg:mx-[1.06rem] md:mt-2 z-[100] text-left flex flex-col h-full md:min-h-[180px] lg:min-h-[200px]">
                                <h3 className="text-xs md:text-base font-semibold mb-1 md:mb-2 text-[#EDE8D0]">
                                    {item.title}
                                </h3>
                                <p className="text-[9px] md:text-[0.75rem] text-gray-400 md:text-white md:font-['Lato'] md:font-medium md:leading-[130%] mb-2 md:mb-3 flex-grow">
                                    {item.desc}
                                </p>
                                <a href={`/detail/produk/${item.slug}`} className="hover-premium-btn mt-auto text-center text-[10px] md:text-sm border-2 border-[#5C5E3D] mb-[1.56rem] md:mb-3 font-bold text-[#C49A6C] px-2 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-[15px] bg-[#C49A6C30]">
                                    Pelajari Selengkapnya
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export { Product };