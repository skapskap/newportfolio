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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  uff,
  codementor,
  master,
  harmony,
  threejs,
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
    title: "Golang Aficionado",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
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

const testimonials = [
  {
    testimonial: "Testimony #1",
    name: "Lalala",
    designation: "Designation",
    company: "Comapny",
    image: "URL",
  },
];

const projects = [
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
