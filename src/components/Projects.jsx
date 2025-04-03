import React from "react";

import flip from "../assets/flip.png";
import data from "../assets/data.png";
import port from "../assets/port.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaBootstrap,
  FaReact,
  FaLeaf,
  FaGitSquare,
  FaBolt,
} from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

const Projects = () => {
  const projects = [
    {
      pic: data,
      Name: "Student Database",
      Desc: "Built a website for storing data of students in my class around my diploma Years. This website's frond-end is built using pure HTML and JavaScript. I am in charge for the website's Front end.",
      tools: [
        {
          icon: <FaHtml5 />,
          Name: "HTML",
        },
        {
          icon: <FaCss3Alt />,
          Name: "CSS",
        },
        {
          icon: <FaJs />,
          Name: "JavaScript",
        },
        {
          icon: <FaDatabase />,
          Name: "MySQL",
        },
      ],
    },
    {
      pic: flip,
      Name: "E commerce Website",
      Desc: "Developed an e-commerce website inspired by Flipkart, allowing users to browse products, add items to the cart, and proceed to checkout. The front-end was built using pure HTML, CSS, and JavaScript, ensuring a responsive and user-friendly interface.",
      tools: [
        {
          icon: <FaHtml5 />,
          Name: "HTML",
        },
        {
          icon: <FaCss3Alt />,
          Name: "CSS",
        },
        {
          icon: <FaJs />,
          Name: "JavaScript",
        },
        {
          icon: <FaBootstrap />,
          Name: "Bootstrap",
        },
      ],
    },
    {
      pic: port,
      Name: "Personal Portfolio",
      Desc: "Created a personal portfolio website to showcase my skills, projects, and experience in web development. Designed a clean and responsive UI using React , ensuring smooth navigation and a modern look. Implemented interactive components to enhance user engagement and accessibility.",
      tools: [
        {
          icon: <FaReact />,
          Name: "React",
        },
        {
          icon: <FaLeaf />,
          Name: "Tailwind",
        },
        {
          icon: <TbBrandFramerMotion />,
          Name: "Framer Motion",
        },
        {
          icon: <FaBolt />,
          Name: "Vite",
        },
      ],
    },
    {
      pic: data,
      Name: "Arcade Game",
      Desc: "Developed a collection of 5+ simple arcade games using React+vite. Designed engaging gameplay mechanics and responsive controls for an immersive user experience. Implemented game logic for showcasing my knowledge and creative UI for showcasing my creativity.",
      tools: [
        {
          icon: <FaReact />,
          Name: "React",
        },
        {
          icon: <FaLeaf />,
          Name: "Tailwind",
        },
        {
          icon: <FaBolt />,
          Name: "Vite",
        },
        {
          icon: <FaGitSquare />,
          Name: "GitHub",
        },
      ],
    },
    {
      pic: data,
      Name: "Student Database",
      Desc: "Built a website for storing data of students in my class around my diploma Years. This website's frond-end is built using pure HTML and JavaScript. I am in charge for the website's Front end.",
      tools: [
        {
          icon: <FaHtml5 />,
          Name: "HTML",
        },
        {
          icon: <FaCss3Alt />,
          Name: "CSS",
        },
        {
          icon: <FaJs />,
          Name: "JavaScript",
        },
        {
          icon: <FaDatabase />,
          Name: "MySQL",
        },
      ],
    },
  ];
  return (
    <div className="w-full font-netflix  p-6">
      <p className="text-3xl mb-5 text-center">PROJECTS</p>

      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-2xl w-[350px] min-h-[350px] max-h-[400px] shadow-lg shadow-red-600/40 hover:shadow-red-600/60  flex flex-col cursor-pointer"
          >
            {
              <img
                src={project.pic}
                alt={project.Name}
                className="w-full bg-gray-800 rounded-2xl mb-6 h-[150px]"
              />
            }
            <p className="text-[17px] ml-2 text-red-600">{project.Name}</p>
            <p className="text-[11px] ml-2 font-sans mt-2">{project.Desc}</p>

            <div className="flex flex-wrap gap-2 mt-3 ml-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="p-1 text-[11px] min-w-[60px] bg-gray-800 shadow-md shadow-black/50 text-center flex justify-center items-center font-sans rounded-[6px] hover:scale-105 transition duration-300 hover:bg-red-700"
                >
                  <p className=" text-[15px] mr-1 ">{tool.icon}</p>
                  {tool.Name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
