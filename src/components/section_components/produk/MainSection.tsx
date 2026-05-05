import { useParams } from 'react-router-dom';
import { Items } from './Mengapa';

const productImages: Record<string, string> = {
    'emas': '/assets/img/produk/emas.webp',
    'perhiasan': '/assets/img/produk/cincin.webp',
    'jam-tangan': '/assets/img/produk/jam-tangan.webp',
    'koleksi': '/assets/img/produk/koleksi.webp',
    'kendaraan': '/assets/img/produk/kendaraan.webp',
    'tas': '/assets/img/produk/tas_1.webp',
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
    const imgSrc = productImages[currentSlug] || '/assets/img/produk/tas_1.webp';
    const title = productTitles[currentSlug] || 'Tas Branded';
    const productDescriptions: Record<string, React.ReactNode> = {
        tas: <>Butuh dana cepat? Punya tas branded mewah seperti <br /> Louis Vuitton, Chanel, Hermès, Gucci, Dior dan tas <br /> branded lainnya. Gadaikan tas mewah Anda, terjamin <br /> aman di PUI.</>,
        emas: <>Butuh dana cepat? Punya logam mulia seperti Antam, UBS, Galeri 24, serta produk emas bersertifikat lainnya. Gadaikan logam mulia Anda, terjamin aman di PUI.</>,
        "jam-tangan": <>Butuh dana cepat? Punya jam tangan mewah seperti Rolex, Patek Philippe, Audemars Piguet, Omega, dan brand prestisius lainnya. Gadaikan jam tangan mewah Anda, terjamin aman di PUI.</>,
        perhiasan: <>Butuh dana cepat? Punya logam mulia seperti Tiffany & Co., Cartier, Harry Winston, Bulgari, dan lainnya. Gadaikan perhiasan dan batu mulia Anda, terjamin aman di PUI.</>,
        kendaraan: <>Butuh dana cepat? Punya kendaraan premium seperti Ferrari, Lamborghini, Rolls-Royce, Bentley, Porsche, dan Mercedes-Benz brand prestisius lainnya. Gadaikan kendaraan premium <br /> Anda, terjamin aman di PUI.</>,
        koleksi: <>Butuh dana cepat? Punya rare collectibles seperti Pokémon, Yu-Gi-Oh! serta memorabilia olahraga seperti FIFA, NBA, NFL, & UEFA dan lainnya. Gadaikan koleksi langka <br /> Anda, terjamin aman di PUI.</>,
    };

    const description = productDescriptions[currentSlug] || productDescriptions.tas;

    return (
        <section className="w-full max-w-[1700px] mx-auto">
            <section className="block md:hidden lg:hidden sm:block">
                <div className="bg-black text-white px-6 pt-32 pb-[17.6rem] rounded-b-[40px] text-center flex flex-col items-center overflow-hidden">
                    <h2 className="text-[2.5rem] font-bold mb-6 relative z-10">{title}</h2>
                    <p className="text-sm leading-relaxed text-gray-300 mb-12 max-w-md relative z-10">
                        {description}
                    </p>
                    <div className="relative inline-block w-full max-w-none px-4 z-0">
                        <img
                            src={imgSrc}
                            alt={title}
                            className={`w-full h-auto origin-center ${currentSlug === 'kendaraan'
                                ? 'drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-[2.0] sm:scale-[3.5] translate-y-24 sm:translate-y-32 -translate-x-[7rem] sm:-translate-x-[15rem]'
                                : currentSlug === 'koleksi'
                                    ? 'drop-shadow-2xl scale-[3.5] translate-y-32 -translate-x-[19rem]'
                                    : 'drop-shadow-2xl scale-[3.5] translate-y-32 -translate-x-[15rem]'
                                }`}
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#FAFAFA]">
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
                                {description}
                            </p>
                        </div>

                        <div className="w-1/2 relative h-full flex items-center justify-center">
                            {/* Duplicate image removed as per user request */}
                        </div>
                    </div>
                </div>
            </section>

            <Items />
        </section>
    );
}
export { MainSection };