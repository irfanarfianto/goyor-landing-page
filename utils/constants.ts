/**
 * Application Constants
 * Single source of truth for all constant values used across the application
 * Update these values instead of hardcoding them in components
 */

// ============================================================================
// BRAND & IDENTITY
// ============================================================================

export const BRAND = {
    name: 'Sarung Goyor',
    tagline: 'Warisan Budaya Indonesia',
    location: 'Pemalang, Jawa Tengah',
} as const;

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const CONTACT = {
    whatsapp: {
        number: '+62-812-3456-7890', // TODO: Replace with actual number
        displayNumber: '0812-3456-7890',
        message: 'Halo, saya tertarik dengan Sarung Goyor. Bisa info lebih lanjut?',
    },
    email: 'info@sarunggoyor.com', // TODO: Replace with actual email
    address: {
        full: 'Desa Wanarejan Utara, Pemalang, Jawa Tengah 52364',
        village: 'Desa Wanarejan Utara',
        city: 'Pemalang',
        province: 'Jawa Tengah',
        postalCode: '52364',
        country: 'Indonesia',
        googleMapsUrl: 'https://maps.app.goo.gl/JZzDFfMJp6NCbFcW6',
    },
} as const;

// ============================================================================
// SOCIAL MEDIA
// ============================================================================

export const SOCIAL_MEDIA = {
    instagram: {
        url: 'https://instagram.com/sarunggoyor', // TODO: Replace with actual handle
        handle: '@sarunggoyor',
    },
    facebook: {
        url: 'https://facebook.com/sarunggoyor', // TODO: Replace with actual page
        handle: 'Sarung Goyor Pemalang',
    },
    twitter: {
        url: 'https://twitter.com/sarunggoyor', // TODO: Replace if exists
        handle: '@sarunggoyor',
    },
    tiktok: {
        url: 'https://tiktok.com/@sarunggoyor', // TODO: Replace if exists
        handle: '@sarunggoyor',
    },
} as const;

// ============================================================================
// COLORS
// ============================================================================

export const COLORS = {
    // WhatsApp
    whatsapp: '#25D366',
    whatsappHover: '#128C7E',
    whatsappDark: '#075E54',

    // Brand Colors
    primary: '#000000',
    secondary: '#FFFFFF',
    accent: '#10B981', // Emerald

    // Semantic Colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Neutrals
    gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
    },
} as const;

// ============================================================================
// ANIMATION TIMINGS
// ============================================================================

