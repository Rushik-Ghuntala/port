import { Github, Twitter, LinkedinIcon } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";
// import LogoPropelius from '/public/images/logos/logo-propelius.svg';
import LogoPropelius from "/public/images/logos/logo-propelius.png";
import LogoVrije from "/public/images/logos/logo-vrije.png";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";

import ProjectTixId from "/public/images/project-tixid.png";
import ProjectStudyNotion from "/public/images/project-studynotion.png";
import ProjectBDRPS from "/public/images/project-bdrps.png";
import ProjectGreenity from "/public/images/project-greenity.png";
import ProjectDocGPT from "/public/images/project-docgpt.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/Rushik-Ghuntala",
  GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
  TWITTER: "https://twitter.com/shahsagarm",
  FIGMA: "https://www.figma.com/@shahsagarm",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/Rushik-Ghuntala",
  },
  // {
  //   icon: Twitter,
  //   url: "https://twitter.com/shahsagarm",
  // },
  {
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/rushik-ghuntala-4a165222a/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoPropelius,
    logoAlt: "Propelius logo",
    position: "Software Development Engineer - I",
    startDate: new Date(2024, 0),
    currentlyWorkHere: true,
    summary: [
      "Proficient in technologies including React, Next.js, TypeScript, Express.js, PostgreSQL, Tailwind CSS, Material-UI, Next UI, Firebase, Storybook, and others.",
      "Managed and contributed to over 5 live projects simultaneously.",
      "Responsible for maintaining and managing repositories for all assigned projects.",
    ],
  },
  {
    logo: LogoVrije,
    logoAlt: "Greenapex logo",
    position: "Research Internship",
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 6),
    summary: [
      "Developed a Web and Blockchain-based Decentralized Research Publishing System (B-DRPS) addressing bias in reviews and enhancing reviewer anonymity.",
      "Implemented user authentication with MetaMask and integrated IPFS for manuscript submissions, ensuring secure and decentralized storage.",
      "Authored a research paper using the Overleaf platform for detailed documentation of the project's innovations and methodologies.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "StudyNotion",
    description:
      "StudyNotion is a versatile and intuitive ed-tech platform that is designed to provide an immersive learning experience to students and a platform for instructors to showcase their expertise. StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
    url: "https://studynotion-rushik-ghuntala.vercel.app/",
    previewImage: ProjectStudyNotion,
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Styled Components",
      "Redux Toolkit",
      "Cloudinary",
      "Razorpay Payment Gateway",
    ],
  },
  {
    name: "TIX ID",
    description:
      "TIX-ID is developing a user-friendly movie ticket booking app for seamless online ticket purchases. Key features include movie browsing, showtime selection, seat choice, and secure payments. User authentication ensures access to booking features, with rigorous testing ensuring reliability. The aim is to enhance convenience and accessibility in entertainment with a streamlined ticket booking experience.",
    url: "https://tix-id-chi.vercel.app/",
    previewImage: ProjectTixId,
    technologies: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Express.js",
      "PostgreSQL",
      "Node.js",
    ],
  },
  {
    name: "Blockchain-based Decentralized Research Publishing System (B-DRPS)",
    description:
      "The project outlined in the introduction is a blockchain-based solution aimed at revolutionizing the traditional peer-review system used in academic publishing. The current centralized approach faces significant challenges, including the risk of impersonation, biased reviewing, slow review processes, and a lack of transparency. To address these issues, the project leverages blockchain technology, which offers inherent immutability, traceability, and transparency.",
    url: "https://pepehousing.com",
    previewImage: ProjectBDRPS,
    technologies: [
      "Solidity",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Ganache",
      "Truffle",
      "MetaMask",
      "Web3",
      "IPFS",
    ],
  },
  {
    name: "Greenity - A Unity Make India Greener",
    description:
      "Led front-end development for Greenity, connecting citizens and municipalities through event-based tree planting for urban greenery. Designed 15+ screens and managed front-end and back-end tasks, including CRUD operations in Firebase, QR code generation, data retrieval via QR scanning and bug resolution. Presented the app with a team of 5 at the SSIP-Gujarat Hackathon, advancing to the Final round.",
    url: "https://tix-id-chi.vercel.app/",
    previewImage: ProjectGreenity,
    technologies: ["Dart", "Flutter", "Firebase"],
  },
  {
    name: "Doc - GPT",
    description:
      "Created Doc-GPT where users can upload a document file and ask questions related to the document. The system provides answers based on the content of the document.",
    url: "https://tix-id-chi.vercel.app/",
    previewImage: ProjectDocGPT,
    technologies: ["Dart", "Flutter", "Firebase", "Python", "Machine Learning"],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
