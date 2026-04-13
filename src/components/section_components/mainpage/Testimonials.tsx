import React, { useRef, useState } from "react";
import "./style/marquee.css"

const Testimonials = function () {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const reviews = [
    {
      name: "Anonim User",
      text: "Prosesnya cepat dan transparan. Saya gadaikan jam tangan mewah, valuasinya sangat profesional dan sesuai ekpektasi. Sangat recommended.",
      stars: 5,
      isDark: false
    },
    {
      name: "Anonim User",
      text: "Pelayanan sangat ramah dan sangat membantu. Privasi benar-benar terjaga 100%. Terima kasih PUI atas solusinya.",
      stars: 5,
      isDark: true
    },
    {
      name: "Anonim User",
      text: "Tempat gadai aset mewah terbaik di Jakarta. Tim appraisal sangat ahli dan detail. Proses pencairan dana sangat cepat.",
      stars: 5,
      isDark: true
    }
  ];
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="testimonial-section py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="google-badge flex items-center gap-2 text-[#4D4D4D] mb-4">
          <div className="google-g w-6">
            <img src="/assets/img/24ab7a440ef6f6b86af438c9c31494764e08e757.png" alt="Google" />
          </div>
          <span className="text-yellow-500 text-xl">★</span>
          <span className="font-bold text-base mt-[1px]">5/5 Trust Rating (87+ Review)</span>
        </div>
        <h2 className="text-3xl font-extrabold text-[#4D4D4D] mb-10 leading-tight">
          Apa kata pelanggan yang telah<br />menggunakan layanan PUI
        </h2>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="testimonial-marquee"
      >
        <div className="testimonial-track flex gap-6 px-4">
          {duplicatedReviews.map((review, i) => (
            <div
              key={i}
              className={`review-card w-[350px] md:w-[400px] shrink-0 p-6 rounded-2xl border border-gray-100 shadow-sm ${review.isDark ? 'bg-gray-50' : 'bg-white'}`}
            >
              <div className="flex items-center mb-3">
                <div>
                  <p className={`text-base font-bold ${review.isDark ? 'text-gray-900' : 'text-[#4D4D4D]'}`}>
                    {review.name}
                  </p>
                  <div className="text-yellow-500">{"★".repeat(review.stars)}</div>
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