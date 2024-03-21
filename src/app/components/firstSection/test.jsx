import React, { useEffect, useRef, useState } from 'react';
import Dialog from './index';
import Image from 'next/image';
// import Assista from './Assista'; // Make sure you have this component

// Define the structure of a testimonial
interface Testimonial {
  nome: string;
  resumo: string;
  thumb: string;
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
    thumb: "Thumb_1_Giovanna.png",
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
    thumb: "Thumb_2_Luciano.png",
    embedId: "Gjxv3HRts2Q",
  },
  {
    nome: "Sonaly Dantas",
    resumo: (
      <>
        Faturou com o Fluxo em <br className="sm:hidden" /> 4 meses o que não faturava em um ano. <br className="sm:hidden" /> Pode isso, produção? <br className="sm:hidden" /> Pode e com força.
      </>
    ),
    thumb: "Thumb_03_Sonaly.png",
    embedId: "Z7_tc1m_3JE",
  },
  {
    nome: "João e Amanda",
    resumo: (
      <>
        “Foi a segunda melhor decisão da nossa vida”. <br className="sm:hidden" /> E qual foi a primeira? Sim, vou te fazer assistir ao vídeo para saber.
      </>
    ),
    thumb: "Thumb_04_joao_amanda.png",
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
    thumb: "Thumb_05_Patricia.png",
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
    thumb: "Thumb_06_joao_d_.png",
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
    thumb: "Thumb_07_Paulo.png",
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
    thumb: "Thumb_08_Saed.png",
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

  // Function to close the modal
  const closeModal = () => {
    document.body.style.overflow = '';
    refDialog.current?.close();
  };

  // Effect to handle the closing animation and modal behavior
  useEffect(() => {
    const dialog = refDialog.current;
    if (dialog) {
      dialog.addEventListener('click', function (event) {
        if (event.target === dialog) {
          closeModal();
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="w-[75rem] sm:w-[21.4rem] mx-auto mt-[5rem] sm:mt-[2.5rem] flex flex-wrap gap-10">
        {depoimentos.map((depoimento, index) => (
          <div key={index} className="w-[16.875rem] sm:w-[21.375rem] bg-[#292929] rounded-2xl pb-6">
            <Image className="sm:hidden" src={`/secao_03/${depoimento.thumb}`} alt={depoimento.nome} layout="responsive" width={262} height={228} />
            <Image className="hidden sm:block rounded-t-2xl" src={`/secao_03/${depoimento.thumb}`} alt={depoimento.nome} layout="responsive" width={262} height={228} />
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
                onClick={() => openModal(depoimento.embedId)}
              >
                Assista ao vídeo
              </button>
            </div>
          </div>
        ))}
      </div>
      <Dialog ref={refDialog} transitions="right-to-left">
        {/* YouTube iframe will go here */}
        {activeEmbedId && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${activeEmbedId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Dialog>
    </div>
  );
  
}

export default YoutubeDialog;
