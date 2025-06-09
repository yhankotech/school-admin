"use client";
import { Cards } from "./_components/cards";
import { GraphicAndTable } from "./_components/graphic";
import { Aside } from "./_components/aside"

export default function Dashboard(){
    return(
        <section className=" flex w-[1688px] h-screen">
           <div className="bg-pink-100 w-[100rem] flex flex-col h-screen items-center justify-center space-y-4">
                <Cards />
                <GraphicAndTable /> 
           </div>
           <Aside/>
        </section>
    )
}