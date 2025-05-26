//Componentes
import { Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Image from "next/image";
//imagens e icones
import Send from "@/assets/send.svg";
import { AiOutlineClose } from "@/utils/icons";
import RequestError from "@/assets/ErroDeResposta.svg";
import RoundedIcon from "@/assets/roundedIcon.svg";
//Hooks
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
//import getCookie from "../../hooks/Hooks/Login/useGetTokenLogin";
import { zodResolver } from "@hookform/resolvers/zod";
//Bibliotecas
import { z } from "zod";
//API
import axiosInstance from "@/service/api";
import { AxiosError } from "axios";
//Tipagens
import { RemetenteType } from "@/types/types";


// Definindo o schema de validação com Zod
const remetenteSchema = z.object({
  nome_rementente: z.string({required_error: "Campo obrigatório"}).max(11),
});
  
// Tipo inferido do schema do Zod
type FormData = z.infer<typeof remetenteSchema>;
  

export function RemetenteName(){
    const [ close, setClosed] = useState(false);
    //const { entidade } = getCookie();
    const { toast } = useToast();
    const [remetente, setRemetente] = useState<RemetenteType[]>([])
    
    const closeDialog = function(value: boolean){
      setClosed(value)
    }

  const fetchRemetente = async () => {
    try {
      const response = await axiosInstance.get(`sms/remetentes/entidade/`); 
      setRemetente([response.data.mensagem]);

    } catch (error) {
      console.error('Erro ao buscar webhooks:', error);
    }
  };

  useEffect(() => {        
    fetchRemetente();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm<FormData>({
    resolver: zodResolver(remetenteSchema),
  });

  const onSubmit = async (data: FormData) => {
    const bodydata = {
    nome_rementente: data.nome_rementente,
    //entidade_remetente: entidade
  }
 
    try {
    // Enviar os dados para a API de autenticação
      const response = await axiosInstance.post("sms/remetente", bodydata);
    
      if (response.status === 202) {
          
        toast({
          description: (
            <div className="flex items-center gap-4 ">
              <div className="rounded-full w-8 h-8 flex justify-center items-center">
                <Image src={RoundedIcon} alt="icon"  />
              </div>
                
              <span className="text-[#717F96]">Remetente gravado com sucesso!</span>
            </div>
          ),
          action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
            className: "border-l-4 border-l-[#1FC16B]",
        });
        reset();
      } 
    } catch (error:unknown){
      if(error instanceof AxiosError){
        toast({
          description: (
            <div className="flex items-center gap-4 ">
              <div className="rounded-full w-8 h-8 flex justify-center items-center bg-[fill: rgba(251, 55, 72, 0.16)]">
                <Image src={RequestError} alt="icon"  />
              </div>
              
              <span className="text-[#717F96]">{error?.response?.data.mensagem}</span>
            </div>
          ),
          action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
          className: "border-l-4 border-l-[#FB3748]", // Estiliza a borda esquerda
        });}
      }
    };

    return (
        <Sheet onOpenChange={closeDialog} open={close}>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex justify-center cursor-pointer items-center h-11 w-[15rem] bg-[#F08F3E] hover:bg-[#E07923] text-[#FFFF] hover:text-[#FFFF] font-semibold rounded-[6px] border-[#F08F3E] shadow-none">
                <Image src={Send} alt="fileIcon" className="w-6 h-8" />
                Nome de Remetente
            </Button>
          </SheetTrigger>
          <SheetContent style={{minWidth:600}} className="overflow-y-auto scrollbar-none">
            <SheetHeader className="ml-6 mt-4">
              <SheetTitle className="text-[#1D5298]">Configurar Nome de Remetente</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
              {
                remetente.map((remetente) => (
                  <div className="w-[30rem] ml-6 border-[2px] border-[#EDEFF6] rounded-[6px] flex flex-col pt-4 pl-4 pr-4 pb-4 mt-12" key={remetente.id_envio_rementente}>
                  <div className="flex justify-between pl-4 pr-4">
                      <div className="flex flex-col">
                          <span className="text-[#2D3339] text-[0.8rem] font-semibold">Remetente</span>
                          <span className="text-[#717F96] text-[0.7rem]">{remetente.nome_rementente}</span>
                      </div>

                      <div className="flex flex-col">
                          <span className="text-[#2D3339] text-[0.8rem] font-semibold">STATUS PARA USO:</span>
                          <span className="text-[#189F57] text-[0.7rem]">{remetente.estado_remetente}</span>
                      </div>
                  </div>

                  <Separator className="my-2 w-[450px] bg-[#EDEFF6]" />

                  <div className="flex flex-col pl-4 pr-4">
                      <span className="text-[#2D3339] text-[0.8rem] font-semibold">CAMPO DO TERMINAL:</span>
                      <span className="text-[#717F96] text-[0.7rem]">{remetente.campo_envio}</span>
                  </div>
                  </div>
                ))}

                <form className="grid gap-4 py-10 w-[40rem] pl-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-6">
        
                  <div className="space-y-1">
                    <Label htmlFor="remetente" className="text-left text-[#2D3339] font-semibold">
                        Remetente
                    </Label>
                    <Input id="remetente" type="text" placeholder="EX: Campo=Valor" className={`w-[30rem] text-[#717F96] h-10 border-[2px] border-[#EDEFF6] focus-visible:border-[#EDEFF6] shadow-none ${errors.nome_rementente &&  'border-[#D03816]'}`} {...register("nome_rementente", { onChange: (e) => console.log("Valor digitado:", e.target.value) })}/>
                    </div>
                </div>

              <div className="mt-8">
                <Button type="submit" className="bg-[#F08F3E] cursor-pointer shadow-none w-32 h-11 text-[#ffffff] hover:bg-[#F08F3E] hover:text-[#ffffff] ml-2">Actualizar</Button>
                <Button
                type="button"
                  onClick={() => {setClosed(false)}} 
                  className="bg-[#EDEFF6] cursor-pointer w-32 h-11 text-[#717F96] hover:bg-[#F08F3E] hover:text-[#ffffff] ml-8 shadow-none">Cancelar</Button>
              </div>
            </form>
          </SheetContent>
        </Sheet>
      )
}