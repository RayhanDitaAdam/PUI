import { Link } from "react-router-dom";

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
            title: "Tas Branded",
            desc: "PUI menghadirkan layanan gadai tas branded dari merek ternama seperti Cartier, Tiffany & Co., Bulgari, Van Cleef & Arpels, dan lainnya.",
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
        }} className="text-white py-24 md:py-12 lg:pt-24 lg:pb-12 scroll-mt-20">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <p className="text-xl md:text-2xl text-[#9CA3AF] mb-1 md:mb-2 italic text-center">Our Product</p>
                <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#C49A6C] mb-3">
                    Layanan Likuiditas Aset Mewah
                </h2>
                <p className="text-center text-gray-400 md:text-gray-300 text-sm md:text-base mb-12 md:mb-16 max-xl mx-auto">
                    Pergadaian Utama Indonesia (PUI) menyediakan layanan gadai komprehensif
                    untuk berbagai aset mewah, mulai <br className="hidden md:block" /> dari jam tangan premium, tas branded,
                    berlian, hingga emas dan perhiasan eksklusif.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-16 md:gap-24">
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className={`product-card max-w-[170px] mx-auto md:max-w-none md:w-[15.1875rem] md:h-[25.83256rem] md:rounded-[1.1875rem] md:border-2 md:border-white/10 md:bg-[linear-gradient(96deg,rgba(0,112,90,0.03)_59.29%,rgba(255,255,255,0)_117.42%)] md:shadow-[-20px_32px_43px_0_rgba(0,0,0,0.10)] md:backdrop-blur-[10px] mb-0 md:mb-16 flex flex-col ${item.variant === "rare" ? "product-card-rare" : ""
                                }`}
                        >
                            <div className="bg-[#0000002d] border-t-[#0000002d] rounded-xl w-full h-36 md:h-44 flex items-center justify-center mb-4 md:mb-5 z-10 relative" style={{
                                borderBottomLeftRadius: "0px",
                                borderBottomRightRadius: "0px"
                            }}>
                                <div className={`image-wrapper transform md:scale-100 ${item.image_1 ? "scale-[0.85]" : "scale-[1.1]"}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`product-image ${item.image_1 ? "main" : "single"} ${item.variant === "rare" ? "aspect-[51/76]" : ""}`}
                                    />
                                    {item.image_1 && (
                                        <img
                                            src={item.image_1}
                                            alt={item.title}
                                            className="product-image second opacity-80"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="mx-[0.5rem] p-1 mt-1 md:mx-[1.06rem] md:mt-2 z-[100] text-left flex flex-col flex-grow relative">
                                <h3 className="text-xs md:text-base font-semibold mb-1 md:mb-2 text-[#EDE8D0]">
                                    {item.title}
                                </h3>
                                <p className="text-[9px] md:text-[0.75rem] text-gray-400 md:text-white md:font-['Lato'] md:font-medium md:leading-[130%] mb-2 md:mb-3 min-h-[45px] md:h-[6.6875rem] md:self-stretch">
                                    {item.desc}
                                </p>
                                <Link to="/detail/produk#" className="hover-premium-btn mt-auto text-center text-[10px] md:text-sm border-2 border-[#5C5E3D] mb-[1.56rem] md:mb-[2rem] font-bold text-[#C49A6C] px-2 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-[15px] bg-[#C49A6C30]">
                                    Pelajari Selengkapnya
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export { Product };