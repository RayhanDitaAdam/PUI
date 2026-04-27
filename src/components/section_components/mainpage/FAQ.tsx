import React from 'react';

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "Apa itu Gadai Barang Mewah di PUI?",
      answer: "PUI (Pegadaian Utama Indonesia) menyediakan layanan pinjaman dana tunai dengan jaminan aset mewah seperti jam tangan, emas, perhiasan, tas branded, hingga kendaraan premium dengan proses yang cepat, aman, dan transparan."
    },
    {
      question: "Berapa lama proses pencairan dana?",
      answer: "Proses taksir dan pencairan dana di PUI sangat cepat. Setelah aset diverifikasi oleh tim ahli kami, dana dapat langsung dicairkan dalam waktu kurang dari 30 menit."
    },
    {
      question: "Bagaimana dengan keamanan barang jaminan saya?",
      answer: "Keamanan aset Anda adalah prioritas utama kami. Semua barang jaminan disimpan di dalam vault (brankas) dengan standar keamanan perbankan tingkat tinggi dan dilindungi oleh sistem asuransi penuh."
    }
  ];

  return (
    <div className="w-full bg-white py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl tracking-tight text-[#003B33]">
            FAQ
          </h2>
          <div className="w-20 h-1 bg-[#C49A6C] mt-4 mb-3"></div>
          <p className="text-gray-500 text-lg md:text-xl">
            Pertanyaan yang sering diajukan
          </p>
        </div>

        <div className="grid divide-y divide-gray-100 max-w-3xl mx-auto border-t border-gray-100">
          {faqData.map((faq, index) => (
            <div key={index} className="py-6">
              <details className="group">
                <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none text-[#111] hover:text-[#006658] transition-colors duration-300">
                  <span className="pr-8"> {faq.question}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#C49A6C]">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="overflow-hidden transition-all duration-300">
                  <p className="text-gray-600 mt-4 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { FAQ };
