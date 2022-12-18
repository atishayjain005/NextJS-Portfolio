import Head from "next/head";
import Image from "next/image";

import WhatIDo from "../sections/Skills/what-i-do";
import HeroSection from "../sections/Hero/hero-section";
import ContactUs from "../sections/Contact/contact-us";
import Work from "../sections/Work/work";
import AboutUs from "../sections/About/about-us";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const whatIDoData = [
  {
    image: "",
    title: "Languages I speak:",
    content: ["HTML", "CSS", "Sass", "JavaScript", "ReactJS", "NextJS"],

    link: "#contact-us",
  },
  {
    image: "",
    title: "Dev Tools:",
    content: ["VSCode", "Bitbucket", "Bootstrap", "Github", "Vercel"],
    cta: "Learn more",
  },
];

const workExp = [
  {
    title: "Headspur.it",
    subTitle: "Freelance Frontend Developer",
    content: (
      <>
        Worked with YC funded client in Headspur.it
        <br />
        <br />
        Developed various features while keeping code optimized and easy to
        read.
        <br />
        <br />
        Gave suggestions for keeping minimalistic designs, and implemented them.
        <br />
        <br />
        Actively listened to clients requests, confirming full understanding
        before addressing concerns.
      </>
    ),
    techStack: "ReactJS, NextJS, vanilla JS, JSS, Bootstrap",
    image: "/project1.png",
    link: "http://www.headspur.it/",
  },
  {
    title: "10xTechLabs",
    subTitle: "Freelance Frontend Developer",
    content: (
      <>
        An Ed.tech. platform with CRUD features divided in two parts : <br />
        <br />
        Creator-part: In Creator part we can upload case-studies which includes
        , architectural-blueprint, transcript, code and a video tutorial of a
        certain case-study.
        <br />
        <br />
        User-part : In User part , users can access case studies by signing-up
        and then buying it for a certain amount .
      </>
    ),
    techStack: "NextJS, vanilla JS, nx, Bootstrap, Framer",
    image: "/project2.png",
    link: "https://www.10xtechlabs.com/",
  },
  {
    title: "TranslateZ",
    subTitle: "Freelance Frontend Developer",
    content: (
      <>
        Built TranslateZ&apos;s official site from scratch, making reusable and
        optimized components.
        <br />
        <br />
        Reviewed code, debugged problems and corrected issues.
        <br />
        <br />
        Contributed ideas and suggestions in team meetings and delivered updates
        on deadlines, designs and enhancements.
        <br />
        <br />
        Consulted with engineering team members to determine system loads and
        develop improvement plans
      </>
    ),
    techStack: "NextJS, EmotionJS, Bootstrap, GraphQL, Strapi, Framer",
    image: "/project3.png",
    link: "https://translatez.co/",
  },
];

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Portfolio | Atishay Jain</title>
      </Head>
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
