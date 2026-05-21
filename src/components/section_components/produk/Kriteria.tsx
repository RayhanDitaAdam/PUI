import { useParams } from 'react-router-dom';
import { getProducts, type KriteriaItem, type KriteriaBlock } from "../../../data/products";

const fallbackKriteria: Record<string, KriteriaItem[]> = {
  'jam-tangan': [
    { id: 1, title: "Brand", icon: "/assets/img/produk/award_9324188 1.svg", content: [{ type: "p", text: "Kami menerima gadai jam tangan otentik dari merek prestisius dunia, di antaranya:" }, { type: "p-bold", text: "Rolex, Patek Philippe, Audemars Piguet, Vacheron Constantin, A. Lange & Söhne, Richard Mille, Hublot, Omega, Cartier, IWC Schaffhausen, Breitling" }, { type: "small", text: "*Brand prestisius lain di luar daftar ini juga dapat dikonsultasikan dengan tim ahli kami." }] },
    { id: 2, title: "Keaslian", icon: "/assets/img/produk/right_10025592 1.svg", content: [{ type: "p", text: "Jam tangan harus asli. Kami **tidak menerima replika, \"superclone\", atau jam dengan komponen tidak orisinal**. Verifikasi otentisitas dilakukan oleh tim ahli kami." }] },
    { id: 3, title: "Kondisi", icon: "/assets/img/produk/Capa_1.svg", content: [{ type: "p", text: "Jam dalam **kondisi berfungsi normal**. Kondisi fisik (gores, hairline, dent) tidak menggugurkan eligibility namun memengaruhi nilai taksiran." }] },
    { id: 4, title: "Kelengkapan Dokumen", icon: "/assets/img/produk/files_2829912 1.svg", content: [{ type: "p-bold", text: "Tidak wajib, namun secara signifikan meningkatkan nilai taksiran:" }, { type: "list", items: ["Box asli", "Certificate of Authenticity", "Booklet & invoice pembelian", "Service history dari authorized service center"] }] }
  ],
  'emas': [
    { id: 1, title: "Jenis Emas", icon: "/assets/img/produk/award_9324188 1.svg", content: [{ type: "p", text: "**Emas batangan bersertifikat dengan kadar 999.9 (24 karat)**. Stamp kadar dan informasi berat tercetak pada batangan harus terbaca jelas." }] },
    { id: 2, title: "Gadai Emas Tanpa Sertifikat", icon: "/assets/img/produk/right_10025592 1.svg", content: [{ type: "p", text: "Kami menerima emas batangan tanpa sertifikat maupun invoice pembelian. **Namun jika tersedia, kelengkapan akan memperkuat proses valuasi**." }] },
    { id: 3, title: "Kondisi", icon: "/assets/img/produk/Capa_1.svg", content: [{ type: "p", text: "Emas dalam kondisi fisik utuh. Cacat fisik minor (goresan permukaan, packaging rusak ringan) tidak menggugurkan eligibility namun didokumentasikan dalam proses valuasi." }] }
  ],
  'perhiasan': [
    { id: 1, title: "Berlian", icon: "/assets/img/produk/award_9324188 1.svg", content: [{ type: "p", text: "Kami menerima berlian dengan atau tanpa sertifikat. Verifikasi karakteristik (carat, color, clarity, cut) dilakukan langsung oleh tim gemologi kami menggunakan peralatan profesional standar industri. Jika berlian Anda memiliki **sertifikat dari laboratorium independen seperti GIA, IGI, atau HRD**, kelengkapan tersebut akan memperkuat valuasi aset Anda." }] },
    { id: 2, title: "Batu Mulia Berwarna", icon: "/assets/img/produk/right_10025592 1.svg", content: [{ type: "p", text: "Kami menerima batu mulia berwarna seperti ruby, sapphire, emerald, dan batu mulia bernilai lainnya, dengan atau tanpa sertifikat. Verifikasi karakteristik dilakukan oleh tim gemologi kami. Jika tersedia **sertifikat dari laboratorium gemologi terpercaya seperti SSEF, Gübelin, GRS, atau AIGS**, kelengkapan tersebut akan memperkuat valuasi aset Anda." }] },
    { id: 3, title: "Perhiasan Prestisius & Emas Bernilai", icon: "/assets/img/produk/Capa_1.svg", content: [{ type: "p", text: "Perhiasan dengan setting dari rumah jewelry prestisius dunia seperti **Tiffany & Co., Cartier, Harry Winston, Bulgari, Graff, Van Cleef & Arpels, dan Chopard** dinilai berdasarkan otentisitas brand, kualitas craftsmanship, dan kondisi aktual aset." }, { type: "p", text: "Kami juga menerima **perhiasan emas bernilai dengan kadar dan berat yang signifikan**. Valuasi ditentukan berdasarkan kadar emas, berat, kualitas pengerjaan, serta nilai batu mulia atau elemen lain yang menyatu dengan perhiasan tersebut." }] },
    { id: 4, title: "Kondisi Fisik", icon: "/assets/img/produk/files_2829912 1.svg", content: [{ type: "p", text: "Kondisi fisik aset (chip, scratch, abrasi pada batu, kondisi setting dan mounting) didokumentasikan dan diperhitungkan dalam valuasi. **Transparansi kondisi menjaga objektivitas dan keadilan dalam proses penilaian.**" }] }
  ],
  'tas': [
    { id: 1, title: "Brand yang Diterima", icon: "/assets/img/produk/award_9324188 1.svg", content: [{ type: "p", text: "Kami menerima tas branded otentik dari rumah mode prestisius dunia, di antaranya:" }, { type: "p-bold", text: "Hermès, Chanel, Louis Vuitton, Christian Dior, Goyard, Bottega Veneta, Fendi, Celine, Loewe, Prada" }, { type: "small", text: "*Brand prestisius lain di luar daftar ini juga dapat dikonsultasikan dengan tim ahli kami." }] },
    { id: 2, title: "Otentisitas", icon: "/assets/img/produk/right_10025592 1.svg", content: [{ type: "p", text: "Tas harus **100% otentik**. Authentication wajib dilakukan oleh tim ahli kami melalui pengamatan langsung terhadap material, jahitan, hardware, kode seri, dan date code. Tas replika, \"super fake\", atau yang tidak lolos authentication tidak diterima." }] },
    { id: 3, title: "Kondisi", icon: "/assets/img/produk/Capa_1.svg", content: [{ type: "p", text: "Tas pre-loved diterima sepanjang otentisitas dan kondisi aktualnya dapat diverifikasi. Kondisi fisik (handle wear, corner wear, scratches pada hardware) didokumentasikan dan diperhitungkan dalam valuasi." }] },
    { id: 4, title: "Kelengkapan Dokumen", icon: "/assets/img/produk/files_2829912 1.svg", content: [{ type: "p-bold", text: "Tidak wajib, namun secara signifikan meningkatkan kredibilitas dan nilai aset:" }, { type: "list", items: ["Box asli & Dust bag", "Invoice pembelian & Receipt asli toko", "Hang tag & price tag", "Certificate of Authenticity"] }] }
  ],
  'kendaraan': [
    { id: 1, title: "Brand yang Diterima", icon: "/assets/img/produk/award_9324188 1.svg", content: [{ type: "p", text: "Kami menerima kendaraan premium dari merek prestisius dunia, di antaranya:" }, { type: "p-bold", text: "Ferrari, Lamborghini, Rolls-Royce, Bentley, Porsche, Mercedes-Benz, Aston Martin, Maserati, McLaren, BMW, Audi" }, { type: "small", text: "*Brand premium lain di luar daftar ini juga dapat dikonsultasikan dengan tim ahli kami." }] },
    { id: 2, title: "Dokumen Legalitas", icon: "/assets/img/produk/right_10025592 1.svg", content: [{ type: "list", items: ["BPKB asli atas nama pemilik (mandatory)", "STNK aktif (mandatory)", "Faktur kendaraan (jika tersedia)", "Buku service / service history (jika tersedia)"] }] },
    { id: 3, title: "Kondisi Kendaraan", icon: "/assets/img/produk/Capa_1.svg", content: [{ type: "list", items: ["Mesin dalam kondisi prima dan berfungsi normal", "Body, interior, dan eksterior dalam kondisi baik", "Tidak dalam status sengketa, sitaan, atau jaminan pihak lain", "Bebas tunggakan pajak"] }] },
    { id: 4, title: "Tahun Produksi & Jarak Tempuh", icon: "/assets/img/produk/files_2829912 1.svg", content: [{ type: "p", text: "**Tahun produksi dan jarak tempuh memengaruhi valuasi secara signifikan**. Kendaraan vintage dengan provenance kuat juga dapat dipertimbangkan." }] }
  ],
  'koleksi': [
    { id: 1, title: "Kategori yang Diterima", icon: "/assets/img/produk/award_9324188 1.svg", content: [{ type: "p", text: "Kami menerima koleksi langka dengan permintaan pasar yang dapat diverifikasi, di antaranya:" }, { type: "list", items: ["Trading Cards (Pokémon TCG, Magic: The Gathering, Yu-Gi-Oh!)", "Vintage & Limited Edition Cards", "Sports & Entertainment Memorabilia", "Koleksi unik lain dengan track record nilai pasar"] }] },
    { id: 2, title: "Otentisitas", icon: "/assets/img/produk/right_10025592 1.svg", content: [{ type: "p", text: "Item harus **asli**. Replika, reprint, atau item dengan provenance tidak jelas tidak diterima. Verifikasi otentisitas dilakukan oleh tim ahli kami." }] },
    { id: 3, title: "Kondisi", icon: "/assets/img/produk/Capa_1.svg", content: [{ type: "p-bold", text: "Kedua kondisi diterima. Grading tidak wajib namun secara signifikan memperkuat valuasi karena tersertifikasi independen." }, { type: "list", items: ["Graded (PSA, BGS, CGC): slab utuh, label terbaca jelas, grade asli", "Raw (tidak digrade): kondisi terjaga, didokumentasikan dalam valuasi"] }] },
    { id: 4, title: "Kelangkaan & Permintaan Pasar", icon: "/assets/img/produk/files_2829912 1.svg", content: [{ type: "p", text: "Item dengan **kelangkaan tinggi dan permintaan pasar aktif** memiliki valuasi paling kuat. Tim kami merujuk pada data transaksi pasar terkini dalam proses valuasi." }] }
  ]
};

