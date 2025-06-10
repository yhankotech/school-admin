"use client";
//Componentes
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from 'next/image';

//Configurações
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation'
import { AxiosError } from "axios";
import axiosInstance from "@/service/api";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { isStrongPassword } from "@/utils/regex";
//Imagens e icones
import { AiOutlineClose } from "@/lib/icons";
import RequestError from "../../../assets/ErroDeResposta.svg";
import EyesOpened from "../../../assets/eye-open.svg";
import EyesOff from "../../../assets/eye-off.svg";
import { Loader2 } from "lucide-react";
import YhankoIMG from "../../../assets/yhankoIMG.svg";
//Hooks
import { useEntityStore } from "@/hooks/useEntityStore";
import { useState } from "react";

// Definindo o schema de validação com Zod
const passwordSchema = z
  .object({
    senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").nonempty("Senha é obrigatória"),
    confirmar_senha: z.string().min(6, "Repetir a senha é obrigatório"),
  })
  .refine((data) => data.senha === data.confirmar_senha, {
    message: "As senhas não coincidem",
    path: ["confirmar_senha"],
  });

// Tipo inferido do schema do Zod
type FormData = z.infer<typeof passwordSchema>;

export default function NewPassword() {
  const { entidade } = useEntityStore()
  const { toast } = useToast();

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible ] = useState(false)
    const [visible, setVisible ] = useState(false)
    const [passwordError, setPasswordError] = useState<string | null>(null);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<FormData>({
      resolver: zodResolver(passwordSchema),
    });

    function goTo(){
      router.push("/changed")
    }
  
    const onSubmit = async (data: FormData) => {
      
      if (!isStrongPassword(data.senha)) {
        setPasswordError("A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial.");
        return;
      } else {
        setPasswordError(null); 
      }

      try {
        setIsLoading(true);
        const response = await axiosInstance.patch(`/clientes/${entidade}/redifinir-senha`, data);
    
        if (response.status === 202) {
          reset(); 
          setIsLoading(false)
          router.push("/changed");
        } 
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

  return (
    <main className="2xl:h-screen xl:h-[130vh] w-screen flex flex-col bg-[#ffffff]">
      <section className="flex flex-col justify-center items-center mt-12 md:mt-20 sm:mt-8 lg:mt-40 xl:mt-9 px-4 2xl:mt-52">
        <div className="flex flex-col w-[40rem] h-60 space-y-6 lg:space-y-12 2xl:space-y-16 justify-center items-center">
          <div className="flex justify-center items-center space-x-3">
            <Image src={YhankoIMG} alt="logo" className="h-12 w-12 xl:h-12 2xl:h-14"/>
            <h1 className="text-black font-bold">Yhanko Akademi</h1>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 lg:space-y-4">
            <h1 className="text-[#1D5298] font-semibold text-lg 2xl:text-lg lg:text-2xl text-center">
              Defina uma nova senha
            </h1>
            <span className="text-[#717F96] text-center text-sm lg:text-base">
              Crie uma nova senha para acessar <br /> a sua conta.
            </span>
          </div>
        </div>

        <form
          action=""
          className="flex flex-col w-full max-w-md mt-6 lg:mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative w-full">
            <Input
              id="float-input"
              type={ visible ? "text" : "password"}
              className={`peer w-full h-12 lg:h-14 pl-6 pt-4 pb-2 border-[2px] border-[#E2E5F1] focus:border-[#E2E5F1] focus-visible:border-[#E2E5F1] focus-visible:text-[#717F96] placeholder-transparent focus:outline-none ${errors.senha &&   'border-[#D03816]'}`}
              placeholder=" " 
              {...register("senha")}
            />
            <label
              htmlFor="floating-input"
              className="absolute left-6 text-sm font-medium text-[#B7BFDE] bg-white px-1 transition-all duration-300 transform origin-top-left
              top-0 -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#B7BFDE]
              peer-focus:top-0 peer-focus:text-[#717F96]"
            >
              Senha
            </label>

              <div className="absolute top-4 right-4" onClick={() => setVisible(!visible)}>
                <Image src={visible ? EyesOff : EyesOpened } alt="eys" className="w-6 h-6 cursor-pointer"/> 
              </div>
          </div>

          <div className="relative w-full mt-6">
            <Input
              id="floating-input"
              type={ isVisible ? "text" : "password"}
              className={`peer w-full h-12 lg:h-14 pl-6 pt-4 pb-2 border-[2px] border-[#E2E5F1] focus:border-[#E2E5F1] focus-visible:border-[#E2E5F1] focus-visible:text-[#717F96] placeholder-transparent focus:outline-none ${errors.confirmar_senha &&   'border-[#D03816]'}`}
              placeholder=" "
              {...register("confirmar_senha")} 
            />
            <label
              htmlFor="floating-input"
              className="absolute left-6 text-sm font-medium text-[#B7BFDE] bg-white px-1 transition-all duration-300 transform origin-top-left
              top-0 -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#B7BFDE]
              peer-focus:top-0 peer-focus:text-[#717F96]"
            >
              Repita a senha
            </label>

              <div className="absolute top-4 right-4" onClick={() => setIsVisible(!isVisible)}>
                <Image src={isVisible ? EyesOff : EyesOpened } alt="eys" className="w-6 h-6 cursor-pointer"/> 
              </div>
            </div>

              {passwordError && (
              <span className="text-red-500 text-sm mt-2">{passwordError}</span>
              )}

              {errors.confirmar_senha && (
                 <span className="text-red-500 text-sm mt-2">{errors.confirmar_senha.message}</span>
              )}

            <Button
              onClick={goTo} 
              //type="submit"
              disabled={isLoading} 
              className="bg-[#327FE4]  hover:bg-[#1D5298] hover:cursor-pointer text-[#ffffff] w-full rounded-[6px] h-12 lg:h-14 mt-12 shadow-none">
              {isLoading ? <Loader2  className="animate-spin" /> : "Redefinir"}
            </Button>
        </form>
      </section>
    </main>
  );
}
