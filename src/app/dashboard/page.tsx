"use client";
import { Cards } from "./_components/DashboardCards";
import { GraphicAndTable } from "./_components/DashboardGraphicAndTable";
import { DashboardTables } from "./_components/DashBoardPeriodTables";

export default function Dashboard(){
    return(
        <section className="flex flex-col justify-center items-center space-y-8 mt-4 p-6 max-w-4xl mx-auto  xl:w-[73vw] 2xl:w-[85vw]">
            <Cards/>
            <GraphicAndTable/>  
            <DashboardTables/>  
            
        </section>
    )
}

 