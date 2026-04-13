import { SidePost } from "./SidePost";

let MainPost = function () {
    return (            <div className="grid grid-cols-12 gap-12">
                <div className="col-span-8">
                    <div className="relative flex items-center mb-4">
                        <a href="/artikel" className="absolute left-0 group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#008774] transition-colors">
                            <i className="fas fa-arrow-left transform group-hover:-translate-x-1 transition-transform duration-300"></i>
                            <span>Kembali</span>
                        </a>
                        <div className="w-full flex justify-center">
                            <span className="border border-gray-400 text-xs px-4 py-1 text-gray-700">Edukasi</span>
                        </div>
                    </div>

                    <h1 className="text-3xl text-center font-bold mb-3 leading-snug text-black">Lorem Ipsum is simply dummy text of the printing</h1>
                    
                    <div className="flex justify-center items-center gap-4 text-xs text-gray-500 mb-6">
                        <span className="flex items-center gap-1">
                            <i className="far fa-clock"></i> 23 Mei 2024
                        </span>
                        <span className="flex items-center gap-1">
                            <i className="far fa-user"></i> Penulis: Admin
                        </span>
                    </div>

                    <div className="w-full h-[350px] rounded-xl mb-6 overflow-hidden">
                        <img src="https://picsum.photos/id/445/600/400" alt="Minimalist Architecture" className="w-full h-full object-cover" />
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <h2 className="text-lg font-bold mb-3">Lorem Ipsum is simply dummy text</h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <h2 className="text-lg font-bold mb-3">Lorem Ipsum is simply dummy text</h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>                
                <SidePost />
            </div>);
}

export {MainPost}