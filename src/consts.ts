import type { Site, Page, Links, Socials, Experience } from "./types"

// Global
export const SITE: Site = {
  TITLE: "Anggun Caksono",
  DESCRIPTION: "An enthusiastic Informatics Engineering student and experienced Fullstack Developer, I'm an alum of Bangkit Academy 2024 with skills in web, mobile app development, and cloud computing. Proficient in React, Node.js, Google Cloud Platform, and Agile methodologies, I was also selected for Bangkit’s Entrepreneur Track, where I gained hands-on startup experience. Open to opportunities in software development and cloud technology, I am ready to contribute my technical expertise to innovative projects.",
  AUTHOR: "Anggun Caksono",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Certifications Page
export const CERTIFICATIONS: Page = {
  TITLE: "Certifications",
  DESCRIPTION: "A list of certifications I have acquired over the years.",
}

// Skills Page
export const SKILLS: Page = {
  TITLE: "Skills",
  DESCRIPTION: "A list of skills I have acquired over the years.",
}



// Contact Page
export const CONTACT: Page = {
  TITLE: "Get in touch",
  DESCRIPTION: "Get in touch with me.",
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

// experience
export const EXPERIENCE: Experience = [
  {
    COMPANY: "Internship at PT. WINNICODE GARUDA TEKNOLOGI",
    ROLE: "Full Stack Developer",
    DURATION: "August, 2024 - December, 2024",
    DESCRIPTION: "Developed a full-stack news portal using a modern tech stack including Astro, React, Tailwind CSS, Node.js, Express.js, and Firebase. The project features a user-friendly frontend, a robust backend, and an admin dashboard for content management. Leveraged Firebase for authentication, database, and hosting."
  },
  {
    COMPANY: "MSIB Bangkit Academy 2024",
    ROLE: "Cloud Computing Learning Path",
    DURATION: "February 16, 2024 - July 17, 2024",
    DESCRIPTION: "Bangkit Academy is an initiative led by Google to prepare Indonesian students to become experts in cloud computing. The program offers a comprehensive curriculum, combining theory with practice, and provides opportunities for participants to hone their skills in building and managing cloud infrastructure."
  },
  {
    COMPANY: "MIRA (Mitra Radiologi)",
    ROLE: "Capstone Project and Funding Initiative for a Startup with Support from Google.",
    DURATION: "May 20, 2024 - July 17, 2024",
    DESCRIPTION: "MIRA (Mitra Radiologi) is a Capstone Project aimed at revolutionizing radiology services through the seamless integration of Picture Archiving and Communication System (PACS) technology. My team and I developed this project with the goal of securing funding from Google to establish it as a startup. In this project, I was responsible for setting up the cloud infrastructure on Google Cloud Platform (GCP), preparing a CI/CD pipeline for seamless deployment, serving as a backend developer by creating APIs using Express JS, configuring databases and other services in Firebase, and developing the admin dashboard front end using React JS."
  },
  {
    COMPANY: "Freelance",
    ROLE: "Full Stack Developer",
    DURATION: "November 2022 - Present",
    DESCRIPTION: "I have been working as a freelance full stack developer for more than a year. I have worked on a variety of projects, ranging from simple static websites to complex web applications. I have experience with a wide range of technologies, including HTML, CSS, JavaScript, TypeScript React, Next, Node.js, Express, PHP, Laravel, MongoDB, Supabase and Firebase."
  },
]

