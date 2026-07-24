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