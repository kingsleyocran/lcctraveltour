import React from "react";
import BookATourIcon1 from "../../public/assets/icons/personalized-itenaries.svg";
import BookATourIcon2 from "../../public/assets/icons/expert-guided.svg";
import BookATourIcon3 from "../../public/assets/icons/education-beyond.svg";
import WorkStudyIcon from "../../public/assets/icons/work-study.svg";
import CrossCulturalIcon from "../../public/assets/icons/cross-cultural.svg";
import NursingIcon from "../../public/assets/icons/nursing.svg";

export function HeaderTextComponent({colorClass="text-th-primary-medium"}: {colorClass?: string}) {
  return (
    <div className="capitalize">
      We <span className={colorClass}>bridge</span> worlds, broaden
      horizons, and believe in the transformative power of &nbsp;
      <span className={colorClass}>Journeys</span>
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
  "LCC Travel is a pioneering education-focused travel company rooted in Accra, Ghana, \
  committed to enriching the lives of students and the middle-class populace through premium \
  yet affordable travel experiences. ";

export const homeAboutText2 =
  "Established with a passionate drive to bridge the gap \
  between learning and adventure, LCC Travel is dedicated to providing unparalleled \
  opportunities for intellectual growth, cross-cultural understanding, and personal \
  development.";

export const programsData = [
  {
    icon: <WorkStudyIcon />,
    title: "Work-Study Programs",
    subContent:
      "For students eager to gain practical experience while pursuing their studies, LCC Travel & Tours offers transformative work-study programs.",
    imgUrl: "",
    content:
      "For students eager to gain practical experience while pursuing their studies, LCC Travel & Tours offers transformative work-study programs. We collaborate with \
      reputable institutions and organizations to provide opportunities in various fields, such as hospitality, agriculture, and business. Participants not only contribute \
      to projects but also acquire invaluable insights, networking opportunities, and a deeper understanding of their chosen profession.",
  },
  {
    icon: <CrossCulturalIcon />,
    title: "Cross-Cultural Exchanges",
    subContent:
      "Middle-class participants either in Ghana or from abroad can engage in cross-cultural exchanges, expanding their worldview and connecting with \
    individuals from different backgrounds.",
    imgUrl: "",
    content:
      "Middle-class participants either in Ghana or from abroad can engage in cross-cultural exchanges, expanding their worldview and connecting with \
      individuals from different backgrounds. These interactions foster tolerance, empathy, and a broader perspective on global issues",
  },
  {
    icon: <NursingIcon />,
    title: "Nursing & Social Work Recruitment",
    subContent:
      "Recognizing the critical importance of healthcare and social services, LCC Travel partners with nursing and social work institutions to offer specialized \
    recruitment programs to THE UK.",
    imgUrl: "",
    content:
      "Recognizing the critical importance of healthcare and social services, LCC Travel partners with nursing and social work institutions to offer specialized \
      recruitment programs to THE UK. Qualified nurses will be able to secure jobs and sponsorships to relocate to work in the United Kingdom via our recruitment partners",
  },
];

export const faqContent = [
  {
    id: 1,
    question: "How do I listen to and find Nexa Media podcasts?",
    answer:
      "<p>Listen to your favorite podcasts, and discover many more on our <a style=' text-decoration: underline;' href='/shows'>Shows page</a> </p>",
  },
  {
    id: 2,
    question: "Who do I contact about ___?",
    answer:
      "<p>Make all press, advertising and other general enquiries through <a style=' text-decoration: underline;' href='mailto:info@nexa.media'>info@nexa.media </a> </p>",
  },
  {
    id: 3,
    question: "When do new episodes come out?",
    answer:
      "<p>Some of our shows publish every week, others are seasonal. See details on our <a style=' text-decoration: underline;' href='/shows'>Shows page</a>",
  },
  {
    id: 4,
    question: "How do I listen to and find Nexa Media podcasts?",
    answer:
      "<p>You can find our currently open job postings by visiting our  <a text-decoration: underline;' href='/careers'>careers page!</a> </p>",
  },
  {
    id: 5,
    question: "How do I intern at Nexa?",
    answer:
      "<p>When internships open, we post them on our careers page and our social accounts. Keep an eye out for those. Our internships don’t always align with the academic year; they’re full-time and last anywhere from 3-6 months, depending on the team. </p>",
  },
  {
    id: 6,
    question: "I’ve got a question that wasn’t answered in this FAQ!",
    answer:
      "<p>Shoot us a note at <a style=' text-decoration: underline;'  href='mailto:info@nexa.media'>info@nexa.media</a> and we’ll do our best to answer. </p>",
  },
];

export const homeServicesList = ["Corporate retreats", "Car rentals", "Ticketing", "Hotel Booking", "Visa assistance"]

export const aboutContentMission =
  "At LCC Travel & Tours, our mission is to empower Ghana's student and \
middle-class populace through transformative educational travel experiences that transcend borders, ignite \
curiosity, and cultivate global citizens. We are committed to making premium yet affordable \
travel opportunities accessible, enhancing personal growth, fostering cross-cultural \
understanding, and shaping the leaders of tomorrow.";

export const aboutContentVision =
  "Our vision is simple yet profound: to redefine education by weaving it seamlessly into \
captivating journeys that inspire, educate, and empower. We envision a Ghana where every \
student and middle-class individual has access to immersive educational experiences that \
spark curiosity, deepen understanding, and cultivate a global perspective.";

export const aboutContentValues = [
  {
    id: 1,
    title: "Education First",
    content:
      "We prioritize learning and seek to ignite a passion for discovery, \
    encouraging participants to engage with the world as their classroom.",
  },
  {
    id: 2,
    title: "Accessibility",
    content:
      "Our commitment to affordability ensures that every student and middle-class \
      individual can embark on transformative journeys.",
  },
  {
    id: 3,
    title: "Cultural Exchange",
    content:
      "We celebrate diversity and facilitate meaningful interactions that bridge \
      cultures, fostering mutual respect and understanding.",
  },
  {
    id: 4,
    title: "Sustainability",
    content:
      "We are dedicated to preserving the environment and supporting local communities, \
      leaving a positive footprint wherever we go.",
  },
];


export const socialLinks = {
  linkedIn: "https://lccedutravels.com",
  instagram: "https://lccedutravels.com",
  twitter: "https://lccedutravels.com",
  facebook: "https://lccedutravels.com"
}

export const contactDetails = {
  address: "GT-351-7949 opp. Kari Anang Courts, Lashibi",
  googleMapLink: "https://maps.app.goo.gl/si5QWzG6aM8TvAej6?g_st=iw",
  phone: ["+233 303 955 182 ", "+233 552 508 622", "+233 244 115 225 "],
  email: "lcctravel.tours@gmail.com"
}



