import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
//Hook
import { useState, useEffect } from "react";
//configurações
import { userData } from "@/service/userDataAPI";
//Tipagens
import { UserDataType} from "@/types/types";

export function SenhaAlteradaPage(){
      const [user, setUser] = useState<UserDataType | null>(null);
      const [userPhoto, setLogo] = useState<string | null>(null);
      
        const fetchUser = async () => {
            try {
                const { user, userLogo } = (await userData()) || { user: null, userLogo: '' };
                setUser(user);
                setLogo(userLogo)
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
            }
        };
    
        useEffect(() => {
            fetchUser();
        }, [])
        
    return (
              
        <div className="space-y-8 flex flex-col items-center h-[55rem] w-[34rem] pt-20">
            <div className="flex flex-col space-y-4 items-center pt-4">
                <div className="border-[2px] border-[#E8F2FF] rounded-full w-[9rem] h-[9rem] flex justify-center items-center">
                    <Image
                        src={userPhoto? userPhoto: ""}
                            alt="Avatar"
                            className="size-[7.5rem] rounded-full"
                        />
                </div>
                <span className="text-[#2D3339] font-semibold text-[1rem]">{user ? user.nome_empresa : "Nome da empresa"}</span>
            </div>
            <div className="flex flex-col w-[40rem] space-y-6 2xl:space-y-16 lg:space-y-12 items-center">
                <div className="text-center space-y-4">
                    <h1 className="text-[#1D5298] font-semibold text-lg lg:text-xl mb-2">
                        Senha Redefinida <br /> com Sucesso!
                    </h1>
                </div>
            </div>
            <Link href="/perfil" className="w-full">
                <Button 
                type="submit" 
                className="bg-[#327FE4] shadow-none hover:bg-[#327FE4] text-white w-full mb-10 h-12 lg:h-14 rounded-md xl:mt-9">
                    Voltar para o perfil
                </Button>
            </Link>  
        </div>
)}