"use client";
import React, { useState, useEffect } from "react";

interface CarouselProps {
    images: string[];
    autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, autoPlayInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, autoPlayInterval);
        return () => clearInterval(timer);
    }, [images.length, autoPlayInterval]);

    return (
        <div
            className="w-full aspect-[4/3] md:aspect-[16/7] grid grid-cols-4 gap-2 md:gap-6 overflow-visible relative text-white"
            style={{ perspective: '1000px' }} // Perspective Container
        >
            {/* Render 4 Slots */}
            {[0, 1, 2, 3].map((slotIndex) => {
                const imageIndex = (currentIndex + slotIndex) % images.length;
                const prevImageIndex = (currentIndex - 1 + slotIndex + images.length) % images.length;

                const src = images[imageIndex];
                const prevSrc = images[prevImageIndex];

                // 3D Curve Logic "Clean Gaps"
                // Menghilangkan forced overlap agar gap grid (gap-2) terlihat konsisten.

                let transformStyle = '';
                const origin = slotIndex < 2 ? 'right center' : 'left center';

                switch (slotIndex) {
                    case 0: // Kiri Luar - Gap lebar natural
                        transformStyle = 'rotateY(12deg) scale(1.025)';
                        break;
                    case 1: // Kiri Dalam
                        transformStyle = 'rotateY(4deg)';
                        break;
                    case 2: // Kanan Dalam
                        transformStyle = 'rotateY(-4deg)';
                        break;
                    case 3: // Kanan Luar - Gap lebar natural
                        transformStyle = 'rotateY(-12deg) scale(1.025)';
                        break;
                }

                return (
                    <div
                        key={slotIndex}
                        className="relative w-full h-full bg-gray-900 shadow-2xl transition-all duration-500 overflow-hidden"
                        style={{
                            transform: transformStyle,
                            transformOrigin: origin,
                            zIndex: 10,
                            backfaceVisibility: 'hidden',
                        }}
                    >
                        {/* Layer 1: Gambar Sebelumnya (Background) - Statis */}
                        <img
                            src={prevSrc}
                            alt={`Prev Slide ${prevImageIndex}`}
                            className="absolute inset-0 w-full h-full object-cover block"
                            style={{
                                transform: 'scale(1.0)'
                            }}
                        />

                        {/* Layer 2: Gambar Baru (Foreground) - Sliding In */}
                        {/* Wrapper ini akan re-mount setiap imageIndex berubah, memicu animasi slide */}
                        <div key={imageIndex} className="absolute inset-0 w-full h-full animate-slide-left z-20 overflow-hidden">
                            <img
                                src={src}
                                alt={`Current Slide ${imageIndex}`}
                                className="w-full h-full object-cover block"
                                style={{
                                    transform: 'scale(1.0)'
                                }}
                            />
                            {/* Lighting Effect menempel pada foreground image agar ikut bergerak */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: `linear-gradient(to ${slotIndex < 2 ? 'right' : 'left'}, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)`
                                }}
                            ></div>
                        </div>

                        {/* Note: Lighting effect lama dihapus dari root div agar tidak double/aneh saat transisi */}
                    </div>
                );
            })}
            <style jsx>{`
                @keyframes slideLeft {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                .animate-slide-left {
                    animation: slideLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
            `}</style>
        </div>
    );
};

export default Carousel;
