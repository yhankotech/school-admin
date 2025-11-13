"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Users, MoreHorizontal } from "lucide-react";

const students = [
  {
    id: "ID 123456789",
    name: "Samantha W.",
    class: "VII A",
    amount: "$ 50,036"
  },
  {
    id: "ID 123456789",
    name: "Tony Soap",
    class: "VII A",
    amount: "$ 50,036"
  },
  {
    id: "ID 123456789",
    name: "Jordan Nico",
    class: "VII A",
    amount: "$ 50,036"
  },
  {
    id: "ID 123456789",
    name: "Karen Hope",
    class: "VII A",
    amount: "$ 50,036"
  },
  {
    id: "ID 123456789",
    name: "Nadila Adja",
    class: "VII A",
    amount: "$ 50,036"
  }
];

export function StudentTable () {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">Unpaid Student Intuition</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="border-[1px] border-gray-200">
          <TableHeader>
            <TableRow className="border-[1px] border-gray-200">
              <TableHead className="text-gray-500 font-medium">Name</TableHead>
              <TableHead className="text-gray-500 font-medium">ID</TableHead>
              <TableHead className="text-gray-500 font-medium">Class</TableHead>
              <TableHead className="text-gray-500 font-medium">Amount</TableHead>
              <TableHead className="text-gray-500 font-medium"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index} className="border-[1px] border-gray-200">
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">{student.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-blue-600 font-medium">{student.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-600">{student.class}</span>
                  </div>
                </TableCell>
                <TableCell className="font-semibold text-gray-900">{student.amount}</TableCell>
                <TableCell>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-500">Showing 1-5 from 100 data</p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
};