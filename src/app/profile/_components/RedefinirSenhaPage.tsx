"use client"
import UserProfielIcon from "../../../assets/userProfile.svg";
import Link from "next/link";
import Stepper from "./stepp";

export function RedefinirSenhaPage(){
    return (
        <section className="flex flex-col justify-center items-center space-y-8 mt-4 p-6 mx-auto xl:w-[73vw] 2xl:w-[85vw]">
    
          <div className={`bg-[#FFFFFF] w-[1550px] h-[91px] sm:w-[125vw] md:w-[103vw] lg:w-[80vw]  border-t-0 border-l-o border-r-0 rounded-[6px] border-b-4 border-b-[#F08F3E] }`}>
            <div className="flex w-80 space-x-4 h-[90px] items-center pl-4">
              <svg width="40" height="40">
                <image xlinkHref={UserProfielIcon} width="40" height="40" />
              </svg>
              <h2 className="text-[#1D5298] font-semibold text-[20px]">Minha Conta</h2>
            </div>
          </div>
    
          <div className={`flex flex-col w-[1550px] bg-[#FFFFFF] rounded-[6px] space-y-4 pl-4 pr-4 sm:w-[125vw] md:w-[103vw] lg:w-[80vw] border-b-4 border-b-[#F08F3E] `}>
            <div className="flex space-x-2 pl-4 pt-4" style={{zIndex: 1}}>
                <Link href="/dashboard" className="text-[#F08F3E] font-medium cursor-pointer"
                >
                  Dashboard
                </Link>
                <Link href="/perfil" className="text-[#717F96] cursor-pointer"> {">"} Perfil</Link>
                <Link href="/perfil/redefinir-senha" className="text-[#717F96] cursor-pointer"> {">"} Redefinição de Senha</Link>
            </div>

            <div className="flex items-center ">
              <Stepper />
            </div>
           
          </div>
        </section>
    )
}