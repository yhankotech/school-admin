"use client";
//imagens e icones
import NoteSMS from "@/assets/notSMSIcon.svg";
//Hooks
import { useSidebarStore } from "@/hooks/useSidebar";
import { useState, useMemo } from "react";
import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
//Componentes
import { SmsNotificationHeader } from "./_components/SmsNotificationHeader";
import { SmsNotificationsTable } from "./_components/SmsNotificationsTable";
//Bibliotecas
import axiosInstance from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import Link  from "next/link";
//Tipagens
import { RemetenteSms } from "@/types/types";


export default function NotificationsSms(){
    const { isSidebarOpen } = useSidebarStore()
    const { entidade } = getCookie();
    
    const fetchRemetente = async () => {
      try {
        const response = await axiosInstance.get(`sms/ver-mensagens/${entidade}`);  
        return response.data.mensagem;
      } catch (error) {
          return error
        }
    };

      // Busca os Grupos de Afiliados usando React Query
  const { data:remententeSms  = [], isLoading, error } = useQuery({
    queryKey: ["sms", entidade],
    queryFn: () => fetchRemetente(),
    enabled: !!entidade,
  });
    
      
  const [filter, setFilter] = useState("");

  const filteredPayments = useMemo(() => {
      
    const filtered = remententeSms.filter( (vl: RemetenteSms) => JSON.stringify(vl).includes(filter))
    return filtered
  }, [remententeSms, filter]);

  return (
    <section className={`flex flex-col justify-center items-center space-y-8 mt-4 p-6 max-w-4xl mx-auto sm:w-[125vw] md:w-[103vw] lg:w-[80vw] xl:w-[73vw] 2xl:w-[85vw]`}>

      <div className={`bg-[#FFFFFF]  w-[1550px] h-[91px] sm:w-[125vw] md:w-[103vw] lg:w-[80vw]  border-t-0 border-l-o border-r-0 rounded-[6px] border-b-4 border-b-[#F08F3E] ${ isSidebarOpen ? "xl:w-[75vw] 2xl:w-[85vw]" : "2xl:w-[93vw] xl:w-[88vw]"}`}>
        <div className="flex w-80 space-x-4 h-[90px] items-center pl-4">
          <svg width="40" height="40">
            <image xlinkHref={NoteSMS} width="40" height="40" />
          </svg>
          <h2 className="text-[#1D5298] font-semibold text-[20px]">Notificações SMS</h2>
        </div>
      </div>

      <div className={`flex flex-col w-[1550px] bg-[#FFFFFF] rounded-[6px] space-y-4 pl-4 pr-4 sm:w-[125vw] md:w-[103vw] lg:w-[80vw] ${
                isSidebarOpen ? "xl:w-[75vw] 2xl:w-[85vw]" : "2xl:w-[93vw] xl:w-[88vw]"}`}>
        <div className="flex space-x-2 pl-4 pt-4" style={{zIndex: 1}}>
          <Link href="/dashboard" className="text-[#F08F3E] font-medium cursor-pointer"
          >
              Dashboard
          </Link>
            <Link href="/notificacoes-sms" className="text-[#717F96] cursor-pointer"> {">"} Notificações SMS</Link>
        </div>

        <SmsNotificationHeader onFilterChange={setFilter}/>
          {
            isLoading ? [] : error ? <p className="text-red-600">Não foi possível carregar os dados!</p> :  <SmsNotificationsTable sms={filteredPayments || []} />
          }
      </div>

    </section>
  );
}