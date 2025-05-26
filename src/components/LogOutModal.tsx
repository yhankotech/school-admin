"use client";
//Componentes
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
//Hooks
import { useState } from "react";
//Configurações e bibliotecas
//import SessionCookie  from '../config/SessionCookie';
//import axiosInstance  from '../service/api';
//import { useRouter } from 'next/navigation'
//Hooks
//import getCookie from "../hooks/Hooks/Login/useGetTokenLogin";


interface LogOutProps {
  children: React.ReactNode,
  //entidade?: string
}

export function LogOutModal( {  children, /*entidade*/ }: LogOutProps ) {
  const [close, setClosed] = useState(false);
  //const router = useRouter();
  //onst { master } = getCookie();

  const closeDialog = (value: boolean) => setClosed(value);

  /*const removeCookie = async function(entidade: string){
    
  
    try {
      const {data:{status}} =  await axiosInstance.post(`/clientes/logout`,{entidade:entidade})
        
        if(status === "sucesso"){
          const cookieToClear = master ? SessionCookie.CLIENT : SessionCookie.AFFILIATE;
          document.cookie = `${cookieToClear}=; Max-Age=0; path=/`;
          router.push("/")
        }else{
          const cookieToClear = master ? SessionCookie.CLIENT : SessionCookie.AFFILIATE;
          document.cookie = `${cookieToClear}=; Max-Age=0; path=/`;
          router.push("/")
        }
    } catch {
      const cookieToClear = master ? SessionCookie.CLIENT : SessionCookie.AFFILIATE;
      document.cookie = `${cookieToClear}=; Max-Age=0; path=/`;
      router.push("/")
    }  
  
  }
*/
  return (
    <Dialog onOpenChange={closeDialog} open={close} >
      <DialogTrigger asChild>
          { children }
      </DialogTrigger>
      <DialogContent className="sm:max-w-[300px] flex flex-col items-center space-y-4">
        <DialogHeader className="flex items-center flex-col space-y-4 pt-4 mt-4">
          <DialogTitle className="text-lg text-center font-medium text-[#282A37]">
            Tem certeza que deseja  <br/>sair da sua conta?
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center w-full space-x-4">
          <Button 
            onClick={() => {setClosed(false)}} 
            variant="default"
            className="w-28 h-12 cursor-pointer shadow-none focus-visible:ring-0 text-[#717F96] hover:bg-[#F1F5F7] bg-[#F1F5F7]">
              Cancelar
          </Button>
          <Button
            variant="default"
            className="w-28 h-12 cursor-pointer shadow-none text-white hover:bg-[#EB5656] bg-[#EB5656]"
            //onClick={() => removeCookie(entidade)}
            >
              Sair
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}