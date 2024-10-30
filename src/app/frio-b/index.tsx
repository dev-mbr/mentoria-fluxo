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
import Modal from "../components/Modal";
import Script from "next/script";
import { Suspense, useState } from "react";
import FormInfusion from "../components/FormInfusion";
import SuccessRedirect from "../components/SuccessRedirect";
import { usePathname, useSearchParams } from "next/navigation";
import DataLayer from "../components/DataLayer";
import FormActive from "../components/FormActive";

export default function PageB() {
  const [toggleModal, setToggleModal] = useState(false);
  const pathpage = useSearchParams();
  const pathname = usePathname();
  const conversion = pathpage.get("conversion");
  const utm_campaign = pathpage.get("utm_campaign");
  const utm_content = pathpage.get("utm_content");
  const utm_medium = pathpage.get("utm_medium");
  const utm_source = pathpage.get("utm_source");
  const utm_term = pathpage.get("utm_term");

  const urlCloseModalSuccess = `/fluxo/pb/frio-b?conversion=${conversion}&utm_campaign=${utm_campaign}&utm_content=${utm_content}&utm_medium=${utm_medium}&utm_source=${utm_source}&utm_term=${utm_term}`;

  return (
    <Suspense>
      <main>
        <DataLayer
          type_page="captura"
          id_produto="1296776"
          operacao="ppt"
          type_content="organico"
          versao_pico="ppt"
        />
        <Head setToggleModal={setToggleModal} />
        <DarkTop setToggleModal={setToggleModal} />
        <SecondSection />
        <ThirdSection />
        <FourthSection setToggleModal={setToggleModal} />
        <FifthSection />
        <SixthSection />
        <SeventhSection setToggleModal={setToggleModal} />
        <FormActive
          funnel="f-ads-pages"
          pathpage={"frio-b"}
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
        />

        <SuccessRedirect urlRedirect={urlCloseModalSuccess} />
      </main>
    </Suspense>
  );
}
