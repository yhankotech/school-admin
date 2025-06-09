"use client";
//Componentes

//Bibliotecas
/*
import axiosInstance from "@/service/api";
import {
    useQuery,
} from '@tanstack/react-query';*/
import Chart from "react-apexcharts";
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";
/*
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
*/
export  function GraphicAndTable(){
    //const { entidade } = getCookie();
 /*   const { data } = useQuery({
        queryKey: ["dashboard"],
        queryFn: async () =>{
            const response = await axiosInstance.get(`dashboard/entidade/`);
            return response.data.mensagem;   
        }
    });
*/

    return(
        <section className="w-[94rem] h-[40rem] rounded-[6px] flex justify-center items-center">
            <div className="h-[35rem] w-[85rem] bg-[#FFFFFF] rounded-[6px] pt-8 pl-8 pr-8 space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-[#303972] font-bold text-[1.5rem] ml-4">School Performance</h2>

                    <div className="flex items-center space-x-4 w-32 h-10">

                        <div className="flex flex-col space-y-2 w-14">
                            <div className="w-1 h-1 rounded-full bg-[#FCC43E] flex justify-items-start mt-2"></div>
                            <div className="flex items-center justify-end">
                                <span>1.245</span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 w-14">
                            <div className="w-1 h-1 rounded-full bg-[#4D44B5] flex justify-items-start"></div>
                                <div className="flex items-center justify-end">
                                    <span>1.356</span>
                                </div>
                        </div>
                    </div>
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
                    curve: "monotoneCubic"
                    },
                    colors: ['#FCC43E', '#FB7D5B'],
                     grid: {
                    xaxis: {
                        lines: {
                        show: true, // linhas verticais
                        }
                    },
                    yaxis: {
                        lines: {
                        show: false, // remove linhas horizontais
                        }
                    }
                    }
                    }} series={[
                    {
                        name:"Quantidade",
                        data: Array.isArray([12,13,98, 97, 45, 67, 89, 23, 56, 78, 90, 34]) ? [12,13,98, 97, 45, 67, 89, 23, 56, 78, 90, 34] : [],
                    },
                    {
                        name:"Montante",
                        data:  Array.isArray([ 67, 89, 23, 12,13,98, 97, 45, 90, 34,  56, 78]) ? [67, 89, 23, 12,13,98, 97, 45, 90, 34,  56, 78] : [],
                    }
                ]} type="area"  width="100%" height={350} />
            </div>
        </section>
    )
}