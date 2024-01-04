import React from "react";
import ButtonMain from "../ButtonMain";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/app/hooks";
import * as testimonialsRedux from "../../../redux/features/testimonials";
import Image from "next/image";
import toast from "react-hot-toast";

function ViewTestimonials() {
  const dispatch = useAppDispatch();
  const testimonialsState = useAppSelector(
    testimonialsRedux.reducer.selectTestimonials
  );
  const loadingState = useAppSelector(
    testimonialsRedux.reducer.selectTestimonialsLoadingState
  );

  useEffect(() => {
    dispatch(testimonialsRedux.actions.fetchTestimonialAsync());
  }, []);

  const [editData, seteditData] = useState(null);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="h-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className={`text-xl`}>Testimonials</h3>

          <ButtonMain
            title={
              loadingState == "loading" ? "Loading" : "Add new testimonial"
            }
            onClick={() => {
              openModal();
              seteditData(null);
            }}
          />
        </div>

        <div className="flex flex-col h-full">
          {/* Table Header */}
          <div className="flex-none bg-neutral-400 w-full relative overflow-hidden  text-sm flex flex-row items-center p-4 rounded-t-2xl gap-8">
            <div className="text-white w-1/6  flex-none">Name</div>
            <div className="text-white w-1/6  flex-none">Portfolio</div>
            <div className="text-white grow">Content</div>
            <div className="text-white w-[120px]   flex-none">Image</div>
            <div className="text-white w-[70px] flex-none">
              <div className="px-4 py-1 rounded-full bg-neutral-400 text-neutral-400 text-xs">
                Edit
              </div>
            </div>
          </div>
          {/* Table Body */}
          <div className="h-[530px] bg-white rounded-b-2xl w-full relative overflow-hidden text-sm">
            {testimonialsState?.map((testimonial) => (
              <div className="bg-white flex flex-row items-center p-5 gap-8">
                <div className="text-black w-1/6  flex-none">
                  {testimonial.name}
                </div>
                <div className="text-black w-1/6 flex-none">
                  {testimonial.portfolio}
                </div>
                <div className="text-black grow overflow-hidden">
                  <p className="line-clamp-2">{testimonial.content}</p>
                </div>
                <div className="text-black w-[120px] flex-none ">
                  <p className="line-clamp-1">{testimonial.imageUrl}</p>
                </div>
                <div className="text-white w-[70px] flex-none">
                  <button
                    onClick={() => {
                      openModal();
                      seteditData(testimonial);
                    }}
                    className="px-4 py-2 rounded-full bg-neutral-500 text-xs"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen ? (
        <AddModal isOpen={isOpen} closeModal={closeModal} data={editData} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export function AddModal({ isOpen, closeModal, data }) {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector(
    testimonialsRedux.reducer.selectTestimonialsLoadingState
  );

  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const portfolioRef = useRef(null);
  const filePickerRef = useRef(null);

  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [portfolio, setportfolio] = useState("");
  const [content, setcontent] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const addImageToPost = (event) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target && readerEvent.target.result != null) {
        setSelectedFile(readerEvent.target.result);
      }
    };
  };

  function setEditData(data) {
    setid(data?.id);
    setname(data?.name);
    setportfolio(data?.portfolio);
    setcontent(data?.content);
    setimageUrl(data?.imageUrl);
  }

  function resetForm() {
    setid("");
    setname("");
    setportfolio("");
    setcontent("");
    setimageUrl("");
  }

  useEffect(() => {
    setEditData(data);
  }, []);

  const disableButtonState = !content || !name || !portfolio;

  function dispatchAddHandler() {
    try {
      dispatch(
        testimonialsRedux.actions.addNewTestimonialAndFetch(
          {
            name: name,
            portfolio: portfolio,
            content: content,
          },
          selectedFile
        )
      );

      toast.success("Successfully created a testimonial");
    } catch (error) {
      toast.error("An error occured, please try again");
    }
  }

  function dispatchUpdateHandler() {
    try {
      dispatch(
        testimonialsRedux.actions.updateTestimonialAndFetch({
          id: id,
          name: name,
          portfolio: portfolio,
          content: content,
        })
      );

      toast.success("Successfully updated a testimonial");
    } catch (error) {
      toast.error("An error occured, please try again");
    }
  }

  function dispatchUpdateImageHandler() {
    try {
      dispatch(
        testimonialsRedux.actions.updateTestimonialImageAndFetch(
          {
            id: id,
            name: name,
            portfolio: portfolio,
            content: content,
          },
          selectedFile
        )
      );

      toast.success("Successfully updated a testimonial image");
    } catch (error) {
      toast.error("An error occured, please try again");
    }
  }

  function dispatchDeleteHandler() {
    try {
      dispatch(testimonialsRedux.actions.deleteTestimonialAndFetch(id));

      toast.success("Successfully deleted a testimonial");
    } catch (error) {
      toast.error("An error occured, please try again");
    }
  }

  return (
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
          <div className="flex text-sm min-h-full items-center justify-center p-4 text-center">
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
                  className="text-base leading-6 text-gray-900 flex justify-between"
                >
                  <div>{data ? "Edit data" : "Add new data"}</div>

                  <button
                    disabled={disableButtonState}
                    onClick={() => {
                      if (data) {
                        if (selectedFile) {
                          dispatchUpdateImageHandler();
                        } else {
                          dispatchUpdateHandler();
                        }
                      } else {
                        dispatchAddHandler();
                      }
                    }}
                    className={`${
                      disableButtonState
                        ? "bg-neutral-300 cursor-not-allowed"
                        : "bg-neutral-500"
                    } px-4 py-2 rounded-full  text-xs text-white`}
                  >
                    {loadingState == "loading" ? "Loading" : "Save"}
                  </button>
                </Dialog.Title>

                {/* Form */}
                <div className="flex flex-col gap-8 mt-6 h-500 overflow-auto">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className={` text-sm mb-2`}>
                      Full Name*
                    </label>
                    <input
                      value={name}
                      defaultValue={name}
                      onChange={(event) => setname(event.target.value)}
                      name="fullName"
                      type="text"
                      className={`  bg-white w-full px-3 text-sm py-34 placeholder-neutral-300
                  border-th-textbox-fill focus:ring-transparent 
                  focus:border-th-container-on-surface rounded-sm`}
                      ref={nameRef}
                      placeholder="Enter full name"
                    />
                  </div>

                  {/* Portfolio */}
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className={` text-sm mb-2`}>
                      Portfolio*
                    </label>
                    <input
                      value={portfolio}
                      defaultValue={portfolio}
                      onChange={(event) => setportfolio(event.target.value)}
                      name="sector"
                      type="text"
                      className={`  bg-white w-full px-3 text-sm py-34 placeholder-neutral-300
                  border-th-textbox-fill focus:ring-transparent 
                  focus:border-th-container-on-surface rounded-sm`}
                      ref={portfolioRef}
                      placeholder="Enter portfolio"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <label htmlFor="content" className={` text-sm mb-2`}>
                      Content*
                    </label>
                    <textarea
                      defaultValue={content}
                      value={content}
                      name="content"
                      onChange={(event) => setcontent(event.target.value)}
                      className={` min-h-[auto]  bg-white w-full px-3 text-sm py-3 placeholder-neutral-300
          border-th-textbox-fill focus:ring-transparent 
          focus:border-th-container-on-surface rounded-sm`}
                      rows={7}
                      ref={contentRef}
                      placeholder="Enter short content"
                    />
                  </div>

                  {/* Image Picker */}
                  <div className="basis-1/2 flex flex-row gap-4">
                    <div className="flex flex-col grow">
                      <label
                        htmlFor="email"
                        className={` text-md mb-2 text-black`}
                      >
                        Image Picker
                      </label>
                      <div>
                        <input
                          type="file"
                          hidden
                          ref={filePickerRef}
                          onChange={addImageToPost}
                        />
                      </div>
                      <div
                        onClick={() => filePickerRef.current.click()}
                        className={`flex justify-between  bg-white w-full px-3 text-md md:text-md py-2.5 ${
                          selectedFile ? "text-black" : "text-neutral-500"
                        } 
                    border-th-textbox-fill focus:ring-transparent 
                    focus:border-th-container-on-surface rounded-sm cursor-pointer`}
                      >
                        {!selectedFile
                          ? "Select Image"
                          : "Image added successfully"}
                        <Image
                          src="/assets/icons/camera.svg"
                          height={16}
                          width={20}
                        />
                      </div>
                    </div>

                    {(selectedFile || imageUrl) && (
                      <div className="w-[70px] rounded-full h-[70px] relative bg-neutral-300">
                        <img
                          className="rounded-full mb-5 w-[70px] h-[70px]"
                          src={selectedFile ?? imageUrl}
                          alt=""
                          style={{ objectFit: "cover" }}
                          onClick={() => setSelectedFile(null)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Delete Button */}
                  <div className="flex justify-center">
                    {data ? (
                      <button
                        onClick={() => {
                          dispatchDeleteHandler();
                          resetForm();
                        }}
                        className="px-4 py-2 rounded-full bg-red-500 text-xs text-white"
                      >
                        Delete
                      </button>
                    ) : (
                      <div> </div>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ViewTestimonials;
