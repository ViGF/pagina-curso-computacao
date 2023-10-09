import Image from "next/image";
import { Menu } from "./Menu";

import ImageUrl from "@/../public/logo_header.svg";

export function Header() {
  return (
    <header className="flex flex-1 justify-between items-center bg-blue-medium fixed w-full z-20">
      <a href="/">
        <Image
          src={ImageUrl}
          width={382}
          height={128}
          alt="Logo da UEPB e ao lado esquerda logo do curso de Ciência da Computação"
          className="h-24"
        />
      </a>
      <Menu />
    </header>
  );
}
