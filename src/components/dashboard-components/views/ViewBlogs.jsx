import React from "react";
import ButtonMain from "../ButtonMain";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/app/hooks";
import * as blogsRedux from "../../../redux/features/blogs";
import Image from "next/image";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";
import parse from "html-react-parser";
import toast from "react-hot-toast";

function ViewBlogs() {
  const dispatch = useAppDispatch();
  const blogsState = useAppSelector(blogsRedux.reducer.selectBlogs);
  const loadingState = useAppSelector(
    blogsRedux.reducer.selectBlogsLoadingState
  );

  useEffect(() => {
    dispatch(blogsRedux.actions.fetchBlogAsync());
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
          <h3 className={`text-xl`}>Blogs</h3>

          <ButtonMain
            title={loadingState == "loading" ? "Loading" : "Add new blog"}
            onClick={() => {
              openModal();
              seteditData(null);
            }}
          />
        </div>

        <div className="flex flex-col h-full">
          {/* Table Header */}
          <div className="flex-none bg-neutral-400 w-full relative overflow-hidden  text-sm flex flex-row items-center p-4 rounded-t-2xl gap-8">
            <div className="text-white w-[220px] flex-none">Title</div>
            <div className="text-white grow">Content</div>
            <div className="text-white w-[120px] flex-none">Date</div>
            <div className="text-white w-[70px] flex-none">
              <div className="px-4 py-1 rounded-full bg-neutral-400 text-neutral-400 text-xs">
                Edit
              </div>
            </div>
          </div>
          {/* Table Body */}
          <div className="h-[530px] bg-white rounded-b-2xl w-full relative overflow-hidden text-sm">
            {blogsState?.map((blog) => (
              <div className="bg-white flex flex-row items-center p-5 gap-8">
                <div className="text-black w-[220px] flex-none">
                  <p className="line-clamp-2">{blog.title}</p>
                </div>
                <div className="text-black growe">
                  <p className="line-clamp-2">{parse(blog.content)}</p>
                </div>
                <div className="text-black w-[120px] flex-none">
                  <p className="line-clamp-1">{blog.dateCreated}</p>
                </div>
                <div className="text-white w-[70px] flex-none">
                  <button
                    onClick={() => {
                      openModal();
                      seteditData(blog);
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
    blogsRedux.reducer.selectBlogsLoadingState
  );

  const nameRef = useRef(null);
  const filePickerRef = useRef(null);

  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [blogID, setblogID] = useState("");
  const [content, setcontent] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorState = (event) => {
    setEditorState(event);
    setcontent(draftStateToHTML(editorState.getCurrentContent()));
  };

  const handleTitleChange = (event) => {
    settitle(event.target.value);
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

  function htmlToDraftState(sampleMarkup) {
    const contentState = stateFromHTML(sampleMarkup);
    return EditorState.createWithContent(contentState);
  }

  function draftStateToHTML(state) {
    const contentState = stateToHTML(state);
    return contentState;
  }

  async function setEditData(data) {
    setid(data?.id);
    settitle(data?.title);
    setblogID(data?.blogID);
    setcontent(data?.content);
    setimageUrl(data?.imageUrl);
    setEditorState(await htmlToDraftState(data?.content));
  }

  function resetForm() {
    setid("");
    settitle("");
    setblogID("");
    setcontent("");
    setimageUrl("");
    setEditData(EditorState.createEmpty());
  }

  useEffect(() => {
    if (data) {
      setEditData(data);
    }
  }, []);

  function convertNameToBlogID(name) {
    return (name ?? "").toLowerCase().split(" ").join("-");
  }

  function dispatchAddHandler() {
    try {
      dispatch(
        blogsRedux.actions.addNewBlogAndFetch(
          {
            title: title ?? "",
            blogID: convertNameToBlogID(title),
            content: draftStateToHTML(editorState.getCurrentContent()) ?? "",
          },
          selectedFile
        )
      );

      toast.success("Successfully created a blog");
    } catch (error) {
      toast.error("An error occured, please try again");
    }
  }

  function dispatchUpdateHandler() {
    try {
      dispatch(
        blogsRedux.actions.updateBlogAndFetch({
          id: id,
          title: title ?? "",
          blogID: convertNameToBlogID(title),
          content: draftStateToHTML(editorState.getCurrentContent()) ?? "",
        })
      );

      toast.success("Successfully updated a blog");
    } catch (error) {
      toast.error("An error occured, please try again");
    }
  }

  function dispatchUpdateImageHandler() {
    try {
      dispatch(
        blogsRedux.actions.updateBlogImageAndFetch(
          {
            id: id,
            title: title ?? "",
            blogID: convertNameToBlogID(title),
            content: draftStateToHTML(editorState.getCurrentContent()) ?? "",
          },
          selectedFile
        )
      );

      toast.success("Successfully updated the blog image");
    } catch (error) {
      toast.error("An error occured, please try again");
    }
  }

  function dispatchDeleteHandler() {
    try {
      dispatch(blogsRedux.actions.deleteBlogAndFetch(id));

      toast.success("Successfully deleted a blog");
    } catch (error) {
      toast.error("An error occured, please try again");
    }
  }

  const disableButtonState =
    (!title || !content) && (!selectedFile || !imageUrl);

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
              <Dialog.Panel className="z-50 w-full h-[95vh] transform overflow-hidden rounded-2xl bg-neutral-100 p-6 text-left shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-base leading-6 text-gray-900 flex justify-between"
                >
                  <div className="flex flex-row gap-5 items-center">
                    {data ? "Edit blog" : "Create new blog"}

                    {/* Delete Button */}
                    <div className="flex-none flex flex-col justify-end">
                      {data ? (
                        <button
                          onClick={() => {
                            dispatchDeleteHandler();
                            resetForm();
                          }}
                          className="px-4 py-2 rounded-full bg-red-500 text-xs text-white"
                        >
                          Delete Blog
                        </button>
                      ) : (
                        <div> </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row gap-2">
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
                      } px-4 py-2 rounded-full text-xs text-white`}
                    >
                      {loadingState == "loading" ? "Loading" : "Save"}
                    </button>

                    <button
                      onClick={closeModal}
                      className="px-4 py-2 rounded-full border-[1.5px] border-neutral-500 text-xs text-black"
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Title>

                {/* Form */}
                <div className="flex flex-col gap-8 mt-6  overflow-auto">
                  {/* Top Name and Image Picker */}
                  <div className="flex flex-row gap-4 ">
                    {/* Name */}
                    <div className="basis-1/2 flex flex-col">
                      <label
                        htmlFor="fullName"
                        className={` text-sm mb-2 text-black`}
                      >
                        Title*
                      </label>
                      <input
                        value={title}
                        defaultValue={title}
                        onChange={handleTitleChange}
                        name="name"
                        type="text"
                        className={`  bg-white w-full px-3 text-sm md:text-sm py-34 placeholder-neutral-300
                  border-white focus:ring-transparent text-black 
                  focus:border-neutral-300 rounded-sm`}
                        ref={nameRef}
                        placeholder="Enter blog title"
                      />
                    </div>

                    {/* Image Picker */}
                    <div className="basis-1/2 flex flex-row gap-4">
                      <div className="flex flex-col grow">
                        <label
                          htmlFor="email"
                          className={` text-sm mb-2 text-black`}
                        >
                          Image Picker*
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
                          className={`flex justify-between  bg-white w-full px-3 text-sm md:text-sm py-2.5 ${
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
                        <div className="w-[70px] rounded-lg h-[70px] relative bg-neutral-300">
                          <img
                            className="rounded-lg mb-5 w-[70px] h-[70px]"
                            src={selectedFile ?? imageUrl}
                            alt=""
                            style={{ objectFit: "cover" }}
                            onClick={() => setSelectedFile(null)}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Blog Editor */}
                  <div className=" bg-white ">
                    <div className="bg-white mt-4 px-6 h-[68vh] overflow-auto cursor-text text-sm">
                      <Editor
                        editorState={editorState}
                        onEditorStateChange={handleEditorState}
                        toolbarClassName="toolbar-class sticky top-0 z-50 bg-red-400 text-black"
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class text-black"
                        placeholder="Write your blog content!"
                        toolbar={{
                          options: [
                            "inline",
                            // "blockType",
                            // "fontFamily",
                            // "fontSize",
                            "list",
                            // "textAlign",
                            "link",
                            // "embedded",
                            // "image",
                            // "remove",
                            "history",
                          ],
                        }}
                      />
                    </div>
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

export default ViewBlogs;
