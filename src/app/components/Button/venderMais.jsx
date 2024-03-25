"use client";
import Image from "next/image";
import arrR from "@/icons/arrow-right.png";
import { useEffect, useRef, useState } from "react";
import Dialog from "./index";
import Script from "next/script";
import Modal from "../Modal";

function VenderMais({ setToggleModal }) {
  return (
    <div>
      <div>
        <button
          className="w-[22.1rem] h-[3.88rem] bg-[#F5FF00]  rounded-[1rem] flex gap-4 justify-center items-center text-black text-[1.25rem] font-bold shadow-btn uppercase"
          onClick={() => setToggleModal(true)}
        >
          Quero vender mais
          <Image src={arrR} alt="" />
        </button>
      </div>
    </div>
  );
}

export default VenderMais;
