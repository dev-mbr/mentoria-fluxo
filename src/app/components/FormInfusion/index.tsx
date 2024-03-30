import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Modal from "../Modal";
import { useRouter } from "next/router";
import Script from "next/script";
import SelectCustom from "../SelectCustom";
import { usePathname, useSearchParams } from "next/navigation";

interface FormState {
  name: string;
  email: string;
  phonenumber: string;
  whatsapp: string;
  ddi: string;
}

interface Props {
  xid: string;
  toggleModal: boolean;
  setToggleModal: Dispatch<SetStateAction<boolean>>;
}

function FormInfusion({ xid, toggleModal, setToggleModal }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [telReady, setTelReady] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phonenumber: "",
    whatsapp: "",
    ddi: "+55",
  });

  const pathname = useSearchParams();
  const pathpage = usePathname();
  const conversion = pathname.get("conversion");
  const utm_campaign = pathname.get("utm_campaign");
  const utm_content = pathname.get("utm_content");
  const utm_medium = pathname.get("utm_medium");
  const utm_source = pathname.get("utm_source");
  const utm_term = pathname.get("utm_term");

  const handleDdi = (ddi: any) => {
    setForm({
      ...form,
      ddi: ddi,
    });
  };

  const phoneMask = (value: any) => {
    if (!value) return "";

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const handlePhone = (whatsapp: any) => {
    let input = whatsapp.target;
    input.value = phoneMask(input.value);

    setForm({
      ...form,
      whatsapp: whatsapp.target.value,
    });
  };

  useEffect(() => {
    setTelReady("+" + form.ddi + form.whatsapp);

    console.log("setTelReady ->", telReady);
  }, [form.ddi, form.whatsapp, telReady]);

  return (
    <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
      <form
        acceptCharset="UTF-8"
        className="infusion-form w-full lg:px-0 px-2 lg:py-0 py-5"
        action={`https://ov870.infusionsoft.com/app/form/process/${xid}`}
        id={`inf_form_${xid}`}
        method="POST"
      >
        <h1 className="lg:mb-2 lg:text-[18px] font-bold">
          Agendar Ligação de Apresentação
        </h1>
        <input name="inf_form_xid" type="hidden" value={xid} />
        <input
          name="inf_form_name"
          type="hidden"
          value={pathpage ? pathpage : ""}
        />
        <input
          name="infusionsoft_version"
          type="hidden"
          value="1.70.0.650428"
        />
        <input
          name="inf_custom_conversion"
          readOnly
          type="hidden"
          value={conversion ? conversion : ""}
        />
        <input
          name="inf_custom_utmcampaign"
          readOnly
          type="hidden"
          value={utm_campaign ? utm_campaign : ""}
        />
        <input
          name="inf_custom_utmcontent"
          readOnly
          type="hidden"
          value={utm_content ? utm_content : ""}
        />
        <input
          name="inf_custom_utmsource"
          readOnly
          type="hidden"
          value={utm_source ? utm_source : ""}
        />
        <input
          name="inf_custom_utmmedium"
          readOnly
          type="hidden"
          value={utm_medium ? utm_medium : ""}
        />
        <input
          name="inf_custom_utmterm"
          readOnly
          type="hidden"
          value={utm_term ? utm_term : ""}
        />
        <input
          name="inf_custom_pathpage"
          readOnly
          type="hidden"
          value={pathpage ? pathpage : ""}
        />
        <input name="urlredirect" type={"hidden"} value={"fluxo" + pathpage} />
        <input name="typeredirect" type={"hidden"} value={"fluxo"} />
        <div className="infusion-field w-full">
          <input
            id="inf_field_FirstName"
            name="inf_field_FirstName"
            placeholder="Nome *"
            type="text"
            className="p-4 w-full rounded-lg text-black border-[2px] border-gray-300 mt-6"
            required
          />
        </div>
        <div className="infusion-field">
          <input
            id="inf_field_Email"
            name="inf_field_Email"
            placeholder="Email *"
            type="text"
            className="p-4 w-full rounded-lg text-black border-[2px] border-gray-300 mt-6"
            required
          />
        </div>
        <div className={`flex gap-[.5rem] mt-5`}>
          <SelectCustom handleDdi={handleDdi} />

          <input
            name="phonenumber"
            type={"tel"}
            placeholder="Seu WhatsApp"
            className={`p-4 w-full rounded-lg text-black border-[2px] border-gray-300`}
            maxLength={15}
            onChange={(e) => handlePhone(e)}
            required
          />

          <input type="hidden" value={telReady} name="inf_field_Phone1" />
        </div>
        <div className="infusion-field">
          <div className="infusion-field-input-container">
            <select
              className="p-4 w-full rounded-lg text-black border-[2px] border-gray-300 mt-6"
              id="inf_custom_SoufuncionárioequeroentrarparaodigitalTenhonegóciofísi"
              name="inf_custom_SoufuncionárioequeroentrarparaodigitalTenhonegóciofísi"
            >
              <option value="">Qual sua situação atual?</option>
              <option value="Sou funcionário e quero entrar para o digital">
                Sou funcionário e quero entrar para o digital
              </option>
              <option value="Tenho negócio físico e quero começar no digital">
                Tenho negócio físico e quero começar no digital
              </option>
              <option value="Possuo um produto digital e quero aumentar as vendas">
                Possuo um produto digital e quero aumentar as vendas
              </option>
              <option value="Faço lançamentos e quero iniciar no perpétuo">
                Faço lançamentos e quero iniciar no perpétuo
              </option>
              <option value="Faço perpétuo e quero aumentar as vendas">
                Faço perpétuo e quero aumentar as vendas
              </option>
            </select>
          </div>
        </div>
        <div className="infusion-field">
          <div className="infusion-field-input-container">
            <select
              className="p-4 w-full rounded-lg text-black border-[2px] border-gray-300 mt-6"
              id="inf_custom_Qualdessaopçõesidentificavocê"
              name="inf_custom_Qualdessaopçõesidentificavocê"
            >
              <option value="">Qual dessas opções identifica você?</option>
              <option value="Estrategista digital">Estrategista digital</option>
              <option value="Lançador">Lançador</option>
              <option value="Expert">Expert</option>
              <option value="Empresário">Empresário</option>
              <option value="Copywriter">Copywriter</option>
              <option value="Gestor de tráfegoo">Gestor de tráfegoo</option>
              <option value="Gestor de projetos">Gestor de projetos</option>
              <option value="Empreendedor">Empreendedor</option>
              <option value="Servidor público">Servidor público</option>
              <option value="Autônomo ou prestador de serviços">
                Autônomo ou prestador de serviços
              </option>
              <option value="Desempregado">Desempregado</option>
            </select>
          </div>
        </div>
        <div className="infusion-field">
          <div className="infusion-field-input-container">
            <select
              className="p-4 w-full rounded-lg text-black border-[2px] border-gray-300 mt-6"
              id="inf_custom_Qualsuareceitaoufaturamentoanual"
              name="inf_custom_Qualsuareceitaoufaturamentoanual"
            >
              <option value="">Qual sua receita ou faturamento anual?</option>
              <option value="Até 5 mil reais">Até 5 mil reais</option>
              <option value="De 5 mil a 20 mil reais">
                De 5 mil a 20 mil reais
              </option>
              <option value="De 60MIL a 100 MIL">De 60MIL a 100 MIL</option>
              <option value="De 100MIL a 250 MIL">De 100MIL a 250 MIL</option>
              <option value="De 250MIL a 500 MIL">De 250MIL a 500 MIL</option>
              <option value="De 500 a 1 milhão MIL">
                De 500 a 1 milhão MIL
              </option>
              <option value="De 1 milhão a 2 milhões">
                De 1 milhão a 2 milhões
              </option>
              <option value="De 2 milhão a 5 milhões&gt;">
                De 2 milhão a 5 milhões
              </option>
              <option value="Acima de 5 milhões">Acima de 5 milhões</option>
            </select>
          </div>
        </div>
        <div>
          <div>&nbsp;</div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#F5FF00] p-5 font-bold text-black"
        >
          Agendar Apresentação
        </button>
      </form>
      <Script
        type="text/javascript"
        src="https://ov870.infusionsoft.app/app/webTracking/getTrackingCode"
      ></Script>
      <Script
        type="text/javascript"
        src={`https://ov870.infusionsoft.com/app/timezone/timezoneInputJs?xid=${xid}`}
      ></Script>
      <Script
        type="text/javascript"
        src="https://ov870.infusionsoft.com/js/jquery/jquery-3.3.1.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://ov870.infusionsoft.app/app/webform/overwriteRefererJs"
      ></Script>
    </Modal>
  );
}

export default FormInfusion;
