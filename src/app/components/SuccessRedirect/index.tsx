import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

interface Props {
  urlRedirect: string;
}

function SuccessRedirect({ urlRedirect }: Props) {
  const router = useSearchParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (router.get("type_success") === "fluxo") {
      setShow(true);
    }
  }, [router]);

  const handleCloseModal = (val: boolean) => {
    setShow(val);
    window.location.href = urlRedirect;
  };

  return (
    <Modal
      setToggleModal={handleCloseModal}
      toggleModal={show}
      className="max-w-[30rem] mx-auto"
    >
      <div className="w-full">
        <h1 className="font-bold uppercase lg:text-xl text-[0.8rem] lg:mt-0 mt-5">
          Formulário enviado com{" "}
          <span className="text-[#34A853]">sucesso!</span>{" "}
        </h1>
        <hr className="w-full mt-5" />
        <p className="mt-5">
          Dentro de alguns dias nós entraremos em contato com você.
        </p>
        <hr className="w-full mt-5" />
        <div className="flex justify-end gap-4 mt-5">
          <button
            className={`px-5 py-2  text-black font-bold bg-amarelo`}
            onClick={() => handleCloseModal(false)}
          >
            Fechar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SuccessRedirect;
