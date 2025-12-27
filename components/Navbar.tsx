"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            // 1. Handle Navbar resizing
            setIsScrolled(window.scrollY > 50);

            // 2. Handle Active Section Detection
            const sections = ['home', 'philosophy', 'collection', 'artisans'];

            // Find the active section based on scroll position
            // We consider a section active if it's in the viewport/near the top
            let current = 'home';

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is primarily in view (top is overlapping with top half of screen or it covers the screen)
                    // A simple heuristic: if the top of the section is within the top 1/3 of the screen or above it, 
                    // AND the bottom is below the navbar height.
                    if (rect.top <= 150 && rect.bottom >= 100) {
                        current = sectionId;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        // Trigger once to set initial state
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    };

    const isDarkSection = activeSection === 'artisans';

    const getLinkClass = (section: string) => {
        const isActive = activeSection === section;
        if (isDarkSection) {
            return isActive
                ? "bg-white text-black px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors uppercase"
                : "text-gray-300 hover:bg-white/10 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors uppercase";
        }
        return isActive
            ? "bg-black text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors uppercase"
            : "text-gray-600 hover:bg-gray-100 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors uppercase";
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-500 ${isScrolled ? "py-4" : "px-8 py-6 bg-white/0"
                }`}
        >
            {/* Outer Logo (Fades out & Moves to Center) */}
            <div
                className={`absolute left-8 flex flex-col leading-none font-bold text-lg tracking-tight transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled ? "opacity-0 translate-x-32 scale-75 pointer-events-none" : "opacity-100 translate-x-0 scale-100"
                    } ${isDarkSection && !isScrolled ? "text-white" : "text-black"}`}
            >
                <span>SARUNG</span>
                <span>GOYOR</span>
            </div>

            {/* Centered Pill Menu (Expands on scroll) */}
            <div
                className={`flex items-center rounded-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden ${isScrolled
                    ? isDarkSection
                        ? "bg-black/60 backdrop-blur-lg border border-white/10 shadow-lg py-2 px-6 gap-6"
                        : "bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg py-2 px-6 gap-6"
                    : "bg-transparent border border-transparent shadow-none py-1.5 px-2 gap-0"
                    }`}
            >
                {/* Inner Logo (Slides in from Left) */}
                <div className={`flex flex-col leading-none font-bold text-sm tracking-tight transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden whitespace-nowrap ${isScrolled ? "w-auto opacity-100 mr-2 translate-x-0" : "w-0 opacity-0 -translate-x-10"
                    } ${isDarkSection ? "text-white" : "text-black"}`}>
                    <span>SARUNG</span>
                    <span>GOYOR</span>
                </div>

                {/* Menu Items */}
                <div className="flex items-center gap-1">
                    <Link
                        href="#home"
                        onClick={(e) => scrollToSection(e, 'home')}
                        className={getLinkClass('home')}
                    >
                        {t.navbar.home}
                    </Link>
                    <Link
                        href="#philosophy"
                        onClick={(e) => scrollToSection(e, 'philosophy')}
                        className={getLinkClass('philosophy')}
                    >
                        {t.navbar.philosophy}
                    </Link>
                    <Link
                        href="#collection"
                        onClick={(e) => scrollToSection(e, 'collection')}
                        className={getLinkClass('collection')}
                    >
                        {t.navbar.collection}
                    </Link>
                    <Link
                        href="#artisans"
                        onClick={(e) => scrollToSection(e, 'artisans')}
                        className={getLinkClass('artisans')}
                    >
                        {t.navbar.craftsman}
                    </Link>
                    <Link
                        href="#"
                        className={isDarkSection
                            ? "text-gray-300 hover:bg-white/10 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors uppercase"
                            : "text-gray-600 hover:bg-gray-100 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors uppercase"}
                    >
                        {t.navbar.contact}
                    </Link>
                </div>

                {/* Inner Language (Slides in from Right) */}
                <div className={`flex items-center gap-2 text-xs font-semibold transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden whitespace-nowrap border-l pl-4 ml-2 ${isScrolled ? "w-auto opacity-100 translate-x-0" : "w-0 opacity-0 translate-x-10 border-none pl-0 ml-0"
                    } ${isDarkSection ? "border-gray-700 text-white" : "border-gray-200 text-black"}`}>
                    <button
                        onClick={() => setLanguage('ID')}
                        className={`flex items-center gap-1 hover:opacity-70 transition-colors ${language === 'ID' ? (isDarkSection ? 'text-white' : 'text-black') : 'text-gray-400'}`}
                    >
                        ID
                    </button>
                    <button
                        onClick={() => setLanguage('EN')}
                        className={`flex items-center gap-1 hover:opacity-70 transition-colors ${language === 'EN' ? (isDarkSection ? 'text-white' : 'text-black') : 'text-gray-400'}`}
                    >
                        EN
                    </button>
                </div>
            </div>

            {/* Outer Right Actions (Fades out & Moves to Center) */}
            <div
                className={`absolute right-8 flex items-center gap-3 text-xs font-semibold transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled ? "opacity-0 -translate-x-32 scale-75 pointer-events-none" : "opacity-100 translate-x-0 scale-100"
                    } ${isDarkSection && !isScrolled ? "text-white" : "text-black"}`}
            >
                <button
                    onClick={() => setLanguage('ID')}
                    className={`flex items-center gap-1 hover:opacity-70 transition-colors ${language === 'ID' ? (isDarkSection && !isScrolled ? 'text-white' : 'text-black') : 'text-gray-400'}`}
                >
                    🇮🇩 ID
                </button>
                <button
                    onClick={() => setLanguage('EN')}
                    className={`flex items-center gap-1 hover:opacity-70 transition-colors ${language === 'EN' ? (isDarkSection && !isScrolled ? 'text-white' : 'text-black') : 'text-gray-400'}`}
                >
                    🇬🇧 EN
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
