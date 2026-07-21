export const CATEGORY_COLORS: Record<string, string> = {
    "Hero Sections":      "text-[#0077b6] dark:text-[#57c1ff]",
    "Footers":            "text-[#1a7a4a] dark:text-[#59d499]",
    "Forms":              "text-[#8a5c00] dark:text-[#ffc533]",
    "Buttons":            "text-[#c0392b] dark:text-[#ff6161]",
    "Text & Typography":  "text-[#6d28d9] dark:text-[#c084fc]",
    "Features":           "text-[#0077b6] dark:text-[#57c1ff]",
    "Cards":              "text-[#1a7a4a] dark:text-[#59d499]",
    "Loader Animations":  "text-[#8a5c00] dark:text-[#ffc533]",
    "Creative":           "text-[#c0392b] dark:text-[#ff6161]",
    "Annotations":        "text-[#6d28d9] dark:text-[#c084fc]",
};

export interface ComponentItem {
    id: number;
    name: string;
    category: string;
    href: string;
}

export const components: ComponentItem[] = [
    { 
        id: 1,
        name: "Aurora Gradient Hero",
        category: "Hero Sections",
        href: "https://component-labs.vercel.app/components/herosection/auroragradienthero"
    },
    { 
        id: 2,
        name: "Engineering Status Footer",
        category: "Footers",
        href: "https://component-labs.vercel.app/components/footers/engineeringstatusfooter"
    },
    { 
        id: 3,
        name: "Terminal Contact Form",
        category: "Forms",
        href: "https://component-labs.vercel.app/components/form/terminalcontactform"
    },
    { 
        id: 4,
        name: "Geometric Path Button",
        category: "Buttons",
        href: "https://component-labs.vercel.app/components/button/geometricpathbutton"
    },
    { 
        id: 5,
        name: "Kinetic Split Reveal",
        category: "Text & Typography",
        href: "https://component-labs.vercel.app/components/text/kineticsplitreveal"
    },
    { 
        id: 6,
        name: "Interactive Spotlight Features",
        category: "Features",
        href: "https://component-labs.vercel.app/components/features/interactivespotlightfeatures"
    },
    { 
        id: 7,
        name: "Creative Teams Feature",
        category: "Features",
        href: "https://component-labs.vercel.app/components/features/creativeteamsfeature"
    },
    { 
        id: 8,
        name: "Premium Tilt Card",
        category: "Cards",
        href: "https://component-labs.vercel.app/components/cards/premiumtiltcard"
    },
    { 
        id: 9,
        name: "Staircase Preloader",
        category: "Loader Animations",
        href: "https://component-labs.vercel.app/components/loader-animations/staircasepreloader"
    },
    { 
        id: 10,
        name: "Identity Decoder",
        category: "Annotations",
        href: "https://component-labs.vercel.app/components/text/identitydecoder"
    },
    { 
        id: 11,
        name: "Atmospheric Distortion",
        category: "Text & Typography",
        href: "https://component-labs.vercel.app/components/text/atmosphericdistortion"
    },
    { 
        id: 12,
        name: "Cinematic Cards",
        category: "Creative",
        href: "https://component-labs.vercel.app/components/creative/cinematiccards"
    },
];