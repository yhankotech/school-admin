"use client";

//componentes
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
//configurações
import axiosInstance from "@/service/api"; 
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { AxiosError } from "axios";
//imagens e icones
import { Loader2 } from "lucide-react";
import { AiOutlineClose } from "@/lib/icons";
import RequestError from "../../../assets/ErroDeResposta.svg";
import YhankoIMG from "../../../assets/yhankoIMG.svg";
//Hooks
import { useEntityStore } from "@/hooks/useEntityStore";

const verificationSchema = z.object({
  code: z
    .string({
      required_error: "O código de verificação é obrigatório",
      invalid_type_error: "O código deve ser um número",
    })
    .min(4, "O código deve ter pelo menos 6 dígitos"),
});

// Tipo inferido do schema do Zod
type LoginFormData = z.infer<typeof verificationSchema>;

export default function VerifyCode() {
  const {entidade} = useEntityStore()
  const { toast } = useToast();
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(verificationSchema),
  });
  
  function goTo(){
    router.push("/newPassword")
  }
  
  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true); 
    const responseBody = {
      codigo_seguranca: data.code,
      entidade: entidade
    }
    try {
      const response = await axiosInstance.post("clientes/codigo-seguranca/redifinir", responseBody);
  
      if (response.status === 202) {
        reset();
        router.push("/newPassword"); 
      } 
    } catch (error: unknown) {
      setIsLoading(false); 
      
      if (error instanceof AxiosError) {
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
          className: "border-l-4 border-l-[#FB3748]",
        });
      }
    } 
  };
      
  return (
    <main className="2xl:h-screen xl:h-[130vh] w-screen flex flex-col bg-[#ffffff]">

      <section className="flex flex-col justify-center items-center mt-12 md:mt-20 sm:mt-8 lg:mt-40 xl:mt-16 px-4 2xl:mt-48">
        <div className="flex flex-col w-[40rem] h-60 space-y-6 lg:space-y-12 justify-center items-center">
          <div className="flex justify-center items-center space-x-3">
            <Image src={YhankoIMG} alt="logo" className="h-12 w-12 xl:h-12 2xl:h-14"/>
            <h1 className="text-black font-bold">Yhanko Akademi</h1>
          </div>        
          <div className="flex flex-col justify-center items-center space-y-2 lg:space-y-4">
            <h1 className="text-[#1D5298] font-semibold text-lg 2xl:text-lg xl:text-2xl lg:text-lg text-center">
              Código de Verificação
            </h1>
            <span className="text-[#717F96] text-center text-base xl:text-[15px] lg:text-base">
              Introduza o código que enviamos por <br /> SMS.
            </span>
          </div>
        </div>

        <form
          action=""
          className="flex flex-col w-full max-w-md mt-6 lg:mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            className={`w-full h-12 lg:h-14 shadow-none rounded-[6px] focus-visible:border-[#B7BFDE]  border-[2px] placeholder:text-[#B7BFDE] border-[#E2E5F1] appearance-none  ${errors.code && 'border-[#D03816]'}`}
            type="text"
            {...register("code")}
          />
          
          <Button
            onClick={goTo} 
              //type="submit" 
              disabled={isLoading} 
              className="bg-[#327FE4] hover:bg-[#1D5298] hover:cursor-pointer text-[#ffffff] w-full rounded-[6px] h-12 lg:h-14 shadow-none mt-12">
                {isLoading ? <Loader2  className="animate-spin" /> : "Validar"}
            </Button>
        </form>
      </section>
    </main>
  );
}