let SidePost = function () {
    return (
        <div className="pt-6 lg:ml-10 lg:pt-20 border-t lg:border-t-0 border-gray-200">
            <h3 className="font-bold text-base mb-4 pb-2">Pos Artikel Terbaru</h3>

            <div className="pb-5 border-b border-gray-100">
                <h4 className="font-bold text-sm mb-1">Lorem Ipsum is Simple</h4>
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                <a href="/artikel/lorem-ipsum-is-simple" className="group text-xs text-[#008774] flex items-center gap-1 font-semibold">
                    Read More <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
            </div>

            <div className="pb-5 border-b border-gray-100">
                <h4 className="font-bold text-sm mb-1">Lorem Ipsum is Simple</h4>
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                <a href="/artikel/lorem-ipsum-is-simple" className="group text-xs text-[#008774] flex items-center gap-1 font-semibold">
                    Read More <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
            </div>

            <div className="pb-5 border-b border-gray-100">
                <h4 className="font-bold text-sm mb-1">Lorem Ipsum is Simple</h4>
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                <a href="/artikel/lorem-ipsum-is-simple" className="group text-xs text-[#008774] flex items-center gap-1 font-semibold">
                    Read More <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
            </div>

            <div className="mt-6 mb-6">
                <h3 className="font-bold text-base mb-4">Penulis</h3>
                <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center gap-3">
                    <img width="160" src="/assets/logo-pui.png" alt="PUI Logo" />
                </div>
                <h4 className="font-bold text-sm mt-3">Tim PUI</h4>
                <p className="text-xs text-gray-500">Admin</p>
            </div>

            <div className="mb-6">
                <h3 className="font-bold text-sm mb-3">Ikuti Media Sosial Kami</h3>
                <div className="flex gap-4 text-[#008774] text-lg">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    );
}
export {SidePost}