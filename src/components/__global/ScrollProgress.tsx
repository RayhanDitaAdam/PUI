import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrollProgress: React.FC = () => {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!progressRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(progressRef.current, 
                { scaleX: 0 },
                {
                    scaleX: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.3,
                        invalidateOnRefresh: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="absolute bottom-0 left-0 w-full h-[4px] pointer-events-none overflow-hidden z-[9999]">
            <div 
                ref={progressRef}
                className="w-full h-full bg-[#C49A6C] origin-left shadow-[0_0_15px_rgba(196,154,108,0.9)]"
            />
        </div>
    );
};

export default ScrollProgress;
