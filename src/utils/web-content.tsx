import React from "react";
import BookATourIcon1 from "../../public/assets/icons/personalized-itenaries.svg";
import BookATourIcon2 from "../../public/assets/icons/expert-guided.svg";
import BookATourIcon3 from "../../public/assets/icons/education-beyond.svg";

import WorkStudyIcon from "../../public/assets/icons/work-study.svg";
import CrossCulturalIcon from "../../public/assets/icons/cross-cultural.svg";
import NursingIcon from "../../public/assets/icons/nursing.svg";

export function HeaderTextComponent() {
  return (
    <div className="capitalize">
      We <span className="text-th-primary-medium">bridge</span> worlds, broaden
      horizons, and believe in the transformative power of &nbsp;
      <span className="text-th-primary-medium">Journeys</span>
    </div>
  );
}

export const bookATourSectionList = [
  {
    title: "Personalised Itineraries",
    content: "Tailored journeys to cater to your unique travel dreams.",
    icon: <BookATourIcon1 />,
  },
  {
    title: "Expert Guided Experiences",
    content: "Traverse the world's wonders with our seasoned guides.",
    icon: <BookATourIcon2 />,
  },
  {
    title: "Education Beyond Boundaries",
    content: "Learn as you travel; discover as you explore.",
    icon: <BookATourIcon3 />,
  },
];

export const homeAboutText =
  "Established in 2005, LCC Travel is a globally recognized travel and tour agency, blending the thrill of travel with purposeful experiences.";

export const homeToursData = [
  {
    imgUrl: "/assets/images/home-tours-1.png",
    title: "Educational Tours",
    content:
      "Established in 2005, LCC Travel is a globally recognized travel and tour agency, blending the thrill of travel with purposeful experiences.",
  },
  {
    imgUrl: "/assets/images/home-tours-2.png",
    title: "Explore Africa",
    content:
      "Established in 2005, LCC Travel is a globally recognized travel and tour agency, blending the thrill of travel with purposeful experiences.",
  },
  {
    imgUrl: "/assets/images/home-tours-3.png",
    title: "Corporate Retreats",
    content:
      "Established in 2005, LCC Travel is a globally recognized travel and tour agency, blending the thrill of travel with purposeful experiences.",
  },
];

export const homeProgramsData = [
  {
    icon: <WorkStudyIcon/>,
    title: "Work-Study Programs",
    content:
      "Established in 2005, LCC Travel is a globally recognized travel and tour agency, blending the thrill of travel with purposeful experiences.",
  },
  {
    icon: <CrossCulturalIcon/>,
    title: "Cross-Cultural Exchanges",
    content:
      "Established in 2005, LCC Travel is a globally recognized travel and tour agency, blending the thrill of travel with purposeful experiences.",
  },
  {
    icon: <NursingIcon/>,
    title: "Nursing Recruitment",
    content:
      "Established in 2005, LCC Travel is a globally recognized travel and tour agency, blending the thrill of travel with purposeful experiences.",
  },
];


export const testimonialTestData = [
  ...Array(10),
].map(() => ({
  name: "King Okonko",
  content:
    "Established in 2005, LCC Travel is a globally recognized travel and tour agency, blending the thrill of travel with purposeful experiences. Established in 2005, LCC Travel is a globally recognized travel and tour ",
  portfolio: "CEO - Tinzu",
  imgUrl: "/assets/images/test-image.png",
}));


export const faqContent = [
  {
    id: 1,
    question: "How do I listen to and find Nexa Media podcasts?",
    answer: "<p>Listen to your favorite podcasts, and discover many more on our <a style=' text-decoration: underline;' href='/shows'>Shows page</a> </p>"
  },
  {
    id: 2,
    question: "Who do I contact about ___?",
    answer: "<p>Make all press, advertising and other general enquiries through <a style=' text-decoration: underline;' href='mailto:info@nexa.media'>info@nexa.media </a> </p>"
  },
  {
    id: 3,
    question: "When do new episodes come out?",
    answer: "<p>Some of our shows publish every week, others are seasonal. See details on our <a style=' text-decoration: underline;' href='/shows'>Shows page</a>"
  },
  {
    id: 4,
    question: "How do I listen to and find Nexa Media podcasts?",
    answer: "<p>You can find our currently open job postings by visiting our  <a text-decoration: underline;' href='/careers'>careers page!</a> </p>"
  },
  {
    id: 5,
    question: "How do I intern at Nexa?",
    answer: "<p>When internships open, we post them on our careers page and our social accounts. Keep an eye out for those. Our internships don’t always align with the academic year; they’re full-time and last anywhere from 3-6 months, depending on the team. </p>"
  },
  {
    id: 6,
    question: "I’ve got a question that wasn’t answered in this FAQ!",
    answer: "<p>Shoot us a note at <a style=' text-decoration: underline;'  href='mailto:info@nexa.media'>info@nexa.media</a> and we’ll do our best to answer. </p>"
  },
];