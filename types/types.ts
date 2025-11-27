import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: StaticImageData;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "AI";
  icon?: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
  timestamp: Date;
  isError?: boolean;
}
