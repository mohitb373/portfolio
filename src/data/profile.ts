// ─────────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE WITH YOUR OWN INFO. It is the single source of content for the
// whole site. Everything below is placeholder text — replace the strings.
// ─────────────────────────────────────────────────────────────────────────────

export type IntroLine = { text: string; strong?: string };
export type AboutSection = { heading: string; body: string };
export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};
export type Skill = { name: string; inside?: Skill[] };
export type ContactLink = { label: string; value: string; href: string };
export type Project = {
  name: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
};

export interface Profile {
  name: string;
  title: string;
  about: { intro: IntroLine[]; sections: AboutSection[] };
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  contact: { blurb: string; links: ContactLink[] };
}

export const profile: Profile = {
  // Shown with a typewriter effect on the home screen
  name: "Your Name",
  title: "Full Stack Developer",

  about: {
    intro: [
      // Each entry is its own bold line under the "about_me" header
      { text: "Hi! My name is ", strong: "Your Name" },
      { text: "and I'm a ", strong: "Full Stack Developer" },
    ],
    sections: [
      {
        heading: "> my workflow",
        body:
          "I care about writing clean, maintainable code and keeping " +
          "open, communicative relationships with the people I build for. " +
          "From first discussions to project updates and feedback sessions, " +
          "I focus on a shared understanding of goals and a smooth " +
          "collaboration that leads to successful outcomes.",
      },
    ],
  },

  // experience() screen — most recent first
  experience: [
    {
      role: "Software Engineer",
      company: "Company Name",
      period: "2023 — Present",
      points: [
        "Built and shipped features across the stack with React and Node.",
        "Collaborated with a cross-functional team to deliver on roadmap goals.",
      ],
    },
    {
      role: "Junior Developer",
      company: "Previous Company",
      period: "2021 — 2023",
      points: [
        "Maintained and improved existing web applications.",
        "Wrote tests and helped with code reviews.",
      ],
    },
  ],

  // projects() screen — your highlighted work
  projects: [
    {
      name: "Project One",
      description:
        "A short, punchy description of what this project does and the " +
        "problem it solves. One or two sentences is plenty.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      links: [
        { label: "GitHub", href: "https://github.com/yourusername/project-one" },
        { label: "Live", href: "https://project-one.example.com" },
      ],
    },
    {
      name: "Project Two",
      description:
        "Another project highlight. Mention the impact or an interesting " +
        "technical challenge you solved.",
      tech: ["React", "Node.js", "PostgreSQL"],
      links: [
        { label: "GitHub", href: "https://github.com/yourusername/project-two" },
      ],
    },
  ],

  // skills() screen — supports nesting via `inside`
  skills: [
    {
      name: "Languages",
      inside: [
        { name: "JavaScript / TypeScript" },
        { name: "Python" },
        { name: "SQL" },
      ],
    },
    {
      name: "Frontend",
      inside: [{ name: "React" }, { name: "Next.js" }, { name: "HTML / CSS" }],
    },
    {
      name: "Backend",
      inside: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "REST APIs" },
      ],
    },
    {
      name: "Tools",
      inside: [{ name: "Git" }, { name: "Docker" }, { name: "Linux" }],
    },
  ],

  // contact() screen
  contact: {
    blurb: "Want to work together or just say hi? Reach out.",
    links: [
      { label: "Email", value: "you@example.com", href: "mailto:you@example.com" },
      {
        label: "GitHub",
        value: "github.com/yourusername",
        href: "https://github.com/yourusername",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/yourusername",
        href: "https://linkedin.com/in/yourusername",
      },
    ],
  },
};

// Page order. The 3D carousel and URL routing follow this list.
export const pageOrder = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;
