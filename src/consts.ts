import type { Site, Page, Links, Socials } from "./types"

// Global
export const SITE: Site = {
  TITLE: "Anggun Caksono",
  DESCRIPTION: "Saya adalah front-end developer yang berfokus pada pengembangan aplikasi web dan saat ini sedang menjalani program studi independen di Bangkit Academy 2024.",
  AUTHOR: "Anggun Caksono",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Work Page
export const CERTIFICATIONS: Page = {
  TITLE: "Certifications",
  DESCRIPTION: "A list of certifications I have acquired over the years.",
}

// Blog Page
export const SKILLS: Page = {
  TITLE: "Skills",
  DESCRIPTION: "A list of skills I have acquired over the years.",
}



// Search Page
export const CONTACT: Page = {
  TITLE: "Contact Me",
  DESCRIPTION: "Get in touch with me.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Skills", 
    HREF: "/skills", 
  },
  { 
    TEXT: "Certifications", 
    HREF: "/certifications", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "caksonoanggun@gmail.com",
    HREF: "mailto:caksonoanggun@gmail.com",
  },
  { 
    NAME: "Github",
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

