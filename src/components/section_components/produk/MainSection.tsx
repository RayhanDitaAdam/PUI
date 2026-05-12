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
        koleksi: <>Butuh dana cepat? Punya rare collectibles seperti Pokémon, Yu-Gi-Oh! serta memorabilia olahraga seperti FIFA, NBA, NFL, & UEFA dan lainnya. Gadaikan koleksi langka Anda, terjamin aman di PUI.</>,
    };

    const description = productDescriptions[currentSlug] || productDescriptions.tas;

    return (
        <section className="w-full max-w-[1700px] xl:max-w-none mx-auto xl:mx-0">
            {/* ===== MOBILE ===== */}
            <section className="block md:hidden lg:hidden sm:block">
                <div className="bg-black text-white px-6 pt-32 pb-[17.6rem] rounded-b-[40px] text-center flex flex-col items-center overflow-hidden">
                    <h2 className="text-[2rem] md:text-[1.75rem] font-bold relative z-10 w-full md:w-auto md:pr-0">{title}</h2>
                    <p className="text-sm leading-relaxed text-gray-300 mb-12 max-w-md relative z-10">
                        {description}
                    </p>
                    <div className="relative inline-block w-full max-w-none px-4 z-0">
                        <img
                            src={imgSrc}
                            alt={title}
                            style={{ width: "300px", minWidth: "300px" }}
                            className={`h-auto origin-center ${currentSlug === 'kendaraan'
                                ? 'drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-[4] translate-y-18 -translate-x-[17rem]'
                                : currentSlug === 'koleksi'
                                    ? 'drop-shadow-2xl scale-[6] translate-y-38 -translate-x-[24rem]'
                                    : currentSlug === 'emas'
                                        ? 'drop-shadow-2xl scale-[6] translate-y-32 -translate-x-[22rem]'
                                    : currentSlug === 'tas'
                                        ? 'drop-shadow-2xl scale-[6] translate-y-32 -translate-x-[19rem]'
                                    : currentSlug === 'jam-tangan'
                                        ? 'drop-shadow-2xl scale-[6] translate-y-22 -translate-x-[25rem]'
                                    : currentSlug === 'perhiasan'
                                        ? 'drop-shadow-2xl scale-[6] translate-y-32 -translate-x-[24rem]'
                                        : 'drop-shadow-2xl scale-[6] translate-y-32 -translate-x-[23rem]'
                                }`}
                        />
                    </div>
                </div>
            </section>

            {/* ===== TABLET ===== */}
            <section className="bg-[#FAFAFA] hidden md:block lg:hidden">
                <div
                    style={{
                        background: "linear-gradient(135deg, rgb(0, 40, 35) 0%, rgb(0, 20, 15) 50%, rgb(0, 5, 4) 100%)"
                    }}
                    className="md:h-[550px] hero-gradient text-white md:pt-32 md:pb-20 px-16 rounded-b-[80px] relative overflow-hidden">
                    <img
                        src={imgSrc}
                        alt="produk-bg"
                        className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${currentSlug === 'emas'
                            ? 'md:scale-[1.4] md:origin-center md:-translate-x-[8rem] md:-translate-y-[1rem]'
                            : currentSlug === 'kendaraan'
                                ? 'md:scale-[1.2] md:origin-center md:-translate-x-[4rem] md:-translate-y-[0.5rem]'
                            : currentSlug === 'koleksi'
                                ? 'md:scale-[1.3] md:origin-center md:-translate-x-[8rem] md:-translate-y-[-3rem]'
                            : currentSlug === 'tas'
                                ? 'md:scale-[1.4] md:origin-center md:-translate-x-[8rem] md:-translate-y-[1rem]'
                            : currentSlug === 'jam-tangan'
                                ? 'md:scale-[2] md:origin-center md:-translate-x-[32rem] md:-translate-y-[0.75rem]'
                            : currentSlug === 'perhiasan'
                                ? 'md:scale-[1.3] md:origin-center md:-translate-x-[8rem] md:-translate-y-[0.75rem]'
                                : 'md:scale-[1.4] md:origin-center md:-translate-x-[2rem] md:-translate-y-[1rem]'
                            }`}
                        style={{
                            transform: `scale(${currentSlug === 'emas' ? 1.4 : currentSlug === 'kendaraan' ? 1.2 : currentSlug === 'koleksi' ? 1.3 : currentSlug === 'tas' ? 1.4 : currentSlug === 'jam-tangan' ? 1.3 : currentSlug === 'perhiasan' ? 1.3 : 1.4})`
                        }}
                    />

                    <div className="max-w-7xl mx-auto flex items-center relative z-10 md:mt-[3rem]">
                        <div className="w-1/2">
                            <h1 className="text-4xl md:text-2xl font-semibold mb-6">{title}</h1>
                            <p className="text-white leading-relaxed md:text-base">
                                {description}
                            </p>
                        </div>
                        <div className="w-1/2 relative h-full flex items-center justify-center"></div>
                    </div>
                </div>
            </section>

            {/* ===== LAPTOP ===== */}
            <section className="bg-[#FAFAFA] hidden lg:block">
                <div
                    style={{
                        background: "linear-gradient(135deg, rgb(0, 40, 35) 0%, rgb(0, 20, 15) 50%, rgb(0, 5, 4) 100%)"
                    }}
                    className="lg:h-[600px] hero-gradient text-white lg:pt-10 lg:pb-24 px-16 rounded-b-[80px] relative overflow-hidden">
                    <img
                        src={imgSrc}
                        alt="produk-bg"
                        className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${currentSlug === 'emas'
                            ? 'lg:scale-[2.4] lg:origin-center lg:-translate-x-[18rem] lg:-translate-y-[-10rem]'
                            : currentSlug === 'kendaraan'
                                ? 'lg:scale-[1.2] lg:origin-center lg:-translate-x-[1rem] lg:-translate-y-[0.5rem]'
                            : currentSlug === 'koleksi'
                                ? 'lg:scale-[1.3] lg:origin-center lg:-translate-x-[2rem] lg:-translate-y-[-3rem]'
                            : currentSlug === 'tas'
                                ? 'lg:scale-[1.8] lg:origin-center lg:-translate-x-[8rem] lg:-translate-y-[1rem]'
                            : currentSlug === 'jam-tangan'
                                ? 'lg:scale-[2] lg:origin-center lg:-translate-x-[18rem] lg:-translate-y-[0.75rem]'
                            : currentSlug === 'perhiasan'
                                ? 'lg:scale-[1.8] lg:origin-center lg:-translate-x-[12rem] lg:-translate-y-[0.75rem]'
                                : 'lg:scale-[1.4] lg:origin-center lg:-translate-x-[2rem] lg:-translate-y-[1rem]'
                            }`}
                    />

                    <div className="max-w-[1280px] mx-auto flex items-center relative z-10 lg:mt-[3rem]">
                        <div className="w-1/2 lg:pr-20 lg:pt-28">
                            <h1 className="text-4xl lg:text-5xl font-semibold mb-6">{title}</h1>
                            <p className="text-white leading-relaxed lg:text-lg">
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