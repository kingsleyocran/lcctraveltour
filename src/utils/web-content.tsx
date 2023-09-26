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
