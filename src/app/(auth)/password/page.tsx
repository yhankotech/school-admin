"use client";
//componentes
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from 'next/image'
//imagens e icones
import Logo from "../../../assets/yhankoIMG.svg";
import { Loader2 } from "lucide-react";
import RequestError from "../../../assets/ErroDeResposta.svg";
import { AiOutlineClose } from "@/lib/icons";
//Hooks
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useEntityStore } from "@/hooks/useEntityStore";
//configurações
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { AxiosError } from "axios";
import axiosInstance from "@/service/api";

const getPasswordSchema = z.object({
  email: z.string(),
  canal: z.enum(["E-mail", "SMS"]),
});

// Tipo inferido do schema do Zod
type FormData = z.infer<typeof getPasswordSchema>;

export default function ResetPassword() {
  const {setEtidade} = useEntityStore()
  const { toast } = useToast();
  const [canal, setCanal] = useState<"E-mail" | "SMS">("SMS");

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<FormData>({
    resolver: zodResolver(getPasswordSchema),
    defaultValues: { canal: "SMS" },
  });

  useEffect(() => {
    setValue("canal", canal);
  }, [canal, setValue]);

  function goTo(){
    router.push("/verifyCode")
  }

  const onSubmit = async (data: FormData) => {
    setIsLoading(true); // Inicia o estado de carregamento

    const requestBody = {
      email: data.email,
      canal,
    };

    try {
      const response = await axiosInstance.post("/clientes/codigo-seguranca/recuperar", requestBody);

      setIsLoading(true);

      if (response.status === 202) {
        const data = await response.data.info.entidade; 
        setEtidade(data)
        reset();
        router.push("/verifyCode");
      }
        
    } catch (error:  unknown | AxiosError) {
      // Verificando se o erro é um AxiosError
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
          className: "border-l-4 border-l-[#FB3748]", // Estiliza a borda esquerda
        });

      }
    }
  };

    return (
        <main className="2xl:h-screen xl:h-[130vh] w-screen flex flex-col bg-[#ffffff] ">

            <section className="flex flex-col items-center flex-1 px-4 lg:px-0 mt-[5rem] 2xl:h-[70vh] xl:h-[80vh]">
                <div className="flex flex-col w-[40rem] h-60 space-y-4 2xl:space-y-16 lg:space-y-12 xl:mt-4 items-center">
                    <div className="flex justify-center items-center space-x-3">
                      <Image src={Logo} alt="logo" className="h-12 w-12 xl:h-12 2xl:h-14"/>
                      <h1 className="text-black font-bold">Yhanko Akademi</h1>
                    </div>
                    <div className="text-center space-y-4">
                        <h1 className="text-[#1D5298] font-semibold text-lg lg:text-xl mb-2">Redefina a sua senha</h1>
                        <span className="text-[#717F96] text-sm lg:text-base">
                            Preencha o campo abaixo para<br /> recuperar a sua senha.
                        </span>
                    </div>
                </div>

              <form className="flex flex-col w-full max-w-md mt-7 space-y-4 " onSubmit={handleSubmit(onSubmit)}>
              <div className="relative w-full">
                <Input
                  id="floating-input"
                  type="text"
                  className={`peer w-full h-12 lg:h-14 pl-6 pt-4 pb-2 border-[2px] border-[#E2E5F1] focus:border-[#E2E5F1] focus-visible:border-[#E2E5F1] focus-visible:text-[#717F96] placeholder-transparent focus:outline-none ${errors.email &&   'border-[#D03816]'}`}
                  placeholder=" " 
                  {...register("email")}
                />
                <label
                  htmlFor="floating-input"
                  className="absolute left-6 text-sm font-medium text-[#B7BFDE] bg-white px-1 transition-all duration-300 transform origin-top-left
                  top-0 -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#B7BFDE]
                  peer-focus:top-0 peer-focus:text-[#717F96]"
                >
                  Digite o seu e-mail
                </label>
              </div>
                <div className="flex lg:flex-row items-start lg:items-center space-x-4 lg:space-y-0 lg:space-x-8">
                    <span className="text-[#717F96] text-base lg:text-sm">Receber Código por:</span>
                        <div className="flex items-center space-x-2">
                            <div className="flex relative items-center">
                                {/* Input do tipo radio */}
                                <input
                                    type="radio"
                                    id="radio-1"
                                    name="canal"
                                    className="w-5 h-5 border-[1px] border-[#E2E5F1] shadow-none cursor-pointer rounded-full transition duration-300 appearance-none checked:bg-[#217EFD] checked:border-[#217EFD]"
                                    onChange={() => setCanal("E-mail")}
                                    checked={canal === "E-mail"}
                                  />
                                  {canal === "E-mail" && (
                                    <div className="absolute w-2 h-2 bg-white rounded-full left-[6px] top-[6px] transition duration-300 pointer-events-none" />
                                  )}
                                </div>
                            <span className="text-sm lg:text-sm text-[#717F96]">E-mail</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="flex relative items-center">
                                {/* Input do tipo radio */}
                                <input
                                    type="radio"
                                    id="radio"
                                    name="canal"
                                    className="w-5 h-5 border-[1px] border-[#E2E5F1] shadow-none cursor-pointer rounded-full transition duration-300 appearance-none checked:bg-[#217EFD] checked:border-[#217EFD]"
                                    onChange={() => setCanal("SMS")}
                                    checked={canal === "SMS"}
                                />
                                {/* Ícone redondo (bola branca) visível quando selecionado */}
                                {canal === "SMS" && (
                                        <div className="absolute w-2 h-2 bg-white rounded-full left-[6px] top-[6px] transition duration-300 pointer-events-none" />
                                )}
                                </div>
                            <span className="text-sm lg:text-sm text-[#717F96]">SMS</span>
                        </div>
                    </div>
                      <div>
                        
                        <Button
                          onClick={goTo} 
                          //type="submit" 
                          disabled={isLoading} 
                          className={`bg-[#327FE4] shadow-none hover:bg-[#1D5298] hover:cursor-pointer text-white w-full mb-10 h-12 lg:h-14 rounded-md 2xl:mt-9 xl:mt-4 ${
                            isLoading ? "cursor-not-allowed" : ""
                          }`}>
                          {isLoading ? <Loader2 className="animate-spin" /> : "Enviar"}
                        </Button>

                        <Link href="/login">
                          <Button className="bg-white hover:bg-[#E2E5F1] hover:cursor-pointer shadow-none text-[#717F96] w-full h-12 lg:h-14 rounded-md border-[1.5px] border-[#E2E5F1] 2xl:mt-2 xl:mt-1 mb-6">
                          Voltar
                          </Button>
                        </Link>
                      </div>
                </form>
            </section>
        </main>
    );
}
