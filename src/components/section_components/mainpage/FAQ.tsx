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
    },
    {
      question: "Apakah jam tangan tanpa box dan sertifikat masih bisa digadaikan?",
      answer: "Bisa. Kelengkapan dokumen original tidak wajib, namun signifikan meningkatkan nilai taksiran karena memperkuat verifikasi otentisitas."
    },
    {
      question: "Berapa lama tenor gadai untuk jam tangan?",
      answer: "Tenor standar antara 1 hingga 3 bulan, dengan opsi perpanjangan sesuai kebutuhan Anda."
    },
    {
      question: "Bagaimana keamanan jam tangan saya selama masa gadai?",
      answer: "Jam tangan disimpan dalam brankas terjamin di kantor PUI dengan sistem keamanan berlapis. Aset Anda dilindungi sepanjang masa gadai."
    },
    {
      question: "Apakah jam tangan vintage atau diskontinyu diterima?",
      answer: "Diterima, sepanjang otentisitasnya dapat diverifikasi. Jam vintage dari merek prestisius sering memiliki nilai aset yang sangat tinggi."
    },
    {
      question: "Apakah kondisi fisik tidak sempurna (gores, hairline, dent) menggugurkan eligibility?",
      answer: "Tidak. Kondisi fisik didokumentasikan dan diperhitungkan dalam valuasi, bukan dasar untuk penolakan."
    },
    {
      question: "Bagaimana cara memperpanjang masa gadai?",
      answer: "Hubungi tim kami via WhatsApp sebelum jatuh tempo. Perpanjangan dapat dilakukan dengan persetujuan kedua pihak."
    },
    {
      question: "Apa minimum nilai gadai untuk kategori jam tangan?",
      answer: "Setiap kategori memiliki ambang minimum yang berbeda. Untuk informasi spesifik, silakan hubungi tim kami via WhatsApp."
    },
    {
      question: "Bagaimana cara memulai proses gadai?",
      answer: "Hubungi kami via WhatsApp untuk konsultasi awal dan jadwalkan kunjungan ke kantor PUI."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#003B33] border-[#005D51] shadow-lg shadow-[#003B33]/20'
                    : 'bg-[#F8F8F6] border-gray-200 hover:border-[#C49A6C]/50 hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-center p-5 md:p-6">
                  <span className={`font-semibold text-sm md:text-[0.95rem] leading-snug pr-4 transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-[#111]'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#C49A6C] rotate-180'
                      : 'bg-[#003B33]/10 group-hover:bg-[#C49A6C]/20'
                  }`}>
                    <svg
                      fill="none" height="16" width="16" stroke={isOpen ? '#fff' : '#003B33'}
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[20rem] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className={`px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed transition-colors duration-300 ${
                    isOpen ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { FAQ };
