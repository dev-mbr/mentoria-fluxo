"use client";
import Image from "next/image";
import e from "@/icons/quem-é.png"
import naoE from "@/icons/quem-não-é.png"
import indicados from "@/images/publicos.png"
import indicadosM from "@/images/publicos-mobile.png"

export default function fifth(){
    return(
    <main >
        <section className="bg-black text-[#B2B2B2] font-medium leading-6 pt-[7.5rem] pb-[5.5rem]">
            <h1 className="text-white text-center text-[2.5rem] sm:text-[1.5rem] leading-[3rem] font-bold">
            Para quem é e <br /> para quem não é o Fluxo?
            </h1>
            <section className="flex sm:flex-col sm:items-center gap-10 sm:gap-6 justify-center mt-[4.5rem] sm:mt-10">
                <div className="w-[21.3rem] h-[29.6rem] rounded-2xl bg-[#292929] pt-8 leading-[1.4rem] shadow-x2">
                    <Image src={e}  alt=""/>
                        <h2 className="text-[1.25rem] text-white font-bold h-[1.88rem] border-l-[.75rem] flex items-center border-[#F5FF00] pl-5 mt-8">
                        Para quem é:
                        </h2>
                    <div className="mt-5 w-[19.3rem] mx-auto pl-4">
                    <div className="flex gap-2"><span className="text-[1.5rem] -mt-[.47rem]">.</span><p>Para quem já tem produto pronto, já está no digital, mas está patinando sem sair do lugar.</p></div>
                    <div className="flex gap-2 mt-5"><span className="text-[1.5rem] -mt-[.47rem]">.</span><p>Para quem tem produto, <br /> já fatura, mas está <strong>em busca <br /> do seu grande salto.</strong></p></div>
                    <div className="flex gap-2 mt-5"><span className="text-[1.5rem] -mt-[.47rem]">.</span><p>Pra quem faz lançamento, mas ainda não acertou a mão no perpétuo.</p></div>
                    </div>
                </div>
                <div className="w-[21.3rem] h-[29.6rem] rounded-2xl bg-[#292929] pt-8 leading-[1.4rem] shadow-x2">
                    <Image src={naoE}  alt=""/>
                        <h2 className="text-[1.25rem] text-white font-bold h-[1.88rem] border-l-[.75rem] flex items-center border-[#F5FF00] pl-5 mt-8">
                        Para quem NÃO é:
                        </h2>
                    <div className="mt-5 w-[20.6rem] mx-auto pl-4">
                    <div className="flex gap-2"><span className="text-[1.5rem] -mt-[.47rem]">.</span><p>Afiliados que <strong>só querem moleza</strong> e acham que vão conseguir ganhar dinheiro “trabalhando” da praia. Além do quê, a maresia vai lascar todo o computador do cara.</p></div>
                    <div className="flex gap-2 mt-5"><span className="text-[1.5rem] -mt-[.47rem] ">.</span><p>Para os espertões que querem vender para os meus clientes, porque sabem que eles estão ganhando muito dinheiro no Fluxo.</p></div>
                    <div className="flex gap-2 mt-5"><span className="text-[1.5rem] -mt-[.47rem]">.</span><p>Para adeptos das modinhas de internet e dancinhas no Tik Tok.</p></div>
                    </div>
                </div>
            </section>
        </section>
        
        <section className="bg-black bg-gradient-indicados text-white ">
            <section className="w-[75rem] sm:w-[21.4rem] mx-auto pt-[5.5rem] pb-[7.5rem] sm:pb-[4rem] border-t-2 border-[#585852]">
                <h1 className="text-[2.5rem] sm:text-[1.5rem] sm:text-center font-bold leading-[3rem] sm:leading-normal ">
                Pessoas indicadas <br /> <span className="text-[#F5FF00]">para o Fluxo:</span>
                </h1>
                <div className="flex items-center sm:flex-col gap-[5.5rem] sm:gap-8 mt-14">
                    <div className="flex flex-col gap-8 text-[1.25rem] sm:text-[1rem] font-medium leading-8 sm:leading-6 w-[40.4375rem] sm:w-[21.375rem]">
                        <p>
                        Não sei qual é a sua área, mas se você tem alguma habilidade ensinável, <strong>com certeza você é bem vindo</strong> ao Fluxo. 
                        </p>
                        <p>
                            Se você tiver uma horinha por dia, já consegue criar um produto e começar a caminhada no digital.
                        </p>
                        <p>
                        Geralmente a maioria das pessoas que entram no Fluxo, depois de um certo tempo optam por ter o mercado digital como sua principal fonte de renda, afinal, <strong>os lucros desse mercado são muito expressivos.</strong> 
                        </p>
                        <p>
                        É um mercado gigantesco e tem espaço para todos, não importa o nicho. 
                        </p>
                    </div>
                    <Image className="sm:hidden" src={indicados} alt="" />
                    <Image className="sm:block hidden" src={indicadosM} alt="" />
                </div> 
            </section>
        </section>  
    </main>
    )
}