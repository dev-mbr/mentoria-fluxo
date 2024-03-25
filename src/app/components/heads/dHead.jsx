"use client";
import Image from "next/image";
import logo from "@/icons/logo-dark.png"
import mentorados from "@/images/mentorados.png"
import leandro from "@/images/leandro-palestra.png"
import leandroM from "@/images/leandro-palestraM.png"
import Btn from "../Button/VenderMais"


export default function bHead({ setToggleModal }){
    return(
        <main>
            <section className="bg-[#F5F5F5] pt-[4.5rem] sm:pt-[2.5rem] ">
                <div className="flex justify-center lg:max-w-[75rem]  mm:justify-start mm:pl-4 lg:mx-auto mm:overflow-x-hidden">
                    <div className="lg:w-[34.8rem]  sm:w-[21.375rem] flex flex-col sm:items-center gap-[2.5rem] sm:gap-6 sm:mx-auto mm:pb-16">
                        <Image  src={logo} alt=""/>
                        <h1 className="text-[2.5rem] sm:text-[1.5rem] font-bold leading-[3rem] sm:leading-normal tracking-tighter sm:-tracking-[.015rem] sm:text-center sm:mt-8">
                        Tenha direcionamento individual com os melhores especialistas do mercado e acompanhamento diário para fazer o seu negócio digital vender muito <br className="hidden sm:block" /> todos os dias.                        
                        </h1>
                        <div className="flex flex-col justify-center sm:w-full sm:mx-auto sm:items-center sm:text-center">
                            <div className="text-[1.25rem] sm:text-[1rem] font-medium leading-[1.275rem] sm:leading-6 w-[34.75rem] sm:w-[23rem] text-[#585852] flex items-end gap-1">
                            <p className="mb-[0.65rem] text-[2.5rem]">.</p><p>De <strong>NEWBIE</strong> para <strong>SOFT</strong> (do 0 até os R$ 10k)</p>
                            </div>
                            <div className="text-[1.25rem] sm:text-[1rem] font-medium leading-[1.275rem] sm:leading-6 w-[34.75rem] sm:w-[23rem] text-[#585852] flex items-end gap-1">
                            <p className="mb-[0.65rem] text-[2.5rem]">.</p><p>De <strong>SOFT</strong> para <strong>HARD</strong> (R$ 10k para R$ 100k)</p>
                            </div>
                            <div className="text-[1.25rem] sm:text-[1rem] font-medium leading-[1.275rem] sm:leading-6 w-[34.75rem] sm:w-[23rem] text-[#585852] flex items-end gap-1">
                            <p className="mb-[0.65rem] text-[2.5rem]">.</p><p>De <strong>HARD</strong> para <strong>PRO</strong> (R$ 100k para R$ 2M) </p>
                            </div>
                            <div className="text-[1.25rem] sm:text-[1rem] font-medium leading-[1.275rem] sm:leading-6 w-[34.75rem] sm:w-[23rem] text-[#585852] flex items-end gap-1">
                            <p className="mb-[0.65rem] text-[2.5rem]">.</p><p> De <strong>PRO</strong> para <strong>MASTER</strong> (R$ 2M para R$ 10M)</p>
                            </div>
                            
                            <div className="flex flex-col sm:items-center w-[22.0625] gap-4 mt-8 sm:mt-6">
                                <div className="flex sm:justify-center items-center gap-[1.12rem] sm:gap-3">
                                    <Image src={mentorados} alt=""/>
                                    <p className="font-medium">
                                    + de 2 mil  mentorados Fluxo
                                    </p>
                                </div>
                                <Btn setToggleModal={setToggleModal} />

                            </div>
                        </div>
                    </div>
                        <Image className="sm:hidden max-w-[74.5rem] w-full" src={leandro} alt=""/>
                </div>
                    <Image className="hidden sm:block mx-auto" src={leandroM} alt=""/>
            </section>
        </main>
    )
}