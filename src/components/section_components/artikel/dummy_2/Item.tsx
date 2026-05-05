import { articles } from "../../../../data/articles";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";

let Item = function () {
    return (
        <div className="px-4 py-6 max-w-7xl mx-auto">
            <section>
                <h2 className="text-xl font-bold mb-4">Rekomendasi Artikel</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                    {articles.slice(0, 3).map((article) => (
                        <div key={article.id}>
                            <div className="relative mb-3">
                                <div className="w-full h-[200px] rounded-xl overflow-hidden">
                                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                                </div>
                                <span className="absolute top-3 right-3 bg-[#006658] text-white text-xs px-3 py-1 rounded-full">{article.category}</span>
                            </div>
                            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                                <FaRegClock className="w-3 h-3 text-[#006658]" /> {article.date}
                            </div>
                            <h4 className="font-bold text-sm mb-1">{article.title}</h4>
                            <p className="text-xs text-gray-500 mb-2 leading-relaxed">{article.excerpt}</p>
                            <a aria-label="Read full article" href={`/artikel/${article.slug}`} className="group text-xs text-[#006658] flex items-center gap-1 font-bold">
                                Read More <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    ))}

                </div>
            </section>
        </div>
    );
}
export { Item }