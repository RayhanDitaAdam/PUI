import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import { articles } from "../../../../data/articles";

let MainPost = function () {
    const mainArticle = articles[0];
    const sideArticles = articles.slice(1, 3);

    return (
        <div className="w-full">
            <section className="text-center mb-12 md:mb-20 px-4">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Artikel Kami</h1>
                <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                    Eksplorasi insight eksklusif seputar pengelolaan aset bernilai tinggi, strategi likuidasi, dan tren finansial terkini.
                </p>
            </section>
            
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 px-4 md:px-0 md:items-stretch">
                
                {mainArticle && (
                    <div className="md:col-span-8 h-[400px] md:h-[610px] relative rounded-3xl md:rounded-[32px] overflow-hidden group shadow-lg">
                        <img 
                            src={mainArticle.image} 
                            alt={mainArticle.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        
                        <span className="absolute top-4 right-4 bg-[#00A294] text-white text-xs px-4 py-1.5 rounded-full font-medium z-10">
                            {mainArticle.category}
                        </span>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                            <div className="text-xs text-gray-300 flex items-center gap-2 mb-3 font-medium">
                                <FaRegClock className="w-3 h-3 text-[#00A294]" /> {mainArticle.date}
                            </div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-[#00A294] transition-colors line-clamp-2 leading-tight">
                                {mainArticle.title}
                            </h2>
                            <p className="text-sm md:text-gray-300 mb-5 max-w-xl line-clamp-2 text-gray-200">
                                {mainArticle.excerpt}
                            </p>
                            <a aria-label="Read full article" href={`/artikel/${mainArticle.slug}`} className="flex items-center gap-2 text-[#00A294] font-bold text-sm group/btn uppercase tracking-wider">
                                Read More 
                                <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                )}

                <div className="md:col-span-4 flex flex-col gap-6">
                    {sideArticles.map(article => (
                        <div key={article.id} className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all">
                            <div className="w-full h-40 md:h-44 flex-shrink-0 overflow-hidden">
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                            <div className="p-4">
                                <span className="text-[#00A294] text-[10px] md:text-xs font-bold uppercase mb-1 block">{article.category}</span>
                                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 group-hover:text-[#00A294] transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <a aria-label="Read full article" href={`/artikel/${article.slug}`} className="flex items-center gap-1.5 text-[#00A294] font-bold text-xs group/btn uppercase tracking-wider">
                                    Read More <FaArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export {MainPost};