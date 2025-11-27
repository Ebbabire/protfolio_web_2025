import { Code2, Database, Layout, Server, Cpu, Globe } from "lucide-react";

import { Project, Skill, SocialLink } from "./types/types";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

import rydbie from "@/app/assets/rydbie_landin.jpeg";
import tapstore from "@/app/assets/tapstore_landin.jpeg";
import moteregna from "@/app/assets/moteregna_dashboard2.png";
import rydbieDahsboard from "@/app/assets/rydbie_dashboar.jpeg";

export const PERSONAL_INFO = {
  name: "Ebba Birhanu",
  role: "Full Stack Engineer",
  tagline: "Building digital experiences that matter.",
  bio: " A CTO and a Senior Frontend Architect specializing in scalable React, Next.js, and TypeScript ecosystems. Combining a mechanical engineering background with a passion for design systems, I bridge the gap between engineering and design to build high-performance interfaces that are as maintainable as they are fluid.",
  location: "Addis Ababa, Ethiopia", // Assumed based on name origin, adjustable
  email: "ebba.birhanu@gmail.com",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Rydbie",
    description:
      "A modern, Canadian online driving school platform designed to simplify driver education. It connects learner drivers with certified instructors through a user-friendly website and mobile app. It is a tech-forward alternative to traditional driving schools, aiming to make learning to drive in Canada more accessible, transparent, and convenient",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Recharts",
    ],
    imageUrl: rydbie,
    demoUrl: "https://rydbie.com",
    repoUrl: "",
  },
  {
    id: "2",
    title: "Tapstore",
    description:
      "An Ethiopian digital marketplace and e-commerce platform. The website aims to provide users with a faster shopping experience, real-time updates, and exclusive offers. It features a sleek, user-friendly interface designed to enhance the online shopping experience for Ethiopian consumers.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    imageUrl: tapstore,
    demoUrl: "https://tapstoreet.com",
    repoUrl: "",
  },
  {
    id: "3",
    title: "Rydbie Admin Dashboard",
    description:
      "The central administration dashboard for Rydbie, a digital driving school platform, serving as the command center for managing operations between learner drivers and certified instructors. The system streamlines critical workflows, including the verification of instructor credentials, oversight of master lesson schedules, and the tracking of student progress to ensure compliance with Ministry of Transportation (MTO) certification standards. Additionally, the dashboard manages financial operations by automating instructor payouts and processing transaction packages, acting as the operational bridge that keeps the student and instructor mobile apps synchronized.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Recharts",
    ],
    imageUrl: rydbieDahsboard,
    repoUrl: "",
  },
  {
    id: "4",
    title: "Moteregna Admin Dashboard",
    description:
      "A centralized Admin Dashboard for Moteregna Transport, Ethiopia's first 100% electric delivery and logistics platform. This web-based control center serves as the brain of the operation, allowing the management team to monitor the entire lifecycle of deliveries, manage a fleet of electric motorbikes, and oversee driver-user interactions in real-time.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Recharts",
    ],
    imageUrl: moteregna,
    repoUrl: "",
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
