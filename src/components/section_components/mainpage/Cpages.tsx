import React from "react";

let Cpages: React.FC = function () {

  return (
    <>
      <div className="-z-50 -mt-[3.5rem]">
        <section id="about" className="px-[1.5rem] md:px-[1.5rem] lg:px-[4rem] py-[5rem] md:pt-[8rem] md:pb-[4rem] lg:py-[8rem] bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 text-center md:text-left">
              <h2 className="text-[1.875rem] font-bold text-[#C49A6C] leading-snug max-w-[28rem]">
                Mitra terpercaya untuk <br className="hidden md:block" />
                pencairan aset Anda
              </h2>

              <p className="text-gray-300 text-[1rem] md:text-[0.875rem] lg:text-[1rem] max-w-[28rem] leading-relaxed">
                Sebagai mitra terpercaya, kami menjamin keamanan <br className="hidden md:block" />
                tinggi dan penanganan aset dengan integritas untuk <br className="hidden md:block" />
                hasil optimal.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-[5rem] lg:gap-[3.4375rem] md:self-stretch justify-center gap-16 mt-16">
              {/* Privacy Item */}
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-[auto_1fr] items-start md:content-start lg:content-start gap-[1.5rem] md:gap-[0.875rem] lg:gap-[0.875rem] xl:gap-[1rem] w-full md:w-[13.8125rem] lg:w-[13.8125rem] xl:w-1/3 text-left">
                <img src="/assets/img/icon-privacy.webp" alt="Privacy" loading="lazy" className="w-[2.25rem] lg:w-[3rem] h-[2.25rem] lg:h-[3rem] object-contain" />
                <div>
                  <h3 className="font-['Lato'] font-[800] text-[#E6E6E6] leading-[1.3] text-[1.125rem] md:text-[0.875rem] lg:text-[1.25rem] mb-[0.5rem] md:mb-[0.25rem]">Privasi 100%</h3>
                  <p className="font-['Lato'] font-[700] text-[#D9D9D9] leading-[1.3] text-[0.875rem] md:text-[0.6875rem] lg:text-[1rem]">
                    Identitas dan seluruh informasi klien dijaga <br className="hidden md:block" />
                    sepenuhnya dengan sistem keamanan <br className="hidden md:block" />
                    berlapis.
                  </p>
                </div>
              </div>

              {/* Process Item */}
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-[auto_1fr] items-start md:content-start lg:content-start gap-[1.5rem] md:gap-[0.875rem] lg:gap-[0.875rem] xl:gap-[1rem] w-full md:w-[13.8125rem] lg:w-[13.8125rem] xl:w-1/3 text-left">
                <img src="/assets/img/icon-document.webp" alt="Process" loading="lazy" className="w-[2.25rem] lg:w-[3rem] h-[2.25rem] lg:h-[3rem] object-contain" />
                <div>
                  <h3 className="font-['Lato'] font-[800] text-[#E6E6E6] leading-[1.3] text-[1.125rem] md:text-[0.875rem] lg:text-[1.25rem] mb-[0.5rem] md:mb-[0.25rem]">
                    Proses Transparan & Terverifikasi
                  </h3>
                  <p className="font-['Lato'] font-[700] text-[#D9D9D9] leading-[1.3] text-[0.875rem] md:text-[0.6875rem] lg:text-[1rem]">
                    Nilai taksir & bunga Jelas <br className="hidden md:block" />
                    Informasi pinjaman jatuh tempo, & Resiko yg jelas
                  </p>
                </div>
              </div>

              {/* Protection Item */}
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-[auto_1fr] items-start md:content-start lg:content-start gap-[1.5rem] md:gap-[0.875rem] lg:gap-[0.875rem] xl:gap-[1rem] w-full md:w-[13.8125rem] lg:w-[13.8125rem] xl:w-1/3 text-left">
                <img src="/assets/img/icon-shield.webp" alt="Protection" loading="lazy" className="w-[2.25rem] lg:w-[3rem] h-[2.25rem] lg:h-[3rem] object-contain" />
                <div>
                  <h3 className="font-['Lato'] font-[800] text-[#E6E6E6] leading-[1.3] text-[1.125rem] md:text-[0.875rem] lg:text-[1.25rem] mb-[0.5rem] md:mb-[0.25rem]">
                    Perlindungan Aset Maksimal
                  </h3>
                  <p className="font-['Lato'] font-[700] text-[#D9D9D9] leading-[1.3] text-[0.875rem] md:text-[0.6875rem] lg:text-[1rem]">
                    Aset Anda disimpan dalam <br className="hidden md:block" />
                    standar keamanan tinggi untuk memastikan <br className="hidden md:block" />
                    kondisi tetap aman dan bernilai optimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export { Cpages };