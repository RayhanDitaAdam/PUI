import React from 'react';
import { useParams } from 'react-router-dom';

const faqCollections: Record<string, { question: string; answer: string }[]> = {
  'jam-tangan': [
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
  ],
  'emas': [
    {
      question: "Apakah saya wajib memiliki sertifikat untuk gadai emas batangan?",
      answer: "Tidak wajib. Emas batangan dapat langsung dinilai berdasarkan kadar dan berat aktual. Namun jika sertifikat tersedia, valuasi menjadi lebih kuat."
    },
    {
      question: "Apakah perhiasan emas (kalung, gelang, cincin) masuk kategori ini?",
      answer: "Tidak. Perhiasan emas masuk kategori Perhiasan & Batu Mulia karena valuasinya juga memperhitungkan komponen setting, batu, dan craftsmanship."
    },
    {
      question: "Berapa lama tenor gadai untuk Emas?",
      answer: "Tenor standar antara 1 hingga 3 bulan, dengan opsi perpanjangan sesuai kebutuhan Anda."
    },
    {
      question: "Bagaimana cara PUI memastikan kadar emas saya akurat?",
      answer: "Pengujian dilakukan di laboratorium kami menggunakan instrumen presisi. Hasil pengujian dapat ditunjukkan kepada Anda sebagai bagian dari transparansi proses."
    },
    {
      question: "Bagaimana keamanan Emas saya selama masa gadai?",
      answer: "Aset disimpan dalam brankas terjamin di kantor PUI dengan sistem keamanan berlapis. Emas Anda dilindungi sepanjang masa gadai."
    },
    {
      question: "Apakah saya bisa memperpanjang masa gadai?",
      answer: "Bisa. Hubungi tim kami via WhatsApp sebelum jatuh tempo. Perpanjangan dilakukan dengan persetujuan kedua pihak."
    },
    {
      question: "Apa minimum berat untuk gadai Emas?",
      answer: "Setiap kategori memiliki ambang minimum yang berbeda. Untuk informasi spesifik, silakan hubungi tim kami via WhatsApp."
    },
    {
      question: "Bagaimana cara memulai proses gadai?",
      answer: "Hubungi kami via WhatsApp untuk konsultasi awal dan jadwalkan kunjungan ke kantor PUI."
    }
  ],
  'perhiasan': [
    {
      question: "Apakah berlian saya harus bersertifikat GIA atau IGI agar bisa digadaikan?",
      answer: "Tidak wajib. Berlian tanpa sertifikat tetap diterima. verifikasi karat, warna, clarity, dan cut dilakukan oleh tim gemologi kami. Namun sertifikat dari laboratorium independen secara signifikan memperkuat valuasi."
    },
    {
      question: "Apakah loose stones (batu lepas tanpa setting) diterima?",
      answer: "Diterima. Loose stones dinilai berdasarkan karakteristik gemologis dan kondisi aktualnya."
    },
    {
      question: "Bagaimana dengan batu mulia berwarna seperti ruby, sapphire, atau emerald?",
      answer: "Diterima. Sertifikat dari laboratorium gemologi (SSEF, Gübelin, GRS, AIGS) memperkuat valuasi, tetapi tidak wajib."
    },
    {
      question: "Berapa lama tenor gadai untuk perhiasan?",
      answer: "Tenor standar antara 1 hingga 3 bulan, dengan opsi perpanjangan sesuai kebutuhan Anda."
    },
    {
      question: "Apakah perhiasan dengan kondisi fisik tidak sempurna (chip pada batu, abrasi pada setting) tetap diterima?",
      answer: "Diterima. Kondisi fisik didokumentasikan dan diperhitungkan dalam valuasi."
    },
    {
      question: "Bagaimana keamanan perhiasan saya selama masa gadai?",
      answer: "Aset disimpan dalam brankas terjamin di kantor PUI dengan sistem keamanan berlapis. Perhiasan Anda dilindungi sepanjang masa gadai."
    },
    {
      question: "Apa minimum nilai gadai untuk kategori perhiasan?",
      answer: "Setiap kategori memiliki ambang minimum yang berbeda. Untuk informasi spesifik, silakan hubungi tim kami via WhatsApp."
    },
    {
      question: "Bagaimana cara memulai proses gadai?",
      answer: "Hubungi kami via WhatsApp untuk konsultasi awal dan jadwalkan kunjungan ke kantor PUI."
    }
  ],
  'tas': [
    {
      question: "Apakah tas pre-loved (bekas pakai) diterima?",
      answer: "Diterima, sepanjang otentisitasnya lolos authentication kami. Kondisi fisik didokumentasikan dan diperhitungkan dalam valuasi."
    },
    {
      question: "Apakah saya wajib memiliki box, invoice, dan dust bag asli?",
      answer: "Tidak wajib. Namun kelengkapan dokumen original signifikan meningkatkan kredibilitas dan nilai aset."
    },
    {
      question: "Bagaimana PUI memastikan tas saya otentik?",
      answer: "Authentication dilakukan oleh tim ahli kami melalui pengamatan langsung terhadap material, jahitan, hardware, kode seri, dan date code. Untuk kasus yang memerlukan verifikasi tambahan, kami juga dapat berkoordinasi dengan authenticator pihak ketiga."
    },
    {
      question: "Berapa lama tenor gadai untuk tas branded?",
      answer: "Tenor standar antara 1 hingga 3 bulan, dengan opsi perpanjangan sesuai kebutuhan Anda."
    },
    {
      question: "Apakah tas dengan handle wear, corner wear, atau scratches pada hardware tetap diterima?",
      answer: "Diterima. Kondisi fisik didokumentasikan dan diperhitungkan dalam valuasi, bukan dasar penolakan."
    },
    {
      question: "Bagaimana keamanan tas saya selama masa gadai?",
      answer: "Aset disimpan di ruangan khusus dengan kontrol kelembapan dan suhu serta sistem keamanan berlapis di kantor PUI."
    },
    {
      question: "Apakah brand di luar daftar (misal: vintage atau exotic leather) diterima?",
      answer: "Dapat dikonsultasikan terlebih dahulu via WhatsApp. Tas vintage dari rumah mode prestisius dan exotic leather sering memiliki nilai aset yang tinggi."
    },
    {
      question: "Apa minimum nilai gadai untuk kategori tas?",
      answer: "Setiap kategori memiliki ambang minimum yang berbeda. Untuk informasi spesifik, silakan hubungi tim kami via WhatsApp."
    },
    {
      question: "Bagaimana cara memulai proses gadai?",
      answer: "Hubungi kami via WhatsApp untuk konsultasi awal dan jadwalkan kunjungan ke kantor PUI."
    }
  ],
  'kendaraan': [
    {
      question: "Apakah saya wajib memiliki BPKB asli atas nama pribadi?",
      answer: "Ya. BPKB asli atas nama pemilik wajib disertakan. Kami juga akan memverifikasi kesesuaian nomor rangka dan nomor mesin pada kendaraan dengan dokumen."
    },
    {
      question: "Apakah kendaraan dengan tahun produksi lama tetap diterima?",
      answer: "Tahun produksi memengaruhi valuasi. Untuk kendaraan vintage dari merek prestisius dengan provenance kuat, penilaian dilakukan secara khusus oleh tim kami."
    },
    {
      question: "Apakah jarak tempuh tinggi menggugurkan eligibility?",
      answer: "Tidak otomatis. Jarak tempuh menjadi salah satu faktor valuasi, namun bukan dasar penolakan."
    },
    {
      question: "Berapa lama tenor gadai untuk kendaraan?",
      answer: "Tenor standar antara 1 hingga 3 bulan, dengan opsi perpanjangan sesuai kebutuhan Anda."
    },
    {
      question: "Apakah kendaraan saya bisa tetap saya gunakan selama masa gadai?",
      answer: "Tidak. Selama masa gadai, kendaraan disimpan di lokasi penyimpanan PUI dengan standar keamanan tinggi untuk melindungi aset Anda."
    },
    {
      question: "Bagaimana keamanan kendaraan saya selama masa gadai?",
      answer: "Kendaraan disimpan di lokasi penyimpanan dengan kontrol akses ketat, pengawasan 24 jam, dan perlindungan dari cuaca. Aset Anda dilindungi sepanjang masa gadai."
    },
    {
      question: "Apakah kendaraan dengan plat domisili luar Jabodetabek diterima?",
      answer: "Diterima. Lokasi inspeksi dan penyerahan kendaraan akan dikoordinasikan dengan tim kami via WhatsApp."
    },
    {
      question: "Apa minimum nilai gadai untuk kategori kendaraan?",
      answer: "Setiap kategori memiliki ambang minimum yang berbeda. Untuk informasi spesifik, silakan hubungi tim kami via WhatsApp."
    },
    {
      question: "Bagaimana cara memulai proses gadai?",
      answer: "Hubungi kami via WhatsApp untuk konsultasi awal dan jadwalkan inspeksi kendaraan."
    }
  ],
  'koleksi': [
    {
      question: "Apakah kartu Pokémon saya harus digrade PSA / BGS / CGC dulu agar bisa digadaikan?",
      answer: "Tidak wajib. Kartu raw (tidak digrade) tetap diterima, kondisi akan dinilai langsung oleh tim kami. Namun kartu yang sudah digrade memiliki valuasi yang signifikan lebih kuat karena kondisinya tersertifikasi pihak independen."
    },
    {
      question: "TCG selain Pokémon (Magic: The Gathering, Yu-Gi-Oh!) apakah diterima?",
      answer: "Diterima, sepanjang item memiliki kelangkaan dan permintaan pasar yang dapat diverifikasi."
    },
    {
      question: "Bagaimana PUI menentukan nilai pasar koleksi saya?",
      answer: "Tim kami merujuk pada data transaksi terkini di marketplace koleksi (eBay, TCGplayer, PWCC, dan platform lokal) serta database harga pasar internasional. Untuk item langka, valuasi dilakukan secara kasus-per-kasus."
    },
    {
      question: "Berapa lama tenor gadai untuk koleksi langka?",
      answer: "Tenor standar antara 1 hingga 3 bulan, dengan opsi perpanjangan sesuai kebutuhan Anda."
    },
    {
      question: "Bagaimana keamanan koleksi saya selama masa gadai?",
      answer: "Item disimpan di ruangan khusus dengan kontrol kelembapan, suhu, dan pencahayaan, dilengkapi sistem keamanan berlapis untuk melindungi koleksi Anda."
    },
    {
      question: "Apakah koleksi di luar trading cards (misal: memorabilia, vintage toys, watches collectibles) diterima?",
      answer: "Dapat dikonsultasikan terlebih dahulu via WhatsApp. Tim kami akan memberikan asesmen awal apakah item dapat masuk dalam proses valuasi."
    },
    {
      question: "Apa minimum nilai gadai untuk koleksi langka?",
      answer: "Setiap kategori memiliki ambang minimum yang berbeda. Untuk informasi spesifik, silakan hubungi tim kami via WhatsApp."
    },
    {
      question: "Bagaimana cara memulai proses gadai?",
      answer: "Hubungi kami via WhatsApp untuk konsultasi awal dan jadwalkan kunjungan ke kantor PUI."
    }
  ]
};

const defaultFAQ = [
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

const FAQ: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // Kalau ada slug, dan kita punya datanya di faqCollections, pakai data itu.
  // Kalau nggak ada (misal di halaman main), pakai defaultFAQ.
  // Tapi karena ini di dalam halaman Produk, bisa jadi slug-nya misal "tas".
  // Buat amannya, kita sediain fallback ke jam-tangan kalau slug produk nggak terdaftar.
  let faqData = defaultFAQ;
  
  if (slug) {
      faqData = faqCollections[slug] || faqCollections['jam-tangan'];
  }

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
