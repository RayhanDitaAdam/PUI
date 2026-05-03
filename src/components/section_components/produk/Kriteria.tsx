import { useParams } from 'react-router-dom';

const kriteriaData: Record<string, { id: number; title?: string; icon: string; content: React.ReactNode }[]> = {
  'jam-tangan': [
    {
      id: 1,
      title: "Brand",
      icon: "/assets/img/produk/award_9324188 1.svg",
      content: (
        <>
          <p className="mb-4">
            Kami menerima gadai jam tangan otentik dari merek prestisius dunia, di antaranya:
          </p>
          <p className="mb-4 font-bold">
            Rolex, Patek Philippe, Audemars Piguet, Vacheron Constantin, A. Lange & Söhne, Richard Mille, Hublot, Omega, Cartier, IWC Schaffhausen, Breitling
          </p>
          <p className="text-[#003B33]/80 text-sm">
            *Brand prestisius lain di luar daftar ini juga dapat dikonsultasikan dengan tim ahli kami.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Keaslian",
      icon: "/assets/img/produk/right_10025592 1.svg",
      content: (
        <p className="mb-4">
          Jam tangan harus asli. Kami <span className="font-bold">tidak menerima replika, "superclone", atau jam dengan komponen tidak orisinal</span>. Verifikasi otentisitas dilakukan oleh tim ahli kami.
        </p>
      ),
    },
    {
      id: 3,
      title: "Kondisi",
      icon: "/assets/img/produk/Capa_1.svg",
      content: (
        <p className="mb-4">
          Jam dalam <span className="font-bold">kondisi berfungsi normal</span>. Kondisi fisik (gores, hairline, dent) tidak menggugurkan eligibility namun memengaruhi nilai taksiran.
        </p>
      ),
    },
    {
      id: 4,
      title: "Kelengkapan Dokumen",
      icon: "/assets/img/produk/files_2829912 1.svg",
      content: (
        <>
          <p className="mb-4 font-bold">
            Tidak wajib, namun secara signifikan meningkatkan nilai taksiran:
          </p>
          <ul className="list-disc pl-5 space-y-1 font-bold">
            <li>Box asli</li>
            <li>Certificate of Authenticity</li>
            <li>Booklet &amp; invoice pembelian</li>
            <li>Service history dari authorized service center</li>
          </ul>
        </>
      ),
    },
  ],
  'emas': [
    {
      id: 1,
      title: "Jenis Emas",
      icon: "/assets/img/produk/award_9324188 1.svg",
      content: (
        <p className="mb-4">
          <span className="font-bold">Emas batangan bersertifikat dengan kadar 999.9 (24 karat)</span>. Stamp kadar dan informasi berat tercetak pada batangan harus terbaca jelas.
        </p>
      ),
    },
    {
      id: 2,
      title: "Gadai Emas Tanpa Sertifikat",
      icon: "/assets/img/produk/right_10025592 1.svg",
      content: (
        <p className="mb-4">
          Kami menerima emas batangan tanpa sertifikat maupun invoice pembelian. <span className="font-bold">Namun jika tersedia, kelengkapan akan memperkuat proses valuasi</span>.
        </p>
      ),
    },
    {
      id: 3,
      title: "Kondisi",
      icon: "/assets/img/produk/Capa_1.svg",
      content: (
        <p className="mb-4">
          Emas dalam kondisi fisik utuh. Cacat fisik minor (goresan permukaan, packaging rusak ringan) tidak menggugurkan eligibility namun didokumentasikan dalam proses valuasi.
        </p>
      ),
    },
  ],
  'perhiasan': [
    {
      id: 1,
      title: "Berlian",
      icon: "/assets/img/produk/award_9324188 1.svg",
      content: (
        <p className="mb-4">
          Kami menerima berlian dengan atau tanpa sertifikat. Verifikasi karakteristik (carat, color, clarity, cut) dilakukan langsung oleh tim gemologi kami menggunakan peralatan profesional standar industri. Jika berlian Anda memiliki <span className="font-bold">sertifikat dari laboratorium independen seperti GIA, IGI, atau HRD</span>, kelengkapan tersebut akan memperkuat valuasi aset Anda.
        </p>
      ),
    },
    {
      id: 2,
      title: "Batu Mulia Berwarna",
      icon: "/assets/img/produk/right_10025592 1.svg",
      content: (
        <p className="mb-4">
          Kami menerima batu mulia berwarna seperti ruby, sapphire, emerald, dan batu mulia bernilai lainnya, dengan atau tanpa sertifikat. Verifikasi karakteristik dilakukan oleh tim gemologi kami. Jika tersedia <span className="font-bold">sertifikat dari laboratorium gemologi terpercaya seperti SSEF, Gübelin, GRS, atau AIGS</span>, kelengkapan tersebut akan memperkuat valuasi aset Anda.
        </p>
      ),
    },
    {
      id: 3,
      title: "Perhiasan Prestisius & Emas Bernilai",
      icon: "/assets/img/produk/Capa_1.svg",
      content: (
        <>
          <p className="mb-4">
            Perhiasan dengan setting dari rumah jewelry prestisius dunia seperti <span className="font-bold">Tiffany & Co., Cartier, Harry Winston, Bulgari, Graff, Van Cleef & Arpels, dan Chopard</span> dinilai berdasarkan otentisitas brand, kualitas craftsmanship, dan kondisi aktual aset.
          </p>
          <p className="mb-4">
            Kami juga menerima <span className="font-bold">perhiasan emas bernilai dengan kadar dan berat yang signifikan</span>. Valuasi ditentukan berdasarkan kadar emas, berat, kualitas pengerjaan, serta nilai batu mulia atau elemen lain yang menyatu dengan perhiasan tersebut.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "Kondisi Fisik",
      icon: "/assets/img/produk/files_2829912 1.svg",
      content: (
        <p className="mb-4">
          Kondisi fisik aset (chip, scratch, abrasi pada batu, kondisi setting dan mounting) didokumentasikan dan diperhitungkan dalam valuasi. <span className="font-bold">Transparansi kondisi menjaga objektivitas dan keadilan dalam proses penilaian.</span>
        </p>
      ),
    },
  ],
  'tas': [
    {
      id: 1,
      title: "Brand yang Diterima",
      icon: "/assets/img/produk/award_9324188 1.svg",
      content: (
        <>
          <p className="mb-4">
            Kami menerima tas branded otentik dari rumah mode prestisius dunia, di antaranya:
          </p>
          <p className="mb-4 font-bold">
            Hermès, Chanel, Louis Vuitton, Christian Dior, Goyard, Bottega Veneta, Fendi, Celine, Loewe, Prada
          </p>
          <p className="text-[#003B33]/80 text-sm">
            *Brand prestisius lain di luar daftar ini juga dapat dikonsultasikan dengan tim ahli kami.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Otentisitas",
      icon: "/assets/img/produk/right_10025592 1.svg",
      content: (
        <p className="mb-4">
          Tas harus <span className="font-bold">100% otentik</span>. Authentication wajib dilakukan oleh tim ahli kami melalui pengamatan langsung terhadap material, jahitan, hardware, kode seri, dan date code. Tas replika, "super fake", atau yang tidak lolos authentication tidak diterima.
        </p>
      ),
    },
    {
      id: 3,
      title: "Kondisi",
      icon: "/assets/img/produk/Capa_1.svg",
      content: (
        <p className="mb-4">
          Tas pre-loved diterima sepanjang otentisitas dan kondisi aktualnya dapat diverifikasi. Kondisi fisik (handle wear, corner wear, scratches pada hardware) didokumentasikan dan diperhitungkan dalam valuasi.
        </p>
      ),
    },
    {
      id: 4,
      title: "Kelengkapan Dokumen",
      icon: "/assets/img/produk/files_2829912 1.svg",
      content: (
        <>
          <p className="mb-4 font-bold">
            Tidak wajib, namun secara signifikan meningkatkan kredibilitas dan nilai aset:
          </p>
          <ul className="list-disc pl-5 space-y-1 font-bold">
            <li>Box asli &amp; Dust bag</li>
            <li>Invoice pembelian &amp; Receipt asli toko</li>
            <li>Hang tag &amp; price tag</li>
            <li>Certificate of Authenticity</li>
          </ul>
        </>
      ),
    },
  ],
  'kendaraan': [
    {
      id: 1,
      title: "Brand yang Diterima",
      icon: "/assets/img/produk/award_9324188 1.svg",
      content: (
        <>
          <p className="mb-4">
            Kami menerima kendaraan premium dari merek prestisius dunia, di antaranya:
          </p>
          <p className="mb-4 font-bold">
            Ferrari, Lamborghini, Rolls-Royce, Bentley, Porsche, Mercedes-Benz, Aston Martin, Maserati, McLaren, BMW, Audi
          </p>
          <p className="text-[#003B33]/80 text-sm">
            *Brand premium lain di luar daftar ini juga dapat dikonsultasikan dengan tim ahli kami.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Dokumen Legalitas",
      icon: "/assets/img/produk/right_10025592 1.svg",
      content: (
        <>
          <ul className="list-disc pl-5 space-y-1 font-bold mb-4">
            <li>BPKB asli atas nama pemilik (mandatory)</li>
            <li>STNK aktif (mandatory)</li>
            <li>Faktur kendaraan (jika tersedia)</li>
            <li>Buku service / service history (jika tersedia)</li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      title: "Kondisi Kendaraan",
      icon: "/assets/img/produk/Capa_1.svg",
      content: (
        <>
          <ul className="list-disc pl-5 space-y-1 font-bold mb-4">
            <li>Mesin dalam kondisi prima dan berfungsi normal</li>
            <li>Body, interior, dan eksterior dalam kondisi baik</li>
            <li>Tidak dalam status sengketa, sitaan, atau jaminan pihak lain</li>
            <li>Bebas tunggakan pajak</li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title: "Tahun Produksi & Jarak Tempuh",
      icon: "/assets/img/produk/files_2829912 1.svg",
      content: (
        <p className="mb-4">
          <span className="font-bold">Tahun produksi dan jarak tempuh memengaruhi valuasi secara signifikan</span>. Kendaraan vintage dengan provenance kuat juga dapat dipertimbangkan.
        </p>
      ),
    },
  ],
  'koleksi': [
    {
      id: 1,
      title: "Kategori yang Diterima",
      icon: "/assets/img/produk/award_9324188 1.svg",
      content: (
        <>
          <p className="mb-4">
            Kami menerima koleksi langka dengan permintaan pasar yang dapat diverifikasi, di antaranya:
          </p>
          <ul className="list-disc pl-5 space-y-1 font-bold mb-4 text-sm">
            <li>Trading Cards (Pokémon TCG, Magic: The Gathering, Yu-Gi-Oh!)</li>
            <li>Vintage &amp; Limited Edition Cards</li>
            <li>Sports &amp; Entertainment Memorabilia</li>
            <li>Koleksi unik lain dengan track record nilai pasar</li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "Otentisitas",
      icon: "/assets/img/produk/right_10025592 1.svg",
      content: (
        <p className="mb-4">
          Item harus <span className="font-bold">asli</span>. Replika, reprint, atau item dengan provenance tidak jelas tidak diterima. Verifikasi otentisitas dilakukan oleh tim ahli kami.
        </p>
      ),
    },
    {
      id: 3,
      title: "Kondisi",
      icon: "/assets/img/produk/Capa_1.svg",
      content: (
        <>
          <p className="mb-4">Kedua kondisi diterima. Grading tidak wajib namun secara signifikan memperkuat valuasi karena tersertifikasi independen.</p>
          <ul className="list-disc pl-5 space-y-1 font-bold mb-4 text-sm">
            <li>Graded (PSA, BGS, CGC): slab utuh, label terbaca jelas, grade asli</li>
            <li>Raw (tidak digrade): kondisi terjaga, didokumentasikan dalam valuasi</li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title: "Kelangkaan & Permintaan Pasar",
      icon: "/assets/img/produk/files_2829912 1.svg",
      content: (
        <p className="mb-4">
          Item dengan <span className="font-bold">kelangkaan tinggi dan permintaan pasar aktif</span> memiliki valuasi paling kuat. Tim kami merujuk pada data transaksi pasar terkini dalam proses valuasi.
        </p>
      ),
    },
  ]
};

let Kriteria = function () {
  const { slug } = useParams<{ slug: string }>();
  const currentSlug = slug || 'jam-tangan';
  
  // Default to jam-tangan if slug doesn't match our data
  const activeCards = kriteriaData[currentSlug] || kriteriaData['jam-tangan'];
  return (
    <section className="w-full bg-[#FAFAFA] py-10 md:py-14">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-[#003B33] text-sm md:text-base font-semibold text-left mb-2">
          Kriteria
        </p>
        <h2 
          className="text-left w-full max-w-[31.25rem] mb-8 md:mb-10"
          style={{
            color: 'var(--Foundation-Green-Darker, #003B33)',
            fontFamily: 'Lato',
            fontSize: '2.3125rem',
            fontStyle: 'normal',
            fontWeight: 800,
            lineHeight: '130%'
          }}
        >
          Kriteria Barang Diterima
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-6 justify-items-start">
          {activeCards.map((item) => (
            <article
              key={item.id}
              className="w-full max-w-[35.75rem] min-h-[20.6875rem] rounded-2xl border border-[#D9E5E3] bg-white p-5 md:p-7 flex flex-col"
            >
              <div className="flex w-full max-w-[17.5625rem] items-center gap-4 mb-5">
                <img
                  src={item.icon}
                  alt={`Logo kriteria barang ${item.id}`}
                  className="w-10 h-10 object-contain shrink-0"
                  loading="lazy"
                />
                {item.title && (
                  <h3 className="text-[#003B33] text-lg font-bold">{item.title}</h3>
                )}
              </div>

              <div className="w-full max-w-[31.75rem] min-h-[12.9375rem] text-[#003B33] text-sm md:text-base leading-relaxed">
                {item.content}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Kriteria };
