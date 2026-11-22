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

export interface Stat {
  value: string;
  label: string;
}

export interface CaseSection {
  /** Small label, e.g. "overview". */
  label: string;
  /** Section headline. */
  heading: string;
  body: string[];
  stats?: Stat[];
  image?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One-line summary shown under the case-study title. */
  summary: string;
  /** Short description (used on cards / metadata). */
  description: string;
  tags: string[];
  image: string;
  period: string;
  role: string;
  team: string;
  skills: string[];
  sections: CaseSection[];
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

const placeholderSections = (image: string): CaseSection[] => [
  {
    label: "overview",
    heading: "All about the project!",
    body: [
      "Write a short intro here: what this project is, who it was for, and why it mattered.",
      "Add a second paragraph with the context or the problem you set out to solve.",
    ],
    image,
  },
  {
    label: "the problem",
    heading: "What wasn't working",
    body: [
      "Describe the problem you found and how you discovered it, such as interviews, surveys or data.",
    ],
    stats: [
      { value: "00%", label: "a key finding from your research." },
      { value: "00", label: "another number worth highlighting." },
    ],
  },
  {
    label: "process",
    heading: "Shaping the solution",
    body: [
      "Walk through your process: ideas explored, trade-offs made and feedback that changed your direction.",
    ],
    image,
  },
  {
    label: "final solution",
    heading: "Introducing the final design",
    body: [
      "Show off the finished work. Explain the key decisions and how they solve the problem.",
    ],
    image,
  },
  {
    label: "reflection",
    heading: "Lessons learned and key takeaways",
    body: [
      "If I had more time… what you would do next.",
      "What I learned… what this project taught you.",
    ],
  },
];

const img = (hex: string, text: string) =>
  `https://placehold.co/1200x750/${hex}/ffffff?text=${text}`;

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary:
      "A one-sentence summary of what this project is and the problem it solves.",
    description: "A short description of what this project does.",
    tags: ["Next.js", "React", "Bootstrap"],
    image: img("6c5ce7", "Project+One"),
    period: "jan 2025 - mar 2025",
    role: "Product Designer",
    team: "Team name",
    skills: ["User Research", "Prototyping", "Visual Design"],
    sections: placeholderSections(img("6c5ce7", "Project+One")),
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary:
      "A one-sentence summary of what this project is and the problem it solves.",
    description: "Another project highlight.",
    tags: ["React", "Node.js"],
    image: img("00b894", "Project+Two"),
    period: "apr 2025 - jun 2025",
    role: "Designer & Developer",
    team: "Team name",
    skills: ["Interviews", "Wireframing", "Front-end"],
    sections: placeholderSections(img("00b894", "Project+Two")),
  },
  {
    slug: "project-three",
    title: "Project Three",
    summary:
      "A one-sentence summary of what this project is and the problem it solves.",
    description: "A third example project.",
    tags: ["JavaScript", "CSS"],
    image: img("e17055", "Project+Three"),
    period: "jul 2025 - sep 2025",
    role: "Marketing Lead",
    team: "Team name",
    skills: ["Strategy", "Branding", "Analytics"],
    sections: placeholderSections(img("e17055", "Project+Three")),
  },
];
