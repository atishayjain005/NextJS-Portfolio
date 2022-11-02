import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import WhatIDo from "../sections/what-i-do";
import HeroSection from "../sections/hero-section";
import Work from "../sections/work";
import AboutUs from "../sections/about-us";
import ContactUs from "../sections/contact-us";
import Footer from "../components/Footer";

const whatIDoData = [
  {
    image: "",
    title: "Product Design",
    content:
      "Need help with designing your mobile app or website? I can create beautiful designs based on your content, or redesign old websites to improve your conversions and achieve your business goals.",
    link: "#contact-us",
  },
  {
    image: "",
    title: "Shopify Design & Setup",
    content:
      "Are you an eCommerce store owner? I can help you design fully custom landing pages, product and collection pages. Please visit my agency website. We also help build new stores.",
    cta: "Learn more",
  },
  {
    image: "",
    title: "Education",
    content:
      "I've recently become a mentor at Dribbble UI Design Course & Product Design Course. From now on you can learn design together with me and other mentors at Dribbble.",
    cta: "Learn more",
  },
];

const workExp = [
  {
    title: "Multiple Sweatcoin Features",
    subTitle: "Mobile Design, iOS, Android",
    content: (
      <>
        Sweatcoin is an app with 100M+ users that rewards you for steps. I
        joined Sweatcoin in May 2021 and since then continue creating amazing
        features together with the Growth Team.
        <br />
        <br />
        Each feature we work on goes through a lot of testing & experiments,
        making my work at Sweatcoin really dynamic and interesting.
      </>
    ),
    image: "/project1.jpeg",
  },
  {
    title: "One-page Personal Website for Freelance Marketer, Nicole Warshauer",
    subTitle: "Website Design, Webflow Build",
    content:
      "This was a fully custom website that I designed from scratch in Figma, and then built in Webflow. The aim was to have a friendly, yet professional vibe. The site is very fast—with a Google Pagespeed score of 99 for desktop and 92 for mobile.",
    image: "/project2.jpg",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatIDo whatIDoData={whatIDoData} />
      <Work workExp={workExp} />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
