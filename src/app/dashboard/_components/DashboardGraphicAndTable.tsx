"use client";
//Componentes
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import axiosInstance from "@/service/api";
//Bibliotecas
import {
    useQuery,
} from '@tanstack/react-query';
import Chart from "react-apexcharts";
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
import { ResumoMensal } from "@/types/types";

const meses: Record<string, string> = {
    "01": "Janeiro",
    "02": "Fevereiro",
    "03": "Março",
    "04": "Abril",
    "05": "Maio",
    "06": "Junho",
    "07": "Julho",
    "08": "Agosto",
    "09": "Setembro",
    "10": "Outubro",
    "11": "Novembro",
    "12": "Dezembro",
};
  
export  function GraphicAndTable(){
    //const { entidade } = getCookie();

    const { data } = useQuery({
        queryKey: ["dashboard"],
        queryFn: async () =>{
            const response = await axiosInstance.get(`dashboard/entidade/`);
            return response.data.mensagem;   
        }
    });


    return(
        <section className={`flex w-[1550px] 2xl:h-[40rem] xl:h-[31rem] space-x-12 rounded-[6px]`}>

            <div className="border border-b-[5px] border-b-[#F08F3E] border-r-[0] border-l-[0] border-t-[0]  2xl:h-[35rem] xl:h-[31rem] w-[60%] bg-[#FFFFFF] rounded-[6px] pt-8 pl-8 pr-8 space-y-8">
                <div>
                    <h2 className="text-[#1D5298] font-semibold text-[1.5rem] ml-4">Pagamentos Mensais</h2>
                </div>
                <Chart options={{
                    chart: {
                        id: "basic-bar",
                        stacked: true,
                    },
                    xaxis: {
                        categories: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
                    },
                    stroke:{
                    curve: "smooth"
                    }
                    }} series={[
                    {
                        name:"Quantidade",
                        data: Array.isArray(data?.resumo?.dados_mensais?.quantidade) ? data.resumo.dados_mensais.quantidade : [],
                    },
                    {
                        name:"Montante",
                        data:  Array.isArray(data?.resumo?.dados_mensais?.soma) ? data.resumo.dados_mensais.soma : [],
                    }
                ]} type="area"  width="100%" height={350} />
            </div>

            <div className="border border-b-[5px] border-b-[#F08F3E] border-r-[0] border-l-[0] border-t-[0] 2xl:h-[35rem] xl:h-[31rem] w-[38%]  bg-[#FFFFFF] rounded-[6px] p-5">
            <Table className="min-w-full border-[2px] border-[#EDEFF6]">
                <TableHeader className="">
                    <TableRow className="bg-[#F3F6FA]">
                    <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-8">Mês</TableHead>
                    <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-8 hidden md:table-cell">Movimentos</TableHead>
                    <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-8 hidden md:table-cell">Valor Transacional</TableHead>
                        </TableRow>
                </TableHeader>
                <TableBody className="border-[2px] border-[#EDEFF6]">
                    {data?.resumo.tabela_mensais.map((request:ResumoMensal, index: number ) => (  
                        <TableRow key={index} className="border-[2px] border-[#EDEFF6]">
                            <TableCell className="pl-8 text-[#717F96] font-semibold text-sm">{meses[request.mensal?.substr(-2)]}</TableCell>
                            <TableCell className={`pl-8 text-[#717F96] text-sm flex font-semibold`}>{request.quantidade}</TableCell>
                            <TableCell className="pl-8 text-[#717F96] text-sm font-semibold">AKZ {Intl.NumberFormat("PT-br").format(request.montante)}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
            </Table>
            </div>
        </section>
    )
}