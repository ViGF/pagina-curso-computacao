import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ciência da Computação",
  description:
    "O curso de Ciência da Computação da UEPB – Campus VII deve formar profissionais capazes de desenvolver suas atividades nos mais diversos campos do conhecimento humano relacionado à computação, com proficiência, visão crítica e conduta ética.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-blue-dark text-white`}>
        <div className="flex h-screen flex-col">
          <div className="h-min">
            <Header />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
