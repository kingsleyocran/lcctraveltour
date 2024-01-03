import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Fragment, useState, useEffect } from "react";

import { Dialog, Transition } from "@headlessui/react";
import MenuIcon from "./../../public/assets/icons/menu.svg";
import CloseIcon from "./../../public/assets/icons/close.svg";
import Logo from "./../../public/assets/brand/logo.svg";

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
        <div className="flex justify-between items-center max-w-7xl  mx-4 md:mx-12 h-[55px] xl:mx-auto">
          {/* Logo */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="relative flex items-center gap-1"
          >
            <Logo width="75" height="45" viewBox="0 0 65 38"/>
          </button>

          {/* DesktopMenu */}
          <div className="lg:flex flex-row gap-4 hidden ">
            <button
              onClick={() => router.push("/tours")}
              type="button"
              className="semibold h-[40px] text-base lg:text-sm hover:bg-neutral-100 transition-all text-th-dark bg-transparent px-4 py-2 rounded-full"
            >
              <p>Tours</p>
            </button>

            <button
              onClick={() => router.push("/programs")}
              type="button"
              className="semibold h-[40px] text-base lg:text-sm hover:bg-neutral-100 transition-all text-th-dark bg-transparent px-4 py-2 rounded-full"
            >
              <p>Programs</p>
            </button>

            <button
              onClick={() => router.push("/about")}
              type="button"
              className="semibold h-[40px] text-base lg:text-sm hover:bg-neutral-100 transition-all text-th-dark bg-transparent px-4 py-2 rounded-full"
            >
              <p>About</p>
            </button>

            <button
              onClick={() => router.push("/gallery")}
              type="button"
              className="semibold h-[40px] text-base lg:text-sm hover:bg-neutral-100 transition-all text-th-dark bg-transparent px-4 py-2 rounded-full"
            >
              <p>Gallery</p>
            </button>

            <button
              onClick={() => router.push("/blogs")}
              type="button"
              className="semibold h-[40px] text-base lg:text-sm hover:bg-neutral-100 transition-all text-th-dark bg-transparent px-4 py-2 rounded-full"
            >
              <p>Blogs & News</p>
            </button>
          </div>

          { /* CTA Button */}
          <div>
            <button
              onClick={() => router.push("/donate")}
              type="button"
              className="lg:flex flex-row gap-4 hidden semibold h-[35px] text-base lg:text-sm  transition-all
              text-white bg-th-accent-medium px-6 py-2 rounded-xl"
            >
              <p>Book A Tour</p>
            </button>

            {/* Menu Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-th-dark lg:hidden
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
                      className=" text-th-dark lg:hidden bg-neutral-200 h-10 w-10 rounded-full flex flex-col items-center justify-center"
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
                      <p className={`semibold text-xl text-th-text-medium`}>
                        Home
                      </p>
                    </button>

                    {/* For Communities Tab */}
                    <button
                      onClick={() => router.push("/")}
                      className="py-5 px-6 w-full  flex flex-col justify-center  items-start active:bg-neutral-200 hover:bg-neutral-200"
                    >
                      <p className={`semibold text-xl text-th-text-medium`}>
                        Communities
                      </p>
                    </button>

                    {/* Events + News Tab */}
                    <button
                      onClick={() => router.push("/")}
                      className="py-5 px-6 w-full  flex flex-col justify-center  items-start active:bg-neutral-200 hover:bg-neutral-200"
                    >
                      <p className={`semibold text-xl text-th-text-medium`}>
                        Events + News
                      </p>
                    </button>

                    {/* Events + News Tab */}
                    <button
                      onClick={() => router.push("/")}
                      className="py-5 px-6 w-full  flex flex-col justify-center  items-start active:bg-neutral-200 hover:bg-neutral-200"
                    >
                      <p className={`semibold text-xl text-th-text-medium`}>
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
