import projet1 from "/assets/projects/projet1.png";
import projet1_1 from "/assets/projects/projet1.1.png";
import project2 from "/assets/projects/project-2.jpg";
import project3 from "/assets/projects/project-3.jpg";

export const HERO_CONTENT = `Je suis un développeur web passionné, spécialisé dans la création d'applications intuitives et performantes. Grâce à mes expériences avec des technologies comme React, PHP, et SQL, je m'efforce de proposer des solutions modernes et efficaces. Toujours à la recherche de nouveaux défis, j'aspire à développer des applications qui allient performance et expérience utilisateur de qualité.`;

export const MOTIVATION = 'Autonome et motivé, je suis toujours à la recherche de nouveaux défis pour continuer à apprendre et à évoluer en tant que développeur. Explorez mes projets pour découvrir mon parcours et mes compétences ! 👇';

export const ABOUT_TEXT = `Développeur web en formation, j'ai acquis des compétences dans divers langages et frameworks tels que HTML/CSS, PHP, Java et Symfony. Mon intérêt actuel se tourne vers React, où je m'efforce d'approfondir mes connaissances pour concevoir des interfaces dynamiques. Mon parcours est guidé par une curiosité technique et une volonté d'apprendre constamment. J'apprécie de travailler en équipe et de résoudre des problèmes complexes. En dehors du développement, je pratique le Street Lifting, une activité qui m'a appris rigueur, discipline et persévérance.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2025",
    role: "BTS SIO SLAM",
    company: "Lycée Gabriel Fauré - Annecy",
    description: `Développement web (PHP, Symfony, Java), base de données, projets en autonomie, travail en équipe.`,
    technologies: ["PHP", "Symfony", "MySQL", "Tailwind CSS", "Wordpress", "Java"],
  },
  {
    year: "2022 - 2023",
    role: "BUT Informatique (1ère année)",
    company: "IUT Annecy",
    description: `Premiers projets en développement, bases d'algorithmie, C#, introduction aux bases de données.`,
    technologies: ["C#", "SQL", "Python", "PHP", "Réseau"],
  },
  {
    year: "2021 - 2022",
    role: "BAC STI2D SIN",
    company: "Lycée Jules Verne - Cergy",
    description: `Projet technique en électronique et programmation, approche réseau.`,
    technologies: ["Arduino", "Raspberry Pi", "HTML/CSS"],
  }
]


export const PROJECTS = [
  {
    title: "La Brasserie des Grottes",
    images: [
    projet1,
    projet1_1
    ],
    description:
      "Site web responsive développé pour un restaurant. Création de l'interface utilisateur, présentation des menus. Optimisé pour le référencement.",
    technologies: ["React", "Tailwind CSS", "NextJS", "Strapi", "Apache"],
    code: "https://github.com/Whitos/LaBrasseriedesGrottes",
    demo: "https://labrasseriedesgrottes.fr/"
  },
  {
    title: "Task Management App",
    images: [project2],
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    code: "https://github.com/Whitos/LaBrasseriedesGrottes",
    demo: "https://labrasseriedesgrottes.fr/"
  },
  {
    title: "Portfolio Website",
    images: [project3],
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    code: "https://github.com/Whitos/LaBrasseriedesGrottes",
    demo: "https://labrasseriedesgrottes.fr/"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "pavel.tsanev@lycee-faure.fr",
  code: "https://github.com/Whitos/LaBrasseriedesGrottes",
  demo: "https://labrasseriedesgrottes.fr/"
};