export const ANIMATION = {
    duration: {
        fast: 150,
        normal: 300,
        slow: 500,
        verySlow: 700,
    },
    easing: {
        default: 'cubic-bezier(0.4, 0, 0.2, 1)',
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    carousel: {
        autoPlayInterval: 3000,
        transitionDuration: 800,
    },
} as const;

// ============================================================================
// BREAKPOINTS (Match Tailwind defaults)
// ============================================================================

export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

// ============================================================================
// SCROLL BEHAVIOR
// ============================================================================

export const SCROLL = {
    navbarScrollThreshold: 50, // Pixels before navbar changes
    floatingWhatsAppThreshold: 300, // Pixels before floating button appears
    smoothScrollDuration: 800,
    sectionOffset: 80, // Offset for scroll-to-section (navbar height)
} as const;

// ============================================================================
// PRODUCT TIERS
// ============================================================================

export const PRODUCT_TIERS = {
    heritage: {
        key: 'heritage',
        priceRange: {
            min: 500000,
            max: 600000,
            currency: 'IDR',
        },
    },
    classic: {
        key: 'classic',
        priceRange: {
            min: 300000,
            max: 400000,
            currency: 'IDR',
        },
    },
    modern: {
        key: 'modern',
        priceRange: {
            min: 200000,
            max: 300000,
            currency: 'IDR',
        },
    },
} as const;

// ============================================================================
// SEO & META
// ============================================================================

export const SEO = {
    siteName: 'Sarung Goyor Pemalang',
    siteUrl: 'https://sarunggoyor.com', // TODO: Replace with actual domain
    defaultTitle: 'Sarung Goyor Pemalang | Tenun ATBM Asli Ekspor Timur Tengah',
    defaultDescription: 'Sarung Goyor Pemalang kualitas premium dengan teknik ATBM. Terbukti ekspor ke Timur Tengah. Motif Botolan, Balian, dan Modern.',
    keywords: [
        'sarung goyor',
        'sarung pemalang',
        'tenun ATBM',
        'sarung premium',
        'sarung ekspor',
    ],
    ogImage: '/og-image.jpg', // TODO: Create and add actual OG image
    twitterHandle: '@sarunggoyor',
} as const;

// ============================================================================
// PLACEHOLDER IMAGES
// ============================================================================

export const PLACEHOLDER_IMAGES = {
    hero: [
        'https://placehold.co/300x700/1a1a1a/white?text=Kain+Tenun+1',
        'https://placehold.co/300x700/2b2b2b/white?text=Motif+Klasik+2',
        'https://placehold.co/300x700/3c3c3c/white?text=Detail+Benang+3',
        'https://placehold.co/300x700/4d4d4d/white?text=Alat+Tenun+4',
        'https://placehold.co/300x700/5e5e5e/white?text=Pewarna+Alami+5',
        'https://placehold.co/300x700/6f6f6f/white?text=Proses+Celup+6',
        'https://placehold.co/300x700/808080/white?text=Tenun+ATBM+7',
        'https://placehold.co/300x700/919191/white?text=Gallery+Showcase+8',
    ],
    collection: {
        heritage: 'https://placehold.co/400x600/2a2a2a/white?text=Heritage+Series',
        classic: 'https://placehold.co/400x600/4a4a4a/white?text=Classic+Series',
        modern: 'https://placehold.co/400x600/6a6a6a/white?text=Modern+Series',
    },
    testimonials: {
        customer1: 'https://placehold.co/80x80/e5e7eb/6b7280?text=Customer',
        customer2: 'https://placehold.co/80x80/d1d5db/4b5563?text=Official',
        customer3: 'https://placehold.co/80x80/9ca3af/374151?text=Leader',
    },
    process: {
        spinning: 'https://placehold.co/600x400/1a1a1a/white?text=Spinning',
        dyeing: 'https://placehold.co/600x400/2a2a2a/white?text=Dyeing',
        weaving: 'https://placehold.co/600x400/3a3a3a/white?text=Weaving',
    },
    contact: {
        decorative: 'https://placehold.co/400x600/f3f4f6/9ca3af?text=Pattern',
    },
} as const;

// ============================================================================
// NAVBAR SECTIONS
// ============================================================================

export const NAVBAR_SECTIONS = [
    'home',
    'philosophy',
    'collection',
    'testimonials',
    'artisans',
    'contact',
] as const;

export const DARK_SECTIONS = ['artisans'] as const;

// ============================================================================
// TESTIMONIALS DATA
// ============================================================================

export const TESTIMONIALS_STATS = {
    exportDestinations: {
        value: 15,
        suffix: '+',
    },
    happyCustomers: {
        value: 500,
        suffix: '+',
    },
    skilledArtisans: {
        value: 50,
        suffix: '+',
    },
} as const;

// ============================================================================
// FEATURE FLAGS (For future use)
// ============================================================================

export const FEATURES = {
    enableAnalytics: false, // TODO: Enable when GA is setup
    enableChatWidget: false,
    enableNewsletter: false,
    enableBlog: false,
    enableEcommerce: false, // For future online store
    enableMultiCurrency: false,
} as const;

// ============================================================================
// API ENDPOINTS (For future backend integration)
// ============================================================================

export const API_ENDPOINTS = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    products: '/products',
    testimonials: '/testimonials',
    contact: '/contact',
    newsletter: '/newsletter',
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Generate WhatsApp URL with pre-filled message
 */
export const getWhatsAppUrl = (customMessage?: string) => {
    const message = customMessage || CONTACT.whatsapp.message;
    return `https://wa.me/${CONTACT.whatsapp.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
};

/**
 * Format price to IDR currency
 */
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);
};

/**
 * Check if current viewport is mobile
 */
export const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < BREAKPOINTS.md;
};

/**
 * Get section ID from name
 */
export const getSectionId = (section: typeof NAVBAR_SECTIONS[number]) => {
    return section === 'home' ? 'home' : `#${section}`;
};
