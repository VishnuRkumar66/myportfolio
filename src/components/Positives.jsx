import React from "react";
import { FaUserCheck, FaSyncAlt, FaBrain } from "react-icons/fa";
import {
  FaCircleExclamation,
  FaComputerMouse,
  FaHeartCircleCheck,
  FaPersonRunning,
} from "react-icons/fa6";

const Positives = () => {
  const positive = [
    {
      title: "HardWorking",
      pic: <FaPersonRunning className="text-[25px] text-red-500 " />,
    },
    {
      title: "Responsible",
      pic: <FaUserCheck className="text-[25px] text-blue-500 " />,
    },
    {
      title: "Adaptive",
      pic: <FaSyncAlt className="text-yellow-400 text-[25px]" />,
    },
    {
      title: "Logical thinking",
      pic: <FaBrain className="text-rose-300 text-[25px]" />,
    },
    {
      title: "Loyal",
      pic: <FaHeartCircleCheck className="text-orange-400 text-[25px]" />,
    },
  ];
  const negative = [
    {
      title: "No Prior Tech Job",
      pic: <FaCircleExclamation className="text-[25px] text-red-500 " />,
      desc: "I'm actively applying my skills to bridge the gap and transition smoothly into the IT industry.",
    },
    {
      title: "shy for asking help",
      pic: <FaPersonRunning className="text-[25px] text-red-500 " />,
      desc: "Often tries to solve everything on my own. I'm now learning that seeking guidance speeds up progress and helps me grow.",
    },
  ];

  return (
    <div className="w-screen min-h-screen text-center">
      <div className="flex items-center justify-center p-3">
        <p className="text-2xl w-fit border-b-2 border-b-red-700">Positives</p>
      </div>

      <div className=" flex flex-wrap justify-center">
        {positive.map((list, index) => (
          <div
            key={index}
            className="bg-gray-900 flex flex-col rounded m-3 h-[180px] w-[150px]   duration-300 cursor-pointer hover:shadow-red-600/50 shadow-red-500/20 shadow-lg"
          >
            <div key={index} className="flex justify-center items-center mt-8">
              {list.pic}
            </div>

            <p className="text-[18px] mt-9  font-semibold">{list.title}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center p-3">
        <p className="text-2xl w-fit border-b-2 border-b-red-700">Negatives</p>
      </div>
      <div className=" flex flex-wrap justify-center">
        {negative.map((list, index) => (
          <div
            key={index}
            className="bg-gray-900 flex flex-col rounded-2xl m-3 p-3  w-[150px] duration-300 cursor-pointer hover:shadow-red-600/50 shadow-red-500/20 shadow-lg"
          >
            <div key={index} className="flex justify-center items-center mt-1">
              {list.pic}
            </div>

            <p className="text-[18px] mt-2  font-semibold">{list.title}</p>
            <p className="text-[12px] mt-2 mb-2 ">{list.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Positives;
