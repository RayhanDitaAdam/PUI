import { articles } from "../../../../data/articles";
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

let SidePost = function () {
    const latestArticles = articles.slice(0, 3);

    return (
        <div className="pt-6 lg:ml-10 lg:pt-20 border-t lg:border-t-0 border-gray-200">
            <h3 className="font-bold text-base mb-4 pb-2">Pos Artikel Terbaru</h3>

            {latestArticles.map(article => (
                <div key={article.id} className="pb-5 border-b border-gray-100 mb-5">
                    <h4 className="font-bold text-sm mb-1">{article.title}</h4>
                    <p className="text-xs text-gray-500 mb-2 leading-relaxed line-clamp-2">{article.excerpt}</p>
                    <a aria-label="Read full article" href={`/artikel/${article.slug}`} className="group text-xs text-[#006658] flex items-center gap-1 font-bold">
                        Read More <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>
            ))}

            <div className="mt-6 mb-6">
                <h3 className="font-bold text-base mb-4">Penulis</h3>
                <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center gap-3">
                    <img width="160" src="/assets/img/logo-pui.webp" alt="PUI Logo" />
                </div>
                <h4 className="font-bold text-sm mt-3">Tim PUI</h4>
                <p className="text-xs text-gray-500">Admin</p>
            </div>

            <div className="mb-6">
                <h3 className="font-bold text-sm mb-3">Ikuti Media Sosial Kami</h3>
                <div className="flex gap-4 text-[#006658]">
                    <a href="#" className="hover:text-[#004d42] transition-colors"><FaFacebookF className="text-base" /></a>
                    <a href="#" className="hover:text-[#004d42] transition-colors"><FaInstagram className="text-base" /></a>
                    <a href="#" className="hover:text-[#004d42] transition-colors"><FaLinkedinIn className="text-base" /></a>
                </div>
            </div>
        </div>
    );
}
export { SidePost }