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
    title: "Experience #1",
    company_name: "Company",
    icon: "aaaa",
    iconBg: "#383E56",
    date: "Date",
    points: ["Points", "Points", "Points", "Points"],
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
