import React, { useState } from "react";
import skill from "../assets/skill.png";
import certificate from "../assets/certificates.png";
import experience from "../assets/experience.png";
import project from "../assets/project.png";
import hobbies from "../assets/hobbies.jpg";
import contact from "../assets/contact.png";
import positive from "../assets/positive.png";
import { Link } from "react-router-dom";
const MainPage = ({ username }) => {
  const bgImagesTop = [experience, certificate, project, skill];
  const bgImagesBottom = [positive, hobbies, contact];

  const [topItems] = useState([
    "experience",
    "certificate",
    "projects",
    "skills",
  ]);
  const [bottomItems] = useState(["Positives", "hobbies", "contact_me"]);

  return (
    <div className="w-screen bg-black flex flex-col ">
      <div className="bg-gray-300 pt-29 w-screen ">
        <div className=" text-black p-6 shadow-lg max-w-screen  flex-col align-bottom">
          <p className="text-3xl">Vishnu R Kumar</p>
          <p className="text-lg text-gray-700 mb-3">
            Entry-Level Front-End Developer
          </p>
          <p className="text-sm sm:text-base text-gray-800 w-full sm:w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            amet sint consequatur quibusdam asperiores illum, debitis, non
            veniam earum eos vero reiciendis in doloremque quo ullam corrupti
            nisi minima soluta! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quidem magni porro, rem assumenda quam vitae
            maiores, perspiciatis earum tempora quos adipisci fuga iusto!
            Deleniti doloribus facilis minus, amet officia voluptatibus?
          </p>

          <div className="flex gap-5 mt-3 ">
            <button className="bg-white  text-black rounded px-4 py-2 w-[150px] shadow-md hover:bg-gray-200 text-[20px] cursor-pointer">
              ▶️ Resume
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vishnu-r-kumar66",
                  "_blank"
                )
              }
              className="bg-black/50 text-white text-xl w-[150px] rounded px-4 py-2 shadow-md text-[20px] hover:bg-gray-700 cursor-pointer"
            >
              ⓘ LinkedIn
            </button>
          </div>
        </div>
      </div>
      <div className="m-2 w-screen text-white mt-[20px] text-2xl">
        <p>{`Today's Top Picks for ${username}`}</p>
        <div className="flex  flex-wrap m-7 gap-4">
          {topItems.map((item, index) => (
            <Link to={`/${item}`}>
              <div
                key={index}
                className={` h-[190px] w-[200px] flex items-center justify-center rounded cursor-pointer  hover:shadow-lg hover:shadow-red-600 transition-all duration-400 `}
                style={{
                  backgroundImage: `url(${
                    bgImagesTop[index % bgImagesTop.length]
                  })`,
                  backgroundSize: "cover",
                }}
              >
                <p className="bg-gray-900/60 text-[15px] rounded p-2">{item}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-2 w-screen text-white  text-2xl">
        <p>{`Continue Watching for ${username}`}</p>
        <div className="flex flex-wrap m-[18px]  gap-7">
          {bottomItems.map((item, index) => (
            <Link to={`/${item}`}>
              <div
                key={index}
                className={` h-[200px] w-[200px] flex items-center justify-center rounded cursor-pointer  hover:shadow-lg hover:shadow-red-600 transition-all duration-400 `}
                style={{
                  backgroundImage: `url(${
                    bgImagesBottom[index % bgImagesBottom.length]
                  })`,
                  backgroundSize: "cover",
                }}
              >
                <p className="bg-gray-900/60 text-[15px] rounded p-2">{item}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
