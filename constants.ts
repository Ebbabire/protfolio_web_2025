import { Code2, Database, Layout, Globe } from "lucide-react";

import { Project, Skill, SocialLink } from "./types/types";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

import rydbie from "./app/assets/rydbie_landin.jpeg";
import tapstore from "@/app/assets/tapstore_landin.jpeg";
import moteregna from "@/app/assets/moteregna_dashboard2.png";

export const PERSONAL_INFO = {
  name: "Ebba Birhanu",
  role: "Lead Developer",
  tagline: "Building digital experiences that matter.",
  bio: " A CTO and a Senior Frontend Architect specializing in scalable React, Next.js, and TypeScript ecosystems. Combining a mechanical engineering background with a passion for design systems, I bridge the gap between engineering and design to build high-performance interfaces that are as maintainable as they are fluid.",
  location: "Addis Ababa, Ethiopia",
  email: "ebba.birhanu@gmail.com",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Rydbie",
    description:
      "Booking platform for a Toronto driving school. As frontend lead, I built the student site from the first commit and led the admin dashboard staff use to run lessons, instructors and payouts. Highlights: a data-driven booking checkout that ends in Stripe Checkout, instructor availability turned into bookable lesson slots in Toronto time, and server-side pagination across 14 admin lists.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Stripe",
      "Sanity",
    ],
    imageUrl: rydbie,
    demoUrl: "https://rydbie.com",
    repoUrl: "",
  },
  {
    id: "2",
    title: "Tapstore",
    description:
      "Ethiopian shoe marketplace. I built the buyer storefront and the admin site. Shoppers filter the catalogue, pick a size and colour with live stock limits, apply promo codes and pay by cash on delivery, in-app coins or Chapa, then track each order to delivery. The admin covers product and seller approval, order management and revenue dashboards.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Shadcn UI",
      "Chapa",
    ],
    imageUrl: tapstore,
    demoUrl: "https://tapstoreet.com",
    repoUrl: "",
  },
  // {
  //   id: "3",
  //   title: "Rydbie Admin Dashboard",
  //   description:
  //     "The central administration dashboard for Rydbie, a digital driving school platform, serving as the command center for managing operations between learner drivers and certified instructors. The system streamlines critical workflows, including the verification of instructor credentials, oversight of master lesson schedules, and the tracking of student progress to ensure compliance with Ministry of Transportation (MTO) certification standards. Additionally, the dashboard manages financial operations by automating instructor payouts and processing transaction packages, acting as the operational bridge that keeps the student and instructor mobile apps synchronized.",
  //   technologies: [
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Shadcn UI",
  //     "Recharts",
  //   ],
  //   imageUrl: rydbieDahsboard,
  //   repoUrl: "",
  // },
  {
    id: "4",
    title: "Moteregna Admin Dashboard",
    description:
      "Operations dashboard for Moteregna Transport, Ethiopia's first 100% electric delivery and logistics platform. I led development of the control center the team uses to track rides and revenue, manage drivers and users, schedule trips and handle withdrawals.",
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
  { name: "shadcn/ui", category: "Frontend", icon: Layout },
  { name: "TanStack Query", category: "Data", icon: Database },
  { name: "Stripe", category: "Integrations", icon: Globe },
  { name: "Chrome Extensions", category: "Integrations", icon: Globe },
  { name: "Vitest", category: "Testing", icon: Code2 },
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
