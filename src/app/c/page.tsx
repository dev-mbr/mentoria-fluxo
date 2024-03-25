"use client";
import SecondSection from "../components/2secondSection"
import ThirdSection from "../components/3thirdSection"
import FourthSection from "../components/4fourthSection"
import FifthSection from "../components/5fifthSection"
import SixthSection from "../components/6sixthSection"
import SeventhSection from "../components/7seventhSection"
import LightTop from "../components/firstSection/lightTop"
import Head from "../components/heads/cHead"
import Modal from "../components/Modal";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);


  return (
    <main>   
      <Head setToggleModal={setToggleModal} />
      <LightTop setToggleModal={setToggleModal} />
      <SecondSection />
      <ThirdSection />
      <FourthSection setToggleModal={setToggleModal}/>
      <FifthSection />
      <SixthSection />
      <SeventhSection setToggleModal={setToggleModal}/>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <div className="mx-auto w-full overflow-auto p-0">
          <h1 className="lg:mb-2 text-center text-[12px] lg:text-[18px] font-bold text-black">
            Agendar Ligação de Apresentação
          </h1>

          <div className="flex justify-center mt-5 w-full">
            <Script
              src="https://app.nectarcrm.com.br/crm/api/1/webform/view-embedded/zwimOS3nnJ0uUStWmAvqDFbrWXRh9zwaa2vRpaj5M"
              data-nectar-webform-destination-elem="pagedef"
              defer
            ></Script>
            <div id="pagedef" className="h-full w-full"></div>
          </div>
        </div>
      </Modal>
    </main>
  );
}
