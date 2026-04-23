import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatingWA: React.FC = () => {
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const isHiddenPath = location.pathname.startsWith('/artikel');

    const popupRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isHiddenPath) return;

        const handleScroll = () => {
            const isMobile = window.innerWidth < 768;
            const threshold = isMobile ? 400 : 200;

            if (window.scrollY > threshold) {
                setShowPopup(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check in case they are already scrolled
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHiddenPath]);


    const handleClose = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMinimized(true);
    };

    const handleOpen = () => {
        setIsMinimized(false);
    };

    if (isHiddenPath) return null;

    return (
        <>
            <div
                ref={popupRef}
                className={`fixed bottom-6 right-6 z-50 prisila-popup transition-all duration-200 transform ${(!showPopup || isMinimized) ? 'opacity-0 scale-90 translate-y-4 pointer-events-none' : 'opacity-100 scale-100 translate-y-0'}`}
            >
                <a
                    href="https://wa.me/6282277777911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-[190px] md:w-[230px] h-[85px] md:h-[100px] bg-[#D9D9D9] rounded-[12px] flex items-center px-3 md:px-4 shadow-xl cursor-pointer block group overflow-visible"
                >
                    <button
                        onClick={handleClose}
                        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-[100] text-[#494949] hover:text-black transition-all p-1 bg-[#D9D9D9] shadow-md hover:bg-[#c0c0c0] rounded-full border border-white/40"
                        aria-label="Close"
                    >
                        <FaTimes size={10} />
                    </button>
                    <div className="z-10 w-[60%] h-full flex flex-col justify-center">
                        <p className="text-[#334155] text-[8px] md:text-[10px] font-semibold mb-0.5 md:mb-1 leading-none">Selamat Datang</p>
                        <h1 className="text-black text-[10px] sm:text-[11px] md:text-[14px] font-extrabold leading-tight my-0.5 md:my-1">
                            Ada yang Prisila<br />bisa bantu?
                        </h1>
                        <div className="text-[7.5px] sm:text-[9px] md:text-[11px] flex items-center text-[#494949] group-hover:text-[#003D35] transition-all leading-none mt-0.5 md:mt-1">
                            Chat dengan Prisila <span className="ml-1">→</span>
                        </div>

                        <div className="mt-1.5 md:mt-2 flex items-center">
                            <div className="relative flex items-center justify-center mr-1.5 w-[5px] md:w-[6px] h-[5px] md:h-[6px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E6800] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-[3px] md:h-[4px] w-[3px] md:w-[4px] bg-[#0E6800]"></span>
                            </div>
                            <span className="text-gray-700 text-[8px] sm:text-[10px] md:text-[12px] font-medium leading-none">Online</span>
                        </div>
                    </div>

                    {/* Character image */}
                    <div
                        className="absolute right-0 bottom-0 w-[80px] sm:w-[90px] h-full pointer-events-none"
                        style={{ clipPath: 'inset(-999px 0px 0px 0px)' }}
                    >
                        <div className="relative w-full h-full">
                            {!isImageLoaded && (
                                <div className="absolute bottom-2 right-2 w-[80%] h-[80%] bg-[#b0b0b0]/30 animate-pulse rounded-br-[12px] rounded-tl-[12px]"></div>
                            )}
                            <img
                                src="/assets/img/40d826a68f7b2fe6a3460b18c5d0de6a1118d609.webp"
                                alt="Prisila"
                                onLoad={() => setIsImageLoaded(true)}
                                className={`absolute bottom-0 left-1/2 w-[110%] max-w-none transition-all duration-500 group-hover:scale-105 ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                style={{ transform: 'translateX(-55%) translateY(35%)' }}
                            />
                        </div>
                    </div>
                </a>
            </div>

            {showPopup && isMinimized && (
                <div className="fixed bottom-6 right-6 z-[100] pointer-events-auto">
                    <button
                        onClick={handleOpen}
                        className="w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-whatsapp"
                        aria-label="Tanya Prisila via WhatsApp"
                    >
                        <FaWhatsapp className="text-white text-3xl" />
                    </button>
                </div>
            )}
        </>
    );
};

export default FloatingWA;
