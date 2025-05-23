import projet1 from "/assets/projects/projet1.png";
import projet1_1 from "/assets/projects/projet1.1.png";
import project3 from "/assets/projects/project-3.png";
import project3_1 from "/assets/projects/project3.1.png";
import gsb from "/assets/projects/gsb.png";
import gsb1 from "/assets/projects/gsb1.1.png";
import fp from "/assets/projects/fp.png";

export const HERO_CONTENT = `Je suis un développeur web passionné, spécialisé dans la création d'applications intuitives et performantes. Grâce à mes expériences avec des technologies comme React, PHP, et SQL, je m'efforce de proposer des solutions modernes et efficaces. Toujours à la recherche de nouveaux défis, j'aspire à développer des applications qui allient performance et expérience utilisateur de qualité.`;

export const MOTIVATION =
  "Autonome et motivé, je suis toujours à la recherche de nouveaux défis pour continuer à apprendre et à évoluer en tant que développeur. Explorez mes projets pour découvrir mon parcours et mes compétences ! 👇";

export const ABOUT_TEXT = `Actuellement en formation en développement web, je me passionne pour la création d’interfaces modernes, accessibles et performantes. Curieux et rigoureux, je maîtrise plusieurs langages comme PHP, Java et JavaScript, ainsi que des frameworks comme Symfony et React.

Mon intérêt se porte aujourd’hui sur l’écosystème React, que j’explore en profondeur pour concevoir des applications dynamiques et responsives.

Au-delà du code, je suis passionné par le Street Lifting, une discipline exigeante qui m’a appris la rigueur, l’endurance et le goût du dépassement. Ces valeurs m’accompagnent dans chaque projet que je mène.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2025",
    role: "BTS SIO SLAM",
    company: "Lycée Gabriel Fauré - Annecy",
    description: `Développement web (PHP, Symfony, Java), base de données, projets en autonomie, travail en équipe.`,
    technologies: [
      "PHP",
      "Symfony",
      "MySQL",
      "Tailwind CSS",
      "Wordpress",
      "Java",
    ],
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
  },
];

export const PROJECTS = [
  {
    title: "La Brasserie des Grottes",
    images: [projet1, projet1_1],
    description:
      "Site web responsive développé pour un restaurant. Création de l'interface utilisateur, présentation des menus. Optimisé pour le référencement.",
    technologies: ["React", "Tailwind CSS", "NextJS", "Strapi", "Apache"],
    code: "https://github.com/Whitos/LaBrasseriedesGrottes",
    demo: "https://labrasseriedesgrottes.fr/",
  },

  {
    title: "Portfolio Website",
    images: [project3, project3_1],
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    code: "https://github.com/Whitos/Portfolio_Pav",
    demo: "https://www.tsanev.fr/",
  },
];

export const SCHOOL_PROJECTS = [
  {
    title: "GSB Frais",
    images: [gsb, gsb1],
    code: "https://github.com/Portfolio_Pav/GSB_Frais",
    demo: "https://gsb-frais-demo.vercel.app",
    description:
      "Application de gestion des frais pour les visiteurs médicaux, réalisée en BTS SIO avec PHP, MySQL et MVC.",
  },
  {
    title: "GSB Visite",
    images: [],
    code: "https://github.com/Whitos/API-GSB-Visite",
    demo: "#",
    description:
      "Application Android de recommandation d'activités météo-dépendantes, utilisant l'API OpenWeather.",
  },
  {
    title: "Forum Planner",
    images: [fp],
    code: "https://github.com/Whitos/ForumPlanner",
    demo: "#",
    description: "Application de gestion de forums d’entreprise. Les utilisateurs peuvent créer, planifier et interagir autour d'événements internes. Projet fullstack avec une interface soignée et une logique métier solide."
  }
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "pavel.tsanev@lycee-faure.fr",
  code: "https://github.com/Whitos/LaBrasseriedesGrottes",
  demo: "https://labrasseriedesgrottes.fr/",
};
