import React, { useEffect, useState, useRef } from "react";
import "./style/marquee.css"

const Testimonials = function () {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    let animationId: number;
    const scroll = () => {
      if (!isDragging && !isPaused && scrollRef.current) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth / 2;

        scrollPosRef.current += 0.8; // Scroll speed

        if (scrollPosRef.current >= maxScroll) {
          scrollPosRef.current = 0;
        }

        container.scrollLeft = scrollPosRef.current;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging, isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setTranslateX(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();

    const container = scrollRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    let newScroll = translateX - walk;

    const maxScroll = container.scrollWidth / 2;

    // Infinite Teleportation Logic
    if (newScroll < 0) {
      newScroll = maxScroll + newScroll;
      setStartX(e.pageX - container.offsetLeft);
      setTranslateX(newScroll);
    } else if (newScroll >= maxScroll) {
      newScroll = newScroll - maxScroll;
      setStartX(e.pageX - container.offsetLeft);
      setTranslateX(newScroll);
    }

    container.scrollLeft = newScroll;
    scrollPosRef.current = newScroll;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };
  const handleMouseEnter = () => setIsPaused(true);

  const reviews = [
    {
      name: "Anonim User",
      text: "Prosesnya cepat dan transparan. Saya gadaikan jam tangan mewah, valuasinya sangat profesional dan sesuai ekpektasi. Sangat recommended.",
      isDark: false
    },
    {
      name: "Anonim User",
      text: "Pelayanan sangat ramah dan sangat membantu. Privasi benar-benar terjaga 100%. Terima kasih PUI atas solusinya.",
      isDark: true
    },
    {
      name: "Anonim User",
      text: "Tempat gadai aset mewah terbaik di Jakarta. Tim appraisal sangat ahli dan detail. Proses pencairan dana sangat cepat.",
      isDark: true
    },
    {
      name: "Anonim User",
      text: "Gadai tas branded di PUI sangat mudah. Prosesnya jelas, tim-nya profesional, dan dana cair dalam hitungan jam. Pasti balik lagi.",
      isDark: false
    },
    {
      name: "Anonim User",
      text: "Saya sangat puas dengan layanan PUI. Perhiasan saya ditaksir dengan harga yang sangat fair dan disimpan dengan aman. Top service!",
      isDark: true
    },
    {
      name: "Anonim User",
      text: "Awalnya ragu, tapi setelah coba gadai emas di PUI, saya langsung percaya. Prosesnya transparan dan bunga sangat kompetitif.",
      isDark: false
    },
    {
      name: "Anonim User",
      text: "Pengalaman gadai kendaraan premium di PUI luar biasa. Semua ditangani dengan profesional dari awal hingga pencairan. Highly recommended!",
      isDark: true
    },
    {
      name: "Anonim User",
      text: "Sudah beberapa kali menitipkan aset premium saya di sini. Setiap kali saya tebus, kondisi barang tetap sempurna tanpa cacat sedikit pun. Integritas mereka dalam menjaga barang nasabah patut diacungi jempol.",
      isDark: false
    },
    {
      name: "Anonim User",
      text: "Petugasnya sopan-sopan dan sangat menguasai produk premium. Mereka nggak cuma asal terima barang, tapi bisa kasih edukasi juga soal nilai aset kita. Benar-benar layanan kelas atas.",
      isDark: true
    },
    {
      name: "Anonim User",
      text: "Tempatnya eksklusif dan nyaman banget, nggak kayak tempat gadai pada umumnya. Stafnya profesional dan sangat menjaga privasi kita. Berasa lagi konsultasi investasi daripada lagi gadai barang.",
      isDark: false
    },
    {
      name: "Anonim User",
      text: "Tempatnya nyaman dan stafnya sangat profesional. Mereka benar-benar paham cara menghargai barang mewah nasabah dengan objektif. Pelayanan kelas atas!",
      isDark: true
    },
    {
      name: "Anonim User",
      text: "Cari tempat gadai yang terpercaya itu sulit, tapi PUI Gadai membuktikan integritasnya. Barangnya diasuransikan dan dijaga di brankas khusus. Saya nggak khawatir sedikit pun.",
      isDark: false
    },
    {
      name: "Anonim User",
      text: "Pengalaman pertama gadai aset di sini dan puas banget. Prosesnya nggak pakai ribet, stafnya profesional, dan yang paling penting bunganya transparan banget. Rekomen buat yang butuh dana cepat.",
      isDark: true
    },
    {
      name: "Anonim User",
      text: "Tempatnya nyaman dan privasi benar-benar dijaga. Saya merasa tenang titip aset berharga di sini karena sistem keamanannya meyakinkan. Pas ditebus, kondisi barang tetap sempurna.",
      isDark: false
    },
    {
      name: "Anonim User",
      text: "Awalnya ragu, tapi setelah coba sendiri ternyata prosesnya semudah itu. Cuma butuh waktu sebentar sampai kesepakatan, dan dana langsung cair saat itu juga.",
      isDark: true
    },
    {
      name: "Anonim User",
      text: "Awalnya coba tanya-tanya lewat WhatsApp, responnya cepat dan ramah banget. Pas dateng ke lokasi, tempatnya emang nyaman dan transparan prosesnya. Dana cair nggak pakai lama.",
      isDark: false
    },
    {
      name: "Anonim User",
      text: "Nggak nyangka proses gadai barang mewah bisa se eksklusif ini. Stafnya sopan, tempatnya nyaman, dan yang paling penting mereka sangat menghargai nilai prestige barang kita.",
      isDark: true
    }
  ];
  const duplicatedReviews = [...reviews, ...reviews];

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section id="testimoni" className="testimonial-section py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="google-badge flex items-center gap-2 text-[#4D4D4D] mb-4">
          <span className="font-bold text-base mt-[1px]">Trust Rating (87+ Review)</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#4D4D4D] mb-10 leading-tight">
          Apa kata pelanggan yang telah<br />menggunakan layanan PUI
        </h2>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="testimonial-marquee"
      >
        <div className="testimonial-track flex gap-10 px-4">
          {duplicatedReviews.map((review, i) => (
            <div
              key={i}
              className={`review-card w-[350px] md:w-[400px] shrink-0 p-6 rounded-2xl border border-gray-100 shadow-[-4px_6px_18px_rgba(0,0,0,0.06)] bg-white`}
            >
              <div className="flex items-center mb-3">
                <div>
                  <p className={`text-base font-bold ${review.isDark ? 'text-gray-900' : 'text-[#4D4D4D]'}`}>
                    {review.name}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Testimonials };