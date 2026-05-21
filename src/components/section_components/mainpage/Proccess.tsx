import { getPageContent } from "../../../data/content";

let Proccess = function () {
  const content = getPageContent("mainpage");
  const sectionTitle = content.processSectionTitle || "How it works";
  const title = content.processTitle || "Proses Pencairan Cepat";
  const desc = content.processDesc || "Ubah aset berharga Anda menjadi likuiditas dengan proses yang cepat, aman, dan terpercaya. Kami memastikan pengalaman yang mudah dengan hasil maksimal serta ketenangan bagi Anda.";
  const steps = content.processSteps || [
    { title: "Konsultasi awal", desc: "Konsultasikan aset berharga Anda melalui tim profesional kami, baik secara langsung maupun layanan jemput. Kami memastikan proses awal yang cepat, nyaman, dan sepenuhnya privat.", icon: "/assets/img/8e1e5e9db68de8dec0f9170c46b26215695d80aa.webp" },
    { title: "Penaksir Profesional", desc: "Aset Anda akan melalui proses penilaian oleh ahli berpengalaman dengan standar tinggi untuk mendapatkan nilai optimal secara transparan dan akurat.", icon: "/assets/img/1c1766aaa851ad680797a36295bd9e74b589b531.webp" },
    { title: "Pencairan Instan", desc: "Setelah kesepakatan tercapai, dana akan dicairkan secara cepat dan aman, memberikan likuiditas instan sesuai kebutuhan Anda.", icon: "/assets/img/8e1e5e9db68de8dec0f9170c46b26215695d80aa.webp" },
  ];
  const linkText = content.processLinkText || "Pelajari Selengkapnya";
  const linkHref = content.processLinkHref || "/cara-kerja";

  return (
    <section
      id="alur"
      className="relative process-section py-12 md:py-28 lg:py-32 px-6 text-white overflow-hidden"
    >
      <img
        src="/assets/img/main/mobile.webp"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-[80%] object-cover object-top md:hidden"
        alt="Process Background Mobile"
      />
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black via-black to-transparent md:hidden" />
      <img
        src="/assets/img/main/desktop.webp"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-top hidden md:block"
        alt="Process Background Desktop"
      />
      

      <div className="relative max-w-4xl mx-auto mt-76 md:mt-[15rem] lg:mt-80 2xl:mt-[30rem] text-center z-10">

        <p className="text-sm md:text-[1.25rem] lg:text-2xl tracking-[0.18em] mb-2">{sectionTitle}</p>
        <h2 className="text-3xl md:text-[2.75rem] lg:text-7xl font-bold mb-4 leading-tight">
          {title}
        </h2>

        <p className="text-sm md:text-[0.9375rem] lg:text-base max-w-2xl mx-auto mb-16 opacity-90">
          {desc}
        </p>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center md:gap-10 mb-14">
          {steps.map((step: any, i: number) => (
            <div key={i} className="flex flex-col items-center md:w-[38%] lg:w-1/3 text-center group">
              <div className="flex justify-center mb-4">
                <img width="60" src={step.icon} alt="Icon" loading="lazy" className="md:w-[50px]" />
              </div>
              <h3 className="font-semibold text-lg md:text-[0.875rem] lg:text-base mb-2">{step.title}</h3>
              <p className="text-sm md:text-[0.75rem] lg:text-xs opacity-80 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <a href={linkHref} className="inline-block border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 mb-20">
          {linkText}
        </a>
      </div>
    </section>
  );
}

export { Proccess };