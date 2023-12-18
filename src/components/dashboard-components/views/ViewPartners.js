import React from "react";
import ButtonMain from "../ButtonMain";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState, useRef } from "react";
import { Menu } from "@headlessui/react";
import { useAppSelector, useAppDispatch } from "../../../redux/app/hooks";
import * as partnersRedux from "../../../redux/features/partners";
import Image from "next/image";

function ViewPartners() {
  const dispatch = useAppDispatch();
  const partnersState = useAppSelector(partnersRedux.reducer.selectPartners);
  const loadingState = useAppSelector(
    partnersRedux.reducer.selectPartnersLoadingState
  );

  const [reset, setReset] = useState(false);

  useEffect(() => {
    dispatch(partnersRedux.actions.fetchPartnersAsync());
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
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className={`text-xl`}>Partners</h3>

          <ButtonMain
            title="Add new partner"
            onClick={() => {
              openModal();
              seteditData(null);
            }}
          />
        </div>

        <div className="bg-th-background  rounded-2xl">
          {/* Table Header */}
          <div className="bg-neutral-400 text-sm flex flex-row items-center p-4 rounded-t-2xl gap-8">
            <div className="text-white grow">Name</div>
            <div className="text-white w-1/4 flex-none">Type</div>
            <div className="text-white w-1/4 flex-none">Sector</div>
            <div className="text-white ml-6">
              <div className="px-4 py-1 rounded-full bg-neutral-400 text-neutral-400 text-xs">
                Edit
              </div>
            </div>
          </div>
          <div className="h-500 overflow-auto text-sm">
            {partnersState?.map((project) => (
              <div>
                <div className="bg-white flex flex-row items-center p-5 gap-8">
                  <div className="text-black grow overflow-hidden text-ellipsis">
                    {project.name}
                  </div>
                  <div className="text-black w-1/4 flex-none overflow-hidden text-ellipsis">
                    {project.type}
                  </div>
                  <div className="text-black w-1/4 flex-none overflow-hidden text-ellipsis ">
                    {project.sector}
                  </div>
                  <div className="text-white ml-6 ">
                    <button
                      onClick={() => {
                        openModal();
                        seteditData(project);
                      }}
                      className="px-4 py-2 rounded-full bg-neutral-500 text-xs"
                    >
                      Edit
                    </button>
                  </div>
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
    partnersRedux.reducer.selectPartnersLoadingState
  );

  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const typeRef = useRef(null);
  const linkRef = useRef(null);
  const sectorRef = useRef(null);
  const filePickerRef = useRef(null);

  const menuItems = ["Partner", "Venture Partner"];

  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [type, setType] = useState("");
  const [sector, setsector] = useState("");
  const [content, setcontent] = useState("");
  const [link, setlink] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (event) => {
    //event.preventDefault()
    setname(event.target.value);
  };

  const handleSectorChange = (event) => {
    //event.preventDefault()
    setsector(event.target.value);
  };

  const handleContentChange = (event) => {
    //event.preventDefault()
    setcontent(event.target.value);
  };

  const handleLinkChange = (event) => {
    setlink(event.target.value);
  };

  const addImageToPost = (event) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  function setEditData(data) {
    setid(data?.id);
    setname(data?.name);
    setType(data?.type);
    setsector(data?.sector);
    setcontent(data?.content);
    setlink(data?.link);
    setimageUrl(data?.imageUrl);
  }

  function resetForm() {
    setid("");
    setname("");
    setType("");
    setsector("");
    setcontent("");
    setlink("");
    setimageUrl("");
  }

  useEffect(() => {
    setEditData(data);

    console.log(data)
  }, []);

  function dispatchAddHandler() {
    dispatch(
      partnersRedux.actions.addNewPartnerAndFetch({
        name: name,
        type: type,
        link: link,
        ...(sector !== undefined && { sector: sector }),
        ...(content !== undefined && { content: content }),
      }, selectedFile)
    );
  }

  function dispatchUpdateHandler() {

    dispatch(
      partnersRedux.actions.updatePartnerAndFetch({
        id: id,
        name: name,
        type: type,
        link: link,
        ...(sector !== "" && { sector: sector }),
        ...(content !== "" && { content: content })
      })
    );
  }

  function dispatchUpdateImageHandler() {
    dispatch(
      partnersRedux.actions.updatePartnerImageAndFetch(
        {
          id: id,
          name: name,
          type: type,
          link: link,
          ...(sector !== "" && { sector: sector }),
          ...(content !== "" && { content: content }),
        },
        selectedFile
      )
    );
  }

  function dispatchDeleteHandler() {
    dispatch(partnersRedux.actions.deletePartnerAndFetch(id));
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  className="text-base font-medium leading-6 text-gray-900 flex justify-between"
                >
                  <div>{data ? "Edit data" : "Add new data"}</div>

                  <button
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
                    className="px-4 py-2 rounded-full bg-neutral-500 text-xs text-white"
                  >
                    {loadingState == "loading" ? "Loading" : "Save"}
                  </button>
                </Dialog.Title>

                {/* Form */}
                <div className="flex flex-col gap-8 mt-6 h-500 overflow-auto">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className={` text-sm mb-2`}>
                      Name
                    </label>
                    <input
                      value={name}
                      defaultValue={name}
                      onChange={handleNameChange}
                      name="fullName"
                      type="text"
                      className={`  bg-white w-full px-3 text-sm py-34 placeholder-neutral-300
                  border-th-textbox-fill focus:ring-transparent 
                  focus:border-th-container-on-surface rounded-sm`}
                      ref={nameRef}
                      placeholder="Enter name"
                    />
                  </div>

                  {/* Type */}
                  <div className="flex flex-col">
                    <label htmlFor="type" className={`text-sm mb-2`}>
                      Type
                    </label>
                    <Menu as="div" className="relative" name="interest">
                      <div>
                        <Menu.Button
                          className={`text-left  bg-white w-full px-3 text-sm py-2  ${
                            type == "" ? "text-neutral-300" : "text-black"
                          }
                                        border-th-textbox-fill focus:ring-transparent 
                                        focus:border-th-container-on-surface rounded-sm flex justify-between items-center`}
                        >
                          {!type ? "Select partner type" : type}
                          <div
                            className={`w-6 h-6 bg-black flex justify-center rounded-full transition-all duration-300`}
                          >
                            <Image
                              src="/assets/icons/chevron_down.svg"
                              height={9}
                              width={9}
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
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-sm bg-white shadow-lg">
                          <div className=" ">
                            {menuItems.map((value) => (
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => setType(value)}
                                    className={`${
                                      active
                                        ? "bg-black text-white"
                                        : "text-gray-900"
                                    } text-sm group flex w-full items-center rounded-sm p-4`}
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

                  {/* Sector */}
                  {type === "Venture Partner" && (
                    <div className="flex flex-col">
                      <label htmlFor="fullName" className={` text-sm mb-2`}>
                        Sector
                      </label>
                      <input
                        value={sector}
                        defaultValue={sector}
                        onChange={handleSectorChange}
                        name="sector"
                        type="text"
                        className={`  bg-white w-full px-3 text-sm py-34 placeholder-neutral-300
                  border-th-textbox-fill focus:ring-transparent 
                  focus:border-th-container-on-surface rounded-sm`}
                        ref={nameRef}
                        placeholder="Enter sector"
                      />
                    </div>
                  )}

                  {/* Content */}
                  {type === "Venture Partner" && (
                    <div className="flex flex-col">
                      <label htmlFor="content" className={` text-sm mb-2`}>
                        Content
                      </label>
                      <textarea
                        defaultValue={content}
                        value={content}
                        name="content"
                        type="text"
                        onChange={handleContentChange}
                        className={` min-h-[auto]  bg-white w-full px-3 text-sm py-3 placeholder-neutral-300
          border-th-textbox-fill focus:ring-transparent 
          focus:border-th-container-on-surface rounded-sm`}
                        rows="7"
                        ref={contentRef}
                        placeholder="Enter short content"
                      />
                    </div>
                  )}

                  {/* Image Picker */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className={` text-sm mb-2`}>
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
                      className={`flex justify-between  bg-white w-full px-3 text-sm py-3 placeholder-neutral-300
                    border-th-textbox-fill focus:ring-transparent 
                    focus:border-th-container-on-surface rounded-sm cursor-pointer`}
                    >
                      Select Logo
                      <Image
                        src="/assets/icons/camera.svg"
                        height={16}
                        width={20}
                      />
                    </div>

                    {selectedFile ? (
                      <img
                        className="rounded-lg mb-5"
                        src={selectedFile}
                        alt=""
                        onClick={() => setSelectedFile(null)}
                      />
                    ) : (
                      <div onClick={() => filePickerRef.current.click()}></div>
                    )}
                  </div>

                  {/* Link */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className={` text-sm mb-2`}>
                      Website Link
                    </label>
                    <input
                      value={link}
                      defaultValue={link}
                      onChange={handleLinkChange}
                      name="link"
                      type="text"
                      className={`  bg-white w-full px-3 text-sm py-3 placeholder-neutral-300
          border-th-textbox-fill focus:ring-transparent 
          focus:border-th-container-on-surface rounded-sm`}
                      ref={linkRef}
                      placeholder="Enter website link"
                    />
                  </div>

                  {/* Delete Button */}
                  <div className="flex justify-center">
                    {data ? (
                      <button
                        onClick={() => {
                          dispatchDeleteHandler();
                          resetForm();
                        }}
                        className="px-4 py-2 rounded-full bg-red-500 text-sm text-white"
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

export default ViewPartners;
