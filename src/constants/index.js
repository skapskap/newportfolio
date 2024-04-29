import {
  backend,
  web,
  frontend,
  golang,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  docker,
  go,
  uff,
  codementor,
  master,
  python,
  django,
  postgres,
  nextjs,
  harmony,
  snippaws,
  bonapettite,
  alphasquad,
  devhive,
  setimavenida,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Golang Enthusiast",
    icon: golang,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Intern",
    company_name: "Master School",
    icon: master,
    iconBg: "#383E56",
    date: "Jan 2017 - Oct 2017",
    points: [
      "Support for teachers in teaching the Office Suite (Word, Excel, Access) and Web Development (HTML, CSS, JavaScript)",
      "Assistance to students outside of class hours for their school projects.",
      "Listing absentees and calling them to record in the course system and on a manual spreadsheet.",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "UFF - Federal Fluminense University",
    icon: uff,
    iconBg: "#383E56",
    date: "Jun 2021 - Jan 2022",
    points: [
      "Created flashcards in spaced repetition system to assist students’ studies using the Anki tool. Used CSS to change the structure and styling of the cards",
      "Built the histological atlas in Wordpress for teaching and study aid for Veterinary Medicine students at UFF.",
      "Presented my tutoring project talking about SRS and how it was applied to assist in the learning of histological tissues.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "CodeMentor",
    icon: codementor,
    iconBg: "#383E56",
    date: "Ago 2023 - Current",
    points: [
      "Developed back-end applications (Restful APIs) using Django and Django REST Framework with integration to PostgreSQL database",
      "Dockerized applications for easy development and deployment, wrote documentation to assist the front-end squad development",
      "Actively participate in programming logic and technical challenges resolution of the team, using Github Projects and the Scrum framework for team organization.",
    ],
  },
];

const projects = [
  {
    name: "DevHive",
    description:
      "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    tags: [
      {
        name: "nextjs",
        color: "black-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: devhive,
    source_code_link: "https://github.com/skapskap/devhive",
  },
  {
    name: "Sétima Avenida",
    description:
      "Dynamic real estate app that simplifies the process of buying, renting, and selling properties. Users can effortlessly search for homes based on location, price, and features, while also having the ability to make inquiries directly through the app.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "django templates",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL ",
        color: "blue-text-gradient",
      },
    ],
    image: setimavenida,
    source_code_link: "https://github.com/skapskap/SetimaAvenida",
  },
  {
    name: "Harmony",
    description:
      "Web-based hotel business that allows employees to create cabins, make and validate bookings, register new staff members and see statistics, providing a convenient and efficient solution for the business needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "styled components",
        color: "pink-text-gradient",
      },
    ],
    image: harmony,
    source_code_link: "https://github.com/skapskap/harmony",
  },
  {
    name: "Snippaws",
    description:
      "Dynamic and user-friendly web application designed for users to store, manage, and share text snippets efficiently.",
    tags: [
      {
        name: "Go",
        color: "blue-text-gradient",
      },
      {
        name: "Go Templates",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "orange-text-gradient",
      },
    ],
    image: snippaws,
    source_code_link: "https://github.com/skapskap/snippaws",
  },
  {
    name: "Bonapettite",
    description:
      "Beautiful landing page made for Pizzaria Bonapettite, a restaurant located in the city of Itaboraí, Brazil.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: bonapettite,
    source_code_link: "https://github.com/skapskap/pizzaria-bonapettite",
  },
  {
    name: "Alpha Squad",
    description:
      "Project created with the main goal of managing all the members of CodeMentor. As a staff member, I collaborated in creating the main features of the project backend, including dockerizing it and coding the squads endpoints.",
    tags: [
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Django Rest Framework",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: alphasquad,
    source_code_link: "",
  },
];

export { services, technologies, experiences, projects };
