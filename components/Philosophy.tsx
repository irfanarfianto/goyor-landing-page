"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const Philosophy = () => {
    const { t } = useLanguage();

    return (
        <section id="philosophy" className="relative w-full py-24 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* 1. Philosophical Headline */}
                <div className="text-center mb-24 max-w-6xl mx-auto">
                    <div className="inline-block border-b border-gray-300 pb-1 mb-6">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                            {t.philosophy.subtitle}
                        </p>
                    </div>

                    <h2 className="flex flex-col items-center justify-center font-sans uppercase leading-[1.1] tracking-tight text-center">
                        <span className="text-3xl md:text-5xl lg:text-6xl font-medium text-black">
                            {t.philosophy.headline.part1}
                        </span>

                        <span className="text-3xl md:text-5xl lg:text-6xl font-medium text-gray-400 my-1 md:my-2">
                            {t.philosophy.headline.part2}
                        </span>

                        <span className="text-3xl md:text-5xl lg:text-6xl font-medium text-black max-w-5xl text-balance">
                            {t.philosophy.headline.part3} {t.philosophy.headline.part4}
                        </span>
                    </h2>
                </div>

                {/* 2. The Trinity Grid (Bento Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px] mb-20">

                    {/* LEFT BLOCK: Hablum Minallah (The Lines) */}
                    {/* Represents Vertical & Horizontal connection */}
                    <div className="lg:col-span-5 relative group border border-gray-200 overflow-hidden bg-white rounded-xl">
                        <Image
                            src="https://placehold.co/600x900/111/white?text=Geometris+|+Garis"
                            alt="Geometric Lines"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/95 backdrop-blur-md border-t border-gray-100 transform translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">{t.philosophy.bento.lines.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {t.philosophy.bento.lines.description}
                            </p>
                        </div>
                        {/* Overlay Label */}
                        <div className="absolute top-6 left-6 bg-white/80 backdrop-blur border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                            {t.philosophy.bento.lines.tag}
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-7 grid grid-rows-2 gap-6">

                        {/* TOP RIGHT: Nature (Flora) */}
                        <div className="relative border border-gray-200 overflow-hidden group rounded-xl">
                            <Image
                                src="https://placehold.co/800x400/2a2a2a/white?text=Flora+|+Kembangan"
                                alt="Floral Motifs"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                unoptimized
                            />
                            <div className="absolute top-6 right-6 bg-white/80 backdrop-blur border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-black rounded-full shadow-sm">
                                {t.philosophy.bento.nature.tag}
                            </div>
                            <div className="absolute bottom-6 left-6 max-w-xs text-white drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-sm font-medium bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10">
                                    {t.philosophy.bento.nature.description}
                                </p>
                            </div>
                        </div>

                        {/* BOTTOM RIGHT: The Blakasuta Character (Text Focus) */}
                        <div className="relative border border-gray-200 bg-black p-10 flex flex-col justify-center items-start text-white group overflow-hidden rounded-xl">
                            {/* Abstract decorative line */}
                            <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-white/10 -mt-4 -mr-4 transition-all duration-700 group-hover:w-full group-hover:h-full group-hover:opacity-10"></div>

                            <h3 className="text-3xl md:text-5xl font-sans font-medium mb-6 relative z-10">
                                {t.philosophy.card.title}
                            </h3>
                            <div className="w-12 h-0.5 bg-white mb-6 transition-all duration-500 group-hover:w-24"></div>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-lg relative z-10 font-light">
                                {t.philosophy.card.description}
                            </p>

                            <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                {t.philosophy.bento.character.tag}
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. Footer Statement */}
                <div className="text-center pt-8 border-t border-gray-100">
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto italic">
                        &ldquo;{t.philosophy.footer.text}&rdquo;
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Philosophy;
