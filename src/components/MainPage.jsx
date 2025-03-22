import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import skill from "../assets/skill.png";
import certificate from "../assets/certificates.png";
import experience from "../assets/experience.png";
import project from "../assets/project.png";
import hobbies from "../assets/hobbies.jpg";
import contact from "../assets/contact.png";
const MainPage = ({username}) => {
  const navigation = [
    { name: "home", href: "#", current: false },
    { name: "professional", href: "#", current: false },
    { name: "skills", href: "#", current: false },
    { name: "projects", href: "#", current: false },
    { name: "Hire Me", href: "#", current: false },
    { name: "Log Out", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const bgImages = [skill, experience, certificate, project, hobbies, contact];

  const [topItems] = useState([
    "skills",
    "experience",
    "certificates",
    "projects",
    "hobbies",
    "contact me",
  ]);

  return (
    <div className="w-screen bg-black flex flex-col ">
      <Disclosure as="nav" className="bg-black  fixed w-screen">
        <p className="text-red-700 fixed top-[18px] left-3 font-bold text-lg">
          VRK
        </p>

        <div>
          <div className="relative  flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex  sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton
                className="group m-3 rounded-md p-2 text-white  w-[40px]
              h-[40px] hover:bg-gray-600 hover:text-white"
              >
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden "
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>

            <div className="  sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="font-sans ml-7">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 "
                          : "text-gray-300 hover:text-red-600 ",
                        " ml-5 p-2   "
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div>
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? "" : "text-white hover:text-red-700 ",
                  " block p-2"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <div className="bg-gray-300 pt-28 w-screen ">
        <div className=" text-black p-6 shadow-lg max-w-screen  flex-col align-bottom">
          <p className="text-3xl">Vishnu R Kumar</p>
          <p className="text-lg text-gray-700 mb-3">
            Entry-Level Front-End Developer
          </p>
          <p className="text-sm sm:text-base text-gray-800 w-full sm:w-[90%]">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sint consequatur quibusdam asperiores illum, debitis, non veniam earum eos vero reiciendis in doloremque quo ullam corrupti nisi minima soluta!
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem magni porro, rem assumenda quam vitae maiores, perspiciatis earum tempora quos adipisci fuga iusto! Deleniti doloribus facilis minus, amet officia voluptatibus?
          </p>

          <div className="flex gap-5 mt-3 ">
            <button className="bg-white  text-black rounded px-4 py-2 w-[150px] shadow-md hover:bg-gray-200 cursor-pointer">
              ▶️ Resume
            </button>
            <button className="bg-black/50 text-white text-xl w-[150px] rounded px-4 py-2 shadow-md hover:bg-gray-700 cursor-pointer">
              ⓘ LinkedIn
            </button>
          </div>
        </div>
      </div>
      <div className="m-2 w-screen text-white mt-[20px] text-2xl">
        <p>{`Today's Top Picks for ${username}`}</p>
        <div className="flex  flex-wrap m-7 gap-4">
          {topItems.map((item, index) => (
            <div
              key={index}
              className={` h-[150px] w-[150px] flex items-center justify-center rounded cursor-pointer  hover:shadow-lg hover:shadow-red-600 transition-all duration-400 `}
              style={{
                backgroundImage: `url(${bgImages[index % bgImages.length]})`,
                backgroundSize: "cover",
              }}
            >
              <p className="bg-gray-900/60 text-[15px] rounded p-2">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2 w-screen text-white  text-2xl">
        <p>Continue Watching for Recruiter</p>
        <div className="flex flex-wrap m-[18px]  gap-7">
          {topItems.map((item, index) => (
            <div
              key={index}
              className={` h-[150px] w-[150px] flex items-center justify-center rounded cursor-pointer  hover:shadow-lg hover:shadow-red-600 transition-all duration-400 `}
              style={{
                backgroundImage: `url(${bgImages[index % bgImages.length]})`,
                backgroundSize: "cover",
              }}
            >
              <p className="bg-gray-900/60 text-[15px] rounded p-2">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
