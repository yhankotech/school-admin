"use client";
//compoenetes
import { LogOutModal } from "@/components/LogOutModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
//images e icones
import { LogOut } from "@/lib/icons";
import YhankoIMG from "@/assets/yhankoIMG.svg";
//hooks
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
import { NotificationsHover } from "./NotificationHover";
//import { useNotificationStore } from "@/hooks/useNotifications";
//import { useEffect, useState, useCallback } from "react";
//import { userData } from "@/service/userDataAPI";
//Tipagens
//import { UserDataType } from "@/types/types";
//Configuração
//import axiosInstance from "@/service/api";
//import { AxiosError } from "axios";

export function Header() {
   /* const [user, setUser] = useState<UserDataType |  null>(null);
    const [userPhoto, setUserLogo] = useState<string | null>(null);
    const { unreadNotificationsCount, setNotifications } = useNotificationStore();

    const { entidade, master } = getCookie();

    const fetchUser = useCallback(async () => {
        try {
            const { user, userLogo } =  (await userData()) || { user: null, userLogo: '' };
            
            setUser(user);
            setUserLogo(userLogo)
        } catch (error) {
            console.error( `Erro ao buscar dados do usuário: ${error}`)
        }
    }, []);

    const getNotifications = useCallback(async () => {
        try {
            const response = await axiosInstance.get(`notificacoes/entidade/${entidade}`);
            setNotifications(response.data.mensagem);
        } catch (error) {
            if(error instanceof AxiosError) return error?.response?.data.mensagem
        }
    }, [entidade, setNotifications]);


    useEffect(() => {
       fetchUser();
    }, [fetchUser]);

    useEffect(() => {
        getNotifications()
    }, [entidade, getNotifications]);
    */
    return (
        <header 
        className="flex h-[5rem] w-[1688px] items-center bg-[#FFF] justify-end border-b border-[#E5E5E5] fixed top-0 z-50">    
            <nav className="flex items-center justify-center space-x- w-[12rem] h-20">
                <div className="flex space-x-4 max-w-24">
                    <div className="static">
                        <span
                            className="absolute text-center ml-[27px] bg-[#1FC16B] text-[#ffffff] rounded-sm h-4 w-4 text-xs text-[10px] pt-[2px] -mt-1"
                        >
                        {/* master ? unreadNotificationsCount : 0 */}
                        <span>11</span>
                        </span>
                        <NotificationsHover />
                    </div>

                    <LogOutModal>
                        <Button className="size-8 md:size-10 lg:size-10 xl:size-10 2xl:size-10 bg-transparent hover:cursor-pointer border border-[#303972] text-[#303972] hover:bg-[#F08F3E] hover:text-white shadow-none">
                            <LogOut />
                        </Button>
                    </LogOutModal>
             </div>
             <Link href="profile" className="border-[1.5px] border-[#a8abaf] rounded-3xl w-12 h-12 flex justify-center items-center ml-2">
                <Image
                    src={YhankoIMG}
                    alt="Avatar"
                    className="w-10 h-10 md:w-10 lg:w-10 xl:w-10 2xl:w-10 md:h-10 lg:h-10 xl:h-10 2xl:h-10 rounded-3xl"
                />
                </Link>
            </nav>
        </header>
    );
}