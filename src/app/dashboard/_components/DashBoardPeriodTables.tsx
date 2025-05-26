"use client";
//Componentes
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { AccountPeriodModal } from "./PeriodModal";
import { Button } from "@/components/ui/button";
//Hooks
import { useSidebarStore } from "@/hooks/useSidebar";
//Configurações
import axiosInstance from "@/service/api";

//Bibliotecas
import { useQuery} from '@tanstack/react-query';
//Tipagem
import { UltimoPeriodo, UltimoPagamento } from "@/types/types";

export  function DashboardTables(){
     const { isSidebarOpen } = useSidebarStore()

     const { data } = useQuery({
        queryKey: ["dashboard"],
        queryFn: async () =>{
            const response = await axiosInstance.get(`dashboard/entidade/`);
            return response.data.mensagem;   
        }
    });

    return(
        <section className={`flex flex-col space-y-12 w-[1550px] 2xl:h-[95rem] xl:h-[95rem] rounded-[6px] ${ isSidebarOpen ? "xl:w-[76vw] 2xl:w-[85vw]" : "flex xl:w-[87vw] 2xl:w-[92vw]"}`}>

            <div className="border border-b-[5px] border-b-[#F08F3E] border-r-[0] border-l-[0] border-t-[0]  2xl:h-[55rem] xl:h-[55rem] w-[100%] bg-[#FFFFFF] rounded-[6px] pt-8 pl-8 pr-8 2xl:space-y-6 xl:space-y-6">
                <div>
                    <h2 className="text-[#1D5298] font-semibold text-[1.5rem]">Últimos Períodos</h2>
                </div>
                <div>
                    <Table className="min-w-full border-[2px] border-[#EDEFF6]">
                        <TableHeader className="">
                            <TableRow className="bg-[#F3F6FA]">
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-8">Nº do Período Contabilístico</TableHead>
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-20 hidden md:table-cell">Data do Movimento</TableHead>
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-20 hidden md:table-cell">Montante</TableHead>
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] hidden md:table-cell">Quantidade de Pagamentos</TableHead>
                            </TableRow>

                        </TableHeader>
                        <TableBody className="border-[2px] border-[#EDEFF6]">
                            {data?.resumo.ultimos_periodos.map((request: UltimoPeriodo) => (  
                                <TableRow key={request.id} className="border-[2px] border-[#EDEFF6]">
                                    <TableCell className="text-[#717F96] font-semibold text-sm">
                                        <AccountPeriodModal reference={request.Identificacao_Log_EGR} />
                                    </TableCell>
                                    <TableCell className={`pl-20 text-[#717F96] text-sm flex font-semibold`}>{request.data_periodo}</TableCell>
                                    <TableCell className="pl-20 text-[#717F96] text-sm font-semibold">
                                        AKZ {Intl.NumberFormat().format(request.somatorio)}
                                    </TableCell>
                                    <TableCell className="text-[#717F96] text-sm font-semibold">{request.quantidade}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex justify-end">
                    <Button
                  //  onClick={() => {router.push("/")}}
                    className="bg-[#F08F3E] text-[#FFFFFF] 2xl:w-36 2xl:h-14 xl:h-12 xl:w-32 hover:bg-[#F08F3E]">
                        Ver Todos
                    </Button>
                </div>
            </div>

            <div className="border border-b-[5px] border-b-[#F08F3E] border-r-[0] border-l-[0] border-t-[0]  2xl:h-[45rem] xl:h-[45rem] w-[100%] bg-[#FFFFFF] rounded-[6px] pt-8 pl-8 pr-8 space-y-6">
                <div>
                    <h2 className="text-[#1D5298] font-semibold text-[1.5rem]">Últimos Períodos</h2>
                </div>
                <div>
                    <Table className="min-w-full border-[2px] border-[#EDEFF6]">
                        <TableHeader className="">
                            <TableRow className="bg-[#F3F6FA]">
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-10">Referência</TableHead>
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-16 hidden md:table-cell">Montante</TableHead>
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-16 hidden md:table-cell">Data do Movimento</TableHead>
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-16 hidden md:table-cell">Período</TableHead>
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-16 hidden md:table-cell">Transação</TableHead>
                                <TableHead className="text-[#1D5298] font-semibold text-[15px] hidden md:table-cell">Onde foi pago</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="border-[2px] border-[#EDEFF6]">
                            {data?.resumo.ultimos_pagamentos.map((request:UltimoPagamento) => (  
                                <TableRow key={request.id_pagamento} className="border-[2px] border-[#EDEFF6]">
                                    <TableCell className="pl-10 text-[#717F96] font-semibold text-sm">
                                        {request.referencia_do_servico}
                                    </TableCell>
                                    <TableCell className={`pl-16 text-[#717F96] text-sm flex font-semibold`}>{request.montante_da_operacao}</TableCell>
                                    <TableCell className="pl-16 text-[#717F96] text-sm font-semibold">{`${request.data_movimento} ${request.hora_do_movimento}`}</TableCell>
                                    <TableCell className="pl-16 text-[#717F96] text-sm font-semibold">{request.Identificacao_Log_EGR}</TableCell>
                                    <TableCell className="pl-16 text-[#717F96] text-sm font-semibold">
                                        {`${request.Identificacao_Log_EGR} ${request.numero_Log_EGR}`}
                                    </TableCell>
                                    <TableCell className="text-[#717F96] text-sm font-semibold">{request.tipo_de_Terminal}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex justify-end">
                    <Button
                    //onClick={() => {router.push("")}}
                    className="bg-[#F08F3E] text-[#FFFFFF] 2xl:w-36 2xl:h-14 xl:h-12 xl:w-32 hover:bg-[#F08F3E]">
                        Ver Todos
                    </Button>
                </div>
            </div>
        </section>
    )
}