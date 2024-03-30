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
import DataLayer from "../components/DataLayer";
import FormInfusion from "../components/FormInfusion";
import SuccessRedirect from "../components/SuccessRedirect";
import { usePathname, useSearchParams } from "next/navigation";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);
  const pathpage = useSearchParams();
  const pathname = usePathname();
  const conversion = pathpage.get("conversion");
  const utm_campaign = pathpage.get("utm_campaign");
  const utm_content = pathpage.get("utm_content");
  const utm_medium = pathpage.get("utm_medium");
  const utm_source = pathpage.get("utm_source");
  const utm_term = pathpage.get("utm_term");

  const urlCloseModalSuccess = `/fluxo-publico-frio/a?conversion=${conversion}&utm_campaign=${utm_campaign}&utm_content=${utm_content}&utm_medium=${utm_medium}&utm_source=${utm_source}&utm_term=${utm_term}`;

  return (
    <main>
      <DataLayer
        type_page="captura"
        id_produto="1296776"
        operacao="ppt"
        type_content="organico"
        versao_pico="ppt"
      />
      <Ahead setToggleModal={setToggleModal} />
      <DarkTop setToggleModal={setToggleModal} />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <FormInfusion
        setToggleModal={setToggleModal}
        toggleModal={toggleModal}
        xid={"a0ff22918822f8ed1c89a2ad5ac48b22"}
      />
      <SuccessRedirect urlRedirect={urlCloseModalSuccess} />
    </main>
  );
}
