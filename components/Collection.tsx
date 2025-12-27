"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Collection = () => {
    const { t } = useLanguage();

    // Map the tiers from translation object to an array for easy mapping
    const tiers = [
        {
            key: 'heritage',
            image: "https://placehold.co/400x600/2a2a2a/white?text=Heritage+Series",
            ...t.collection.tiers.heritage
        },
        {
            key: 'classic',
            image: "https://placehold.co/400x600/4a4a4a/white?text=Classic+Series",
            ...t.collection.tiers.classic
        },
        {
            key: 'modern',
            image: "https://placehold.co/400x600/6a6a6a/white?text=Modern+Series",
            ...t.collection.tiers.modern
        }
    ];

    return (
        <section id="collection" className="relative w-full py-24 bg-gray-50 text-black overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block border-b border-gray-300 pb-1 mb-6">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
                            {t.collection.subtitle}
                        </p>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-sans font-medium uppercase tracking-tight text-black mb-6">
                        {t.collection.title}
                    </h2>
                </div>

                {/* Collection Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tiers.map((tier, index) => (
                        <CardContainer key={tier.key} className="inter-var w-full h-full">
                            <CardBody className="bg-white relative group/card border-gray-100 w-full h-auto rounded-xl p-6 border hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-all duration-300 flex flex-col">

                                {/* 3D Image */}
                                <CardItem translateZ="50" className="w-full mb-6">
                                    <div className="relative h-[250px] w-full overflow-hidden rounded-xl group-hover/card:shadow-xl">
                                        <img
                                            src={tier.image}
                                            alt={tier.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                        {/* Price Tag Floating */}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-xs font-bold uppercase tracking-wide">
                                            {tier.price}
                                        </div>
                                    </div>
                                </CardItem>

                                {/* Content */}
                                <div className="flex flex-col flex-grow">
                                    <CardItem translateZ="30" className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                        {tier.subtitle}
                                    </CardItem>

                                    <CardItem translateZ="40" className="text-2xl font-sans font-medium mb-4 text-neutral-800">
                                        {tier.title}
                                    </CardItem>

                                    <CardItem as="p" translateZ="30" className="text-gray-500 text-sm leading-relaxed mb-6">
                                        {tier.description}
                                    </CardItem>

                                    {/* Features List */}
                                    <CardItem translateZ="20" className="w-full">
                                        <ul className="space-y-2 mb-8 border-t border-gray-100 pt-6">
                                            {tier.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-xs text-black font-medium tracking-wide">
                                                    <span className="mr-2 w-1.5 h-1.5 bg-black rounded-full"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardItem>

                                    {/* Action Button */}
                                    <div className="mt-auto">
                                        <CardItem translateZ="40" className="w-full">
                                            <button className="w-full py-4 bg-[#25D366] border border-[#25D366] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#128C7E] hover:border-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2 rounded-lg shadow-lg">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                </svg>
                                                {t.collection.cta}
                                            </button>
                                        </CardItem>
                                    </div>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Collection;
