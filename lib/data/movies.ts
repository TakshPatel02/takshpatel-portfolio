interface Movie {
    name: string;
    year: number;
    quote: string;
    personalThought: string;
    posterUrl: string;
}

export const movies: Movie[] = [
    {
        name: "F1 The Movie",
        year: 2025,
        quote: "F1 isn't an individual sport — put the team's success ahead of your own ego, and the results follow.",
        personalThought:
            "They start out chasing individual glory and keep losing. The moment they put personal agendas aside for the team, they start winning — a lesson that applies far beyond racing.",
        posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784867959/f1_juufvr.webp",
    },
    {
        name: "Ford v Ferrari",
        year: 2019,
        quote: "Winning isn't always the point — doing the work at the highest level earns something more lasting.",
        personalThought:
            "Ferrari had every advantage going into Le Mans. Ford had none of it and bet everything anyway. Bale's character loses to the company's own politics, not his own ability — yet still earns Enzo Ferrari's respect by the end.",
        posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784867959/fordvferrari_t3avwb.webp",
    },
    {
        name: "Good Will Hunting",
        year: 1997,
        quote: "Knowledge without direction is a complete waste, no matter how much of it you have.",
        personalThought:
            "Will has real talent and wastes it — his ego keeps him from showing what he's capable of, until his professor gives him actual direction. Talent alone was never enough.",
        posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784867959/goodwillhunting_bl0bes.webp",
    },
    {
        name: "Jerry Maguire",
        year: 1996,
        quote: "Treat people as transactions and it falls apart. Treat them as people, and the work takes care of itself.",
        personalThought:
            "Jerry loses almost everything overnight after one honest memo — friends, clients, all of it. What's left is one client he treats like a person, not a paycheck, and that relationship becomes the whole point.",
        posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784867960/jerrymaguire_gqaxhr.webp",
    },
    {
        name: "Lamborghini: The Man Behind the Legend",
        year: 2022,
        quote: "Never let success put your ego above listening to people — but if you're doubted, let the result speak for you.",
        personalThought:
            "Enzo Ferrari mocked Lamborghini for pointing out a flaw in his car, telling him to stick to tractors. That insult is what built an entire rival company — and the bull logo exists purely to mock Ferrari's horse.",
        posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784867959/lamborghini_b2f6xq.webp",
    },
    {
        name: "Spider-Man",
        year: 2002,
        quote: "Responsibility isn't about having the ability to do something — it's choosing to carry the weight even when it costs you.",
        personalThought:
            "\"With great power comes great responsibility\" hits different watching Peter actually live it — constantly balancing his personal life against a responsibility he chose to carry.",
        posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784867959/spider-man_bkmsa3.webp",
    },
]

export type FavoriteCategory = "Hollywood" | "Series" | "Anime";

export interface FavoriteEntry {
    name: string;
    year: number;
    posterUrl: string;
    rating: number; // out of 10 — update to your personal rating
    description: string; // short 1–2 sentence blurb shown in the popup
}

export interface FavoriteGroup {
    category: FavoriteCategory;
    items: FavoriteEntry[];
}

export const favorites: FavoriteGroup[] = [
    {
        category: "Hollywood",
        items: [
            { name: "Avengers: Endgame", year: 2019, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876474/endgame_xndybc.jpg", rating: 9.5, description: "The Avengers travel through time to undo Thanos's snap and restore half the universe. The ultimate MCU payoff." },
            { name: "Top Gun", year: 1986, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876473/topgun_gytzwq.jpg", rating: 8.5, description: "A hotshot Navy pilot pushes his limits at the elite Top Gun academy. Pure 80s action energy." },
            { name: "Top Gun: Maverick", year: 2022, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876473/maverik_y2ljfb.jpg", rating: 9.2, description: "Maverick returns to train a new generation for a near-impossible mission. A rare sequel that surpasses the original." },
            { name: "Mission Impossible", year: 1996, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876472/mission-impossible_efmjqj.jpg", rating: 8.8, description: "IMF agent Ethan Hunt is framed for the deaths of his team and must uncover a mole to clear his name." },
            { name: "Battleship", year: 2012, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876865/battleship_izt8cu.jpg", rating: 7.8, description: "Naval officers face an alien invasion in the Pacific Ocean. Loud, fun, and unapologetically over the top." }
        ],
    },
    {
        category: "Series",
        items: [
            { name: "Money Heist", year: 2017, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876473/money-heist_r7fuz2.jpg", rating: 9.3, description: "A criminal mastermind orchestrates the most elaborate heist in history, targeting the Royal Mint of Spain." },
            { name: "Game of Thrones", year: 2011, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876568/gameofthrones_yosars.jpg", rating: 9.0, description: "Noble families wage war for the Iron Throne while an ancient threat stirs beyond the Wall." },
            { name: "The Night Agent", year: 2023, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876866/thenightagent_u2pd9n.jpg", rating: 8.4, description: "An FBI agent manning a crisis hotline is pulled into a high-stakes conspiracy that reaches the White House." }
        ],
    },
    {
        category: "Anime",
        items: [
            { name: "That Time I Got Reincarnated as a Slime", year: 2018, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876471/slime_kshfsn.jpg", rating: 8.7, description: "A Tokyo salaryman is reincarnated as a slime in a fantasy world and builds a nation of monsters." },
            { name: "Dr. Stone", year: 2019, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876472/destone_klz6hq.jpg", rating: 8.9, description: "After humanity is petrified for millennia, a genius teen uses science to rebuild civilization from scratch." },
            { name: "Solo Leveling", year: 2024, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876471/sololeveling_wvs6a9.jpg", rating: 9.1, description: "The world's weakest hunter gains a unique power that lets him level up infinitely and grow beyond all limits." },
            { name: "Ao Ashi", year: 2022, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876472/aoashi_wvxejd.jpg", rating: 8.6, description: "A raw-talented boy from a small town fights his way into a top football academy, learning to see the game differently." },
            { name: "Shin Chan", year: 1992, posterUrl: "https://res.cloudinary.com/portfolioblog/image/upload/v1784876472/shinchan_akoad6.jpg", rating: 9.4, description: "A mischievous five-year-old and his eccentric family navigate everyday life with absurd, hilarious results." },
        ],
    },
]