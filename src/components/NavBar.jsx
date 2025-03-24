import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
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
  return (
    <>
      <Disclosure as="nav" className="bg-black fixed w-screen">
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
    </>
  );
};

export default NavBar;
