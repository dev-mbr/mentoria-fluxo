"use client";
import Image from "next/image";
import SecondSection from "../components/2secondSection";
import ThirdSection from "../components/3thirdSection";
import FourthSection from "../components/4fourthSection";
import FifthSection from "../components/5fifthSection";
import SixthSection from "../components/6sixthSection";
import SeventhSection from "../components/7seventhSection";
import DarkTop from "../components/firstSection/darkTop";
import Head from "../components/heads/bHead";
import DataLayer from "../components/DataLayer";

export default function Home() {
  return (
    <main>
      <DataLayer
        type_page="captura"
        id_produto="1296776"
        operacao="ppt"
        type_content="organico"
        versao_pico="ppt"
      />
      <Head />
      <DarkTop setToggleModal={() => console.log("first")} />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </main>
  );
}
