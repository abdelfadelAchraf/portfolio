import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaHtml5,
  FaJs,
  FaReact,
 
} from "react-icons/fa6";

import { RiNodejsFill, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiExpress, SiMongodb, SiTails, SiTypescript } from "react-icons/si";
import { FaAngular, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";



export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  //{ label: "Award", href: "#award" },
 // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Achraf Abdelfadel",
  info: "Engineering Student @ ENSAB, interesting in Web Dev.",
};
export const CERTIFICATIONS =[
  {
    logo: <FaReact/>,
    name:"React Js",
    ref:"https://www.react.com/",
  },
  {
    logo: <FaPython/>,
    name:"React Js",
    ref:"https://www.react.com/",
  },
  {
    logo: <FaJava/>,
    name:"React Js",
    ref:"https://www.react.com/",
  },
  {
    logo: <FaReact/>,
    name:"React Js",
    ref:"https://www.react.com/",
  },
]
export const ABOUT = {
  text1:
    (
      <>
      Engineering Student @ <span className="text-yellow-500">ENSAB</span> | CEC  <span className="text-yellow-500">Designer</span>| Web  <span className="text-yellow-500">Developer</span>
      </>
    ),
  text2:(
    <>
      As a first-year student in the engineering cycle at ENSAB, I am embarking on an exciting journey to blend technology with creativity.<br/>
    At the  <span className="text-yellow-500 font-bold">CEC</span> Computer Engineering Club, I collaborate on a variety of creative and technical projects, helping organize and promote events while honing my design and problem-solving skills.<br/>
    Passionate about teamwork, innovation, and continuous personal growth, I aim to combine my design expertise with engineering knowledge to build impactful web solutions.<br/>
     I'm always ready to tackle new challenges, grow through collaboration, and push the boundaries of what's possible.<br/>
    </>
  ),
};

export const PROJECTS = [ {
    title: "An E-commerce website ",
    description:
      "An E-commerce website using the MERN stack Tech",
    image: image2,
    link:"https://github.com/abdelfadelAchraf/E-commerce-website",
    btnContent:"View on GitHub"

  },
  {
    title: "Personel portfolio",
    description:
      "A full  platform built with React,Js Tailwinds, &nd framer motion.",
    image: image1,
    link:"https://github.com/abdelfadelAchraf/portfolio",
    btnContent:"View on GitHub"
  },
  {
    title: "Recipe AI generator ",
    description:
      "A full  platform built with MERN stack + AI to generate delicious Recipes.",
    image: image3,
    link:"https://github.com/abdelfadelAchraf/Recipe_Generator",
    btnContent:"Comming soon..."
  },
 
 
 
];

  export const SKILLS = [
    {
      icon: <FaHtml5 className="text-4xl lg:text-6xl text-white" />,
      name: "HTML5",
      // level: "Intermediate",
    },
    {
      icon: <FaCss3 className="text-4xl lg:text-6xl text-white" />,
      name: "CSS3",
      // level: "Intermediate",
    },
    {
      icon: <FaJs className="text-4xl lg:text-6xl text-white" />,
      name: "JavaScript",
      // level: "Intermediate",
    },
    {
      icon: <SiTypescript className="text-4xl lg:text-6xl text-white" />,
      name: "Typescript",
      // level: "Intermediate",
    },
    {
      icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
      name: "React",
      // level: "intermediate",
    },
    {
      icon: <RiTailwindCssLine className="text-4xl lg:text-6xl text-cyan-400" />,
      name: "tailwindcss",
      // level: "intermediate",
    },
    {
      icon: <RiNodejsFill className="text-4xl lg:text-6xl text-cyan-400" />,
      name: "Nodejs",
      // level: "intermediate",
    },
    {
      icon: <SiMongodb className="text-4xl lg:text-6xl text-cyan-400" />,
      name: "MongoDb",
      // level: "intermediate",
    },
    {
      icon: <SiExpress className="text-4xl lg:text-6xl text-cyan-400" />,
      name: "Express",
      // level: "intermediate",
    },
  ];
  
  


export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};
/*     
export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];
*/
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/abdelfadel achraf",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  /*{
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },*/
  {
    href: "https://instagram.com/Hraf1010",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/abdelfadelHraf",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/abdelfadelAchraf",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/achraf-abdelfadel-6b67282a6/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
