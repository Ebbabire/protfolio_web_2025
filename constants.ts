import { Code2, Database, Layout, Server, Cpu, Globe } from "lucide-react";

import { Project, Skill, SocialLink } from "./types/types";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export const PERSONAL_INFO = {
  name: "Ebba Birhanu",
  role: "Full Stack Engineer",
  tagline: "Building digital experiences that matter.",
  bio: "I'm a passionate Full Stack Developer with a knack for building scalable, high-performance web applications. With expertise in the React ecosystem, Node.js, and cloud architectures, I transform complex problems into elegant user interfaces. Currently exploring the frontiers of Generative AI integration.",
  location: "Addis Ababa, Ethiopia", // Assumed based on name origin, adjustable
  email: "ebba@example.com",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for online retailers. Features real-time sales tracking, inventory management, and AI-driven revenue forecasting.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Recharts"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    repoUrl: "https://github.com/ebba/dashboard",
    demoUrl: "https://dashboard-demo.com",
  },
  {
    id: "2",
    title: "AI Content Generator",
    description:
      "A SaaS platform leveraging Gemini API to help creators generate blog posts, social media captions, and marketing copy in seconds.",
    technologies: ["React", "Node.js", "Gemini API", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    repoUrl: "https://github.com/ebba/ai-gen",
    demoUrl: "https://ai-gen-demo.com",
  },
  {
    id: "3",
    title: "TaskFlow Pro",
    description:
      "Collaborative project management tool featuring drag-and-drop kanban boards, real-time socket updates, and team chat.",
    technologies: ["Vue.js", "Firebase", "Pinia", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    repoUrl: "https://github.com/ebba/taskflow",
    demoUrl: "https://taskflow-demo.com",
  },
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "Frontend", icon: Layout },
  { name: "TypeScript", category: "Frontend", icon: Code2 },
  { name: "Tailwind CSS", category: "Frontend", icon: Layout },
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "PostgreSQL", category: "Backend", icon: Database },
  { name: "GraphQL", category: "Backend", icon: Globe },
  { name: "Gemini API", category: "AI", icon: Cpu },
  { name: "Docker", category: "Tools", icon: Server },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Ebbabire", icon: BsGithub },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/ebba-birhanu",
    icon: FaLinkedinIn,
  },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: CgMail },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Ebba Birhanu's portfolio website. 
Your goal is to answer visitor questions about Ebba based on the following information:
- Name: ${PERSONAL_INFO.name}
- Role: ${PERSONAL_INFO.role}
- Bio: ${PERSONAL_INFO.bio}
- Skills: ${SKILLS.map((s) => s.name).join(", ")}
- Projects: ${PROJECTS.map((p) => p.title + ": " + p.description).join("; ")}

Be professional, concise, and friendly. If a user asks about something not in this list, politely say you don't have that information but they can contact Ebba directly.
Do not make up facts.
`;
