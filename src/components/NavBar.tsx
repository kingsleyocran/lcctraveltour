import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Fragment, useState, useEffect } from "react";

import { Dialog, Transition } from "@headlessui/react";
import MenuIcon from "./../../public/assets/icons/menu.svg";
import CloseIcon from "./../../public/assets/icons/close.svg";

function NavBar() {
  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <nav className="bg-white sticky top-0 w-full z-50 transition-all">
        {/* NAVBAR DESKTOP */}
        <div className="flex justify-between items-center max-w-7xl mx-5 h-[55px] xl:mx-auto">
          {/* Logo */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="relative flex items-center gap-1"
          >
            <div className="flex flex-row items-center gap-2 md:text-base semibold text-xl text-th-primary-dark ">
              {/* <Logo /> */}
              <Image
                src={`/assets/brand/logo_1.png`}
                alt="menu icon"
                width={40}
                height={40}
              />
              <p className=" hidden md:flex text-base semibold lg:text-sm text-th-primary-dark">
                Yes to Youth
              </p>
            </div>
          </button>

          {/* Menu */}
          <div className="flex flex-row gap-2">
            {/* DesktopMenu */}
            <div className="lg:flex flex-row gap-2 hidden ">
              <button
                onClick={() => router.push("/early-access")}
                type="button"
                className="semibold h-[40px] text-base lg:text-sm hover:bg-neutral-100 transition-all text-th-primary-dark bg-transparent px-6 py-2 rounded-full"
              >
                <p>Communities</p>
              </button>

              <button
                onClick={() => router.push("/event-news")}
                type="button"
                className="semibold h-[40px] text-base lg:text-sm hover:bg-neutral-100 transition-all text-th-primary-dark bg-transparent px-6 py-2 rounded-full"
              >
                <p>Events + News</p>
              </button>

              <button
                onClick={() => router.push("/contact-us")}
                type="button"
                className="semibold h-[40px] text-base lg:text-sm hover:bg-neutral-100 transition-all text-th-primary-dark bg-transparent px-6 py-2 rounded-full"
              >
                <p>Contact Us</p>
              </button>
            </div>

            <button
              onClick={() => router.push("/donate")}
              type="button"
              className="semibold h-[40px] text-base lg:text-sm hover:bg-neutral-300 transition-all text-th-primary-dark bg-neutral-200 px-6 py-2 rounded-full"
            >
              <p>Donate now</p>
            </button>

            {/* Menu Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-th-primary-dark lg:hidden
               h-11 w-11 bg-neutral-200 rounded-full flex flex-col items-center justify-center`}
            >
              <MenuIcon
                width="20.712"
                height="12.808"
                viewBox="0 0 26.712 17.808"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Nav Mobile Menu */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full divide-y max-w-md transform overflow-hidden rounded-2xl bg-th-background  text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={`semibold px-6 py-4 text-xl flex justify-between items-center text-gray-900`}
                  >
                    Menu
                    {/* Menu Mobile Button */}
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className=" text-th-primary-dark lg:hidden bg-neutral-200 h-10 w-10 rounded-full flex flex-col items-center justify-center"
                    >
                      <CloseIcon
                        width="13"
                        height="13"
                        viewBox="0 0 27.1 27.1"
                      />
                    </button>
                  </Dialog.Title>

                  <div className="grid gird-cols-1 items-start  divide-y">
                    {/* Home Tab */}
                    <button
                      onClick={() => router.push("/")}
                      className="py-5 px-6 w-full  flex flex-col justify-center  items-start active:bg-neutral-200 hover:bg-neutral-200"
                    >
                      <p
                        className={`semibold text-xl text-th-text-medium`}
                      >
                        Home
                      </p>
                    </button>

                    {/* For Communities Tab */}
                    <button
                      onClick={() => router.push("/")}
                      className="py-5 px-6 w-full  flex flex-col justify-center  items-start active:bg-neutral-200 hover:bg-neutral-200"
                    >
                      <p
                        className={`semibold text-xl text-th-text-medium`}
                      >
                        Communities
                      </p>
                    </button>

                    {/* Events + News Tab */}
                    <button
                      onClick={() => router.push("/")}
                      className="py-5 px-6 w-full  flex flex-col justify-center  items-start active:bg-neutral-200 hover:bg-neutral-200"
                    >
                      <p
                        className={`semibold text-xl text-th-text-medium`}
                      >
                        Events + News
                      </p>
                    </button>

                    {/* Events + News Tab */}
                    <button
                      onClick={() => router.push("/")}
                      className="py-5 px-6 w-full  flex flex-col justify-center  items-start active:bg-neutral-200 hover:bg-neutral-200"
                    >
                      <p
                        className={`semibold text-xl text-th-text-medium`}
                      >
                        Contact Us
                      </p>
                    </button>

                    {/* Donate Button Tab */}
                    <button
                      onClick={() => router.push("/")}
                      className="py-5 px-6 w-full bg-neutral-200  flex flex-row justify-between items-center active:bg-neutral-300  hover:bg-th-accent-dark "
                    >
                      <p className={`semibold text-xl text-black`}>
                        Donate now
                      </p>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default NavBar;
