"use client";
import { Aside } from "./_components/aside";
import { Chard } from "./_components/chards";

export default function Dashboard(){
    return(
        <section className="flex h-screen min-h-screen flex-col items-center py-10">
           <div className="">
                <Chard/>
           </div>
           <Aside/>
        </section>
    )
}