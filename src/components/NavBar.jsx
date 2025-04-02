import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigation = [
    { name: "Home", href: "/myportfolio" },
    { name: "Timeline", href: "/Timeline" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Hire Me", href: "/contact" },
  ];

  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-black fixed w-screen z-50 h-16">
      {({ open, close }) => (
        <>
          <p className="text-red-700 flex  fixed left-3 font-bold pt-2 text-[30px] h-16">
            VRK
          </p>

          <div className="relative flex h-16 items-center ml-3 justify-between px-4">
            <div className="absolute inset-y-0 right-0 flex sm:hidden">
              <DisclosureButton className="group m-3 rounded-md p-2 text-white w-[40px] h-[40px] hover:bg-gray-600 hover:text-white">
                {open ? (
                  <XMarkIcon className="size-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="size-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>

            <div className="hidden sm:flex sm:items-center ml-18 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`ml-3 p-2 transition duration-300 ${
                    location.pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden bg-black text-white px-4 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block p-2 hover:text-red-600"
                onClick={() => close()}
              >
                {item.name}
              </Link>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
