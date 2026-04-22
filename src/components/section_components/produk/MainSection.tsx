import { useParams } from 'react-router-dom';

const productImages: Record<string, string> = {
    'emas': '/assets/img/produk/emas.jpg',
    'perhiasan': '/assets/img/produk/cincin.png',
    'jam-tangan': '/assets/img/produk/jam-tangan.png',
    'koleksi': '/assets/img/produk/koleksi.jpg',
    'kendaraan': '/assets/img/produk/kendaraan.jpg',
    'tas': '/assets/img/produk/tas_1.png',
};

const productTitles: Record<string, string> = {
    'emas': 'Logam Mulia',
    'perhiasan': 'Perhiasan',
    'jam-tangan': 'Jam Tangan Mewah',
    'koleksi': 'Rare Collectibles',
    'kendaraan': 'Kendaraan Premium',
    'tas': 'Tas Branded',
};

let MainSection = function () {
    const { slug } = useParams<{ slug: string }>();
    const currentSlug = slug || 'tas';
    const imgSrc = productImages[currentSlug] || '/assets/img/produk/tas_1.png';
    const title = productTitles[currentSlug] || 'Tas Branded';
    return (
        <section className="w-full max-w-[1700px] mx-auto">
            <section className="block md:hidden lg:hidden sm:block">
                <div className="bg-black text-white px-6 pt-32 pb-[17.6rem] rounded-b-[40px] text-center flex flex-col items-center overflow-hidden">
                    <h2 className="text-[2.5rem] font-bold mb-6 relative z-10">{title}</h2>
                    <p className="text-sm leading-relaxed text-gray-300 mb-12 max-w-md relative z-10">
                        Butuh dana cepat? Punya tas branded mewah seperti <br /> Louis Vuitton, Chanel, Hermès, Gucci, Dior dan tas <br /> branded lainnya. Gadaikan tas mewah Anda, terjamin <br /> aman di PUI.
                    </p>
                    <div className="relative inline-block w-full max-w-none px-4 z-0">
                        <img
                            src={imgSrc}
                            alt="tas"
                            className="w-full h-auto drop-shadow-2xl scale-[3.5] origin-center translate-y-32 -translate-x-[15rem]"
                        />
                    </div>
                </div>

                <div className="px-6 py-12 bg-white">
                    <div className="text-center mb-10">
                        <h3 className="mt-20 text-[#064e3b] text-2xl font-bold leading-tight">
                            Mengapa menggadaikan tas di PUI?
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Solusi pembiayaan cepat dan aman berbasis aset bernilai tinggi.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-clock-rotate-left"></i>
                            </div>
                            <h4 className="text-[#064e3b] font-bold text-sm mb-2 leading-tight">Proses Cepat & Mudah</h4>
                            <p className="text-[10px] text-gray-500 leading-normal">Pencairan dana dalam waktu singkat tanpa
                                prosedur rumit</p>
                        </div>

                        <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-gem"></i>
                            </div>
                            <h4 className="text-[#064e3b] font-bold text-sm mb-2 leading-tight">Spesialis Barang Mewah</h4>
                            <p className="text-[10px] text-gray-500 leading-normal">Pencairan dana dalam waktu singkat tanpa
                                prosedur rumit</p>
                        </div>

                        <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-file-signature"></i>
                            </div>
                            <h4 className="text-[#064e3b] font-bold text-sm mb-2 leading-tight">Penilaian Profesional</h4>
                            <p className="text-[10px] text-gray-500 leading-normal">Pencairan dana dalam waktu singkat tanpa
                                prosedur rumit</p>
                        </div>

                        <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <h4 className="text-[#064e3b] font-bold text-sm mb-2 leading-tight">Keamanan Terjamin</h4>
                            <p className="text-[10px] text-gray-500 leading-normal">Pencairan dana dalam waktu singkat tanpa
                                prosedur rumit</p>
                        </div>

                        <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-user-shield"></i>
                            </div>
                            <h4 className="text-[#064e3b] font-bold text-sm mb-2 leading-tight">Privasi Terjaga</h4>
                            <p className="text-[10px] text-gray-500 leading-normal">Pencairan dana dalam waktu singkat tanpa
                                prosedur rumit</p>
                        </div>

                        <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                            <div className="text-[#c5a059] mb-3">
                                <span className="font-bold text-lg">VIP</span>
                            </div>
                            <h4 className="text-[#064e3b] font-bold text-sm mb-2 leading-tight">Layanan Premium</h4>
                            <p className="text-[10px] text-gray-500 leading-normal">Pencairan dana dalam waktu singkat tanpa
                                prosedur rumit</p>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div
                    style={{
                        background: "linear-gradient(135deg, rgb(0, 40, 35) 0%, rgb(0, 20, 15) 50%, rgb(0, 5, 4) 100%)"
                    }}
                    className="lg:h-[500px] hero-gradient hidden md:block text-white pt-10 pb-24 px-16 rounded-b-[80px] relative overflow-hidden">
                    <img
                        src={imgSrc}
                        alt="produk-bg"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />

                    <div className="max-w-7xl mx-auto flex items-center relative z-10">
                        <div className="w-1/2 pr-20 lg:pt-28">
                            <h1 className="text-5xl font-semibold mb-6">{title}</h1>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Butuh dana cepat? Punya tas branded mewah seperti Louis Vuitton, Chanel, Hermes, Gucci, Dior
                                dan
                                tas branded lainnya. Gadai kan tas mewah Anda, terjamin aman di PUI.
                            </p>
                        </div>

                        <div className="w-1/2 relative h-full flex items-center justify-center">
                            {/* Duplicate image removed as per user request */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20">
                <div className="hidden md:block lg:block sm:hidden max-w-7xl mx-auto px-16 -mt-10 pb-20">
                    <div className="text-center mb-16 pt-20">
                        <h2 className="text-[#1a4d3a] text-4xl font-bold mb-4">Mengapa menggadaikan {title.toLowerCase()} di PUI?</h2>
                        <p className="text-lg text-gray-600">Solusi pembiayaan cepat dan aman berbasis aset bernilai tinggi.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-clock-rotate-left"></i>
                            </div>
                            <h3 className="text-[#1a4d3a] font-bold text-xl">Proses Cepat & Mudah</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Pencairan dana dalam waktu singkat tanpa
                                prosedur
                                rumit</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-gem"></i>
                            </div>
                            <h3 className="text-[#1a4d3a] font-bold text-xl">Spesialis Barang Mewah</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Pencairan dana dalam waktu singkat tanpa
                                prosedur
                                rumit</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-file-signature"></i>
                            </div>
                            <h3 className="text-[#1a4d3a] font-bold text-xl">Penilaian Profesional</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Pencairan dana dalam waktu singkat tanpa
                                prosedur
                                rumit</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <h3 className="text-[#1a4d3a] font-bold text-xl">Keamanan Terjamin</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Pencairan dana dalam waktu singkat tanpa
                                prosedur
                                rumit</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                            <div className="text-[#c0a060] text-3xl mb-2">
                                <i className="fa-solid fa-user-shield"></i>
                            </div>
                            <h3 className="text-[#1a4d3a] font-bold text-xl">Privasi Terjaga</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Pencairan dana dalam waktu singkat tanpa
                                prosedur
                                rumit</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                            <div className="bg-[#c0a060] text-white text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-1">VIP
                            </div>
                            <h3 className="text-[#1a4d3a] font-bold text-xl">Layanan Premium</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Pencairan dana dalam waktu singkat tanpa
                                prosedur
                                rumit</p>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
}
export { MainSection };