//Componentes
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
//Hooks
import { zodResolver } from "@hookform/resolvers/zod";
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRef } from "react";
import { useForm } from "react-hook-form";
//Bibliotecas
import { z } from "zod";
//API
import axiosInstance from "@/service/api";
//Imagens e icones
import { AiOutlineClose } from "@/lib/icons";
import RequestError from "../../../assets/ErroDeResposta.svg";
import RoundedIcon from "../../../assets/roundedIcon.svg";
import { AxiosError } from "axios";

// Definindo o schema de validação com Zod
const sendSchema = z.object({
  message: z.string(),
});

// Tipo inferido do schema do Zod
type SendFormData = z.infer<typeof sendSchema>;


export function NotificationsConfiguratiosPayment(){
  //const { entidade } = getCookie();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, 
    setValue, 
  } = useForm<SendFormData>({
    resolver: zodResolver(sendSchema),
      defaultValues: {
      message:
      "Caro(a) Cliente [campo1] sua referencia de pagamentos é:",
    },
  }); 

  // Ref para acessar o TextArea e manipular o cursor
   const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  // Monitorar o valor da mensagem para controlar o número de caracteres restantes
  const message = watch("message");
  
  const onSubmit = async (data: SendFormData) => {
    const bodyData = {
      mensagem: data.message,
      //env_entidade: entidade,
      tipo_env: "Pagamentos"
    }
    try {
      const response = await axiosInstance.post("sms/configuracao/mensagens", bodyData);
   
      if (response.status === 202) {
          
        toast({
          description: (
            <div className="flex items-center gap-4 ">
              <div className="rounded-full w-8 h-8 flex justify-center items-center">
                <Image src={RoundedIcon} alt="icon"  />
              </div>
              
              <span className="text-[#717F96]">Mensagem gravada com sucesso!</span>
            </div>
          ),
          action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
          className: "border-l-4 border-l-[#1FC16B]",
        });
        reset();
      } 
   } catch (error: unknown) {
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
      });
    }

    }
   
  };

  // Manipular alteração do TextArea (limite de 100 caracteres)
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
      if (value.length <= 100) {
        setValue("message", value);
    }
  };

  // Inserir um gancho no texto na posição do cursor
  const handleInsertHook = (hook: string) => {
    if (!textAreaRef.current) return;

    const textArea = textAreaRef.current;
    const startPos = textArea.selectionStart;
    const currentText = message || "";

    const newText = currentText + hook;

    setValue("message", newText);

    // Colocar o cursor após o texto inserido
    setTimeout(() => {
      textArea.selectionStart = textArea.selectionEnd = startPos + hook.length;
      textArea.focus();
    }, 0);
  };

  const hooks = [
    "[data]",
    "[hora]",
    "[local]",
    "[referencia]",
    "[entidade]",
    "[minimo]",
    "[montante]",
    "[campo1]",
    "[campo2]",
    "[campo3]",
  ];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="overflow-y-auto scrollbar-none">                      
        <div className="flex flex-col w-[30rem] h-32 ml-14 space-y-3"> 
            <h2 className="font-semibold text-[0.9rem]">Ganchos</h2>
            
            <div className="grid grid-rows-2 grid-flow-col h-28">
            {hooks.map((hook) => (
               <div 
               key={hook}
               className="bg-[#F08F3E3D] cursor-pointer w-[5.5rem] h-8 flex justify-center items-center rounded-[47px]"
               onClick={() => handleInsertHook(hook)}
               >
                    <span className="text-[#2D3339] text-[0.8rem]">{hook}</span>
               </div>
             ))}
            </div>
        </div>

        <div className="ml-14 mt-8">            
            <Label className="text-[#2D3339] font-semibold">Mensagem</Label>
            <Textarea
              value={message}
              {...register("message")}
              ref={textAreaRef}
              onChange={handleTextChange}
            className={`resize-none w-[28rem] h-56 shadow-none border-[2px] cursor-pointer focus:outline-none border-[#EDEFF6] text-[#2D3339] font-normal rounded-[6px] text-[0.9rem]`}/>
            <span className="text-xs text-[#717F96] ml-1">Caracteres restantes: {100 - (message?.length || 0)}</span>
            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
        </div>
                
        <Button type="submit" className="bg-[#F08F3E] cursor-pointer w-32 h-11 text-[#ffffff] hover:bg-[#F08F3E] hover:text-[#ffffff] mt-12 ml-14">Configurar</Button>
        </form>
    )
}