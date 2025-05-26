"use client"
//Hooks
import { useEffect, useState } from "react";
//Iamgens
import Logo from "@/assets/logo.svg";
//Components
import Image from "next/image";

export const MobileBlocker = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 bg-white text-[#1D5298] flex items-center justify-center text-center text-lg p-4 z-50">
      <div className="flex flex-col justify-center items-center space-y-4">
        <Image src={Logo} alt="Logo" className="h-20" />
        <h1 className="text-2xl font-bold mb-4">Dispositivo não suportado</h1>
        <p >Este site não está disponível para telemóveis ou tablets. Acesse a partir de um computador.</p>
      </div>
    </div>
  );
};