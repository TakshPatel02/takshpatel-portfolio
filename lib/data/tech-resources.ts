interface TechResource {
    id: string
    name: string
    learned: string
    type: string
    link: string
    advantages: string
}

export const TechResources: TechResource[] = [
  {
    id: "01",
    name: "CodeWithHarry",
    learned: "HTML & CSS fundamentals",
    type: "YouTube",
    link: "https://www.youtube.com/@CodeWithHarry",
    advantages: "Beginner-friendly, structured intro to HTML & CSS.",
  },
  {
    id: "02",
    name: "Hitesh Choudhary — Chai aur Code",
    learned: "JavaScript fundamentals, React (in-depth + full project), Node.js backend (MongoDB aggregation), and Next.js (in progress)",
    type: "YouTube + Udemy",
    link: "https://www.youtube.com/@ChaiAurCode",
    advantages: "In-depth, project-based — the resource I keep coming back to.",
  },
  {
    id: "03",
    name: "Sheryians Coding School",
    learned: "React basics (first introduction to component-based UI) and advanced email-based authentication",
    type: "YouTube",
    link: "https://www.youtube.com/@sheryians",
    advantages: "Approachable explanations, great for getting unstuck fast.",
  },
  {
    id: "04",
    name: "Manu Arora",
    learned: "Tailwind CSS (design-first approach) and Framer Motion / Motion",
    type: "YouTube",
    link: "https://www.youtube.com/@manuarora",
    advantages: "Best design instincts of any dev educator I've followed.",
  },
  {
    id: "05",
    name: "Piyush Garg",
    learned: "Node.js & Express core fundamentals",
    type: "Udemy + YouTube",
    link: "https://www.youtube.com/@piyushgargdev",
    advantages: "Breaks down backend logic better than anyone else I've watched.",
  },
];