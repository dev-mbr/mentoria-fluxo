"use client";
import Image from "next/image";
import zoom from "@/images/zoom-ladeira.png"
import zoomMobi from "@/images/zoom-ladeira-mobile.png"
import oficina1 from "@/images/oficina-1.png"
import oficina2 from "@/images/oficina-2.png"
import oficina3 from "@/images/oficina-3.png"
import oficina4 from "@/images/oficina-4.png"
import oficina5 from "@/images/oficina-5.png"
import oficina6 from "@/images/oficina-6.png"
import oficina1m from "@/images/oficina-1-m.png"
import oficina2m from "@/images/oficina-2-m.png"
import oficina3m from "@/images/oficina-3-m.png"
import oficina4m from "@/images/oficina-4-m.png"
import oficina5m from "@/images/oficina-5-m.png"
import oficina6m from "@/images/oficina-6-m.png"

export default function third(){
    return(
        <main className="bg-black">
            <section className=" w-full text-[#ffffffe0] pt-[7.5rem] sm:pt-[4rem] flex flex-col items-center">
            <h1 className="text-[2.5rem] text-white sm:text-[1.5rem] font-bold leading-[3rem] sm:leading-8 text-center ">
            Olha só os temas que <br className="hidden sm:block"/> rolam <br className="sm:hidden"/> nas oficinas <br className="hidden sm:block"/> do Fluxo:
            </h1>
            <div className="flex flex-wrap w-[54.2rem] sm:w-[21.4rem] justify-center mx-auto gap-4 sm:gap-2 mt-10 sm:text-[.75rem]">
                <p className="py-2 px-4 bg-[#292929] w-fit rounded-[.5rem] font-semibold">
                Criação do método do seu produto
                </p>
                <p className="py-2 px-4 bg-[#292929] w-fit rounded-[.5rem] font-semibold">
                Tráfego para iniciantes
                </p>
                <p className="py-2 px-4 bg-[#292929] w-fit rounded-[.5rem] font-semibold">
                Escala no tráfego
                </p>
                <p className="py-2 px-4 bg-[#292929] w-fit rounded-[.5rem] font-semibold">
                Copy de vídeo de vendas
                </p>
                <p className="py-2 px-4 bg-[#292929] w-fit rounded-[.5rem] font-semibold">
                Copy de anúncios
                </p>
                <p className="py-2 px-4 bg-[#292929] w-fit rounded-[.5rem] font-semibold">
                Como conseguir depoimentos incríveis
                </p>
                <p className="py-2 px-4 bg-[#292929] w-fit rounded-[.5rem] font-semibold">
                Como criar conteúdo que vende
                </p>
                <p className="py-2 px-4 bg-[#292929] w-fit rounded-[.5rem] font-semibold">
                Stories 10X Turbo
                </p>
                <p className="py-2 px-4 bg-[#292929] w-fit rounded-[.5rem] font-semibold">
                Como recuperar vendas por WhatsApp
                </p>
            </div>
            <h2 className="font-semibold text-[#E5E5E5] text-center mt-6">
            E muitas outras...
            </h2>
            <Image className="mt-[4rem] sm:hidden" src={zoom} alt=""/>
            <Image className="mt-[2.5rem] hidden sm:block" src={zoomMobi} alt=""/>
            </section> 
            <section className="flex justify-between sm:flex-col sm:items-center items-center mx-auto w-[75rem] sm:w-[21.4rem] mt-[5.5rem] sm:mt-[4rem] border-t-[.125rem] border-[#585852] pt-[5.5rem] lg:pb-[7.5rem]">
                <div className="w-[30.4rem] sm:w-full text-[1.25rem] sm:text-[1rem] font-medium text-white">
                    <h1 className="text-[2.5rem] sm:text-[1.5rem] font-bold lg:leading-[3rem] sm:text-center ">
                    Eventos presenciais <br className="hidden sm:block"/> que vão te fazer <br className="hidden sm:block"/><span className="text-[#F5FF00]">tremer os joelhos</span>
                    </h1>
                    <p className="mt-10">
                    Não tem “happy hour” depois dos eventos presenciais do Fluxo, pois o próprio evento é o happy hour. Você não vai precisar de nenhuma dose de tequila para ficar “alto”. 
                    </p>
                    <p className="mt-6">
                    A quantidade de <strong>informações, estratégias, energia e insights</strong> que você vai receber, já são o suficiente para que você saia de lá trançando as pernas.
                    </p>
                    <p className="mt-6">
                    Mas se você quiser encher a cara, também tá liberado. 
                    </p>
                </div>
                <div className="flex gap-10 sm:hidden">
                    <div className="flex flex-col gap-10">
                        <Image src={oficina1} alt=""/>
                        <Image src={oficina2} alt=""/>
                        <Image src={oficina3} alt=""/>
                    </div>
                    <div className="flex flex-col gap-10">
                        <Image src={oficina4} alt=""/>
                        <Image src={oficina5} alt=""/>
                        <Image src={oficina6} alt=""/>
                    </div>
                </div>
                <div className="hidden sm:block mt-[3rem] w-screen">
                        <Image src={oficina1m} alt=""/>
                    <div className="flex">
                        <Image src={oficina2m} alt=""/>
                        <Image src={oficina3m} alt=""/>
                    </div>
                        <Image src={oficina4m} alt=""/>
                    <div className="flex">
                        <Image src={oficina5m} alt=""/>
                        <Image src={oficina6m} alt=""/>
                    </div>
                </div>
            </section> 
        </main>
    )
}