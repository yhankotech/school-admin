"use client"
//Componente
import { AppSidebarMenu } from "@/components/AppSidebarMenu";
//Interface e tipagens
//Hooks
//import { useEffect, useCallback } from "react";
//import SessionCookie  from '@/config/SessionCookie';
//import { useEntityStore } from "../hooks/useEntityStore";
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
//Bibliotecas
//import { useRouter } from 'next/navigation';
//import axiosInstance from "@/service/api";

export function AppSidebar() {
  //const {setEtidade} = useEntityStore();
  //const {setClientId} = useEntityStore();
  //const router = useRouter();
  //const { entidade, hash, master } = getCookie();
/*
    const fetchEntidade = useCallback(async() => {
    try {
              
      let response = null;
      if(master){
        response = await axiosInstance.get(`/clientes/hash/${hash}`);
        console.log(response.status)
      }
      else {
            response = await axiosInstance.get(`/afiliados/hash/${hash}`,);
      }
      if(response.status == 200) {
  
        setEtidade(response.data.mensagem);
        setClientId(response.data.mensagem.id_clientes);
      }
   
    } catch (error: unknown) {
        console.log(error)
        const cookieToClear = master ? SessionCookie.CLIENT : SessionCookie.AFFILIATE;
        document.cookie = `${cookieToClear}=; Max-Age=0; path=/`;
        router.push("/");
    }
  }, [entidade, hash, master]);

  useEffect(() => {
        
    fetchEntidade()
        
  },[entidade, fetchEntidade]);
*/

  
  return (
    <>
      {/* Sidebar*/}
        <AppSidebarMenu/>
    </>
  );
}
