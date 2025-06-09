"use client";

//Imagens e icones
import { University, Student, CalendarDays, SuitcaseSimple } from "@/lib/icons";
/*import {
    useQuery,
} from '@tanstack/react-query';
//Configurações
import axiosInstance from "@/service/api";
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
import Image from "next/image";
*/
export  function Cards(){
    //const { entidade } = getCookie();
   /* const { data } = useQuery({
        queryKey: ["dashboard"],
        queryFn: async () =>{
            const response = await axiosInstance.get(`dashboard/entidade/`);
            return response.data.mensagem;   
        },
    });
*/
    return (
        <div className="flex items-center w-[50rem] h-[5rem] space-x-24 pl-4 rounded-[6px] bg-white">
            <div className='flex items-center justify-center h-20 w-28 space-x-4'>
                <div className="w-14 h-14 rounded-full bg-[#4D44B5] flex justify-center items-center">
                   <Student className="text-white w-10 h-10"/> 
                </div>
                <span className='text-2xl font-bold text-[#4D44B5]'>932</span>
            </div>

            <div className='flex items-center justify-center h-20 w-28 space-x-4'>
                <div className="w-14 h-14 rounded-full bg-[#FB7D5B] flex justify-center items-center">
                   <University className="text-white w-10 h-10"/> 
                </div>
                <span className='text-2xl font-bold'>754</span>
            </div>

            <div className='flex items-center justify-center h-20 w-28 space-x-4'>
                <div className="w-14 h-14 rounded-full bg-[#FCC43E] flex justify-center items-center">
                   <CalendarDays className="text-white w-10 h-10"/> 
                </div>
                <span className='text-2xl font-bold'>40</span>
            </div>

            <div className='flex items-center justify-center h-20 w-28 space-x-4'>
                <div className="w-14 h-14 rounded-full bg-[#303972] flex justify-center items-center">
                   <SuitcaseSimple className="text-white w-10 h-10"/> 
                </div>
                <span className='text-2xl font-bold'>400</span>
            </div>
        </div>
    )

}
