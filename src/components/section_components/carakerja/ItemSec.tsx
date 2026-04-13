import "./style/init.css"

let ItemSec = function () {
    return (
        <div className="max-w-5xl mx-auto mt-20 w-full">
            <h2 className="text-[#4D4D4D] text-2xl font-extrabold md:text-3xl mb-10 max-w-lg leading-snug">
                Kenapa Memilih Melikuidasi di Pergadaian Utama Indonesia ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

                <div className="bg-[#003B33] rounded-2xl p-8 shadow-lg flex flex-col transition-transform">
                    <div className="w-9 h-9 mb-6">
                        <img src="/assets/img/carakerja/icon-time.png" />
                    </div>

                    <h3 className="text-3xl font-extrabold bg-gradient-to-b from-[#D4AA6A] to-[#B8945F] bg-clip-text text-transparent mb-4">
                        Proses Cepat & <br />Valuasi Tinggi
                    </h3>

                    <p className="text-white text-base font-semibold leading-relaxed">
                        Pencairan dana dalam waktu singkat dengan prosedur yang mudah dan efisien.
                    </p>
                </div>

                <div className="bg-[#003B33] rounded-2xl p-8 h-[400px] shadow-lg flex flex-col transition-transform">
                    <div className="w-9 h-9 mb-6">
                        <img src="/assets/img/carakerja/icon-dm.png" />
                    </div>

                    <h3 className="text-3xl font-extrabold bg-gradient-to-b from-[#D4AA6A] to-[#B8945F] bg-clip-text text-transparent mb-4">
                        Spesialis Aset <br />Bernilai Tinggi
                    </h3>

                    <p className="text-white text-base font-semibold leading-relaxed">
                        Fokus pada gadai barang mewah dengan penilaian profesional dan nilai kompetitif.
                    </p>
                </div>

                <div className="bg-[#003B33] rounded-2xl p-8 shadow-lg flex flex-col transition-transform">
                    <div className="w-9 h-9 mb-6">
                        <img src="/assets/img/carakerja/icon-shield.png" />
                    </div>

                    <h3 className="text-3xl font-extrabold bg-gradient-to-b from-[#D4AA6A] to-[#B8945F] bg-clip-text text-transparent mb-4">
                        Aman & <br />Terpercaya
                    </h3>

                    <p className="text-white text-base font-semibold leading-relaxed">
                        Didukung sistem keamanan tinggi serta layanan yang menjaga privasi dan kenyamanan nasabah.
                    </p>
                </div>

            </div>
        </div>
    );
}
export { ItemSec }