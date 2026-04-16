import { FaCode, FaCloud, FaWrench, FaDatabase, FaCogs } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";

export const skillHighlights = [
  "Frontend Development",
  "React Ecosystem",
  "Responsive UI",
  "REST APIs",
  "Performance",
  "UX Thinking",
  "Docker",
];

export const skillGroups = [
  {
    title: "Languages",
    icon: FaCode,
    items: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS/SCSS",
      "React",
      "Next.js",
      "Tailwind",
      "Nest.js",
      "Flutter",
    ],
  },
  {
    title: "Frontend Tools",
    icon: FaWrench,
    items: [
      "Git",
      "GitHub",
      "Vite",
      "Redux Toolkit",
      "React Hook Form",
      "Axios",
      "npm",
    ],
  },
  {
    title: "Architecture",
    icon: MdDashboardCustomize,
    items: [
      "Reusable Components",
      "Responsive Design",
      "Clean UI",
      "State Management",
      "Code Splitting",
      "SEO Basics",
    ],
  },
  {
    title: "DevOps",
    icon: FaCloud,
    items: [
      "Docker Basics",
      "GitHub Actions",
      "Build & Deploy",
      "Environment Config",
    ],
  },
  {
    title: "Backend / Data",
    icon: FaDatabase,
    items: [
      "REST API Integration",
      "Firebase",
      "Supabase",
      "MySQL Basics",
      "JSON Data",
    ],
  },
  {
    title: "Workflow",
    icon: FaCogs,
    items: [
      "Agile/Scrum",
      "Debugging",
      "UI Refactoring",
      "Performance Tuning",
      "Cross-browser Testing",
    ],
  },
];
