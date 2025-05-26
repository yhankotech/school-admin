"use client";
//Componentes
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription
} from "@/components/ui/sheet";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
//Imagens e Icones
import ArrowIconUp from "@/assets/arrow-up-right.svg";
//Configurações
import Link from "next/link";
import Image from "next/image";

type ReferenceProp = {
    reference: string
}

export  function AccountPeriodModal({ reference}: ReferenceProp) {
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TableCell className="cursor-pointer underline pl-8 text-[#717F96] font-semibold flex items-center">
            {reference}
            <Image src={ArrowIconUp} alt="icon-up"  className="size-4 ml-1"/>
        </TableCell>
      </SheetTrigger>
      <SheetContent style={{minWidth:600}}>
        <SheetHeader className="mb-8 ml-6 mt-4">
          <SheetTitle className="text-[1rem] text-[#1D5298] font-semibold">Nº do Período</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="w-[30rem] border-[2px] border-[#EDEFF6] rounded-[6px] pt-4 pl-4 pr-4 pb-4 ml-6 space-y-2">
                <span className="text-[#2D3339] text-[0.8rem] font-semibold">Pagamentos</span>

                <div className="flex">
                    <div className="flex flex-col space-y-1">
                        <span className="text-[#717F96] text-[0.7rem] font-semibold uppercase">Nº Log EGR:</span>
                        <span className="text-[#717F96] text-[0.7rem] font-semibold">Data do período:</span>
                        <span className="text-[#717F96] text-[0.7rem] font-semibold">Quantidade:</span>
                        <span className="text-[#717F96] text-[0.7rem] font-semibold">Montante:</span>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <span className="text-[#2D3339] text-[0.8rem] font-semibold uppercase">8070</span>
                        <span className="text-[#2D3339] text-[0.7rem] font-semibold">06/01/2025</span>
                        <span className="text-[#2D3339] text-[0.7rem] font-semibold">1</span>
                        <span className="text-[#2D3339] text-[0.7rem] font-semibold">AKZ 307.800</span>
                    </div>
                </div>

            <Separator className="my-2 w-[450px] bg-[#F1F5F7]" />
            
            <div className="flex flex-col space-y-2">
                <span className="text-[#2D3339] text-[0.8rem] font-semibold">Pagamentos</span>
                <div className="flex items-center">
                    <span className="text-[#717F96] text-[0.8rem] font-semibold">Participantes:</span>
                    <span className="text-[#2D3339] text-[0.7rem] font-semibold">1</span>
                </div>
            </div>
        </div>

        <div className="ml-6 w-[30rem] mt-8 space-y-1">
          <Table className="w-[30rem]  border-[2px] border-[#EDEFF6]">
            <TableHeader>
              <TableRow className="bg-[#F3F6FA]">
                <TableHead className="text-[#1D5298] font-semibold text-[11px] hidden md:table-cell pl-8">Referência</TableHead>
                <TableHead className="text-[#1D5298] font-semibold text-[11px] hidden lg:table-cell">Montante</TableHead>
                <TableHead className="text-[#1D5298] font-semibold text-[11px] hidden lg:table-cell">Movimentos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-[2px] border-[#EDEFF6]">
              <TableRow className="border-[2px] border-[#EDEFF6]">
                <TableCell className="text-[#717F96] hidden md:table-cell text-[11px]  font-normal">
                <TableCell className="pl-8 text-[#717F96] cursor-pointer font-semibold flex items-center">
                    <Link  href={`1`} className="cursor-pointer underline font-semibold flex items-center">
                        <p>1</p>
                        <Image src={ArrowIconUp} alt="icon-up"  className="size-4 ml-1"/>
                    </Link>
                </TableCell>
                </TableCell>
                <TableCell className="text-[#189F57] upper-letter text-[11px] font-semibold">AKZ 307.800</TableCell>
                <TableCell className="text-[#717F96] hidden lg:table-cell text-[11px]">1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <SheetFooter className="h-36 mt-10">
          <SheetClose asChild className="cursor-pointer h-10 text-[#ffffff] bg-[#F08F3E] hover:bg-[#F08F3E] hover:text-[#ffffff] shadow-none ml-6">
            <Button type="submit">
                Concluído
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}