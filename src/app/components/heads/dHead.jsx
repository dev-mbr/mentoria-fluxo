"use client";
import Image from "next/image";
import logo from "@/icons/logo-dark.png"
import mentorados from "@/images/mentorados.png"
import arrowR from "@/icons/arrow-right.png"
import leandro from "@/images/leandro-palestra.png"
import leandroM from "@/images/leandro-palestraM.png"


export default function bHead(){
    return(
        <main>
            <section className="bg-[#F5F5F5] pt-[4.5rem] sm:pt-[2.5rem] ">
                <div className="flex justify-end mm:w-screen">
                    <div className="w-[37.68rem] mm:z-10 sm:w-[22rem] flex flex-col sm:items-center gap-[2.5rem] sm:gap-6 sm:mx-auto mm:pb-12">
                        <Image  src={logo} alt=""/>
                        <h1 className="text-[2.5rem] sm:text-[1.5rem] font-bold leading-[3rem] sm:leading-normal tracking-tighter sm:-tracking-[.015rem] sm:text-center sm:mt-8">
                        Tenha direcionamento individual com os melhores especialistas do mercado e acompanhamento diário para fazer o seu negócio digital vender muito <br className="hidden sm:block" /> todos os dias.                        
                        </h1>
                        <div className="flex flex-col justify-center sm:items-center sm:text-center">
                            <p className="text-[1.25rem] sm:text-[1rem] font-medium leading-[2rem] sm:leading-6 w-[34.75rem] text-[#585852]">
                            De <strong>NEWBIE</strong> para <strong>SOFT</strong> (do 0 até os R$ 10k) <br /> De <strong>SOFT</strong> para <strong>HARD</strong> (R$ 10k para R$ 100k) <br /> De <strong>HARD</strong> para <strong>PRO</strong> (R$ 100k para R$ 2M) <br /> De <strong>PRO</strong> para <strong>MASTER</strong> (R$ 2M para R$ 10M)
                            </p>
                            <div className="flex flex-col sm:items-center w-[22.0625] gap-4 mt-8 sm:mt-6">
                                <div className="flex sm:justify-center items-center gap-[1.12rem] sm:gap-3">
                                    <Image src={mentorados} alt=""/>
                                    <p className="font-medium">
                                    + de 2 mil  mentorados Fluxo
                                    </p>
                                </div>
                                <button className="bg-[#F5FF00] text-black text-[1.25rem] font-bold uppercase flex justify-center items-center w-[22.0625rem] rounded-2xl py-4 gap-4">
                                Quero vender mais
                                <Image src={arrowR} alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                        <Image className="sm:hidden max-w-[74.5rem] w-full mm:w-[52rem] -ml-[14rem]" src={leandro} alt=""/>
                </div>
                    <Image className="hidden sm:block mx-auto" src={leandroM} alt=""/>
            </section>
        </main>
    )
}