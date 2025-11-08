"use client"
import React from "react";
//configurações
import axiosInstance from "@/service/api";
//Imagens e icones
import UploadUserPhoto from "../../../assets/getPicture.svg";
import RoundedIcon from "../../../assets/roundedIcon.svg";
import RequestError from "../../../assets/ErroDeResposta.svg";
import { AiOutlineClose } from "@/lib/icons";
//Hooks
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { AxiosError } from "axios";
import Image from "next/image";


export function ImageUploadButton() {
    const { toast } = useToast();
    //const { entidade } = getCookie();
    // Função para enviar a imagem à API
    const uploadImage = async (file: File) => {
    
        const formData = new FormData();
        formData.append("foto_perfil", file);

        try {
            const response = await axiosInstance.patch(`clientes/mudar/foto/`, formData,{
                headers:{
                'Content-Type':'multipart/form-data'
                }
            });
            
            if(response.status == 202) {
                toast({
                    description: (
                        <div className="flex items-center gap-4 ">
                        <div className="rounded-full w-8 h-8 flex justify-center items-center">
                            <Image src={RoundedIcon} alt="icon"  />
                        </div>
                        
                        <span className="text-[#717F96]">{ response.data.mensagem }</span>
                        </div>
                    ),
                    action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
                    className: "border-l-4 border-l-[#1FC16B]",
                 });
                window.location.reload();
            } 

        } catch (error) {
            if (error instanceof AxiosError) {
                toast({
                 description: (
                    <div className="flex items-center gap-4 ">
                        <div className="rounded-full w-8 h-8 flex justify-center items-center bg-[fill: rgba(251, 55, 72, 0.16)">
                            <Image src={RequestError} alt="icon"  />
                        </div> 
                        <span className="text-[#717F96]">{error?.response?.data.mensagem}</span>
                    </div>
                 ),
                action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
                className: "border-l-4 border-l-[#FB3748]",
                });
            }
        }
    };
    
    // Função para lidar com o upload de imagem
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            uploadImage(file); // Envia a imagem assim que for selecionada
        }
        else {
            toast({
                description: (
                  <div className="flex items-center gap-4 ">
                    <div className="rounded-full w-8 h-8 flex justify-center items-center">
                      <Image src={RequestError} alt="icon"  />
                    </div>
                    
                    <span className="text-[#717F96]">Nenhuma imagem inserida!</span>
                  </div>
                ),
                action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
                className: "border-l-4 border-l-[#FB3748]",
             });
        }
    };

    return (
        <div className="relative">
            {/* Botão de upload */}
            <button
                onClick={() => document.getElementById("fileInput")?.click()}
            >
                <Image src={UploadUserPhoto} alt="takePhoto" className="w-6 h-6 cursor-pointer" />
            </button>

            {/* Input oculto de tipo file */}
            <input
                type="file"
                id="fileInput"
                onChange={handleImageChange}
                style={{ display: "none" }}
                accept="image/*" // Permite apenas imagens
            />
        </div>
    );
}
