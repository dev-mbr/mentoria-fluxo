"use client";
import Image from "next/image";
import acompanhamento from "@/icons/resultado1.png"
import analise from "@/icons/resultado2.png"
import tech from "@/icons/resultado3.png"
import poder from "@/icons/resultado4.png"
import oficinas from "@/icons/resultado5.png"
import diaAdia from "@/icons/resultado6.png"
import zoom from "@/images/zoom.png"
import fluxer from "@/images/fluxer.png"


export default function second(){
    return(
        <main className="bg-[#F5F5F5] flex flex-col items-center">
            <section className="text-[#2E2E2B]">
                <div className="text-center">
                    <h1 className="text-[2.5rem] sm:text-[2rem] font-bold mt-[7.5rem] sm:mt-16">
                    Por que o Fluxo <br className="hidden sm:block"/> traz tanto resultado?
                    </h1>
                    <p className="text-[#585852] text-[1.25rem] sm:text-[1rem] mt-8">
                    O Aplicativo <strong>Fluxer</strong> vai concentrar tudo o que você precisa em apenas um lugar.
                    </p>
                    <p className="text-[#585852] text-[1.25rem] sm:text-[1rem] sm:mt-3">
                    Tudo muito fácil e organizado para colocar seu produto no ar em tempo recorde.
                    </p>
                </div>
                <section className="mt-[4.5rem] mx-auto mb-[5.5rem]">
                    <div className="flex sm:flex-col gap-[2.5rem] sm:items-center">
                        <div className="bg-white w-[23.3rem] sm:w-[22rem] rounded-[1rem] py-8 pr-8 shadow-x1 flex flex-col ">
                            <div className="leading-[1.5rem]">
                                <Image className="ml-8" src={acompanhamento} alt=""/>
                                <h1 className="text-[1.25rem] font-bold leading-[1.875rem] border-l-[.75rem] border-[#F5FF00] pl-5 mt-8">
                                Acompanhamento <br /> individual diário
                                </h1>
                                <p className="pl-8 mt-5 text-[#585852]">
                                Todos os dias você tem acesso a uma pessoa para tirar quaisquer dúvidas.
                                </p>
                                <p className="pl-8 mt-5 text-[#585852]">
                                Essa pessoa te acompanha durante todo o processo de mentoria, te orientando e te dando um norte do que você precisa fazer.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white w-[23.3rem] sm:w-[22rem] rounded-[1rem] py-8 pr-8 shadow-x1 flex flex-col ">
                            <div className="leading-[1.5rem]">
                                <Image className="ml-8" src={analise} alt=""/>
                                <h1 className="text-[1.25rem] font-bold leading-[1.875rem] border-l-[.75rem] border-[#F5FF00] pl-5 mt-8">
                                Análise individual <br /> no ZOOM
                                </h1>
                                <p className="pl-8 mt-5 text-[#585852]">
                                Análises individuais para te orientar sobre o que você fez e precisa ser mudado e quais são os próximos passos de novas implementações. 
                                </p>
                                <p className="pl-8 mt-5 text-[#585852]">
                                Você sai da análise com uma série de atividades específicas para o seu crescimento.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white w-[23.3rem] sm:w-[22rem] rounded-[1rem] py-8 pr-8 shadow-x1 flex flex-col ">
                            <div className="leading-[1.5rem]">
                                <Image className="ml-8" src={tech} alt=""/>
                                <h1 className="text-[1.25rem] font-bold leading-[1.875rem] border-l-[.75rem] border-[#F5FF00] pl-5 mt-8">
                                Tecnologia e <br /> Organização
                                </h1>
                                <p className="pl-8 mt-5 text-[#585852]">
                                Você terá acesso ao Fluxer, um aplicativo que nenhuma outra mentoria tem e deixa a parada toda organizada. 
                                </p>
                                <p className="pl-8 mt-5 text-[#585852]"> 
                                É praticamente impossível não fazer o que precisa dentro do aplicativo.Ou seja, você vai sair do lugar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:flex-col gap-[2.5rem] sm:items-center mt-[2.5rem]">
                        <div className="bg-white w-[23.3rem] sm:w-[22rem] rounded-[1rem] py-8 pr-8 shadow-x1 flex flex-col ">
                            <div className="leading-[1.5rem]">
                                <Image className="ml-8" src={poder} alt=""/>
                                <h1 className="text-[1.25rem] font-bold leading-[1.875rem] border-l-[.75rem] border-[#F5FF00] pl-5 mt-8">
                                O poder do <br /> coletivo
                                </h1>
                                <p className="pl-8 mt-5 text-[#585852]">
                                Você vai ter oportunidade de trocar experiências e conhecer pessoas que estão na mesma jornada que você, através dos nossos canais de comunicação:
                                </p>
                                <div className="pl-8 mt-5 flex items-center gap-1 text-[#585852]">
                                    <span className="text-[2rem] mb-[1.175rem]">.</span><p>Grupo no Facebook</p>
                                </div>
                                <div className="pl-8 -mt-4 flex items-center gap-1 text-[#585852]">
                                    <span className="text-[2rem] mb-[1.175rem]">.</span><p>Grupo no Telegram</p>
                                </div>
                                <div className="pl-8 -mt-4 flex items-center gap-1 text-[#585852]">
                                    <span className="text-[2rem] mb-[1.175rem]">.</span><p>Eventos ao vivo</p>
                                </div>
                                <div className="pl-8 -mt-4 flex items-center gap-1 text-[#585852]">
                                    <span className="text-[2rem] mb-[1.175rem]">.</span><p>Oficinas</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-[23.3rem] sm:w-[22rem] rounded-[1rem] py-8 pr-8 shadow-x1 flex flex-col ">
                            <div className="leading-[1.5rem]">
                                <Image className="ml-8" src={oficinas} alt=""/>
                                <h1 className="text-[1.25rem] font-bold leading-[1.875rem] border-l-[.75rem] border-[#F5FF00] pl-5 mt-8">
                                Oficinas de <br />implementação prática
                                </h1>
                                <p className="pl-8 mt-5">
                                As oficinas são para tratar de assuntos pontuais. Você terá acesso à gravação de todas as oficinas anteriores além de sugerir temas que você tenha dificuldade, para criarmos uma oficina sobre isso.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white w-[23.3rem] sm:w-[22rem] rounded-[1rem] py-8 pr-8 shadow-x1 flex flex-col ">
                            <div className="leading-[1.5rem]">
                                <Image className="ml-8" src={diaAdia} alt=""/>
                                <h1 className="text-[1.25rem] font-bold leading-[1.875rem] border-l-[.75rem] border-[#F5FF00] pl-5 mt-8">
                                Acompanhamento <br />do dia a dia
                                </h1>
                                <p className="pl-8 mt-5">
                                No Fluxo, você não faz nada sozinho. Sempre que você tiver alguma dúvida, é só falar: “Ei... Preciso de um socorro aqui”. 
                                </p>
                                <p className="pl-8 mt-5">
                                Além do navegador, você terá uma comunidade inteira pra te ajudar, seja algo simples ou mais cabuloso.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="bg-[#E8E8E8] w-full flex sm:flex-col justify-center items-center gap-[5.5rem] sm:gap-[2rem] pt-[5.5rem] pb-[7.5rem] sm:pb-[4rem] sm:px-6">
                <div className="flex flex-col w-[34.3125rem] sm:w-auto">
                    <h1 className="text-[2.5rem] sm:text-[2rem] text-[#2E2E2B] font-bold leading-[3rem]sm:mx-auto">
                    Dois especialistas, <br /> 100% focados no <br /> seu projeto 
                    </h1>
                    <div className="text-[#585852] text-[1.25rem] sm:text-[1rem]">
                        <p className="mt-10">
                        <strong>O Analista</strong> é uma pessoa experiente que já teve resultados com o digital e tem um olho treinado para encontrar qualquer coisa que impeça o seu crescimento. Ele vai criar um plano de ação específico e te falar cada coisa que você precisa fazer.
                        </p>
                        <p className="mt-6">
                        <strong>O Navegador</strong> é a pessoa que vai fazer com que tudo aconteça no momento certo, te socorrer no dia a dia e te encher muito o saco. Se você precisa instalar um píxel, por exemplo, e não faz ideia do que seja isso, é a hora de chegar junto no Navegador e falar: <br /> “Ôw amigo(a), não sei instalar esse tal de pixel, não!
                        </p>
                        <p className="mt-6">
                        O único objetivo desses dois é fazer seu negócio prosperar e, meu irmão, nisso eles são bons.
                        </p>
                    </div>
                </div>
                <Image src={zoom} alt="" />
            </section>
            <section className="bg-[#F5F5F5] pt-[5.5rem] lg:pb-[5.5rem]">
                <div className="text-center text-[#585852] text-[1.25rem] sm:text-[1rem]">
                    <h1 className="text-[2.5rem] sm:text-[2rem] text-[#2E2E2B] font-bold leading-[3rem]">
                    Nada de zona ou arquivos soltos em <br />drives e pastas perdidas
                    </h1>
                    <p className="mt-8">
                    O Aplicativo <strong>Fluxer</strong> vai concentrar tudo o que você precisa em apenas um lugar.  
                    </p>
                    <p>
                    Tudo muito fácil e organizado para colocar seu produto no ar em tempo recorde. 
                    </p>
                </div>
                <Image className="mt-[5rem] sm:mt-[2.5rem]" src={fluxer} alt=""/>
            </section>
        </main>
    )
}