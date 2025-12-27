"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IndonesiaFlag, UKFlag } from "./ui/flags";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            // 1. Handle Navbar resizing
            setIsScrolled(window.scrollY > 50);

            // 2. Handle Active Section Detection
            const sections = ['home', 'philosophy', 'collection', 'testimonials', 'artisans', 'contact'];

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
        setIsMobileMenuOpen(false); // Close mobile menu
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
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:justify-center transition-all duration-500 ${isScrolled
                    ? "py-4 px-6 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
                    : isDarkSection
                        ? "px-6 md:px-8 py-6 bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
                        : "px-6 md:px-8 py-6 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
                    }`}
            >
                {/* Mobile Logo (Always visible on mobile) */}
                <div className={`flex md:hidden flex-col leading-none font-bold text-base tracking-tight ${isDarkSection && !isScrolled ? "text-white" : "text-black"}`}>
                    <span>SARUNG</span>
                    <span>GOYOR</span>
                </div>

                {/* Outer Logo (Desktop - Fades out & Moves to Center) */}
                <div
                    className={`hidden md:flex absolute left-8 flex-col leading-none font-bold text-lg tracking-tight transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled ? "opacity-0 translate-x-32 scale-75 pointer-events-none" : "opacity-100 translate-x-0 scale-100"
                        } ${isDarkSection && !isScrolled ? "text-white" : "text-black"}`}
                >
                    <span>SARUNG</span>
                    <span>GOYOR</span>
                </div>

                {/* Desktop Menu - Hidden on Mobile */}
                <div
                    className={`hidden md:flex items-center rounded-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden ${isScrolled
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
                        <Link href="#home" onClick={(e) => scrollToSection(e, 'home')} className={getLinkClass('home')}>
                            {t.navbar.home}
                        </Link>
                        <Link href="#philosophy" onClick={(e) => scrollToSection(e, 'philosophy')} className={getLinkClass('philosophy')}>
                            {t.navbar.philosophy}
                        </Link>
                        <Link href="#collection" onClick={(e) => scrollToSection(e, 'collection')} className={getLinkClass('collection')}>
                            {t.navbar.collection}
                        </Link>
                        <Link href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className={getLinkClass('testimonials')}>
                            {t.navbar.testimonials}
                        </Link>
                        <Link href="#artisans" onClick={(e) => scrollToSection(e, 'artisans')} className={getLinkClass('artisans')}>
                            {t.navbar.craftsman}
                        </Link>
                        <Link href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={getLinkClass('contact')}>
                            {t.navbar.contact}
                        </Link>
                    </div>

                    {/* Inner Language (Slides in from Right) */}
                    <div className={`flex items-center gap-2 text-xs font-semibold transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden whitespace-nowrap border-l pl-4 ml-2 ${isScrolled ? "w-auto opacity-100 translate-x-0" : "w-0 opacity-0 translate-x-10 border-none pl-0 ml-0"
                        } ${isDarkSection ? "border-gray-700 text-white" : "border-gray-200 text-black"}`}>
                        <button onClick={() => setLanguage('ID')} className={`flex items-center gap-1.5 hover:opacity-70 transition-colors ${language === 'ID' ? (isDarkSection ? 'text-white' : 'text-black') : 'text-gray-400'}`}>
                            <IndonesiaFlag className="w-4 h-3" /> ID
                        </button>
                        <button onClick={() => setLanguage('EN')} className={`flex items-center gap-1.5 hover:opacity-70 transition-colors ${language === 'EN' ? (isDarkSection ? 'text-white' : 'text-black') : 'text-gray-400'}`}>
                            <UKFlag className="w-4 h-3" /> EN
                        </button>
                    </div>
                </div>

                {/* Desktop Outer Right Actions (Fades out & Moves to Center) */}
                <div
                    className={`hidden md:flex absolute right-8 items-center gap-3 text-xs font-semibold transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled ? "opacity-0 -translate-x-32 scale-75 pointer-events-none" : "opacity-100 translate-x-0 scale-100"
                        } ${isDarkSection && !isScrolled ? "text-white" : "text-black"}`}
                >
                    <button onClick={() => setLanguage('ID')} className={`flex items-center gap-1.5 hover:opacity-70 transition-colors ${language === 'ID' ? (isDarkSection && !isScrolled ? 'text-white' : 'text-black') : 'text-gray-400'}`}>
                        <IndonesiaFlag className="w-4 h-3" /> ID
                    </button>
                    <button onClick={() => setLanguage('EN')} className={`flex items-center gap-1.5 hover:opacity-70 transition-colors ${language === 'EN' ? (isDarkSection && !isScrolled ? 'text-white' : 'text-black') : 'text-gray-400'}`}>
                        <UKFlag className="w-4 h-3" /> EN
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`md:hidden p-2 rounded-lg transition-colors ${isDarkSection && !isScrolled ? "text-white" : "text-black"}`}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>

                {/* Sidebar */}
                <div
                    className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full p-8">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="self-end p-2 mb-8 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="flex flex-col leading-none font-bold text-2xl tracking-tight mb-12">
                            <span>SARUNG</span>
                            <span>GOYOR</span>
                        </div>

                        {/* Menu Items */}
                        <nav className="flex flex-col gap-2 mb-auto">
                            <Link
                                href="#home"
                                onClick={(e) => scrollToSection(e, 'home')}
                                className={`py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${activeSection === 'home' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {t.navbar.home}
                            </Link>
                            <Link
                                href="#philosophy"
                                onClick={(e) => scrollToSection(e, 'philosophy')}
                                className={`py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${activeSection === 'philosophy' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {t.navbar.philosophy}
                            </Link>
                            <Link
                                href="#collection"
                                onClick={(e) => scrollToSection(e, 'collection')}
                                className={`py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${activeSection === 'collection' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {t.navbar.collection}
                            </Link>
                            <Link
                                href="#testimonials"
                                onClick={(e) => scrollToSection(e, 'testimonials')}
                                className={`py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${activeSection === 'testimonials' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {t.navbar.testimonials}
                            </Link>
                            <Link
                                href="#artisans"
                                onClick={(e) => scrollToSection(e, 'artisans')}
                                className={`py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${activeSection === 'artisans' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {t.navbar.craftsman}
                            </Link>
                            <Link
                                href="#contact"
                                onClick={(e) => scrollToSection(e, 'contact')}
                                className={`py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors ${activeSection === 'contact' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {t.navbar.contact}
                            </Link>
                        </nav>

                        {/* Language Switcher */}
                        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                            <button
                                onClick={() => setLanguage('ID')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${language === 'ID' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <IndonesiaFlag className="w-5 h-4" /> ID
                            </button>
                            <button
                                onClick={() => setLanguage('EN')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${language === 'EN' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <UKFlag className="w-5 h-4" /> EN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
