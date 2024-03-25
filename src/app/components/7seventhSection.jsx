"use client";
import Image from "next/image";
import desabilitada from "@/images/desabilitada.png"
import desabilitadaM from "@/images/desabilitadaM.png"
import arrowR from "@/icons/arrow-right.png"
import crisCar from "@/images/cris-car.png"
import crisCarM from "@/images/cris-carM.png"
import yellowLinesL from "@/images/lines-yellow-left.svg"
import yellowLinesR from "@/images/lines-yellow-rigth.svg"
import logos from "@/icons/logos.png"
import logosM from "@/icons/logosM.png"
import Btn from "./Button/VenderMais"


export default function seventh(){
    return(
        <main className="bg-black text-white">
            <section className="flex flex-col items-center font-medium">
                <Image className="sm:hidden" src={desabilitada} alt=""/>
                <Image className="hidden sm:block" src={desabilitadaM} alt=""/>
                <div className="flex flex-col items-center mt-4">
                    <div className="bg-[#F5FF00] w-12 h-[.4375rem]"></div>
                    <h1 className="text-[2.5rem] sm:text-[1.5rem] font-bold my-6 ">Entre no Fluxo</h1>
                    <Btn id="seven"/>
                    <p className="mt-10 text-[1.25rem] sm:text-[1rem] leading-8 w-[36rem] sm:w-[21.375rem] text-center">
                    Se você chegou até aqui e ainda não se convenceu de que precisa urgentemente agendar uma apresentação, <strong>preciso te dar um aviso muito importante:</strong> 
                    </p>
                </div>
                    <div className="flex justify-between absolute w-full mt-[103rem] sm:hidden">
                        <Image src={yellowLinesL} alt=""/>
                        <Image src={yellowLinesR} alt=""/>
                    </div>
                <div className="w-[50rem] sm:w-[21.4rem] rounded-2xl bg-[#292929] mt-[7.5rem] sm:mt-16 flex flex-col items-center py-12 sm:py-6 z-10 text-[1.25rem] sm:text-[1rem]">
                    <h1 className="text-[2.5rem] sm:text-[1.5rem] font-extrabold text-center uppercase">
                    Atenção
                    </h1>
                    <div className="w-[44rem] sm:w-[18.375rem] mt-10">
                        <p className="leading-8 ">
                        A probabilidade de você se juntar a nós é altíssima.
                        </p>
                        <p className="leading-8  mt-8">
                        A Crislaine, nossa atendente, além de tirar todas as suas dúvidas, vai te mostrar oportunidades que você nunca viu em nenhum outro lugar e eu acho muito difícil que você deixe essa chance passar.
                        </p>
                        <p className="leading-8  mt-8">
                        Praticamente todas as pessoas que conversam com ela entram para o Fluxo.
                        </p>
                        <h2 className="text-[1.5rem] font-bold uppercase mt-12">
                        NÃO ACREDITA?
                        </h2>
                        <p className=" mt-[.81rem]">
                        A Crislaine recebe comissões das vendas do Fluxo, olha só o carrinho novo que ela comprou, à vista:
                        </p>
                    </div>
                    <Image className="mt-12 sm:hidden" src={crisCar} alt=""/>
                    <Image className="mt-12 hidden sm:block" src={crisCarM} alt=""/>
                    <div className="w-[44rem] sm:w-[18.375rem]">
                        <p className=" mt-6">
                        Não subestime a Cris. <br className="hidden sm:block"/> As oportunidades que ela vai te oferecer são absurdas. <br className="hidden sm:block"/> Agende a ligação de apresentação agora mesmo.
                        </p>
                    </div>
                    <button className="bg-[#F5FF00] text-black text-[1.25rem] font-bold uppercase flex justify-center items-center w-[22.0625rem] sm:w-[19.75rem] rounded-2xl py-4 gap-4 mt-10">
                    Quero vender mais
                    <Image src={arrowR} alt=""/>
                    </button>
                </div>
            </section>
            <footer className="mt-[7.5rem] sm:mt-16 pb-8">
                <div className="w-full flex justify-center border-t-[.19rem] border-[#ffffff3d]">
                    <Image className="sm:hidden" src={logos} alt=""/>
                    <Image className="hidden sm:block" src={logosM} alt=""/>
                </div>
                <p className="text-[#ffffff7a] sm:text-[.625rem] text-center font-semibold mt-8">
                Copyright 2022. Todos os direitos reservados. <br className="hidden sm:block"/> <strong>READY TO GO EDUCATION</strong> / CNPJ: 37.643.030/0001-26
                </p>
            </footer>
        </main>
        )
}
    