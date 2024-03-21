"use client";
import Image from "next/image";
import leandro from "@/images/leandro.png"
import leandroM from "@/images/ladeira-mobile.png"
import ruy from "@/images/ruy.png"
import ruyM from "@/images/ruyM.png"
import vitor from "@/images/vitor.png"
import vitorM from "@/images/vitorM.png"
import cris from "@/images/crislaine.png"
import crisM from "@/images/crislaineM.png"
import thais from "@/images/thais.png"
import thaisM from "@/images/thaisM.png"
import leo from "@/images/leo.png"
import leoM from "@/images/leoM.png"
import tassia from "@/images/tassia.png"
import tassiaM from "@/images/tassiaM.png"
import paloma from "@/images/paloma.png"
import palomaM from "@/images/palomaM.png"
import angela from "@/images/angela.png"
import angelaM from "@/images/angelaM.png"
import felipe from "@/images/felipe.png"
import felipeM from "@/images/felipeM.png"


export default function sixth(){
    return(
        <main className="bg-[#F5F5F5] py-[7.5rem] sm:pb-16 sm:pt-12">
            <section className="w-fit mx-auto text-[#585852] font-medium">
                <h1 className="text-[#2E2E2B] text-[2.5rem] sm:text-[1.5rem] font-bold ml-10">Idealizadores do Fluxo</h1>
                <div className="w-fit flex sm:flex-col">
                    <div className="flex flex-col items-center">
                        <Image className="sm:hidden" src={leandro} alt=""/>
                        <Image className="hidden sm:block" src={leandroM} alt=""/>
                        <div className=" w-[23.3rem] sm:w-[21.375rem]">
                            <h2 className="text-[1.5rem] font-bold">
                                Leandro Ladeira
                            </h2>
                            <p>
                            Vulgo “Ladeirinha”. Apelido ruim para um cacete, mas que não interfere na mente atormentada que tem ideias absurdas e incríveis o tempo todo.
                            </p>
                            <p className="mt-6">
                            É o cara por trás da Cátia Damasceno (no bom sentido). Essa sociedade já soma mais de <strong>150 mil cursos vendidos</strong> e quase 20 milhões de seguidores nas redes.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image className="sm:hidden" src={ruy} alt=""/>
                        <Image className="hidden sm:block" src={ruyM} alt=""/>
                        <div className=" w-[23.3rem] sm:w-[21.375rem]">
                            <h2 className="text-[1.5rem] font-bold">
                                Ruy Guimarães
                            </h2>
                            <p>
                            É o cara do FaceAds. Além de dominar tráfego e estratégias, também faz parte da gestão das empresas. Está toda hora desenvolvendo e testando estratégias novas.
                            </p>
                            <p className="mt-6">
                            Aliás, fico até em dúvida se o que ele mais gosta é testar ads ou fazer um supino.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image className="sm:hidden" src={vitor} alt=""/>
                        <Image className="hidden sm:block" src={vitorM} alt=""/>
                        <div className=" w-[23.3rem] sm:w-[21.375rem]">
                            <h2 className="text-[1.5rem] font-bold">
                            Vitor Albuquerque
                            </h2>
                            <p>
                            Faz praticamente tudo: conteúdo, estratégias, criações, design, programação e operações. É quase o mestre dos magos. Inclusive pela estatura.
                            </p>
                            <p className="mt-6">
                            Aliás, ele é a prova de que tamanho não é documento, já que tem quase 1,50m de altura.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-[75rem] sm:w-[21.375rem] mx-auto text-[#2E2E2B] font-bold mt-[5.5rem] sm:mt-16">
                    <h1 className="text-[2.5rem] sm:text-[1.5rem] sm:text-center">
                        Alguns especialistas <br className="hidden sm:block"/> do time Fluxo  
                    </h1>
                    <div className="flex flex-wrap gap-10 sm:gap-4">
                        <div className="mt-[3.5rem] sm:mt-8">
                            <Image className="rounded-[1rem] sm:hidden" src={cris} alt=""/>
                            <Image className="rounded-[1rem] hidden sm:block" src={crisM} alt=""/>
                            <h2 className="text-[1.5rem] sm:text-[1rem] mt-8">
                            Crislaine
                            </h2>
                            <p className="text-[#585852] font-medium">
                            Comercial
                            </p>
                        </div>
                        <div className="mt-[3.5rem] sm:mt-8">
                            <Image className="rounded-[1rem] sm:hidden" src={thais} alt=""/>
                            <Image className="rounded-[1rem] hidden sm:block" src={thaisM} alt=""/>
                        <h2 className="text-[1.5rem] sm:text-[1rem] mt-8">
                        Thais
                        </h2>
                        <p className="text-[#585852] font-medium">
                        Navegadora
                        </p>
                        </div>
                        <div className="mt-[3.5rem] sm:mt-8">
                            <Image className="rounded-[1rem] sm:hidden" src={leo} alt=""/>
                            <Image className="rounded-[1rem] hidden sm:block" src={leoM} alt=""/>
                            <h2 className="text-[1.5rem] sm:text-[1rem] mt-8">
                            Leo
                            </h2>
                            <p className="text-[#585852] font-medium">
                            Analista
                            </p>
                        </div>
                        <div className="mt-[3.5rem] sm:mt-8">
                            <Image className="rounded-[1rem] sm:hidden" src={tassia} alt=""/>
                            <Image className="rounded-[1rem] hidden sm:block" src={tassiaM} alt=""/>
                            <h2 className="text-[1.5rem] sm:text-[1rem] mt-8">
                            Tássia
                            </h2>
                            <p className="text-[#585852] font-medium">
                            Navegadora
                            </p>
                        </div>
                        <div className="mt-[3.5rem] sm:mt-8">
                            <Image className="rounded-[1rem] sm:hidden" src={paloma} alt=""/>
                            <Image className="rounded-[1rem] hidden sm:block w-[10.125rem]" src={palomaM} alt=""/>
                            <h2 className="text-[1.5rem] sm:text-[1rem] mt-8">
                            Paloma
                            </h2>
                            <p className="text-[#585852] font-medium">
                            Analista
                            </p>
                        </div>
                        <div className="mt-[3.5rem] sm:mt-8">
                            <Image className="rounded-[1rem] sm:hidden" src={angela} alt=""/>
                            <Image className="rounded-[1rem] hidden sm:block w-[10.125rem]" src={angelaM} alt=""/>
                            <h2 className="text-[1.5rem] sm:text-[1rem] mt-8">
                            Angela
                            </h2>
                            <p className="text-[#585852] font-medium">
                            Navegadora
                            </p>
                        </div>
                        <div className="mt-[3.5rem] sm:mt-8">
                            <Image className="rounded-[1rem] sm:hidden" src={felipe} alt=""/>
                            <Image className="rounded-[1rem] hidden sm:block" src={felipeM} alt=""/>
                            <h2 className="text-[1.5rem] sm:text-[1rem] mt-8">
                            Felipe
                            </h2>
                            <p className="text-[#585852] font-medium">
                            Analista
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}