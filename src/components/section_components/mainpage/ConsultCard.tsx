import "./style/init.css"
import "./style/section-cards.css"

let Consult = function () {
  return (
    <div className="w-full flex justify-center bg-white py-10">
      <div className="pui-wrap mt-28">
        <div className="hero" style={{
          background: "url('/assets/img/main/91fd43c06292c0a132846c9ad9f6a014922f2280.webp')"
        }}>
          <div className="hero-deco"></div>
          <div className="hero-deco2"></div>
          <div className="hero-content relative bottom-10">
            <h1>Ingin gadai barang mewah anda?</h1>
            <p>Konsultasikan sekarang via WhatsApp. Terjamin anonimitas & privasi 100%.</p>
            <button className="btn-wa">
              <svg className="wa-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white" />
              </svg>
              Konsultasi Valuasi Sekarang
            </button>
          </div>

          <div className="hero-img-wrap">
            <div className="hero-person-placeholder">
              <img className="-mb-44" src="/assets/img/main/Consult.webp"  alt="Consult" />
            </div>
          </div>
        </div>

        <div className="cards-row top-10 mb-24">
          <div className="card">
            <div className="card-icon-wrap">
              <img src="/assets/img/main/81829e2cbb1d51f007adb0e183c5911e296267be.webp" width="24px"  alt="image" />
            </div>
            <h3>Bawa langsung aset mewah ke kantor PUI</h3>
            <p>Anda dapat membawa langsung aset mewah Anda ke kantor PUI <br /> untuk mendapatkan pengalaman layanan yang cepat, aman, dan <br /> transparan. Tim profesional kami akan melakukan proses valuasi <br /> secara detail dan akurat, memastikan Anda mendapatkan nilai <br /> terbaik sesuai kondisi dan pasar terkini.</p>
            <div className="card-link">
              Booking Jadwal Janji Temu
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "18px",
                height: "18px",
                background: "#1B4332",
                borderRadius: "50%"
              }}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M2 4.5h5M4.5 2l2.5 2.5L4.5 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          <div className="card ">
            <div className="card-icon-wrap">
              <img src="/assets/img/main/d8d020e2c5ce16700e20195204cc0d38d6ba12bb.webp" width="24px"  alt="image" />
            </div>
            <h3>Layanan Jemput Barang</h3>
            <p>Untuk kenyamanan maksimal, PUI menyediakan layanan jemput <br /> aset langsung ke lokasi Anda. Layanan ini dirancang bagi Anda yang <br /> menginginkan proses praktis tanpa perlu datang ke kantor. <br /> Tim kami akan datang dengan prosedur keamanan ketat dan profesionalisme tinggi dalam menangani setiap aset.</p>
            <div className="card-link">
              Booking Jadwal Jemput barang
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "18px",
                height: "18px",
                background: "#1B4332",
                borderRadius: "50%"
              }}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M2 4.5h5M4.5 2l2.5 2.5L4.5 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Consult };