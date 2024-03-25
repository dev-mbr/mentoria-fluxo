"use client";
import Image from "next/image";
import arrR from "@/icons/arrow-right.png"
import { useEffect, useRef } from "react";
import Dialog from "./index";
import Script from "next/script";

function VenderMais({id}) {
    const refDialog = useRef(null);

    const openModal = () => {
        document.body.style.overflowX = "hidden";
        if (refDialog.current) {
            refDialog.current.showModal();
        }
    };

    const closeModal = (animation) => {
        document.body.style.overflowX = "";
        if (refDialog.current) {
            refDialog.current.classList.add(animation);
            refDialog.current.addEventListener("animationend", function animationEnd() {
                refDialog.current?.classList.remove(animation);
                refDialog.current?.close();
                refDialog.current?.removeEventListener("animationend", animationEnd, false);
            });
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
                    closeModal("hide-right");
                }
            }
        });
    }, []);


    const handleButtonClick = () => {
        openModal();
    };

    return (
        <div>
            <div>
                <button className="w-[22.1rem] h-[3.88rem] bg-[#F5FF00]  rounded-[1rem] flex gap-4 justify-center items-center text-black text-[1.25rem] font-bold shadow-btn uppercase" onClick={handleButtonClick} >
                    Quero vender mais
                    <Image src={arrR} alt="" />

                </button>
            </div>
            <Dialog ref={refDialog} transitions="right-to-left">
                <>
                    <Script
                        src="https://app.nectarcrm.com.br/crm/api/1/webform/view-embedded/FC55gtBbzOAw5cwSnnl9n0ACQ24Sm3IVatBUtjCnOQ"
                        data-nectar-webform-destination-elem={id}
                        defer
                    ></Script>
                    <div id={id} className="h-full w-full "></div>
                </>
            </Dialog>
        </div>
    );
}

export default VenderMais;
