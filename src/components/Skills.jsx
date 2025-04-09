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
} from "react-icons/fa";

const Skills = () => {
  const skill = [
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
      title: "Python",
      pic: <FaPython className="text-yellow-200 text-[25px]" />,
      desc: "Scripting language",
    },
    {
      title: "React",
      pic: <FaReact className="text-cyan-400 text-[25px]" />,
      desc: "Frontend framework",
    },
  ];
  const library = [
    {
      title: "BootStrap",
      pic: <FaBootstrap className="text-[25px] text-violet-600 " />,
      desc: "CSS library",
    },
    {
      title: "TailWind",
      pic: <FaLeaf className="text-[25px] text-green-800 " />,
      desc: "CSS library",
    },
    {
      title: "GIT",
      pic: <FaGitSquare className="text-[25px] text-green-500 " />,
      desc: "Version control System",
    },
    {
      title: "Vite",
      pic: <FaBolt className="text-[25px] text-violet-700 " />,
      desc: "Javascript build tool",
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
