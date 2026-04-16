import React from "react";

let Cpages: React.FC = function () {

  return (
    <>
      <div className="-z-50 -mt-14">
        <section className="px-6 md:px-16 py-20 md:py-32 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 text-center md:text-left">
              <h2 className="text-3xl md:text-3xl font-bold text-[#C49A6C] leading-snug max-w-md">
                Mitra terpercaya untuk <br className="hidden md:block" />
                likuiditas aset mewah Anda.
              </h2>

              <p className="text-gray-300 text-base md:text-sm max-w-md leading-relaxed">
                Sebagai mitra terpercaya, kami menjamin keamanan <br className="hidden md:block" />
                tinggi dan penanganan aset dengan integritas untuk <br className="hidden md:block" />
                hasil optimal.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-[3.4375rem] md:self-stretch justify-center gap-16 mt-16">
              {/* Privacy Item */}
              <div className="flex flex-row items-start gap-6 md:gap-4 w-full md:w-1/3 text-left">
                <div className="flex-shrink-0">
                  <img src="/assets/img/icon-privacy.png" alt="Privacy" className="w-[48px] h-[48px] object-contain" />
                </div>
                <div>
                  <div className="mb-2 md:mb-1">
                    <h3 className="font-bold text-lg md:text-xl text-white">Privasi 100%</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Identitas dan seluruh informasi klien dijaga <br className="hidden md:block" />
                    sepenuhnya dengan sistem keamanan <br className="hidden md:block" />
                    berlapis.
                  </p>
                </div>
              </div>

              {/* Process Item */}
              <div className="flex flex-row items-start gap-6 md:gap-4 w-full md:w-1/3 text-left">
                <div className="flex-shrink-0">
                  <img src="/assets/img/icon-document.png" alt="Process" className="w-[48px] h-[48px] object-contain" />
                </div>

                <div>
                  <div className="mb-2 md:mb-1">
                    <h3 className="font-bold text-lg md:text-xl text-white">
                      Proses Transparan & Terverifikasi
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Identitas dan seluruh informasi klien dijaga <br className="hidden md:block" />
                    sepenuhnya dengan sistem keamanan <br className="hidden md:block" />
                    berlapis.
                  </p>
                </div>
              </div>

              {/* Protection Item */}
              <div className="flex flex-row items-start gap-6 md:gap-4 w-full md:w-1/3 text-left">
                <div className="flex-shrink-0">
                  <img src="/assets/img/icon-shield.png" alt="Protection" className="w-[48px] h-[48px] object-contain" />
                </div>

                <div>
                  <div className="mb-2 md:mb-1">
                    <h3 className="font-bold text-lg md:text-xl text-white">
                      Perlindungan Aset Maksimal
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
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