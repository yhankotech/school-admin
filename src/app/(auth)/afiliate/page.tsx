"use client";
//Bibliotecas
import { z } from "zod";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AxiosError } from "axios";
//Hooks
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import saveCookie from "@/hooks/Hooks/Login/useSetTokenLoginAfiliate";
import { useEntityStore } from "@/hooks/useEntityStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//images and icons
import { GrFormCheckmark, AiOutlineClose, Loader2 } from "@/lib/icons";
//components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
//Configurações
import axiosInstance from "@/service/api";

//Icons e imagens
import EyesOpened from "../../../assets/eye-open.svg";
import EyesOff from "../../../assets/eye-off.svg"; 
import RequestError from "../../../assets/ErroDeResposta.svg";
import RoundedIcon from "../../../assets/ErroDeResposta.svg";
import YhankoIMG from "../../../assets/yhankoIMG.svg";

// Definindo o schema de validação com Zod
const loginSchema = z.object({
  user_name: z.string(),
  user_pass: z.string().nonempty("Senha é obrigatória"),
});

// Tipo inferido do schema do Zod
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginAffliantePage() {
  const { toast } = useToast();
  const { setLoginHash } = useEntityStore()
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible ] = useState(false)
  const router = useRouter()
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("afiliados/login", data);

      if (response.status === 202) {
        setIsLoading(true);

        const dataResponse = await response.data.mensagem; 

        const remember = isChecked

        //console.log(dataResponse)
        saveCookie(dataResponse, remember);
        setLoginHash(dataResponse)

        toast({
          description: (
            <div className="flex items-center gap-4 ">
              <div className="rounded-full w-8 h-8 flex justify-center items-center">
                <Image src={RoundedIcon} alt="icon"  />
              </div>
              
              <span className="text-[#717F96]">Login realizado com sucesso!</span>
            </div>
          ),
          action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
          className: "border-l-4 border-l-[#1FC16B]",
        });
        
        router.push("/dashboard");
        reset()
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
          className: "border-l-4 border-l-[#FB3748]", // Estiliza a borda esquerda
        });
      }
    }
};

  return (
    <main className="flex bg-[#FFFFFF]">
      <div className="hidden lg:block lg:w-[45vw] 2xl:h-screen xl:h-[130vh] backgroundGradient"></div>
      <div  className="w-[55vw] flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center mt-12 md:mt-20 sm:mt-8 lg:mt-40 xl:mt-5 2xl:mt-14 lg:h-[100vh] 2xl:h-[70vh] w-[55vw]">
          <div className="flex flex-col w-[40rem] h-60 space-y-6 2xl:space-y-16 justify-center items-center xl:-mt-28">
           <div className="flex justify-center items-center space-x-3">
              <Image src={YhankoIMG} alt="logo" className="h-12 w-12 xl:h-12 2xl:h-14"/>
                <h1 className="text-black font-bold">Yhanko</h1>
            </div>
            <div className="text-center">
              <h1 className="text-[#171718] font-semibold text-lg lg:text-xl mb-3">Secretário/a</h1>
              <span className="text-[#717F96] text-sm lg:text-base">
                Seja bem-vindo ao nosso portal!<br/>
                Introduza as suas credências de acesso para aceder.
              </span>
            </div>
          </div>

          <form className="flex flex-col w-full max-w-md h-96 mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative w-full mt-2">
            <Input
              id="floating-input"
              type="text"
              className={`peer w-full h-12 lg:h-14 pl-6 pt-4 pb-2 border-[2px] border-[#E2E5F1] focus:border-[#E2E5F1] focus-visible:border-[#E2E5F1] focus-visible:text-[#717F96] placeholder-transparent focus:outline-none ${errors.user_name &&   'border-[#D03816]'}`}
              placeholder=" " 
              {...register("user_name")}
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

          <div className="relative w-full mt-6">
            <Input
              id="float-input"
              type={ isVisible ? "text" : "password"}
              className={`peer w-full appearance-none h-12 lg:h-14 pl-6 pt-4 pb-2 border-[2px] border-[#E2E5F1] focus:border-[#E2E5F1] focus-visible:border-[#E2E5F1] focus-visible:text-[#717F96] placeholder-transparent focus:outline-none ${errors.user_pass &&   'border-[#D03816]'}`}
              placeholder=" "
              {...register("user_pass")} 
            />
            <label
              htmlFor="floating-input"
              className="absolute left-6 text-sm font-medium text-[#B7BFDE] bg-white px-1 transition-all duration-300 transform origin-top-left
              top-0 -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#B7BFDE]
              peer-focus:top-0 peer-focus:text-[#717F96]"
            >
              Palavra passe
            </label>

            <div className="absolute top-4 right-4" onClick={() => setIsVisible(!isVisible)}>
              <Image src={isVisible ? EyesOff : EyesOpened } alt="eys" className="w-6 h-6 cursor-pointer"/> 
            </div>
            </div>

            <div className="flex justify-between items-center w-full mt-6 text-sm text-[#717F96]">
              <div className="flex items-center space-x-2">
                <div
                  className="flex relative items-center w-5 h-5 cursor-pointer"
                  onClick={toggleCheck}
                >
                  <input
                    type="checkbox"
                    id="check-box-1"
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                    checked={isChecked}
                    onChange={toggleCheck}
                  />
                  <div
                    className={`w-5 h-5 border-[2px] border-[#E2E5F1] rounded-md flex items-center justify-center transition duration-300 ${
                      isChecked ? "bg-[#217EFD] border-[#217EFD]" : ""
                    }`}
                  >
                    {isChecked && (
                      <GrFormCheckmark className="text-[#FFFFFF] size-4 font-black transition duration-300" />
                    )}
                    
                  </div>
                </div>
                <label htmlFor="checkbox" className="text-[#717F96]">Manter a sessão</label>
              </div>
              <Link href="/password">
              <span className="cursor-pointer hover:underline text-[#717F96]">Esqueci minha palavra-passe</span>
              </Link>
            </div>
              <div className="w-full mt-12">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#FF5777] shadow-none hover:bg-[#fc4667] text-white hover:cursor-pointer w-full h-12 lg:h-14 mb-10 rounded-md">
                  {isLoading ? <Loader2  className="animate-spin" /> : "Entrar"}
                </Button>
            
                <Link href="/login">
                  <Button className="bg-[#a550f5] text-white hover:bg-[#823ef0] hover:text-white hover:cursor-pointer w-full h-12 lg:h-14 rounded-md shadow-none">
                    Entrar como Director Geral
                  </Button>
                </Link>
              </div>
          </form>
        </div>
      </div>
    </main>
  );
}