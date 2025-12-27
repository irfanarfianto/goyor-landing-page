"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Testimonials = () => {
    const { t } = useLanguage();

    return (
        <section id="testimonials" className="relative w-full py-24 bg-gray-50 text-black overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block border-b border-gray-300 pb-1 mb-6">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
                            {t.testimonials.subtitle}
                        </p>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-sans font-medium uppercase tracking-tight text-black mb-6">
                        {t.testimonials.title}
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
                    <div className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                            {t.testimonials.stats.export.value}
                        </div>
                        <p className="text-sm text-gray-600 uppercase tracking-wide">
                            {t.testimonials.stats.export.label}
                        </p>
                    </div>
                    <div className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                            {t.testimonials.stats.customers.value}
                        </div>
                        <p className="text-sm text-gray-600 uppercase tracking-wide">
                            {t.testimonials.stats.customers.label}
                        </p>
                    </div>
                    <div className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                            {t.testimonials.stats.artisans.value}
                        </div>
                        <p className="text-sm text-gray-600 uppercase tracking-wide">
                            {t.testimonials.stats.artisans.label}
                        </p>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {t.testimonials.items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-6xl text-gray-100 group-hover:text-gray-200 transition-colors">
                                &rdquo;
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                                    &ldquo;{item.text}&rdquo;
                                </p>

                                {/* Author Info */}
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="font-bold text-black text-sm mb-1">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500 mb-1">
                                        {item.role}
                                    </p>
                                    <p className="text-xs text-gray-400 flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Proof Badge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 px-6 py-3 rounded-full">
                        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold text-emerald-800">
                            {t.testimonials.badge}
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
