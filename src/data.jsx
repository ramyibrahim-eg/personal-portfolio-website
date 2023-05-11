import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./images/project-1.webp";
import Work2 from "./images/project-2.webp";
import Work3 from "./images/project-3.webp";
import Work4 from "./images/project-4.webp";
import Work5 from "./images/project-5.webp";
import Work6 from "./images/project-6.webp";

import Theme1 from "./images/purple.webp";
import Theme2 from "./images/red.webp";
import Theme3 from "./images/blueviolet.webp";
import Theme4 from "./images/blue.webp";
import Theme5 from "./images/goldenrod.webp";
import Theme6 from "./images/magenta.webp";
import Theme7 from "./images/yellowgreen.webp";
import Theme8 from "./images/orange.webp";
import Theme9 from "./images/green.webp";
import Theme10 from "./images/yellow.webp";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav_icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav_icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav_icon" />,
    path: "/protfolio",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Ramy",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Ibrahim",
  },

  {
    id: 3,
    title: "Age : ",
    description: "31 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Egyptian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Alexandria",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+2011 500 800 61",
  },

  {
    id: 8,
    title: "Email : ",
    description: "support@disgin.website",
  },

  {
    id: 9,
    title: "whatsapp : ",
    description: "+2012 000 50 378",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Arabic, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "3+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "17+",
    title: "Completed <br /> Projects",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html5",
    percentage: "95",
  },

  {
    id: 2,
    title: "Css",
    percentage: "85",
  },

  {
    id: 3,
    title: "Javascript",
    percentage: "77",
  },

  {
    id: 4,
    title: "Jquery",
    percentage: "88",
  },

  {
    id: 5,
    title: "Bootstrap",
    percentage: "87",
  },

  {
    id: 6,
    title: "React",
    percentage: "92",
  },

  {
    id: 7,
    title: "Redux",
    percentage: "87",
  },

  {
    id: 8,
    title: "Git",
    percentage: "76",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        detail: "Project",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        detail: "Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        detail: "Project",
      },
      {
        icon: <FiExternalLink />,
        Prev: "Preview : ",
        links: "https://www.youtube.com/",
        click: "Click Here",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        detail: "Project",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        detail: "Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        detail: "Project",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        links: "https://www.youtube.com/",
        click: "Click Here",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        detail: "Project",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        detail: "Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        detail: "Project",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        links: "https://www.youtube.com/",
        click: "Click Here",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        detail: "Project",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        detail: "Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        detail: "Project",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        links: "https://www.youtube.com/",
        click: "Click Here",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        detail: "Project",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        detail: "Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        detail: "Project",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        links: "https://www.youtube.com/",
        click: "Click Here",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        detail: "Project",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        detail: "Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        detail: "Project",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        links: "https://www.youtube.com/",
        click: "Click Here",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
