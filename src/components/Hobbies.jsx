import React from "react";
import {
  FaDumbbell,
  FaFutbol,
  FaMusic,
  FaPuzzlePiece,
  FaPython,
} from "react-icons/fa";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Leetcode",
      duration: "2 hour weekly",
      icon: <FaPuzzlePiece className="text-indigo-500 " />,
    },
    {
      title: "GYM",
      duration: "1 hour daily",
      icon: <FaDumbbell className="text-red-600" />,
    },
    {
      title: "DS & A",
      duration: "2 hour weekly",
      icon: <FaPython className="text-yellow-200" />,
    },
    {
      title: "Football",
      duration: "1 hour weekly",
      icon: <FaFutbol className="text-green-200 " />,
    },
    {
      title: "Music",
      duration: "30 min daily",
      icon: <FaMusic className="text-green-600" />,
    },
  ];

  return (
    <div className="w-screen min-h-screen ">
      <div className="p-4 text-3xl flex justify-center">
        <p className="w-fit border-b-2 border-b-red-600 ">Hobbies</p>
      </div>
      <div className=" flex-wrap flex justify-center">
        {hobbies.map((list, index) => (
          <div
            key={index}
            className="w-[140px] h-[140px] bg-gray-900 p-2 m-4 flex flex-col  text-center cursor-pointer hover:scale-105 transition-transform duration-300 rounded shadow-md  hover:shadow-red-600"
          >
            <div className="ml-auto text-[24px] mr-auto mt-3">{list.icon}</div>
            <div className="mt-4 text-[22px]">{list.title}</div>
            <div className="text-[12px] font-mono">{list.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
