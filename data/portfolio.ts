export interface Social {
  label: string;
  icon: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  subtagline: string;
  email: string;
  location: string;
  about: string[];
  socials: Social[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  live: string;
  code: string;
}

export const profile: Profile = {
  name: "Hailey Kim",
  role: "Marketing, design & HCI",
  tagline: "third year at uc san diego,",
  subtagline: "studying marketing, design, and human interaction",
  email: "hello@example.com",
  location: "California, USA",
  about: [
    "Hi, I'm Hailey. I enjoy turning ideas into polished products, from the first sketch to the final deploy.",
    "I care about details: typography, spacing, performance and the small interactions that make an interface feel good to use. Outside of work you can find me exploring new coffee shops and learning something new.",
  ],
  socials: [
    { label: "GitHub", icon: "bi-github", href: "https://github.com/" },
    { label: "LinkedIn", icon: "bi-linkedin", href: "https://linkedin.com/" },
    { label: "Email", icon: "bi-envelope", href: "mailto:hello@example.com" },
  ],
};

export const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Next.js", level: 82 },
  { name: "HTML & CSS", level: 92 },
  { name: "Bootstrap", level: 90 },
  { name: "Node.js", level: 70 },
  { name: "Git", level: 80 },
  { name: "UI Design", level: 78 },
];

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and the problem it solves. Replace this with your own work.",
    tags: ["Next.js", "React", "Bootstrap"],
    image: "https://placehold.co/800x500/6c5ce7/ffffff?text=Project+One",
    live: "#",
    code: "#",
  },
  {
    title: "Project Two",
    description:
      "Another project highlight. Mention your role, the tools you used and the result you achieved.",
    tags: ["React", "Node.js"],
    image: "https://placehold.co/800x500/00b894/ffffff?text=Project+Two",
    live: "#",
    code: "#",
  },
  {
    title: "Project Three",
    description:
      "A third example card. Add as many projects as you like, the grid will adapt automatically.",
    tags: ["JavaScript", "CSS"],
    image: "https://placehold.co/800x500/e17055/ffffff?text=Project+Three",
    live: "#",
    code: "#",
  },
  {
    title: "Project Four",
    description:
      "One more space to show off your work. Swap in a real title, image and links.",
    tags: ["Figma", "UX"],
    image: "https://placehold.co/800x500/74b9ff/ffffff?text=Project+Four",
    live: "#",
    code: "#",
  },
];
