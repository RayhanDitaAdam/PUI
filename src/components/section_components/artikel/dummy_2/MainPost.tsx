import { useParams } from "react-router-dom";
import { SidePost } from "./SidePost";
import { articles } from "../../../../data/articles";

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
                        <a href="/artikel" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#006658] transition-colors mb-4">
                            <i className="fas fa-arrow-left transform group-hover:-translate-x-1 transition-transform duration-300"></i>
                            <span>Kembali</span>
                        </a>
                        <div className="flex justify-center mb-4">
                            <span className="border border-gray-400 text-xs px-4 py-1 text-gray-700">{article.category}</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold mb-3 leading-tight text-black">{article.title}</h1>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                            <i className="far fa-clock"></i> {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <i className="far fa-user"></i> Penulis: {article.author}
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