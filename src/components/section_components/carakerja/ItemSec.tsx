import "./style/init.css"

let ItemSec = function () {
    return (
        <div className="max-w-5xl mx-auto mt-10 md:mt-20 px-6 w-full">
            <h2 className="text-[#4D4D4D] text-2xl font-extrabold md:text-3xl mb-8 md:mb-10 max-w-lg leading-tight text-center md:text-left mx-auto md:ml-0 md:mr-auto">
                Kenapa Memilih Melikuidasi di Pergadaian Utama Indonesia ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
                <div className="bg-[#003B33] rounded-2xl p-6 md:p-8 shadow-lg flex flex-col transition-transform">
                    <div className="w-10 h-10 md:w-9 md:h-9 mb-4 md:mb-6">
                        <img src="/assets/img/carakerja/icon-time.png" alt="Fast Process" className="w-full h-full object-contain" />
                    </div>

                    <h3 className="text-xl md:text-3xl font-extrabold bg-gradient-to-b from-[#D4AA6A] to-[#B8945F] bg-clip-text text-transparent mb-3 md:mb-4">
                        Proses Cepat & <br className="hidden md:block" />Valuasi Tinggi
                    </h3>

                    <p className="text-white text-sm md:text-base font-medium md:font-semibold leading-relaxed">
                        Pencairan dana dalam waktu singkat dengan prosedur yang mudah dan efisien.
                    </p>
                </div>
                <div className="bg-[#003B33] rounded-2xl p-6 md:p-8 shadow-lg flex flex-col transition-transform">
                    <div className="w-10 h-10 md:w-9 md:h-9 mb-4 md:mb-6">
                        <img src="/assets/img/carakerja/icon-dm.png" alt="High Value" className="w-full h-full object-contain" />
                    </div>

                    <h3 className="text-xl md:text-3xl font-extrabold bg-gradient-to-b from-[#D4AA6A] to-[#B8945F] bg-clip-text text-transparent mb-3 md:mb-4">
                        Spesialis Aset <br className="hidden md:block" />Bernilai Tinggi
                    </h3>

                    <p className="text-white text-sm md:text-base font-medium md:font-semibold leading-relaxed">
                        Fokus pada gadai barang mewah dengan penilaian profesional dan nilai kompetitif.
                    </p>
                </div>

                <div className="bg-[#003B33] rounded-2xl p-6 md:p-8 shadow-lg flex flex-col transition-transform">
                    <div className="w-10 h-10 md:w-9 md:h-9 mb-4 md:mb-6">
                        <img src="/assets/img/carakerja/icon-shield.png" alt="Safe" className="w-full h-full object-contain" />
                    </div>

                    <h3 className="text-xl md:text-3xl font-extrabold bg-gradient-to-b from-[#D4AA6A] to-[#B8945F] bg-clip-text text-transparent mb-3 md:mb-4">
                        Aman & <br className="hidden md:block" />Terpercaya
                    </h3>

                    <p className="text-white text-sm md:text-base font-medium md:font-semibold leading-relaxed">
                        Didukung sistem keamanan tinggi serta layanan yang menjaga privasi dan kenyamanan nasabah.
                    </p>
                </div>

            </div>
        </div>
    );
}
export { ItemSec }