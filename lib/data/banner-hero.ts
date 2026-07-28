// Index → file       → slot
//   0     banner-1    05:00 – 10:59   Morning
//   1     banner-4    11:00 – 15:59   Afternoon
//   2     banner-3    16:00 – 19:59   Evening / golden hour
//   3     banner-2    20:00 – 04:59   Night
export const BANNERS = [
    { src: "https://res.cloudinary.com/portfolioblog/image/upload/v1785255593/banner-1_quchgd.webp", alt: "Developer coding by a waterfall in a sunlit morning forest" },
    { src: "https://res.cloudinary.com/portfolioblog/image/upload/v1785255577/banner-5_q3hf1o.webp", alt: "Developer coding in the bright afternoon light" },
    { src: "https://res.cloudinary.com/portfolioblog/image/upload/v1785255598/banner-3_k0prdy.webp", alt: "Developer coding on a rooftop at golden-hour sunset" },
    { src: "https://res.cloudinary.com/portfolioblog/image/upload/v1785255596/banner-2_jfm9if.webp", alt: "Developer coding at a desk late at night" },
] as const;

// The IST hour at which each slot ends (and the next begins)
export const SLOT_END_HOURS = [11, 16, 20, 5] as const;