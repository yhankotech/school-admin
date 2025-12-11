"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { TrendingUp } from "@/lib/icons";

const expenses = [
  {
    id: "#123456789",
    date: "2 March 2021, 13:45 PM",
    amount: "$ 50,036",
    status: "Complete",
    statusColor: "text-green-600"
  },
  {
    id: "#123456789",
    date: "2 March 2021, 13:45 PM",
    amount: "$ 50,036",
    status: "Pending",
    statusColor: "text-gray-400"
  },
  {
    id: "#123456789",
    date: "2 March 2021, 13:45 PM",
    amount: "$ 50,036",
    status: "Canceled",
    statusColor: "text-red-600"
  },
  {
    id: "#123456789",
    date: "2 March 2021, 13:45 PM",
    amount: "$ 50,036",
    status: "Complete",
    statusColor: "text-green-600"
  },
  {
    id: "#123456789",
    date: "2 March 2021, 13:45 PM",
    amount: "$ 50,036",
    status: "Complete",
    statusColor: "text-green-600"
  },
  {
    id: "#123456789",
    date: "2 March 2021, 13:45 PM",
    amount: "$ 50,036",
    status: "Complete",
    statusColor: "text-green-600"
  }
];

export function ExpenseTable () {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">School Expense</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="border-[1px] border-gray-200">
          <TableHeader>
            <TableRow className="border-[1px] border-gray-200">
              <TableHead className="text-gray-500 font-medium">ID</TableHead>
              <TableHead className="text-gray-500 font-medium">Date</TableHead>
              <TableHead className="text-gray-500 font-medium">Amount</TableHead>
              <TableHead className="text-gray-500 font-medium">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense, index) => (
              <TableRow key={index} className="border-[1px] border-gray-200">
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">{expense.id}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600">{expense.date}</TableCell>
                <TableCell className="font-semibold text-gray-900">{expense.amount}</TableCell>
                <TableCell>
                  <span className={`font-medium ${expense.statusColor}`}>
                    {expense.status}
                  </span>
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