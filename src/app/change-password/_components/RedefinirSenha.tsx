"use client"
//Componentes
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
//configurações
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AxiosError } from "axios";
import axiosInstance from "@/service/api";
import { userData } from "@/service/userDataAPI";
//Hooks
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useState, useEffect } from "react";
//Imagens e icones
import { AiOutlineClose, Loader2 } from "@/lib/icons";
import RequestError from "../../../assets/ErroDeResposta.svg";
import EyesOpened from "../../../assets/eye-open.svg";
import EyesOff from "../../../assets/eye-off.svg";
import RoundedIcon from "../../../assets/roundedIcon.svg";
//Hook
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
//Tipagens
import { UserDataType } from "@/types/types";

const passwordSchema = z.object({
  senha_actual: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").nonempty("Senha é obrigatória"),
});

// Tipo inferido do schema do Zod
type FormData = z.infer<typeof passwordSchema>;

export function RedefinirSenha({nextStep }: {  nextStep: () => void}){
  //const { entidade } = getCookie();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible ] = useState(false);
  const [user, setUser] = useState<UserDataType | null>(null);
  const [userPhoto, setLogo] = useState<string | null>(null)

  console.log(userPhoto)
    const fetchUser = async () => {
      try {
        const { user, userLogo } = (await userData()) || { user: null, userLogo: '' };
          setUser(user);
          setLogo(userLogo)
      } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors}
  } = useForm<FormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      nextStep();
      const response = await axiosInstance.patch(`/clientes//verificar-senha-actual`, data);
  
      if (response.status === 202) {
        reset(); 
        setIsLoading(true)

        toast({
          description: (
            <div className="flex items-center gap-4 ">
              <div className="rounded-full w-8 h-8 flex justify-center items-center">
                <Image src={RoundedIcon} alt="icon"  />
              </div>
              
              <span className="text-[#717F96]">{ response.data.mensagem }</span>
            </div>
          ),
          action: <ToastAction altText="close" className="shadow-none border-none text-[#717F96] hover:bg-transparent"><AiOutlineClose /></ToastAction>,
          className: "border-l-4 border-l-[#1FC16B]",
        });

        setTimeout(async () => {
          setIsLoading(false);
          nextStep();
          reset(); 
        }, 4000); 
      }
      setTimeout(async () => {
        setIsLoading(false);
        nextStep();
        reset(); 
      }, 4000); 
    } catch (error: unknown) {
      setIsLoading(false); 
      // Verificando se o erro é um AxiosError
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
    return(
        <section className="space-y-8 flex flex-col items-center h-[40rem] w-[68rem] pt-4">
            <div className="flex flex-col space-y-4 items-center pt-4">
                <div className="border-[2px] border-[#80848a] rounded-full w-[9rem] h-[9rem] flex justify-center items-center">
                  <Image
                    src={RequestError}
                    alt="Avatar"
                    className="size-[7.5rem] rounded-full"
                  />
                </div>
                <span className="text-[#2D3339] font-semibold text-[1rem]">{user ? user.nome_empresa: "Nome da empresa"}</span>
            </div>

            <div className="flex flex-col w-[40rem] space-y-2 2xl:space-y-16 lg:space-y-12 items-center">
                    <div className="text-center space-y-2">
                        <h1 className="text-[#171718] font-semibold text-lg lg:text-xl mb-2">Redefinição de Senha</h1>
                        <span className="text-[#717F96] text-sm">
                            Insira a sua senha actual para<br /> continuar.
                        </span>
                    </div>
                </div>

            <form className="flex flex-col w-full max-w-md space-y-2 xl:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="relative w-full mt-6">
                <Input
                  id="floating-input"
                  type={ isVisible ? "text" : "password"}
                  className={`peer w-full h-12 lg:h-14 pl-6 pt-4 pb-2 border-[2px] border-[#E2E5F1] focus:border-[#E2E5F1] focus-visible:border-[#E2E5F1] focus-visible:text-[#717F96] placeholder-transparent focus:outline-none ${errors.senha_actual &&   'border-[#D03816]'}`}
                  placeholder=" "
                  {...register("senha_actual")} 
                />
                <label
                  htmlFor="floating-input"
                  className="absolute left-6 text-sm font-medium text-[#B7BFDE] bg-white px-1 transition-all duration-300 transform origin-top-left
                  top-0 -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#B7BFDE]
                  peer-focus:top-0 peer-focus:text-[#717F96]"
                >
                  Senha actual
                </label>
                <div className="absolute top-4 right-4" onClick={() => setIsVisible(!isVisible)}>
                    <Image src={isVisible ? EyesOff : EyesOpened } alt="eys" className="w-6 h-6 cursor-pointer"/> 
                </div>
              </div>            
              <div>
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="bg-[#5856eb] rounded-full shadow-none cursor-pointer hover:bg-[#4240ec] text-white w-full mb-10 h-12 lg:h-14 xl:mt-9">
                  {isLoading ? <Loader2  className="animate-spin" /> : "Seguinte"}
                </Button>
              </div>
            </form>
        </section>
    )
}