"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Usando a nova API de roteamento

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/frio-a"); // Faz o redirecionamento
  }, [router]);

  return <main></main>;
}
