"use client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { AiOutlineClose } from "../lib/icons";
import RoundedIcon from "../assets/roundedIcon.svg";
import { CloseDialog } from "@/types/interfaces";
import Image from "next/image";

export function ToastButton({ setClosed }: CloseDialog) {
  const { toast } = useToast();

  return (
    <Button
    type="submit"
      variant="outline"
      onClick={() => {
        toast({
          description: (
            <div className="flex items-center gap-4 ">
              <div className="rounded-full w-9 h-9 flex justify-center items-center">
                <Image src={RoundedIcon} alt="icon" />
              </div>
              
              <span className="text-[#717F96]">Referência adiciona com sucesso!</span>
            </div>
          ),
          action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
          className: "border-l-4 border-l-[#1FC16B]", // Estiliza a borda esquerda
        });
        setClosed(false);
      }}
      className="bg-[#CBCDD1] cursor-pointer text-[#ffffff] hover:bg-[#F08F3E] hover:text-[#ffffff] w-20 h-11 ml-6"//Estilização do botão de criar
    >
      Criar
    </Button>
  );
}