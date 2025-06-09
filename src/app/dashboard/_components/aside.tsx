"use client";
import { Mail } from "@/lib/icons";

export function Aside() {
    return (
        <aside className="w-[90rem] h-screen flex flex-col bg-white">
            <div className="mt-28 w-[184px] h-10 flex flex-col pl-3">
                <h2 className="text-[14px] text-[#303972] font-bold">Recent students</h2>
                <span className="text-[10px] text-[#C1BBEB]">you have 455 students</span>
            </div>

            <div className="flex flex-col items-center w-[184px]">
                <div className="flex items-center w-[184px] h-20 space-x-1">
                    <div className="flex items-center w-[135px] space-x-1 pl-1">
                       <div className="w-6 h-6 bg-[#C1BBEB] rounded-full"></div>
                       <div className="flex flex-col">
                            <span className="text-[10px]">Romeu Cajamba</span>
                            <span className="text-[9px]">Ingressou na semana</span>
                       </div>
                    </div>

                    <div className="w-6 h-6 border border-[#000] rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4"/>
                    </div>
                </div>

            </div>
        </aside>
    )}


