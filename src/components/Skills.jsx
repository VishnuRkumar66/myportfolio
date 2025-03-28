import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";

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
      pic: <FaReact className="text-blue-500 text-[25px]" />,
      desc: "Frontend framework",
    },
    {
      title: "React",
      pic: <FaReact className="text-blue-500 text-[25px]" />,
      desc: "Frontend framework",
    },
    {
      title: "React",
      pic: <FaReact className="text-blue-500 text-[25px]" />,
      desc: "Frontend framework",
    },
  ];

  return (
    <div className="w-screen text-center">
      {/* Section Title */}
      <div className="flex items-center justify-center p-3">
        <p className="text-2xl w-fit border-b-2 border-b-red-700">Skills</p>
      </div>

      {/* Skills Grid */}
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
    </div>
  );
};

export default Skills;
