import React from "react";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaBootstrap,
  FaLeaf,
  FaGitSquare,
  FaBolt,
  FaFileCode,
  FaDatabase,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";
import { FaC, FaT } from "react-icons/fa6";

const Skills = () => {
  const skill = [
    {
      title: "C#",
      pic: <FaC className="text-[25px] text-green-400 " />,
      desc: "High level language",
    },
    {
      title: "ASP.NET Core",
      pic: <FaFileCode className="text-[25px] text-blue-500" />,
      desc: "Cross-platform web framework for C#",
    },
    {
      title: "HTML",
      pic: <FaHtml5 className="text-[25px] text-red-400 " />,
      desc: "Web markup language",
    },
    {
      title: "CSS",
      pic: <FaCss3Alt className="text-[25px] text-blue-400 " />,
      desc: "Styling",
    },
    {
      title: "JavaScript",
      pic: <FaJs className="text-yellow-400 text-[25px]" />,
      desc: "Scripting language",
    },
    {
      title: "Microsoft SQL",
      pic: <FaDatabase className="text-cyan-400 text-[25px]" />,
      desc: "Database language",
    },
    {
      title: "Python",
      pic: <FaPython className="text-yellow-200 text-[25px]" />,
      desc: "Scripting language",
    },
    {
      title: "React",
      pic: <FaReact className="text-cyan-400 text-[25px]" />,
      desc: "Frontend framework",
    },
    {
      title: "Typescript",
      pic: <FaT className="text-cyan-400 text-[25px]" />,
      desc: "high level language",
    },
  ];
  const library = [
    {
      title: "Bootstrap",
      pic: <FaBootstrap className="text-[25px] text-violet-600" />,
      desc: "CSS framework for responsive design",
    },
    {
      title: "ADO.NET",
      pic: <FaDatabase className="text-[25px] text-blue-600" />,
      desc: "Data access technology for database interaction",
    },
    {
      title: "Entity",
      pic: <FaLeaf className="text-[25px] text-green-600" />,
      desc: "ORM framework for efficient data handling in .NET",
    },
    {
      title: "Web API",
      pic: <FaGlobe className="text-[25px] text-sky-600" />,
      desc: "Framework for building RESTful web services",
    },
    {
      title: "Tailwind CSS",
      pic: <FaT className="text-[25px] text-blue-400" />,
      desc: "Utility-first CSS framework",
    },
    {
      title: "Postman",
      pic: <FaPaperPlane className="text-[25px] text-orange-500" />,
      desc: "API testing and debugging tool",
    },
    {
      title: "Git",
      pic: <FaGitSquare className="text-[25px] text-red-500" />,
      desc: "Version control system",
    },
    {
      title: "Vite",
      pic: <FaBolt className="text-[25px] text-yellow-400" />,
      desc: "Fast JavaScript build tool",
    },
  ];

  return (
    <div className="w-screen min-h-screen text-center">
      <div className="flex items-center justify-center p-3">
        <p className="text-2xl w-fit border-b-2 border-b-red-700">Skills</p>
      </div>

      <div className=" flex flex-wrap justify-center">
        {skill.map((list, index) => (
          <div
            key={index}
            className="bg-gray-900 flex flex-col rounded m-3 h-[140px] w-[150px] hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-red-600 shadow-md inset-shadow-sm"
          >
            <div key={index} className="flex justify-center items-center mt-5">
              {list.pic}
            </div>

            <p className="text-[18px] mt-6  font-semibold">{list.title}</p>

            <p className="font-sans mt-1 text-[10px]  text-red-400">
              {list.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center p-3">
        <p className="text-2xl w-fit border-b-2 border-b-red-700">other</p>
      </div>
      <div className=" flex flex-wrap justify-center">
        {library.map((list, index) => (
          <div
            key={index}
            className="bg-gray-900 flex flex-col rounded m-3 h-[140px] w-[150px] hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-red-600 shadow-md inset-shadow-sm"
          >
            <div key={index} className="flex justify-center items-center mt-5">
              {list.pic}
            </div>

            <p className="text-[18px] mt-6  font-semibold">{list.title}</p>

            <p className="font-sans mt-1 text-[10px]  text-red-400">
              {list.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
