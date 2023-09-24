import React from "react";
import BookATourIcon1 from "../../public/assets/icons/personalized-itenaries.svg";
import BookATourIcon2 from "../../public/assets/icons/expert-guided.svg";
import BookATourIcon3 from "../../public/assets/icons/education-beyond.svg";

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

export const homeAboutText = "Established in 2005, LCC Travel is a globally recognized travel and tour agency, blending the thrill of travel with purposeful experiences."