function getKriteria(slug: string): KriteriaItem[] {
  const products = getProducts();
  if (products.length > 0) {
    const product = products.find(p => p.slug === slug);
    if (product?.kriteria) return product.kriteria;
    if (products[0]?.kriteria) return products[0].kriteria;
  }
  return fallbackKriteria[slug] || fallbackKriteria['jam-tangan'];
}

function renderTextWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <span key={i} className="font-bold">{part.slice(2, -2)}</span>;
    }
    return part;
  });
}

function renderBlock(block: KriteriaBlock, idx: number) {
  switch (block.type) {
    case 'p':
      return <p key={idx} className="mb-4">{renderTextWithBold(block.text || '')}</p>;
    case 'p-bold':
      return <p key={idx} className="mb-4 font-bold">{block.text}</p>;
    case 'small':
      return <p key={idx} className="text-[#003B33]/80 text-sm">{block.text}</p>;
    case 'list':
      return (
        <ul key={idx} className="list-disc pl-5 space-y-1 font-bold">
          {block.items?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    default:
      return null;
  }
}

let Kriteria = function () {
  const { slug } = useParams<{ slug: string }>();
  const currentSlug = slug || 'jam-tangan';
  const activeCards = getKriteria(currentSlug);

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
            fontFamily: 'Inter',
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
              className="w-full xl:max-w-[35.75rem] min-h-[20.6875rem] rounded-2xl border border-[#D9E5E3] bg-white p-5 md:p-7 flex flex-col"
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

              <div className="w-full xl:max-w-[31.75rem] min-h-[12.9375rem] text-[#003B33] text-sm md:text-base leading-relaxed">
                {item.content.map((block, i) => renderBlock(block, i))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Kriteria }
