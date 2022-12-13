import Head from "next/head";
import Image from "next/image";

import WhatIDo from "../sections/what-i-do";
import HeroSection from "../sections/hero-section";
import ContactUs from "../sections/contact-us";
import Work from "../sections/work";
import AboutUs from "../sections/about-us";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const whatIDoData = [
  {
    image: "",
    title: "Languages I speak:",
    content: (
      <>
        HTML,&nbsp;&nbsp;CSS,&nbsp;&nbsp;Sass,&nbsp;&nbsp;JavaScript,&nbsp;&nbsp;ReactJS,&nbsp;&nbsp;NextJS
      </>
    ),
    link: "#contact-us",
  },
  {
    image: "",
    title: "Dev Tools:",
    content: (
      <>
        VSCode,&nbsp;&nbsp;Bitbucket,&nbsp;&nbsp;Bootstrap,&nbsp;&nbsp;Github,&nbsp;&nbsp;Vercel
      </>
    ),
    cta: "Learn more",
  },
];

const workExp = [
  {
    title: "Headspur.it",
    subTitle: "Freelance Frontend Developer",
    content: (
      <>
        Learned new skills and applied to daily tasks to improve efficiency and
        productivity
        <br />
        <br />
        Exceeded goals through effective task prioritization and great work
        ethic.
        <br />
        <br />
        Actively listened to customers requests, confirming full understanding
        before addressing concerns.
      </>
    ),
    image: "/project1.png",
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
    image: "/project2.png",
  },
  {
    title: "TranslateZ",
    subTitle: "Freelance Frontend Developer",
    content: (
      <>
        Reviewed code, debugged problems and corrected issues.
        <br />
        <br /> Contributed ideas and suggestions in team meetings and delivered
        updates on deadlines, designs and enhancements.
        <br />
        <br />
        Consulted with engineering team members to determine system loads and
        develop improvement plans
      </>
    ),
    image: "/project3.png",
  },
];

export default function Home() {
  return (
    <div className="bg-black">
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
