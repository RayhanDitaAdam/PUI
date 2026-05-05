import { useParams } from "react-router-dom";
import { SidePost } from "./SidePost";
import { articles } from "../../../../data/articles";
import { FaArrowLeft, FaRegClock, FaRegUser } from "react-icons/fa6";

let MainPost = function () {
    const { slug } = useParams<{ slug: string }>();
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <div className="px-4 lg:py-6 max-w-7xl mx-auto text-center">
                <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
                <a href="/artikel" className="text-[#006658] hover:underline mt-4 inline-block">Kembali ke daftar artikel</a>
            </div>
        );
    }

    return (
        <div className="px-4 lg:py-6 max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-2">
                    <div className="mb-4">
                        <a href="/artikel" className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#006658] transition-all mb-4">
                            <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform duration-300" />
                            <span>Kembali</span>
                        </a>
                        <div className="flex justify-center mb-4">
                            <span className="border border-gray-400 text-xs px-4 py-1 text-gray-700">{article.category}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-[1.15] text-gray-900 tracking-tight">{article.title}</h1>
                    
                    <div className="flex flex-wrap items-center gap-5 text-[13px] font-medium text-gray-400 mb-8 border-b border-gray-100 pb-6">
                        <span className="flex items-center gap-1.5">
                            <FaRegClock className="text-[#006658]" /> {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FaRegUser className="text-[#006658]" /> Penulis: {article.author}
                        </span>
                    </div>

                    <div className="w-full lg:h-[420px] rounded-xl mb-6 overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    </div>

                    <div 
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: article.content }} 
                    />
                </div>
                <div className="hidden lg:block lg:col-span-1">
                    <SidePost />
                </div>
            </div>

            <div className="lg:hidden">
                <SidePost />
            </div>
        </div>
    );
}

export {MainPost}