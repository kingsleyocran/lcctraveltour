import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import programEmailRequest from "@/api_requests/contact/programEmailRequest";

function ProgramsFormModal() {
  const [isOpen, setisOpen] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [typeOfProgram, settypeOfProgram] = useState("");

  const [formState, setformState] = useState("idle");

  const menuItems = [
    "Work-Study Programs",
    "Cross-Cultural Exchanges",
    "Nursing & Social Work Recruitment",
  ];

  function resetForm() {
    setname("");
    setemail("");
    setphone("");
    settypeOfProgram("");
    setformState("idle");
  }

  const disableButtonState = !name || !email || !phone || !typeOfProgram;

  async function handleSubmit() {
    setformState("loading");

    let dataPayload = {
      name,
      email,
      phone,
      typeOfProgram,
    };

    let dataResponse = await programEmailRequest(dataPayload);

    if (dataResponse == "success") {
      //console.log("RESPONSE FROM API", dataResponse);
      resetForm();
      toast.success(
        "Your join a program query has been submitted successfully. You'll be contacted by our team to complete the process",
        {
          style: {
            borderRadius: "0px",
          },
        }
      );

      setisOpen(false)
    } else {
      //console.log("RESPONSE FROM API", dataResponse);
      toast.error("Your query failed on submission", {
        style: {
          borderRadius: "0px",
        },
      });
    }

    setformState("idle");
  }

  return (
    <>
      <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col gap-4">
        <div className="flex flex-row justify-center mt-12">
          <button
            onClick={() => {
              setisOpen(true);
              resetForm();
            }}
            type="button"
            className="bg-th-accent-medium text-white px-8 py-3 text-lg rounded-xl"
          >
            Join A Program
          </button>
        </div>
      </div>

      {/** Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setisOpen(false)}
        >
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
            <div className="flex text-base min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-neutral-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center leading-6 text-gray-900 flex justify-center"
                  >
                    <h1>Join A Program</h1>
                  </Dialog.Title>

                  {/* Form */}
                  <div className="flex flex-col gap-8 mt-6 overflow-auto">
                    {/* Type of Program */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="typeOfProgram"
                        className={`text-base mb-2`}
                      >
                        Type of Program*
                      </label>
                      <Menu as="div" className="relative">
                        <div>
                          <Menu.Button
                            className={`text-left  bg-white w-full px-3 text-base py-2  ${
                              typeOfProgram == ""
                                ? "text-neutral-300"
                                : "text-black"
                            }
                            border-th-textbox-fill focus:ring-transparent  rounded-xl
                            focus:border-th-container-on-surface flex justify-between items-center`}
                          >
                            {!typeOfProgram ? "Select Program" : typeOfProgram}
                            <div
                              className={`w-[21px] h-[21px] bg-th-accent-medium flex justify-center rounded-full transition-all duration-300`}
                            >
                              <Image
                                src="/assets/icons/chevron_down.svg"
                                height={9}
                                width={9}
                                alt="chevron_down"
                              />
                            </div>
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 mt-2 w-[250px] origin-top-right divide-y rounded-xl bg-white shadow-lg">
                            <div className=" ">
                              {menuItems.map((value) => (
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={() => settypeOfProgram(value)}
                                      className={`${
                                        active
                                          ? "bg-black text-white"
                                          : "text-gray-900"
                                      } text-base text-start group flex w-full items-center rounded-sm p-4`}
                                    >
                                      {value}
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>

                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="fullName" className={` text-base mb-2`}>
                        Full Name*
                      </label>
                      <input
                        value={name}
                        defaultValue={name}
                        onChange={(event) => setname(event.target.value)}
                        name="fullName"
                        type="text"
                        className={`  bg-white w-full px-3 text-base py-34 placeholder-neutral-300
                        border-th-textbox-fill focus:ring-transparent 
                        focus:border-th-container-on-surface rounded-xl`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className={` text-base mb-2`}>
                        Email*
                      </label>
                      <input
                        value={email}
                        defaultValue={email}
                        onChange={(event) => setemail(event.target.value)}
                        name="email"
                        type="email"
                        className={`  bg-white w-full px-3 text-base py-34 placeholder-neutral-300
                        border-th-textbox-fill focus:ring-transparent 
                        focus:border-th-container-on-surface rounded-xl`}
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className={` text-base mb-2`}>
                        Phone*
                      </label>
                      <input
                        value={phone}
                        defaultValue={phone}
                        onChange={(event) => setphone(event.target.value)}
                        name="phone"
                        type="tel"
                        className={`  bg-white w-full px-3 text-base py-34 placeholder-neutral-300
                        border-th-textbox-fill focus:ring-transparent 
                        focus:border-th-container-on-surface rounded-xl`}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 mt-6">
                      <button
                        onClick={async () => {
                          if (disableButtonState) {
                            return;
                          }

                          await handleSubmit()
                        }}
                        disabled={disableButtonState}
                        type="button"
                        className={`md:basis-2/3 bg-th-primary-medium  text-white px-6 py-3 text-base rounded-xl 
                        ${
                          disableButtonState
                            ? "cursor-not-allowed opacity-40"
                            : ""
                        } 
                        `}
                      >
                        {formState === "loading" ? "Loading..." : "Submit"}
                      </button>

                      <button
                        onClick={() => {
                          setisOpen(false);
                        }}
                        type="button"
                        className="md:basis-1/3 bg-neutral-300 text-black px-6 py-3 text-base rounded-xl"
                      >
                        Close
                      </button>
                    </div>
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

export default ProgramsFormModal;
