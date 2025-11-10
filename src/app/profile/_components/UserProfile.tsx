"use client"
//componentes
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { ImageUploadButton } from "./UploadImage";
import Image from "next/image";
//Imagens e icones
import RedefinirIcon from "@/assets/redifinirPlavraPass.svg";
//bibliotecas
import Link from "next/link";
//Hook
import { useState, useEffect } from "react";
//configurações
import { userData } from "@/service/userDataAPI";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
//Tipagnes
import { UserDataType} from "@/types/types";

export function ProfilePage(){

    const [user, setUser] = useState<UserDataType | null>(null);
    const [userPhoto, setLogo] = useState<string | null>(null);
    console.log(userPhoto)
    
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
        <section className="space-y-4 flex flex-col items-center h-[40rem] w-[68rem] pt-4">
            <div className="flex flex-col space-y-4 items-center">
                <div className="flex items-start relative">
                    
                    <div className="border-[2px] border-[#80848a] rounded-full w-[12rem] h-[12rem] flex justify-center items-center">
                        <Image
                        src={RedefinirIcon}
                        alt="Avatar"
                        className="w-[10rem] h-[10rem] rounded-full"
                        />
                    </div>
                   
                    <div className="ml-[-27px] -mt-[-2rem]" style={{ zIndex: 1 }}>
                        <ImageUploadButton />
                    </div>
                    </div>
                    
                </div>
                <span className="text-[#2D3339] font-semibold text-lg">
                 {user ? user.nome_empresa: "Sua instituição"}
                </span>
                <Separator className="w-[33rem] bg-[#80848a]"/>

                <div className="flex space-x-36">
                    <div className="flex flex-col space-y-2 text-left">
                        <span className="text-[#2D3339] font-semibold">Email:</span>
                        <span className="text-[#2D3339] font-semibold">Telemóvel:</span>
                        <span className="text-[#2D3339] font-semibold">Data de Adesão:</span>
                        <span className="text-[#2D3339] font-semibold">Último Login:</span>
                    </div>
                                    
                    {user && (
                        <div className="flex flex-col space-y-2 text-right">
                            <span className="text-[#2D3339] font-medium">Email da empresa</span>
                            <span className="text-[#2D3339] font-medium">Contacto da empresa</span>
                            <span className="text-[#2D3339] font-medium">Data de adesão não disponível
                            </span>
                            <span className="text-[#2D3339] font-medium">dd/MM/yyyy HH:mm:ss Data de último login não disponível
                            </span>
                        </div>
                    )}
                </div>

                <Separator className="w-[33rem] bg-[#80848a]"/>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center p-4">Sessões Ativas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                                <div>
                                    <p className="font-medium text-slate-900">
                                        Navegador Atual
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        Chrome - Windows 11 • IP: 192.168.1.100
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Último acesso: Hoje às 14:32
                                    </p>
                                </div>
                                <Badge className="bg-green-100 text-green-800">
                                    Ativo Agora
                                </Badge>
                            </div>
                
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
                                <div>
                                    <p className="font-medium text-slate-900">Safari - iPhone</p>
                                    <p className="text-sm text-slate-600">
                                        Safari - iOS 17 • IP: 192.168.1.150
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Último acesso: 2 dias atrás
                                    </p>
                                </div>
                                <Button size="sm" variant="outline">
                                    Desconectar
                                </Button>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            className="w-full mt-4 text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                            Desconectar Todas as Sessões
                        </Button>
                    </CardContent>
                </Card>
                <Separator className="w-[33rem] bg-[#80848a]"/>
                <div className="flex space-x-4 h-[5rem]">
                    <Link href="/change-password">
                        <Button className="w-[16rem] cursor-pointer h-12 bg-[#6366f1] hover:bg-[#5856eb] mt-7 text-white hover:text-white">
                            <svg>
                                <image xlinkHref={RedefinirIcon} className="size-4" />
                            </svg>
                            Redefinir Senha
                        </Button>
                    </Link>
            </div>
        </section>
    )
}
