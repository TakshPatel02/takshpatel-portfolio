// Index → file       → slot
//   0     hero-1    05:00 – 10:59   Morning
//   1     hero-2    11:00 – 15:59   Afternoon
//   2     hero-3    16:00 – 19:59   Evening / golden hour
//   3     hero-4    20:00 – 23:59   Night
//   4     hero-5    00:00 – 04:59   Night
export const BANNERS = [
    {
        src: "https://res.cloudinary.com/portfolioblog/image/upload/v1785325778/hero-1_ciytas.webp",
        alt: "Developer coding by a waterfall in a sunlit morning forest",
        thought: "Mornings are for clarity. Code before the noise starts.",
    },
    {
        src: "https://res.cloudinary.com/portfolioblog/image/upload/v1785325778/hero-2_haaoku.webp",
        alt: "Developer coding in the bright afternoon light",
        thought: "Coffee in one hand, bugs in the other.",
    },
    {
        src: "https://res.cloudinary.com/portfolioblog/image/upload/v1785325779/hero-3_hn1coa.webp",
        alt: "Developer coding on a rooftop at golden-hour sunset",
        thought: "Golden hour hits different when you're mid-deploy.",
    },
    {
        src: "https://res.cloudinary.com/portfolioblog/image/upload/v1785325778/hero-4_ghter2.webp",
        alt: "Developer coding at a desk late at night",
        thought: "Found 0 bugs today. Yet.",
    },
    {
        src: "https://res.cloudinary.com/portfolioblog/image/upload/v1785325778/hero-5_orib2b.webp",
        alt: "Developer reading a book in the night",
        thought: "Trading sleep for sorting algorithms.",
    },
] as const;

// The IST hour at which each slot ends (and the next begins)
export const SLOT_END_HOURS = [11, 16, 20, 24, 5] as const;