"use client"
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";

const chartData = [
  { month: "Jan", expense: 20, income: 15 },
  { month: "Feb", expense: 40, income: 35 },
  { month: "Mar", expense: 80, income: 50 },
  { month: "Apr", expense: 30, income: 25 },
  { month: "May", expense: 5, income: 10 },
  { month: "Jun", expense: 20, income: 15 },
  { month: "Jul", expense: 60, income: 65 },
  { month: "Aug", expense: 40, income: 35 },
  { month: "Sep", expense: 20, income: 15 },
  { month: "Oct", expense: 50, income: 45 },
  { month: "Nov", expense: 80, income: 85 },
  { month: "Dec", expense: 60, income: 55 }
];

const chartConfig = {
  expense: {
    label: "Expense",
    color: "#f59e0b",
  },
  income: {
    label: "Income",
    color: "#FF5777",
  },
};

export function BalanceAnalytics () {
  return (
    <Card className="bg-white mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900">Balance Analytics</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
              <span className="text-sm text-gray-600">Expense</span>
              <span className="text-sm font-semibold">1.245</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5777]"></div>
              <span className="text-sm text-gray-600">Income</span>
              <span className="text-sm font-semibold">1.356</span>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white border border-gray-200 rounded-full px-6 py-2">
                Month
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Month</DropdownMenuItem>
              <DropdownMenuItem>Quarter</DropdownMenuItem>
              <DropdownMenuItem>Year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              className="text-gray-500"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              className="text-gray-500"
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="expense"
              stroke="#f59e0b"
              fill="#f59e0b"
              fillOpacity={0.3}
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#FF5777"
              fill="#FF5777"
              fillOpacity={0.3}
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>
        <div className="absolute top-[240px] left-[280px] bg-[#6366f1] text-white px-3 py-2 rounded text-sm">
          $1,345
          <div className="text-xs opacity-80">July 2020</div>
        </div>
      </CardContent>
    </Card>
  );
};