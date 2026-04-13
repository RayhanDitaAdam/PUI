let Proccess = function () {
  return (
    <section 
      style={{
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/img/9e0218ad745918733fdd97792224e9033eb1d6f6.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover"
      }} 
      className="relative process-section py-12 md:py-20 px-6 text-white"
    >
      <div className="max-w-4xl mx-auto mt-20 text-center">
        
        <p className="text-sm md:text-2xl tracking-[0.18em] mb-2">How it works</p>
        <h2 className="text-3xl md:text-7xl font-bold mb-4 leading-tight">
          Proses Pencairan Cepat
        </h2>

        <p className="text-sm md:text-base max-w-2xl mx-auto mb-16 opacity-90">
          Ubah aset berharga Anda menjadi likuiditas dengan proses yang cepat, aman, dan terpercaya. 
          Kami memastikan pengalaman yang mudah dengan hasil maksimal serta ketenangan bagi Anda.
        </p>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center md:gap-10 mb-14">
          <div className="flex flex-col items-center md:w-1/3 text-center group">
            <div className="flex justify-center mb-4">
              <img width="60" src="/assets/img/8e1e5e9db68de8dec0f9170c46b26215695d80aa.png" alt="Icon" className="md:w-[50px]" />
            </div>
            <h3 className="font-semibold text-lg md:text-base mb-2">Initial Consultation</h3>
            <p className="text-sm md:text-xs opacity-80 leading-relaxed">
              Konsultasikan aset berharga Anda melalui tim profesional kami, baik secara langsung maupun layanan jemput. Kami memastikan proses awal yang cepat, nyaman, dan sepenuhnya privat.
            </p>
          </div>
          <div className="text-3xl md:text-4xl md:mt-8 opacity-50 rotate-90 md:rotate-0">
            →
          </div>
          <div className="flex flex-col items-center md:w-1/3 text-center">
            <div className="flex justify-center mb-4">
              <img width="60" src="/assets/img/1c1766aaa851ad680797a36295bd9e74b589b531.png" alt="Icon" className="md:w-[50px]" />
            </div>
            <h3 className="font-semibold text-lg md:text-base mb-2">Professional Appraisal</h3>
            <p className="text-sm md:text-xs opacity-80 leading-relaxed">
              Aset Anda akan melalui proses penilaian oleh ahli berpengalaman dengan standar tinggi untuk mendapatkan nilai optimal secara transparan dan akurat.
            </p>
          </div>
          <div className="text-3xl md:text-4xl md:mt-8 opacity-50 rotate-90 md:rotate-0">
            →
          </div>
          <div className="flex flex-col items-center md:w-1/3 text-center">
            <div className="flex justify-center mb-4">
              <img width="60" src="/assets/img/8e1e5e9db68de8dec0f9170c46b26215695d80aa.png" alt="Icon" className="md:w-[50px]" />
            </div>
            <h3 className="font-semibold text-lg md:text-base mb-2">Instant Disbursement</h3>
            <p className="text-sm md:text-xs opacity-80 leading-relaxed">
              Setelah kesepakatan tercapai, dana akan dicairkan secara cepat dan aman, memberikan likuiditas instan sesuai kebutuhan Anda.
            </p>
          </div>

        </div>

        <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 mb-20">
          Pelajari Selengkapnya
        </button>
      </div>
    </section>
  );
}

export { Proccess };