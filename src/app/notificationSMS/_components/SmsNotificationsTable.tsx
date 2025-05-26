//Hooks
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
//Componentes
import { PaginationButton } from "@/components/PaginationButton";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
//Tipagens
import { RemetenteSms } from "@/types/types";
//Bibliotecas
import { format } from "date-fns";

interface SMSNotificationTableProps {
  sms: RemetenteSms[];
}

export function SmsNotificationsTable ({ sms }: SMSNotificationTableProps) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 51;
  
  const prevLength = useRef(sms.length);

  // Atualiza a página apenas se novos dados forem adicionados
  useEffect(() => {
    if (sms.length !== prevLength.current) {
      prevLength.current = sms.length;
      setPage(1); 
    }
  }, [sms]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return sms.slice(startIndex, endIndex);
  }, [page, sms]);

  const totalPages = Math.ceil(sms.length / rowsPerPage);
  const startDataIndex = (page - 1) * rowsPerPage + 1;
  const endDataIndex = Math.min(page * rowsPerPage, sms.length);

  // Evita que `PaginationButton` seja recriado desnecessariamente
  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-end px-3 mt-4">
        <span className="text-sm text-[#C0C2C6]">
          {startDataIndex}-{endDataIndex} de {sms.length}
        </span>
        <PaginationButton
          page={page}
          pages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <div className="overflow-x-auto p-4">
        <Table className="min-w-full border-[2px] border-[#EDEFF6]">
          <TableHeader>
            <TableRow className="bg-[#F3F6FA]">
              <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-8">#</TableHead>
              <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-8 hidden md:table-cell">Efeito</TableHead>
              <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-8 hidden lg:table-cell">Data de Criação</TableHead>
              <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-8 hidden lg:table-cell">Mensagem</TableHead>
              <TableHead className="text-[#1D5298] font-semibold text-[15px] pl-8">Custo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-[2px] border-[#EDEFF6]">
          {sms.length === 0 ? (
              // Animação de carregamento
              <tr>
                <td colSpan={9} className="p-8">
                  <div className="w-[14rem] h-[2rem] flex items-center justify-center relative z-50">
                    <div className="absolute inset-0 2xl:ml-[1150px] xl:ml-[670px] mt-[30rem]">
                      <div className="relative w-10 h-10"></div>
                    </div>
                  </div>
                </td>
            </tr>
            ) : (
              paginatedData.map((request: RemetenteSms) => (
                <TableRow key={request.id_envio} className="border-[2px] border-[#EDEFF6]">
                  <TableCell className="pl-8 text-[#717F96] text-sm font-medium">{request.id_envio}</TableCell>
                  <TableCell className="pl-8 text-[#717F96] hidden md:table-cell text-sm font-semibold">{request.tipo_envio}</TableCell>
                  <TableCell className="pl-8 text-[#717F96] hidden lg:table-cell text-sm font-normal">{format(new Date(request.hora_envio), "yyyy-MM-dd")}</TableCell>
                  <TableCell className="pl-8 text-[#717F96] hidden lg:table-cell text-sm font-medium">{request.mensagem_envio}</TableCell>
                  <TableCell className="pl-8 text-[#717F96] hidden lg:table-cell text-sm font-medium">AKZ {Intl.NumberFormat().format(request.custo_envio)}</TableCell>
                </TableRow>
            )))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}