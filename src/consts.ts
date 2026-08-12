import type { Site, Page, Links, Socials, Experience } from "./types"

// Global
export const SITE: Site = {
  TITLE: "Anggun Caksono",
  DESCRIPTION: "Full-stack software engineer and Cloud Computing alumnus (Bangkit 2024 by Google, GoTo, Traveloka). Specialized in Astro, TypeScript, Node.js, GCP, and machine learning applications.",
  AUTHOR: "Anggun Caksono",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Featured Projects",
  DESCRIPTION: "Production applications, capstone systems, and open-source software.",
}

// Certifications Page
export const CERTIFICATIONS: Page = {
  TITLE: "Certifications",
  DESCRIPTION: "Professional credentials, cloud specializations, and industry courses.",
}

// Skills Page
export const SKILLS: Page = {
  TITLE: "Technical Skills",
  DESCRIPTION: "Languages, frameworks, cloud services, and development tools.",
}

// Contact Page
export const CONTACT: Page = {
  TITLE: "Get in Touch",
  DESCRIPTION: "Send a message or connect for engineering roles and contracts.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home",
    ICON: "iconamoon--home-light",
    HREF: "/", 
  },
  { 
    TEXT: "Projects", 
    ICON: "fluent--apps-32-regular",
    HREF: "/projects", 
  },
  { 
    TEXT: "Skills", 
    ICON: "ri--code-box-line",
    HREF: "/skills", 
  },
  { 
    TEXT: "Certifications", 
    ICON: "tabler--certificate",
    HREF: "/certifications", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "anggun@cakson.my.id",
    HREF: "mailto:anggun@cakson.my.id",
  },
  { 
    NAME: "GitHub",
    ICON: "github",
    TEXT: "alrescha79-cmd",
    HREF: "https://github.com/alrescha79-cmd"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Anggun Caksono",
    HREF: "https://www.linkedin.com/in/angguncaksono",
  },
]

// Experience
export const EXPERIENCE: Experience = [
  {
    COMPANY: "PT WINNICODE GARUDA TEKNOLOGI",
    ROLE: "Full-Stack Developer Intern",
    DURATION: "Aug 2024 – Dec 2024",
    DESCRIPTION: "Engineered a full-stack news portal with Astro, React, Tailwind CSS, Node.js, Express, and Firebase. Implemented content management dashboard, authentication, real-time database, and hosting."
  },
  {
    COMPANY: "Bangkit Academy 2024 (Google, GoTo, Traveloka)",
    ROLE: "Cloud Computing Path & Entrepreneurship Track",
    DURATION: "Feb 2024 – Jul 2024",
    DESCRIPTION: "Completed intensive Google-led cloud architecture program. Gained expertise in GCP infrastructure, containerization, microservices, and Agile product development."
  },
  {
    COMPANY: "MIRA (Mitra Radiologi Capstone Startup)",
    ROLE: "Cloud Architect & Lead Backend Developer",
    DURATION: "May 2024 – Jul 2024",
    DESCRIPTION: "Architected GCP cloud infrastructure and CI/CD deployment pipelines for a PACS radiology integration capstone. Developed Express.js REST APIs, Firebase auth/DB services, and React admin dashboard. Secured incubator funding from Google."
  },
  {
    COMPANY: "Freelance Software Engineering",
    ROLE: "Full-Stack Developer",
    DURATION: "Nov 2022 – Present",
    DESCRIPTION: "Delivered web applications for clients using TypeScript, Node.js, Go, PHP/Laravel, MongoDB, PostgreSQL, and cloud deployments."
  },
]

