import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import img from "/appu.jpg";
const Contact = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center pt-6 ">
      <div className=" rounded-lg  max-w-[500px] p-4 bg-gray-800">
        <div className="p-2 flex items-center justify-between">
          <div>
            <p className="text-[26px] ">Vishnu R Kumar</p>
            <p className="text-gray-300">Front End developer</p>
            <p className="text-[11px] w-52 pt-2 text-gray-400 ">
              Passionate about building web applications and solving real-world
              problems with technology.
            </p>
            <a
              href="https://www.linkedin.com/in/vishnu-r-kumar66"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 flex items-center justify-center hover:scale-105 hover:bg-blue-700 cursor-pointer mt-2 rounded w-32 p-2 transition duration-300"
            >
              <FaLinkedin className="mr-2 text-[20px] text-white" />
              LinkedIn
            </a>
          </div>
          <div className="w-[90px] h-[90px] ">
            <img src={img} className="rounded-full ml-3" />
          </div>
        </div>
      </div>

      <div className="p-4 text-center mt-4">
        <p className=" text-[18px]">
          I'm always up for a chat or a coffee! Feel free to reach out.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vishnurkumar66@gmail.com"
          className="bg-gray-700 p-2 rounded m-auto mt-4  flex hover:text-red-500 w-fit transition duration-300"
        >
          <FaEnvelope className="mr-2  text-[27px] text-red-500" />
          vishnurkumar66@gmail.com
        </a>

        <p className=" mt-2">
          <a href="tel:+919895010782" className="underline hover:text-red-500">
            +91 9895010782
          </a>
        </p>
      </div>
    </div>
  );
};
export default Contact;
