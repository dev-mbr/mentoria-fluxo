import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Modal from "../Modal";
import { useRouter } from "next/router";
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
  toggleModal: boolean;
  setToggleModal: Dispatch<SetStateAction<boolean>>;
  pathpage: string;
  funnel: string;
}

function FormActive({ toggleModal, setToggleModal, pathpage, funnel }: Props) {
  const [telReady, setTelReady] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phonenumber: "",
    whatsapp: "",
    ddi: "+55",
  });

  const pathname = useSearchParams();

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

  useEffect(() => {
    console.log("first", pathpage);
  }, [pathpage]);

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

  function getCookie(name: string) {
    if (typeof document !== "undefined") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const parts = cookie.split("=");
        if (parts[0] === name) {
          return parts[1];
        }
      }
    }
    return null;
  }

  const we_ussid = getCookie("_we_ussid");

  return (
    <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
      <form
        action="https://readytogo59637.activehosted.com/proc.php"
        acceptCharset="UTF-8"
        className="infusion-form w-full lg:px-0 px-2 lg:py-0 py-5"
        method="POST"
      >
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="f" value={"44"} />
        <h1 className="lg:mb-2 lg:text-[18px] font-bold">
          Agendar Ligação de Apresentação
        </h1>
        <input
          type="hidden"
          name="or"
          value="0b2a0fe8b618557e119630b0091d6aa9"
        />

        <input type="hidden" name="field[10]" value={utm_campaign ?? ""} />

        <input
          type="hidden"
          name="field[11]"
          id="utm_source"
          value={utm_source ?? ""}
        />

        <input
          type="hidden"
          name="field[12]"
          id="utm_medium"
          value={utm_medium ?? ""}
        />

        <input
          type="hidden"
          name="field[13]"
          id="utm_content"
          value={utm_content ?? ""}
        />

        <input
          type="hidden"
          name="field[14]"
          id="utm_term"
          value={utm_term ?? ""}
        />

        <input
          type="hidden"
          name="field[15]"
          id="conversion"
          value={conversion ?? ""}
        />

        <input
          type="hidden"
          name="field[16]"
          id="sigla_produto"
          value={"VTSD"}
        />

        <input type="hidden" name="field[17]" id="versao_pico" value="ppt" />

        <input
          type="hidden"
          name="field[18]"
          id="pathpage"
          value={pathpage.replace(/^\//, "") ?? ""}
        />

        <input
          type="hidden"
          name="field[24]"
          id="we_ussid"
          value={we_ussid ?? ""}
        />
        <input
          type="hidden"
          name="field[26]"
          id="field_action"
          value={"pre-checkout"}
        />
        <input type="hidden" name="field[28]" id="funnel" value={funnel} />
        <div className="infusion-field w-full">
          <input
            name="fullname"
            placeholder="Nome *"
            type="text"
            className="p-4 w-full rounded-lg text-black border-[2px] border-gray-300 mt-6"
            required
          />
        </div>
        <div className="infusion-field">
          <input
            name="email"
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

          <input type="hidden" value={telReady} name="phone" />
        </div>
        <div className="infusion-field">
          <div className="infusion-field-input-container">
            <select
              className="p-4 w-full rounded-lg text-black border-[2px] border-gray-300 mt-6"
              name="field[32]"
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
              name="field[33]"
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
              name="field[38]"
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
                De 2 milhão a 5 milhões&gt;
              </option>
              <option value="Acima de 5 milhões">Acima de 5 milhões</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#F5FF00] p-5 font-bold text-black mt-10"
        >
          Agendar Apresentação
        </button>
      </form>
    </Modal>
  );
}

export default FormActive;
