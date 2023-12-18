import styles from "@/styles/style.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import { useAuth } from "@/context/AuthContext";

function LoginSection() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errorModal, seterrorModal] = useState(false);
  const { logInWithEmail } = useAuth();

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setemail(event.target.value);
    console.log(event.target.value);
  };
  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setpassword(event.target.value);
  };

  async function handleSubmit() {
    try {
      await logInWithEmail(email, password);
      router.push("/dashboard/main");
    } catch (error: any) {
      console.log(error.message);
      seterrorModal(true);
    }
  }

  return (
    <div>
        <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col items-center gap-4 bg-white">
          <div className="w-full max-w-lg flex flex-col gap-6 bg-neutral-100 px-12 py-12 rounded-xl">
            {/* Section Header */}
            <h3
              className={`${styles.primarymedium} text-3xl text-center md:text-2xl text-black`}
            >
              Dashboard Login
            </h3>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className={`${styles.primarymedium} text-base mb-2`}
              >
                Email
              </label>
              <input
                value={email}
                onChange={handleEmailChange}
                name="email"
                type="email"
                className={`${styles.primarymedium}  bg-white w-full px-5 text-lg md:text-base py-3 placeholder-neutral-300
              border-th-textbox-fill focus:ring-transparent 
              focus:border-th-container-on-surface rounded-lg`}
                ref={emailRef}
                placeholder="Enter admin email"
              />
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className={`${styles.primarymedium} text-base mb-2`}
              >
                Password
              </label>
              <input
                value={password}
                onChange={handlePasswordChange}
                name="fullName"
                type="password"
                className={`${styles.primarymedium}  bg-white w-full px-5 text-lg md:text-base py-3 placeholder-neutral-300
                      border-th-textbox-fill focus:ring-transparent 
                      focus:border-th-container-on-surface rounded-lg`}
                ref={nameRef}
                placeholder="Enter admin password"
              />
            </div>

            {/* Submit Button */}
            <SubmitButton onClick={handleSubmit} />
          </div>
        </div>

      <ErrorModal isOpen={errorModal} closeModal={() => seterrorModal(false)} />
    </div>
  );
}

function SubmitButton({ onClick }: {onClick:any}) {
  return (
    <button
      onClick={() => onClick()}
      className="flex items-center justify-between  bg-th-accent-medium rounded-lg   px-8 py-3 hover:pr-5 hover:bg-th-accent-dark transition-all duration-200"
    >
      <p className={`${styles.primarymedium} text-lg md:text-base text-white`}>
        Submit
      </p>
      <Image
        src="/assets/icons/arrow-right.svg"
        alt="Boxplay Home banner"
        width={20}
        height={20}
      />
    </button>
  );
}

function ErrorModal({ isOpen, closeModal }: { isOpen: boolean;  closeModal:any}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Incorrect Login Credetials
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    please make sure you have typed in the correct admin login
                    in credentials
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none "
                    onClick={closeModal}
                  >
                    Try again
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default LoginSection;
