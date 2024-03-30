import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Tagmanager from "./components/Tagmanager";
import Tagmanager2 from "./components/Tagmanager2";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentoria Fluxo",
  description:
    "Nunca foi tão fácil para pessoas comuns transformarem o que sabem em um negócio digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Suspense>
        <Tagmanager />
        <Tagmanager2 />
      </Suspense>

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
