import { useEffect, useRef, useState } from 'react';
import { createContext, useContext } from 'react';
import Dialog from './index';
import Image from 'next/image';


// Define the structure of a testimonial
interface Testimonial {
  nome: string;
  resumo: string;
  thumb: string;
  thumb2: string;
  embedId: string;
}

// Array of testimonials
const depoimentos = [
  {
    nome: "Giovanna Souza",
    resumo: (
      <>
        Morava de favor e recebia R$200 por mês.{" "}
        <br className="sm:hidden" />
        Entrou no Fluxo e em menos de um ano faturou <strong>600 MIL REAIS.</strong>
      </>
    ),
    thumb: "giovanna.png",
    thumb2: "giovannaM.png",
    embedId: "3GPEjSK45n4",
  },
  {
    nome: "Luciano Ribeiro",
    resumo: (
      <>
        Entrou no Fluxo e{" "}
        <br className="sm:hidden" />
        faturou mais de{" "}
        <br className="sm:hidden" />
        <strong>1 MILHÃO</strong> de reais, sem precisar botar a cara na internet.
      </>
    ),
    thumb: "luciano-ribeiro.png",
    thumb2: "luciano-ribeiroM.png",
    embedId: "Gjxv3HRts2Q",
  },
  {
    nome: "Sonaly Dantas",
    resumo: (
      <>
        Faturou com o Fluxo em <br className="sm:hidden" /> 4 meses o que não faturava em um ano. <br className="sm:hidden" /> Pode isso, produção? <br className="sm:hidden" /> Pode e com força.
      </>
    ),
    thumb: "sonaly-dantas.png",
    thumb2: "sonaly-dantasM.png",
    embedId: "Z7_tc1m_3JE",
  },
  {
    nome: "João e Amanda",
    resumo: (
      <>
        “Foi a segunda melhor decisão da nossa vida”. <br className="sm:hidden" /> E qual foi a primeira? Sim, vou te fazer assistir ao vídeo para saber.
      </>
    ),
    thumb: "joão-e-amanda.png",
    thumb2: "joão-e-amandaM.png",
    embedId: "Z0sDJQpK5EY",
  },
  {
    nome: "Patrícia Regina",
    resumo: (
      <>
        Manda quem pode e obedece quem tem esposa. Praticamente obrigou o marido a{" "}
        <br className="sm:hidden" />
        entrar para o Fluxo.
      </>
    ),
    thumb: "patricia-regina.png",
    thumb2: "patricia-reginaM.png",
    embedId: "L2m7ma6wtFM",
  },
  {
    nome: "João Domingues",
    resumo: (
      <>
        Do zero ao Fluxo, do{" "}
        <br className="sm:hidden" />
        Fluxo ao apartamento{" "}
        <br className="sm:hidden" />
        dos sonhos: “Só quero agradecer ao time da mentoria”.
      </>
    ),
    thumb: "joão-dantas.png",
    thumb2: "joão-dantasM.png",
    embedId: "L2m7ma6wtFM",
  },
  {
    nome: "Paulo de Lima",
    resumo: (
      <>
        Conquistou mais de{" "}
        <br className="sm:hidden" />
        1400 alunos e um faturamento de mais de{" "}
        <br className="hidden sm:block" />
        <strong>100 MIL reais</strong>, após{" "}
        <br className="sm:hidden" />
        entrar no Fluxo.
      </>
    ),
    thumb: "paulo-de-lima.png",
    thumb2: "paulo-de-limaM.png",
    embedId: "zOCg9kDqpY0",
  },
  {
    nome: "Saed Alex",
    resumo: (
      <>
        Deixou o emprego e um salário de 20 MIL reais{" "}
        <br className="sm:hidden" />
        para entrar no Fluxo e faturamento já passa de{" "}
        <br className="sm:hidden" />
        <strong>2 MILHÕES</strong> de reais.
      </>
    ),
    thumb: "saed-alex.png",
    thumb2: "saed-alexM.png",
    embedId: "fV0zQKCMJOU",
  },  
];

function YoutubeDialog() {
  const refDialog = useRef<HTMLDialogElement>(null);
  const [activeEmbedId, setActiveEmbedId] = useState('');

  // Function to open the modal and set the active YouTube embed ID
  const openModal = (embedId: string) => {
    document.body.style.overflow = 'hidden';
    setActiveEmbedId(embedId);
    refDialog.current?.showModal();
  };

  const closeModal = (animation: string) => {
    document.body.style.overflow = '';
    document.body.style.overflowX = "";
    if (refDialog.current) {
      refDialog.current.classList.add(animation);
      refDialog.current.addEventListener(
        "webkitAnimationEnd",
        function animationEnd() {
          refDialog.current?.classList.remove(animation);
          refDialog.current?.close();
          refDialog.current?.removeEventListener(
            "webkitAnimationEnd",
            animationEnd,
            false
          );
        }
      );
    }
  };

  useEffect(() => {
    refDialog.current?.addEventListener("click", function (event) {
      var rect = refDialog.current?.getBoundingClientRect();
      if (rect) {
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          closeModal("hide-bottom");
        }
      }
    });
  }, []);

  

  return (
    <div>
      <div className="w-[75rem] sm:w-[21.4rem] mx-auto mt-[5rem] sm:mt-[2.5rem] flex flex-wrap gap-10">
        {depoimentos.map((depoimento, index) => (
          <div key={index} className="w-[16.875rem] sm:w-[21.375rem] bg-[#292929] rounded-2xl pb-6 cursor-pointer" onClick={() => openModal(depoimento.embedId)}>
            
            <Image className="sm:hidden" src={`/images/${depoimento.thumb}`} alt={depoimento.nome} layout="responsive" width={262} height={228} />
            <Image className="hidden sm:block rounded-t-2xl" src={`/images/${depoimento.thumb2}`} alt={depoimento.nome} layout="responsive" width={262} height={228} />
            <div className="w-[13.875rem] sm:w-[18.375rem] mx-auto mt-6">
              <h1 className="text-[1.25rem] font-bold">
                {depoimento.nome}
              </h1>
              <p className="mt-3 text-[#B2B2B2]">
                {depoimento.resumo}
              </p>
              {/* Replace the <a> tag with a <button> and attach the openModal function */}
              <button
                className="underline font-bold mt-5"
              >
                Assista ao vídeo
              </button>
            </div>
          </div>
        ))}
      </div>
      <Dialog ref={refDialog} activeEmbedId={activeEmbedId} transitions="top-to-bottom"/>
    </div>
  );
  
}

export default YoutubeDialog;
