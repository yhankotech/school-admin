//compoenetes
import { LogOutModal } from "@/components/LogOutModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
//images e icones
import { Globe, LogOut } from "@/utils/icons";
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
        className={`relative flex h-[5rem]  items-center justify-between bg-[#FFFFFF]`}>
            {/* Borda esquerda */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[80%] w-[1px] bg-[#D2D2D2]"></div>

            <nav className="flex md:space-x-4 lg:space-x-4 xl:-space-x-4 2xl:-space-x-4 w-[15rem] h-20">
                <div className="flex justify-center items-center space-x-2 w-[80px] ml-9 md:w-[100px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px] md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0">

                    <div className="border-[1.5px] border-[#E8F2FF] rounded-3xl w-12 h-12 flex justify-center items-center">
                        <Image
                            src=""
                            alt="Avatar"
                            className="w-10 h-10 md:w-10 lg:w-10 xl:w-10 2xl:w-10 md:h-10 lg:h-10 xl:h-10 2xl:h-10 rounded-3xl"
                        />
                    </div>
                </div>
            </nav>

            <div className="flex space-x-4 w-52">
                <div className="static">
                    <span
                        className="absolute text-center ml-[27px] bg-[#1FC16B] text-[#ffffff] rounded-[3px] h-4  md:w-6 lg:w-6 xl:w-6 2xl:w-6 md:h-5 lg:h-5 xl:h-5 2xl:h-5 md:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-[10px] pt-[2px] -mt-2"
                    >
                      {/* master ? unreadNotificationsCount : 0 */}
                    </span>
                    <NotificationsHover />
                </div>
                <Button className="size-8 md:size-10 lg:size-10 xl:size-10 2xl:size-10 bg-transparent text-[#013479] border border-[#013479] hover:bg-[#013479] hover:text-white shadow-none">
                    <Globe />
                </Button>
                <LogOutModal>
                    <Button className="size-8 md:size-10 lg:size-10 xl:size-10 2xl:size-10 bg-transparent border border-[#F08F3E] text-[#F08F3E] hover:bg-[#F08F3E] hover:text-white shadow-none">
                        <LogOut />
                    </Button>
                </LogOutModal>
            </div>
        </header>
    );
}