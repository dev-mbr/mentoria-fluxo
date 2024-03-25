"use client";
import Image from "next/image";
import SecondSection from "../components/2secondSection";
import ThirdSection from "../components/3thirdSection";
import FourthSection from "../components/4fourthSection";
import FifthSection from "../components/5fifthSection";
import SixthSection from "../components/6sixthSection";
import SeventhSection from "../components/7seventhSection";
import DarkTop from "../components/firstSection/darkTop";
import Ahead from "../components/heads/aHead";
import Modal from "../components/Modal";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <main>
      <Ahead setToggleModal={setToggleModal} />
      <DarkTop setToggleModal={setToggleModal} />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <div className="mx-auto w-full overflow-auto p-3">
          <h1 className="lg:mb-2 text-[12px] lg:text-[18px] font-bold text-black">
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
