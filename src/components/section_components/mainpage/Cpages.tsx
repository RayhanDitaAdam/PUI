import React from "react";
import { HiShieldCheck, HiOutlineDocumentText, HiOutlineLockClosed } from "react-icons/hi";

let Cpages: React.FC = function () {
  const iconColor = "#C49A6C";

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

            <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-20 mt-16 md:mt-16">
              {/* Privacy Item */}
              <div className="flex flex-row items-start md:items-center gap-6 md:gap-4 w-full md:w-1/3 text-left">
                <div className="flex-shrink-0">
                  <HiShieldCheck style={{ color: iconColor }} className="text-5xl md:text-4xl" />
                </div>
                <div>
                  <div className="mb-2 md:mb-1">
                    <h3 className="font-bold text-lg md:text-sm text-white">Privasi 100%</h3>
                  </div>
                  <p className="text-sm md:text-xs text-gray-300 leading-relaxed">
                    Identitas dan seluruh informasi klien dijaga <br className="hidden md:block" />
                    sepenuhnya dengan sistem keamanan <br className="hidden md:block" />
                    berlapis.
                  </p>
                </div>
              </div>

              {/* Process Item */}
              <div className="flex flex-row items-start md:items-start gap-6 md:gap-4 w-full md:w-1/3 text-left">
                <div className="flex-shrink-0">
                  <HiOutlineDocumentText style={{ color: iconColor }} className="text-5xl md:text-4xl" />
                </div>

                <div>
                  <div className="mb-2 md:mb-1">
                    <h3 className="font-bold text-lg md:text-sm text-white">
                      Proses Transparan & Terverifikasi
                    </h3>
                  </div>
                  <p className="text-sm md:text-xs text-gray-300 leading-relaxed">
                    Identitas dan seluruh informasi klien dijaga <br className="hidden md:block" />
                    sepenuhnya dengan sistem keamanan <br className="hidden md:block" />
                    berlapis.
                  </p>
                </div>
              </div>

              {/* Protection Item */}
              <div className="flex flex-row items-start md:items-start gap-6 md:gap-4 w-full md:w-1/3 text-left">
                <div className="flex-shrink-0">
                  <HiOutlineLockClosed style={{ color: iconColor }} className="text-5xl md:text-4xl" />
                </div>

                <div>
                  <div className="mb-2 md:mb-1">
                    <h3 className="font-bold text-lg md:text-sm text-white">
                      Perlindungan Aset Maksimal
                    </h3>
                  </div>
                  <p className="text-sm md:text-xs text-gray-300 leading-relaxed">
                    Aset Anda disimpan dalam <br className="hidden md:block" />
                    standar keamanan tinggi untuk memastikan <br className="hidden md:block" />
                    kondisi tetap aman.
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