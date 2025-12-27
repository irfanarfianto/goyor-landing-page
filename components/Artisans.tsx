"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const Artisans = () => {
    const { t } = useLanguage();

    const steps = [
        {
            key: 'spinning',
            image: "https://placehold.co/600x400/2a2a2a/white?text=Yarn+Spinning",
            ...t.artisans.steps.spinning
        },
        {
            key: 'tying',
            image: "https://placehold.co/600x400/4a4a4a/white?text=Ikat+Tying",
            ...t.artisans.steps.tying
        },
        {
            key: 'weaving',
            image: "https://placehold.co/600x400/6a6a6a/white?text=ATBM+Weaving",
            ...t.artisans.steps.weaving
        }
    ];

    return (
        <section id="artisans" className="relative w-full py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <div className="inline-block border-b border-gray-700 pb-1 mb-6">
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                                {t.artisans.subtitle}
                            </p>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-sans font-medium uppercase tracking-tight text-white leading-none">
                            {t.artisans.title}
                        </h2>
                    </div>

                    <div className="max-w-md">
                        <p className="text-gray-400 text-sm leading-relaxed text-balance">
                            {t.artisans.description}
                        </p>
                    </div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {steps.map((step, index) => (
                        <div
                            key={step.key}
                            className={`group relative h-[500px] border-r border-gray-800 ${index === 0 ? 'border-l' : ''} overflow-hidden`}
                        >
                            {/* Background Image with Hover Zoom */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-6xl font-sans font-bold text-white/10 absolute top-0 right-8 -translate-y-full group-hover:text-white/20 transition-colors">
                                    0{index + 1}
                                </span>

                                <h3 className="text-2xl font-bold uppercase tracking-wide mb-3 text-white group-hover:text-emerald-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Vertical Decor Line */}
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gray-800/50"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Artisans;
