import React from "react";
import { FaConnectdevelop, FaDhl, FaGoogle, FaYoutube } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

const Certificates = () => {
  const certificates = [
    {
      title: "THSLC",
      pic: <FaBuildingColumns className="text-[25px] text-blue-600" />,
      desc: "Technical education department of Kerala",
    },
    {
      title: "Computer Diploma",
      pic: <FaBuildingColumns className="text-[25px] text-blue-600" />,
      desc: "NSS Polytechnic college, Pandalam",
    },
    {
      title: "Front End Developer",
      pic: <FaConnectdevelop className="text-[25px] text-violet-600" />,
      desc: "I-NET infotech",
    },
    {
      title: "Operation assistance",
      pic: <FaDhl className="text-[40px] text-yellow-500" />,
      desc: "DHL - Bluedart",
    },
    {
      title: "ReactJS Framework",
      pic: <FaGoogle className="text-[25px] text-green-400" />,
      desc: "W3schools,Stack overflow",
    },
    {
      title: "Python language",
      pic: <FaYoutube className="text-[25px] text-red-600" />,
      desc: "Code with Mosh Programming",
    },
  ];

  return (
    <div className="w-screen min-h-screen text-center">
      <div className="flex items-center justify-center p-3 sm:p-6">
        <p className="text-2xl w-fit border-b-2 border-b-red-700">
          Certificates
        </p>
      </div>

      <div className="flex flex-wrap gap-8  justify-center">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 text-left p-4 flex flex-col rounded-2xl h-[190px] min-w-[250px] cursor-pointer shadow-lg shadow-red-500/50 hover:shadow-red-600 duration-300  "
          >
            <div className="mt-3 ml-3" aria-hidden="true">
              {item.pic}
            </div>
            <p className="text-[18px] mt-6 font-extrabold">{item.title}</p>
            <p className="font-mono max-w-[220px] mt-3 text-[13px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
