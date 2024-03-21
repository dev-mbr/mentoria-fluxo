"use client";
import Image from "next/image";
import logo from "@/icons/logo.png"
import mentorados from "@/images/mentorados.png"
import arrowR from "@/icons/arrow-right.png"
import leandro from "@/images/multiverso-leandro.png"
import leandroM from "@/images/multiverso-leandroM.png"


export default function aHead(){
    return(
        <main>
            <section className="dark-head-gradient text-white  pt-[4.5rem] sm:pt-[2.5rem]">
                <div className="w-[75rem] sm:w-[21.375rem] flex flex-col items-center gap-[2.5rem] sm:gap-6 mx-auto">
                    <Image  src={logo} alt=""/>
                    <h1 className="text-[2.5rem] sm:text-[1.5rem] font-bold leading-[3rem] sm:leading-normal tracking-tight sm:-tracking-[.015rem] text-center sm:mt-8">
                    Nunca foi tão fácil para pessoas comuns <br className="sm:hidden" />transformarem o que sabem em um negócio digital <br className="sm:hidden" /> muito lucrativo mesmo que escalando seu <br className="sm:hidden" /> negócio atual ou mesmo começando do zero.
                    </h1>
                    <div className="flex sm:flex-col justify-center items-center sm:text-center">
                        <p className="text-[1.25rem] sm:text-[1rem] font-medium leading-[2rem] w-[38.9375rem] sm:w-auto">
                        Esteja ao lado de pessoas que estão no mesmo momento que você e <strong>construa um negócio consistente e sólido através da nossa mentoria individual de 12 meses.</strong>
                        </p>
                        <div className="flex flex-col items-center w-[22.0625] gap-4 sm:mt-6">
                            <div className="flex justify-center items-center gap-[1.12rem] sm:gap-3">
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
                    <Image className="sm:hidden " src={leandro} alt=""/>
                </div>
                    <Image className="hidden sm:block mx-auto" src={leandroM} alt=""/>
            </section>
        </main>
    )
}