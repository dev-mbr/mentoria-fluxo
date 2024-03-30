import React, { useEffect } from "react";

type Props = {
  toggleModal: boolean;
  setToggleModal: (toggleModal: boolean) => void;
  children: React.ReactNode;
  className?: string;
};

function Modal({ toggleModal, setToggleModal, className, children }: Props) {
  const preventCloseModal = (e: any) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (toggleModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [toggleModal]);

  return (
    <div
      onClick={() => setToggleModal(false)}
      className={`${
        toggleModal ? "block" : "hidden"
      } fixed inset-0 flex items-center justify-center h-[100vh] w-[100vw] bg-[#000] bg-opacity-70 z-[1000] p-6 lg:p-10`}
    >
      <div
        onClick={(e) => preventCloseModal(e)}
        className={`relative flex w-full mx-auto bg-white max-w-4xl rounded-md p-1 md:p-8 h-auto ${className} `}
      >
        {children}
        <button
          onClick={() => setToggleModal(false)}
          className="absolute -top-3 md:-top-5 -right-3 md:-right-5 rounded-full bg-black h-8 w-8 md:h-12 md:w-12 text-[15px] md:text-[20px] font-bold text-white"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
