import React from "react";
import std from "../assets/std.png";
import { FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      pic: std,
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
