"use client";
import Image from "next/image";
import SecondSection from "../components/2secondSection"
import ThirdSection from "../components/3thirdSection"
import FourthSection from "../components/4fourthSection"
import FifthSection from "../components/5fifthSection"
import SixthSection from "../components/6sixthSection"
import SeventhSection from "../components/7seventhSection"
import LightTop from "../components/firstSection/lightTop"
import Head from "../components/heads/cHead"

export default function Home() {
  return (
    <main>   
      <Head/>
      <LightTop/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
    </main>
  );
}
