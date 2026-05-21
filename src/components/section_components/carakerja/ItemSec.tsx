import { getPageContent } from '../../../data/content'

const iconList = [
  '/assets/img/produk/award_9324188 1.svg',
  '/assets/img/produk/right_10025592 1.svg',
  '/assets/img/produk/Capa_1.svg',
  '/assets/img/produk/files_2829912 1.svg',
]

let ItemSec = function () {
  const c = getPageContent('cara-kerja')
  const badge = c.kriteriaBadge || 'Kriteria'
  const title = c.kriteriaTitle || 'Kriteria Barang Diterima'
  const list = c.kriteriaList || [
    {
      title: 'Brand',
      content: 'Kami menerima gadai jam tangan otentik dari merek prestisius dunia, di antaranya:\nRolex, Patek Philippe, Audemars Piguet, Vacheron Constantin, A. Lange & Söhne, Richard Mille, Hublot, Omega, Cartier, IWC Schaffhausen, Breitling\n*Brand prestisius lain di luar daftar ini juga dapat dikonsultasikan dengan tim ahli kami.',
    },
    {
      title: 'Keaslian',
      content: 'Jam tangan harus asli. Kami tidak menerima replika, "superclone", atau jam dengan komponen tidak orisinal. Verifikasi otentisitas dilakukan oleh tim ahli kami.',
    },
    {
      title: 'Kondisi',
      content: 'Jam dalam kondisi berfungsi normal. Kondisi fisik (gores, hairline, dent) tidak menggugurkan eligibility namun memengaruhi nilai taksiran.',
    },
    {
      title: 'Kelengkapan Dokumen',
      content: 'Tidak wajib, namun secara signifikan meningkatkan nilai taksiran:\n• Box asli\n• Certificate of Authenticity\n• Booklet & invoice pembelian\n• Service history dari authorized service center',
    },
  ]

  return (
    <div className="w-full py-12 md:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-[#003B33] text-sm md:text-base font-semibold text-left mb-2">{badge}</p>
        <h2 className="text-left w-full max-w-[31.25rem] mb-8 md:mb-10" style={{ color: '#003B33', fontFamily: 'Inter', fontSize: '2.3125rem', fontWeight: 800, lineHeight: '130%' }}>{title}</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-6 justify-items-start">
          {list.map((item, i) => (
            <article key={i} className="w-full xl:max-w-[35.75rem] min-h-[20.6875rem] rounded-2xl border border-[#D9E5E3] bg-white p-5 md:p-7 flex flex-col">
              <div className="flex w-full max-w-[17.5625rem] items-center gap-4 mb-5">
                <img alt={item.title} className="w-10 h-10 object-contain shrink-0" loading="lazy" src={iconList[i] || iconList[0]} />
                <h3 className="text-[#003B33] text-lg font-bold">{item.title}</h3>
              </div>
              <div className="w-full xl:max-w-[31.75rem] min-h-[12.9375rem] text-[#003B33] text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ItemSec }
