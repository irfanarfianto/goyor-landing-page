"use client";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { useLanguage } from "../context/LanguageContext";

const heroImages = [
    "https://placehold.co/300x700/1a1a1a/white?text=Kain+Tenun+1",
    "https://placehold.co/300x700/2b2b2b/white?text=Motif+Klasik+2",
    "https://placehold.co/300x700/3c3c3c/white?text=Detail+Benang+3",
    "https://placehold.co/300x700/4d4d4d/white?text=Alat+Tenun+4",
    "https://placehold.co/300x700/5e5e5e/white?text=Pewarna+Alami+5",
    "https://placehold.co/300x700/6f6f6f/white?text=Proses+Celup+6",
    "https://placehold.co/300x700/808080/white?text=Tenun+ATBM+7",
    "https://placehold.co/300x700/919191/white?text=Gallery+Showcase+8",
];

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative w-full pt-32 md:pt-40 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center">

                {/* Top Address Icon */}
                <a
                    href="https://maps.app.goo.gl/JZzDFfMJp6NCbFcW6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mb-8 opacity-0 animate-fade-in-up group cursor-pointer hover:text-black transition-colors duration-300"
                    style={{ animationDelay: '0.1s' }}
                >
                    <span className="text-xl transform group-hover:scale-110 transition-transform duration-300 origin-bottom">📍</span>
                    <span className="text-sm font-medium text-gray-800 tracking-wide uppercase group-hover:text-black">
                        {t.hero.address}
                    </span>
                    {/* Arrow Slide In */}
                    <svg
                        className="w-4 h-4 text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>

                {/* Headline */}
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-sans font-medium text-center uppercase leading-[1.1] tracking-tight max-w-5xl text-black mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {t.hero.headline.part1} <br className="hidden md:block" />
                    <span className="text-gray-500">
                        {/* Tooltip Unified */}
                        <span className="relative group inline-block cursor-help border-b border-gray-400 border-dashed hover:border-black transition-colors">
                            {t.hero.tooltip.title}
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 p-4 bg-gray-900/90 backdrop-blur-md text-white text-xs normal-case font-sans tracking-normal rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 text-left shadow-2xl border border-white/10 pointer-events-none">
                                <strong className="block mb-1 text-white text-sm">{t.hero.tooltip.heading}</strong>
                                <span className="text-gray-300 leading-relaxed block">
                                    {t.hero.tooltip.description}
                                </span>
                                {/* Arrow */}
                                <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900/90"></span>
                            </span>
                        </span>
                    </span> {t.hero.headline.part2} <br className="hidden md:block" />
                    {t.hero.headline.part3}
                </h1>

                {/* MODULAR CAROUSEL */}
                <div className="w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <Carousel images={heroImages} autoPlayInterval={3000} />
                </div>

                <p className="mt-8 text-gray-500 text-sm max-w-xl text-center leading-relaxed">
                    {t.hero.description}
                </p>

            </div>

            <style jsx global>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </section>
    );
};

export default Hero;
