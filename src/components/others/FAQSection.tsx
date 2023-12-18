import React, { useState } from "react";
import { useRouter } from "next/router";
import { faqContent, homeAboutText } from "@/utils/web-content";
import ChevronDownIcon from "../../../public/assets/icons/chevron_down.svg";
import parse from "html-react-parser";

function FAQSection() {
  const router = useRouter();

  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto">
      <div className="bg-th-primary-medium rounded-3xl p-12 flex flex-col">
        {/* Section Header */}
        <div className="flex-none w-full flex flex-row justify-between items-center">
          <h5 className="text-3xl text-center text-white">
            Frequently Asked Questions
          </h5>
          {/* MoreButton */}
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-white px-6 py-3 rounded-full text-lg md:text-base"
            >
              See more
            </button>
          </div>
        </div>

        {/* FAQ Component */}
        <div>
          <div className="flex flex-col gap-9 mt-12">
            {faqContent.map((faq) => (
              <FAQCard
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className={`flex-1 flex-col rounded-3xl transition-all duration-200`}>
      <div className={`flex flex-row items-center gap-5 justify-between cursor-pointer
      hover:bg-opacity-20 hover:bg-white py-3 rounded-full px-4 transition-all duration-500 ${
        isOpen ? "mb-3" : ""
      } `}>
        <div onClick={() => setisOpen(!isOpen)} className="grow ">
          <h5
            className={`text-md md:text-lg text-white transition-all duration-200`}
          >
            {question}
          </h5>
        </div>

        <div
          onClick={() => setisOpen(!isOpen)}
          className={` flex justify-center rounded-full  ${
            isOpen ? "rotate-180" : "0"
          }  transition-all duration-300`}
        >
          <ChevronDownIcon width="18" height="10" viewBox="0 0 23.709 13.883" />
        </div>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } transition-all duration-500 px-4 text-white opacity-70`}
      >
        <p className={` text-base`}>{parse(`${answer}`)}</p>
      </div>
    </div>
  );
}

export default FAQSection;
