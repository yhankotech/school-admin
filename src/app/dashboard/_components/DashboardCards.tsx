"use client";
//Hooks
import { useSidebarStore } from "@/hooks/useSidebar";
//Imagens e icones
import MuseumIcon from "@/assets/museumIcon.svg";
import Expirada from "@/assets/expiradaIcon.svg";
import PigPaymentIcon from "@/assets/pigPayment.svg";
import TimeIcon from "@/assets/timeIcon.svg";
//Bibliotecas
import {
    useQuery,
} from '@tanstack/react-query';
//Configurações
import axiosInstance from "@/service/api";
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
import Image from "next/image";

export  function Cards(){
    //const { entidade } = getCookie();
    const { isSidebarOpen } = useSidebarStore();
    const { data } = useQuery({
        queryKey: ["dashboard"],
        queryFn: async () =>{
            const response = await axiosInstance.get(`dashboard/entidade/`);
            return response.data.mensagem;   
        },
    });
    
    const referencias_geradas = data?.resumo.referencias_geradas || 0;
    const referencias_expiradas = data?.resumo.referencias_inactivas || 0;
    const pagamentos_dia = data?.resumo.pagamentos_diario?.montante_diario || 0;
    const periodo_activo_periodo = data?.resumo.periodo_activo?.periodo || 0;
    const periodo_activo_montante = data?.resumo.periodo_activo?.montante || 0;

    return (
        <div className={`flex items-center w-[1550px] 2xl:h-[8rem] xl:h-[7rem] space-x-7 rounded-[6px] ${ isSidebarOpen ? "xl:w-[76vw] 2xl:w-[85vw] xl:justify-between 2xl:justify-between" : "flex 2xl:justify-between xl:justify-between xl:w-[87vw] 2xl:w-[92vw]"}`}>

            <div className="flex flex-col xl:space-y-2 2xl:space-y-4 rounded-[6px] border-l-[8px] border-l-[#327FE4] bg-[#FFFFFF] w-[25%] 2xl:h-[7.5rem] xl:h-[6rem]">
                <div className="flex items-center w-[20rem] space-x-3 h-14 pt-3 pl-4">
                    <div className="2xl:h-10 2xl:w-10 xl:h-7 xl:w-7 rounded-full flex justify-center items-center bg-[#327FE429] animate-pulse">
                        <Image src={MuseumIcon} alt="museum" className="2xl:h-6 xl:h-4"/>
                    </div>
                    <span className="text-[#1D5298] font-semibold xl:text-[0.9rem] 2xl:text-[1.4rem]">Referências Geradas</span>
                </div>
                    <span className="text-[#2D3339] font-medium xl:text-[0.9rem] 2xl:text-[1.4rem] text-right pr-8">{referencias_geradas}</span>
            </div>

            <div className="flex flex-col xl:space-y-2 2xl:space-y-4 rounded-[6px] border-l-[8px] border-l-[#F95563] bg-[#FFFFFF] w-[25%] 2xl:h-[7.5rem] xl:h-[6rem]">
                <div className="flex items-center xl:w-[14.5rem] 2xl:w-[25rem] space-x-3 h-14 pt-3 pl-4">
                    <div className="2xl:h-10 2xl:w-10 xl:h-7 xl:w-7 rounded-full flex justify-center items-center bg-[#FF6D7A29] animate-pulse">
                        <Image src={Expirada} alt="expiradaIcon" className="2xl:h-6 xl:h-4"/>
                    </div>
                        <span className="text-[#1D5298] font-semibold xl:text-[0.9rem] 2xl:text-[1.4rem]">Referências Expiradas</span>
                    </div>
                        <span className="text-[#2D3339] font-medium xl:text-[0.9rem] 2xl:text-[1.4rem] text-right pr-6">{referencias_expiradas}</span>
                    </div>

                <div className="flex flex-col xl:space-y-2 2xl:space-y-4 rounded-[6px] border-l-[8px] border-l-[#51CB8A] bg-[#FFFFFF] w-[25%] 2xl:h-[7.5rem] xl:h-[6rem]">
                    <div className="flex items-center xl:w-[14.5rem] 2xl:w-[20rem] space-x-3 h-14 pt-3 pl-4">
                        <div className="2xl:h-10 2xl:w-10 xl:h-7 xl:w-7 rounded-full flex justify-center items-center bg-[#51CB8A29] animate-pulse">
                            <Image src={PigPaymentIcon} alt="paymenticon" className="2xl:h-6 xl:h-4"/>
                    </div>
                        <span className="text-[#1D5298] font-semibold xl:text-[0.9rem] 2xl:text-[1.4rem]">Pagamentos do Dia</span>
                    </div>
                        <span className="text-[#2D3339] font-medium xl:text-[0.9rem] 2xl:text-[1.4rem] text-right pr-10">AKZ {Intl.NumberFormat().format(pagamentos_dia)}</span>
                    </div>

                <div className="flex flex-col xl:space-y-2 2xl:space-y-4 rounded-[6px] border-l-[8px] border-l-[#43BCFE] bg-[#FFFFFF] w-[25%] 2xl:h-[7.5rem] xl:h-[6rem]">
                    <div className="flex items-center xl:w-[13rem] 2xl:w-[20rem] space-x-3 h-14 pt-3 pl-4">
                        <div className="flex items-center space-x-3 w-[14rem]">
                            <div className="2xl:h-10 2xl:w-10 xl:h-7 xl:w-7 rounded-full flex justify-center items-center bg-[#43BCFE29] animate-pulse">
                                <Image src={TimeIcon} alt="timeIcon" className="2xl:h-6 xl:h-4"/>
                            </div>
                                <span className="text-[#1D5298] font-semibold xl:text-[0.9rem] 2xl:text-[1.4rem]">Período Activo</span>
                            </div>
                            
                        <div className="bg-[#43BCFE] w-12 h-6 text-center rounded-[3px]">
                            <span className="text-[#ffffff] xl:text-[0.7rem] 2xl:text-[0.8rem] font-semibold">{periodo_activo_periodo}</span>
                        </div>
                    </div>
                        <span className="text-[#2D3339] font-medium xl:text-[0.9rem] 2xl:text-[1.4rem] text-right pr-6">AKZ {Intl.NumberFormat().format(periodo_activo_montante)}</span>
                </div>
            </div>
    )

}
