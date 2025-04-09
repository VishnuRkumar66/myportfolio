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
      <div
        className="pt-19  bg-black w-screen"
        style={{
          backgroundImage: `url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" text-white p-6 shadow-lg max-w-screen  flex-col align-bottom">
          <p className="text-3xl">Vishnu R Kumar</p>
          <p className="text-md text-gray-200 mb-3">
            Entry-Level Front-End Developer
          </p>
          <p className="text-[13px] sm:text-[14px] text-white   w-fit sm:w-[90%]">
            I'm a self-motivated front-end developer with a Computer Diploma and
            a strong foundation in React, Tailwind CSS, JavaScript, basic
            Knowlegde in python.
            <br />
            After working in the logistics sector, I decided to pursue my
            passion for technology and have since built multiple real-world
            projects to bridge the gap and also continuously working to improve
            my logical reasoning and communication skills.
            <br /> Though I don't have prior experience in a tech job, I bring a
            strong work ethic, a learner's mindset, and a deep commitment to
            leveling up in the IT industry.
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
              className="bg-gray-900 text-white text-xl w-[150px] rounded px-4 py-2 shadow-md text-[20px] hover:bg-gray-700 cursor-pointer"
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
            <Link to={`/${item}`} key={index}>
              <div
                className={`h-[190px] w-[200px] flex items-center justify-center rounded cursor-pointer  hover:shadow-lg hover:shadow-red-600 transition-all duration-400 `}
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
            <Link to={`/${item}`} key={index}>
              <div
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
