"use client";

import { useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";
import { Transition } from "@headlessui/react";

interface MenuItemsProps {
  isOnMobile?: boolean;
  isOpen?: boolean;
  handleMenuMobileButton?: () => void;
}

const MenuItems = ({
  isOnMobile = false,
  isOpen = false,
  handleMenuMobileButton,
}: MenuItemsProps) => {
  const pathname = usePathname();

  return (
    <Transition
      show={true}
      appear={true}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <ul
        className={`gap-6 font-medium pr-8 text-[0.95rem] md:flex flex-col md:flex-row ${
          isOpen && isOnMobile
            ? "flex bg-blue-darkBlue fixed gap-6 h-full top-0 justify-center z-10 items-center w-full"
            : "hidden"
        }`}
      >
        <li
          className={`hover:font-bold hover:scale-105 transition-all ${
            pathname == "/" ? "font-bold underline underline-offset-[6px]" : ""
          }`}
          onClick={handleMenuMobileButton}
        >
          <Link href="/">Início</Link>
        </li>
        <li
          className={`hover:font-bold hover:scale-105 transition-all ${
            pathname == "/grade"
              ? "font-bold underline underline-offset-[6px]"
              : ""
          }`}
          onClick={handleMenuMobileButton}
        >
          <Link href="/grade">Grade Curricular</Link>
        </li>
        <li
          className={`hover:font-bold hover:scale-105 transition-all ${
            pathname == "/egresso"
              ? "font-bold underline underline-offset-[6px]"
              : ""
          }`}
          onClick={handleMenuMobileButton}
        >
          <Link href="/egresso">Perfil do Egresso</Link>
        </li>
        <li
          className={`hover:font-bold hover:scale-105 transition-all ${
            pathname == "/docentes"
              ? "font-bold underline underline-offset-[6px]"
              : ""
          }`}
          onClick={handleMenuMobileButton}
        >
          <Link href="/docentes">Corpo docente</Link>
        </li>
        <li
          className={`hover:font-bold hover:scale-105 transition-all ${
            pathname == "/contato"
              ? "font-bold underline underline-offset-[6px]"
              : ""
          }`}
          onClick={handleMenuMobileButton}
        >
          <Link href="/contato">Contato</Link>
        </li>
        <li
          className={`hover:font-bold hover:scale-105 transition-all ${
            pathname == "/redes"
              ? "font-bold underline underline-offset-[6px]"
              : ""
          }`}
          onClick={handleMenuMobileButton}
        >
          <Link href="/redes">Redes sociais</Link>
        </li>
      </ul>
    </Transition>
  );
};

export function Menu() {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  const handleMenuMobileButton = () => {
    setMobileIsOpen((oldState) => !oldState);
  };

  return (
    <div>
      <MenuItems />
      <div className="block md:hidden">
        <button
          onClick={handleMenuMobileButton}
          className={`mr-4 ${mobileIsOpen ? "hidden" : "inline"}`}
        >
          <span className="sr-only">Abrir menu de navegação</span>
          <MenuIcon aria-hidden="true" />
        </button>
        <button
          onClick={handleMenuMobileButton}
          className={`mr-4 ${mobileIsOpen ? "block" : "hidden"}`}
        >
          <span className="sr-only">Fechar menu de navegação</span>
          <X aria-hidden="true" />
        </button>
        {mobileIsOpen &&
          createPortal(
            <MenuItems
              isOnMobile
              isOpen={mobileIsOpen}
              handleMenuMobileButton={handleMenuMobileButton}
            />,
            document.body
          )}
      </div>
    </div>
  );
}
