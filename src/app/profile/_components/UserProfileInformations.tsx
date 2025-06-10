//componentes
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ImageUploadButton } from "./UploadImage";
import Image from "next/image";
//Imagens e icones
import { DownloadIcon } from "@/lib/icons"
import RedefinirIcon from "../../../assets/redifinirPlavraPass.svg";
//bibliotecas
import Link from "next/link";
import { format } from "date-fns";
//Hook
import { useState, useEffect } from "react";
//configurações
import { userData } from "@/service/userDataAPI";
import env from "@/config/env";
//Tipagnes
import { UserDataType} from "@/types/types";

export function UserProfileInformations(){

    const [user, setUser] = useState<UserDataType | null>(null);
    const [userPhoto, setLogo] = useState<string | null>(null);
    
    const fetchUser = async () => {
        try {
            const { user, userLogo } = (await userData()) || { user: null, userLogo: '' };
            setLogo(userLogo)
            setUser(user);
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    };
    
    useEffect(() => {
        fetchUser();
    }, [])

    return(
        <section className="space-y-6 flex flex-col items-center h-[40rem] w-[34rem] pt-l14">
            <div className="flex flex-col space-y-4 items-center pt-4">
                <div className="flex items-start relative">
                    {/* Container da Imagem */}
                    <div className="border-[2px] border-[#E8F2FF] rounded-full w-[12rem] h-[12rem] flex justify-center items-center">
                        <Image
                        src={userPhoto ? userPhoto : ""}
                        alt="Avatar"
                        className="w-[10rem] h-[10rem] rounded-full"
                        />
                    </div>
                    {/* Botão Upload no canto superior direito */}
                    <div className="ml-[-27px] -mt-[-2rem]" style={{ zIndex: 1 }}>
                        <ImageUploadButton />
                    </div>
                    </div>
                    
                </div>
                <span className="text-[#2D3339] font-semibold text-lg">
                 {user ? user.nome_empresa: "Sua empresa"}
                </span>
            <Separator className="w-[33rem] bg-[#F1F5F7]"/>

            <div className="flex space-x-36">
                <div className="flex flex-col space-y-2 text-left">
                    <span className="text-[#2D3339] font-semibold">Email:</span>
                    <span className="text-[#2D3339] font-semibold">Telemóvel:</span>
                    <span className="text-[#2D3339] font-semibold">Data de Adesão:</span>
                    <span className="text-[#2D3339] font-semibold">Último Login:</span>
                </div>
                                
                {user && (
                    <div className="flex flex-col space-y-2 text-right">
                        <span className="text-[#2D3339] font-medium">{user ? user.email: "Email da empresa"}</span>
                        <span className="text-[#2D3339] font-medium">{user ? user.contacto: "Contacto da empresa"}</span>
                        <span className="text-[#2D3339] font-medium"> {user.cadastrado_em ? format(new Date(user.cadastrado_em), 'dd/MM/yyyy HH:mm:ss') : 'Data de adesão não disponível'}
                        </span>
                        <span className="text-[#2D3339] font-medium">{user.ultimo_login ? format(new Date(user.ultimo_login), 'dd/MM/yyyy HH:mm:ss') : 'Data de último login não disponível'}
                        </span>
                    </div>
                )}
            </div>

            <Separator className="w-[33rem] bg-[#F1F5F7]"/>

            <div className="flex space-x-4 h-[5rem]">
                <Link href="/perfil/redefinir-senha">
                    <Button className="w-[16rem] cursor-pointer h-12 bg-[#F08F3E] hover:bg-[#F08F3E] mt-7 text-white hover:text-white">
                        <svg>
                            <image xlinkHref={RedefinirIcon} className="size-4" />
                        </svg>
                        Redefinir Senha
                    </Button>
                </Link>

                <a 
                    href={`${env.API_BASE_URL}contratos/${user ? user.arquivo_do_contrato : ""}`}
                    download={user ? user.arquivo_do_contrato : ""}
                    className="w-[16rem] cursor-pointer h-12 bg-[#327FE4] hover:bg-[#327FE4] mt-7 text-white hover:text-white flex items-center justify-center gap-2 rounded-md font-medium text-sm"
                >
                    <svg className="w-4 h-4">
                        <DownloadIcon width="100%" height="100%"/>
                    </svg>
                    Baixar Contrato
                </a>
            </div>
        </section>
    )
}