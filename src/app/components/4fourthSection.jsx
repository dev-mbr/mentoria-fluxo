"use client";
import Image from "next/image";
import conversas from "@/images/conversas.png";
import conversasM from "@/images/conversas-mobile.png";
import linesMD from "@/images/lines-black-md.svg";
import alerta from "@/icons/alerta.png";
import textao from "@/images/textao.png";
import linesLeft from "@/icons/lines-grey-left.png";
import linesRight from "@/icons/lines-grey-right.png";
import Btn from "./Button/VenderMais";

export default function fourth({ setToggleModal }) {
  return (
    <main className="bg-[#F5F5F5] pb-[7.5rem] sm:pb-16">
      <Image className="absolute right-0 sm:hidden" src={linesMD} alt="" />
      <section className="flex flex-col items-center">
        <div className="sm:flex sm:flex-col sm:items-center">
          <div className="text-[#585852] font-medium text-[1.25rem] sm:text-[1rem] ml-12 sm:mx-auto mt-[7.5rem] sm:mt-16 sm:text-center sm:w-[21.4rem]">
            <h1 className="text-[#2E2E2B] text-[2.5rem] sm:text-[1.5rem] font-bold">
              Conversas da comunidade
            </h1>
            <p className="mt-10 sm:mt-6">
              É incrível o poder de um grupo te incentivando.
            </p>
            <p className="mt-4">
              Nos grupos exclusivos da comunidade Fluxo, você{" "}
              <strong>
                conversa abertamente, tira <br /> dúvidas e troca experiências
              </strong>{" "}
              com pessoas que já chegaram onde você quer chegar.
            </p>
          </div>
          <div>
            <Image className="sm:hidden" src={conversas} alt="" />
            <Image className="hidden sm:block" src={conversasM} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="text-center text-[1.25rem] sm:text-[1rem] text-[#585852] font-medium mx-auto flex flex-col items-center w-[50rem] sm:w-[21.4rem] mt-[5.5rem]">
          <Image src={alerta} alt="alerta" />
          <h1 className="text-[#2E2E2B] text-[2rem] font-extrabold uppercase mt-6">
            Alerta
          </h1>
          <h2 className="text-[#2E2E2B] text-[1.5rem] font-extrabold uppercase">
            Textão
          </h2>
          <p className="mt-6">
            Parece chato? Sim! Mas é um dos depoimentos mais emocionantes que
            recebi. Tenho certeza que{" "}
            <strong>isso retrata a situação de várias pessoas.</strong>
          </p>
          <p>Nem todo herói usa capa...</p>
        </div>
        <div className="absolute flex justify-between w-full mt-[30rem] sm:hidden">
          <Image src={linesLeft} alt="" />
          <Image src={linesRight} alt="" />
        </div>
        <Image
          className="mx-auto mt-12 sm:mt-10 relative z-10 sm:w-[screen]"
          src={textao}
          alt=""
        />
        <div className="text-[#585852] text-center font-medium w-[36rem] sm:w-[21.4rem] flex flex-col items-center mx-auto mt-[7.5rem] sm:mt-10">
          <h1 className="text-[#2E2E2B] text-[2.5rem] sm:text-[1.5rem] font-bold ">
            Entre no Fluxo
          </h1>
          <p className="text-[#585852] text-[1.25rem] sm:text-[1rem] leading-[2rem] sm:leading-[1.5rem] my-8 sm:my-6">
            Agende a apresentação construa um <br /> negócio consistente e
            sólido com a nossa <br />{" "}
            <strong>mentoria individual de 12 meses.</strong>
          </p>
          <Btn setToggleModal={setToggleModal} id="fourth" />
        </div>
      </section>
    </main>
  );
}
