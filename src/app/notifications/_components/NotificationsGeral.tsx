"use client";
//Hooks
import { useNotificationStore } from "@/hooks/useNotifications";
import PaginationNotification  from "./PaginationNotification";
//import { useEffect } from "react";
//import getCookie from "../../hooks/Hooks/Login/useGetTokenLogin";
//Componentes
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Image from "next/image";
//Imagens e icones
import ReadMessage from "@/assets/reaAllMessage.svg";
import UnreadMessage from "@/assets/unreadMessage.svg";
import MessageIsRead from "@/assets/messageIsRead.svg";
import { AiOutlineClose } from "@/utils/icons";
import RequestError from "@/assets/ErroDeResposta.svg";
//API
import axiosInstance from "@/service/api";
//bibliotecas
import { format } from 'date-fns';
//import { useQuery } from "@tanstack/react-query";
//Tipagens e interafces
import { Notification } from "@/types/types";

export default function NotificationsGeral (){
    
    const { toast } = useToast();
    const {
        notifications,
        paginatedNotifications,
        isLoading,
        error,
        page,
        pages,
        changePage,
        unreadNotificationsCount,
        setNotifications,
    } = useNotificationStore();

    //const { entidade } = getCookie();
/*
    const { data } = useQuery({
        queryKey: ["notifications", entidade],
        queryFn: async () => {
          const response = await axiosInstance.get(`notificacoes/entidade/${entidade}`);
          return response.data.mensagem;
        },
        enabled: !!entidade,
    });
      
    useEffect(() => {
        if (data) {
          setNotifications(data);
        }
    }, [data, setNotifications]);
      
*/
    async function markAllNotificationsAsRead(){
        try {
            await axiosInstance.patch(`notificacoes/entidade//marcar-todas-como-lidas`);
            
            setNotifications((notifications: Notification[]) =>
                notifications.map((notification) => ({
                    ...notification,
                    leitura: "lida",
                }))
            );            
        } catch {
            toast({
                description: (
                  <div className="flex items-center gap-4 ">
                    <div className="rounded-full w-8 h-8 flex justify-center items-center">
                      <Image src={RequestError} alt="icon"  />
                    </div>
                    
                    <span className="text-[#717F96]">Não foi possível marcar todas como não lida!</span>
                  </div>
                ),
                action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
                className: "border-l-4 border-l-[#FB3748]",
            });
        } 
    }
    
    async function markNotificationsAsRead(id_notficacao_entidade: number){
        try {
            await axiosInstance.patch(`notificacoes/entidade//marcar-como-lida/${id_notficacao_entidade}`);
            
            // Atualiza o Zustand localmente
            setNotifications((prevNotifications) =>
                prevNotifications.map((notification) =>
                    notification.id_notficacao_entidade === id_notficacao_entidade
                        ? { ...notification, leitura: "lida" }
                        : notification
                )
            );
        }  catch {
            toast({
                description: (
                  <div className="flex items-center gap-4 ">
                    <div className="rounded-full w-8 h-8 flex justify-center items-center">
                      <Image src={RequestError} alt="icon"  />
                    </div>
                    
                    <span className="text-[#717F96]">Não foi possível marcar como lida!</span>
                  </div>
                ),
                action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
                className: "border-l-4 border-l-[#FB3748]",
            });
        }
        
    } 

    async function markNotificationsAsUnread(id_notficacao_entidade: number){
        try {
            await axiosInstance.patch(`notificacoes/entidade//marcar-como-nao-lida/${id_notficacao_entidade}`);
    
            // Atualiza o Zustand localmente
            setNotifications((prevNotifications) =>
                prevNotifications.map((notification) =>
                    notification.id_notficacao_entidade === id_notficacao_entidade
                        ? { ...notification, leitura: "nao_lida" }
                        : notification
                )
            );
        } catch {
            toast({
                description: (
                  <div className="flex items-center gap-4 ">
                    <div className="rounded-full w-8 h-8 flex justify-center items-center">
                      <Image src={RequestError} alt="icon"  />
                    </div>
                    
                    <span className="text-[#717F96]">Não foi possível marcar como não lida!</span>
                  </div>
                ),
                action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
                className: "border-l-4 border-l-[#FB3748]",
            });
        }
        
    }

    return (
        <div className="p-6 space-y-4 flex flex-col pl-20 pr-20 pt-10">
            <div className="flex justify-between mb-4">
                <h1 className="text-xl font-semibold text-[#1D5298]">
                    Notificações não lidas ({unreadNotificationsCount})
                </h1>
                <Button
                    className="MessageReadButton hover:bg-[rgba(24, 159, 87, 0.15)] cursor-pointer"
                    onClick={() => markAllNotificationsAsRead()}
                >
                    <Image src={ReadMessage} alt="icon" />
                    Marcar todas como lidas
                </Button>
            </div>
            {isLoading ? (
                 <div>
                 <div  className="p-8">
                   <div className="fixed 2xl:ml-[1150px] xl:ml-[670px] mt-[30rem] w-[14rem] h-[5rem] inset-0 flex items-center justify-center z-50">
                     <div className="relative w-10 h-10">
                       <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-[#1D5298] animate-spin"></div>
                     </div>
                   </div>
                 </div>
               </div>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : notifications.length === 0 ? (
                <p className="text-gray-500">Nenhuma notificação disponível.</p>
            ) : (
                <div className="space-y-4">
                    {paginatedNotifications.map((notification) => (
                        <div
                            key={notification.id_notficacao_entidade}
                            className={`border-[2px] pr-4 border-[#EDEFF6] flex justify-between border-l-8 rounded-[12px] ${
                                notification.leitura ? "bg-[#FFFFFF]" : ""
                            }`}
                            style={{ borderLeftColor: notification.leitura === "lida" ? "#E9E9E9" : "#20C06B" }}
                        >
                            <div className="space-y-1 flex flex-col pt-3 pl-3 pb-4">
                                <span className="notificationText">{notification.descricao_notificado}</span>
                                <span className=".notificationDate">
                                    {format(new Date(notification.data_notificada), 'dd/MM/yyyy HH:mm:ss')}
                                </span>
                            </div>
                            <div className="pt-3">
                                {notification.leitura === "lida" ? (
                                    <Button 
                                        className="messageIsRead hover:bg-[rgba(240, 143, 62, 0.15)]"
                                        onClick={() => markNotificationsAsUnread(notification.id_notficacao_entidade)}
                                        >
                                        <Image src={MessageIsRead} alt="icon" />
                                        marcar como não lida
                                    </Button>
                                ) : (
                                    <Button
                                        className="unReadMessagebutton hover:bg-[rgba(240, 143, 62, 0.15)]"
                                        onClick={() => markNotificationsAsRead(notification.id_notficacao_entidade)}
                                    >
                                        <Image src={UnreadMessage} alt="icon" />
                                        Marcar como lida
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <PaginationNotification page={page} pages={pages} onPageChange={changePage} />
        </div>
    );
}