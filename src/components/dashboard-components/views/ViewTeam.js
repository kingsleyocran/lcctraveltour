import React from "react";
import ButtonMain from "../ButtonMain";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState, useRef } from "react";
import { Menu } from "@headlessui/react";
import { useAppSelector, useAppDispatch } from "../../../redux/app/hooks";
import * as teamRedux from "../../../redux/features/team";
import Image from "next/image";

function ViewTeam() {
  const dispatch = useAppDispatch();
  const teamState = useAppSelector(teamRedux.reducer.selectTeam);
  const loadingState = useAppSelector(teamRedux.reducer.selectTeamLoadingState);

  useEffect(() => {
    dispatch(teamRedux.actions.fetchTeamMemberAsync());
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
          <h3 className={`text-xl`}>Team</h3>

          <ButtonMain
            title="Add new team member"
            onClick={() => {
              openModal();
              seteditData(null);
            }}
          />
        </div>

        <div className="bg-th-background  rounded-2xl">
          {/* Table Header */}
          <div className="bg-neutral-400 text-sm flex flex-row items-center p-4 rounded-t-2xl gap-8">
            <div className="text-white grow ">Name</div>
            <div className="text-white w-1/4 flex-none">Portfolio</div>
            <div className="text-white w-1/4 flex-none">LinkedIn Handler</div>
            <div className="text-white ml-6">
              <div className="px-4 py-1 rounded-full bg-neutral-400 text-neutral-400 text-xs">
                Edit
              </div>
            </div>
          </div>
          <div className="h-500 overflow-auto text-sm">
            {(teamState?.filter((item) => item.type === "team"))?.map((member) => (
              <div>
                <div className="bg-white flex flex-row items-center p-5 gap-8">
                  <div className="text-black grow overflow-hidden text-ellipsis">
                    {member.name}
                  </div>
                  <div className="text-black w-1/4 flex-none overflow-hidden text-ellipsis">
                    {member.portfolio}
                  </div>
                  <div className="text-black w-1/4 flex-none overflow-hidden text-ellipsis ">
                    {member.linkedInhandle}
                  </div>
                  <div className="text-white ml-6 ">
                    <button
                      onClick={() => {
                        openModal();
                        seteditData(member);
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
  const loadingState = useAppSelector(teamRedux.reducer.selectTeamLoadingState);

  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const portfolioRef = useRef(null);
  const linkRef = useRef(null);
  const filePickerRef = useRef(null);

  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [portfolio, setportfolio] = useState("");
  const [content, setcontent] = useState("");
  const [linkedInhandle, setlinkedInhandle] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (event) => {
    //event.preventDefault()
    setname(event.target.value);
  };

  const handlePortfolioChange = (event) => {
    //event.preventDefault()
    setportfolio(event.target.value);
  };

  const handleContentChange = (event) => {
    //event.preventDefault()
    setcontent(event.target.value);
  };

  const handleLinkChange = (event) => {
    setlinkedInhandle(event.target.value);
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
    setportfolio(data?.portfolio);
    setcontent(data?.content);
    setlinkedInhandle(data?.linkedInhandle);
    setimageUrl(data?.imageUrl);
  }

  function resetForm() {
    setid("");
    setname("");
    setportfolio("");
    setcontent("");
    setlinkedInhandle("");
    setimageUrl("");
  }

  useEffect(() => {
    setEditData(data);
  }, []);

  //DISPATCH HANDLERS
  function dispatchAddHandler() {
    dispatch(
      teamRedux.actions.addNewTeamMemberAndFetch(
        {
          name: name,
          portfolio: portfolio,
          content: content,
          type: "team",
          linkedInhandle: linkedInhandle,
          type: "team"
        },
        selectedFile
      )
    );
  }

  function dispatchUpdateHandler() {
    dispatch(
      teamRedux.actions.updateTeamMemberAndFetch({
        id: id,
        name: name,
        portfolio: portfolio,
        content: content,
        linkedInhandle: linkedInhandle,
        type: "team"
      })
    );
  }
  
  function dispatchUpdateImageHandler() {
    dispatch(
      teamRedux.actions.updateTeamMemberImageAndFetch(
        {
          id: id,
          name: name,
          portfolio: portfolio,
          content: content,
          linkedInhandle: linkedInhandle,
          type: "team"
        },
        selectedFile
      )
    );
  }

  function dispatchDeleteHandler() {
    dispatch(teamRedux.actions.deleteTeamMemberAndFetch(id));
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

        <div className="fixed inset-0 overflow-y-auto text-sm">
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
                    <label htmlFor="name" className={` text-sm mb-2`}>
                      Name
                    </label>
                    <input
                      value={name}
                      defaultValue={name}
                      onChange={handleNameChange}
                      name="name"
                      type="text"
                      className={`  bg-white w-full px-3 text-sm py-34 placeholder-neutral-300
                  border-th-textbox-fill focus:ring-transparent 
                  focus:border-th-container-on-surface rounded-sm`}
                      ref={nameRef}
                      placeholder="Enter name"
                    />
                  </div>

                  {/* Portfolio */}
                  <div className="flex flex-col">
                    <label htmlFor="portfolio" className={` text-sm mb-2`}>
                      Portfolio
                    </label>
                    <input
                      value={portfolio}
                      defaultValue={portfolio}
                      onChange={handlePortfolioChange}
                      name="portfolio"
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
                      Select Profile Image
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

                  {/* LinkedIn Link */}
                  <div className="flex flex-col">
                    <label htmlFor="linkedInhandle" className={` text-sm mb-2`}>
                      LinkedIn Profile Link
                    </label>
                    <input
                      value={linkedInhandle}
                      defaultValue={linkedInhandle}
                      onChange={handleLinkChange}
                      name="linkedInhandle"
                      type="text"
                      className={`  bg-white w-full px-3 text-sm py-3 placeholder-neutral-300
          border-th-textbox-fill focus:ring-transparent 
          focus:border-th-container-on-surface rounded-sm`}
                      ref={linkRef}
                      placeholder="Enter linkedIn profile link"
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

export default ViewTeam;
