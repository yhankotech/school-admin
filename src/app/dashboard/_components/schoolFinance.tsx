"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const financeData = [
  { day: "Mon", income: 45, expense: 35 },
  { day: "Tue", income: 55, expense: 40 },
  { day: "Wed", income: 38, expense: 45 },
  { day: "Thu", income: 65, expense: 35 },
  { day: "Fri", income: 45, expense: 55 },
  { day: "Sat", income: 40, expense: 30 },
  { day: "Sun", income: 50, expense: 45 }
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#f59e0b",
  },
  expense: {
    label: "Expense", 
    color: "#FF5777",
  },
};

export function SchoolFinance () {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-gray-800">School Finance</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
            <span className="text-sm text-gray-600">1,245</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5777]"></div>
            <span className="text-sm text-gray-600">1,356</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-48">
          <BarChart data={financeData}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              className="text-gray-500"
            />
            <YAxis hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="income" fill="#f59e0b" radius={2} />
            <Bar dataKey="expense" fill="#FF5777" radius={2} />
          </BarChart>
        </ChartContainer>
        <div className="mt-4 p-3 bg-[#6366f1] rounded-lg text-white text-center">
          <div className="text-lg font-semibold">42%</div>
          <div className="text-sm opacity-90">Total Income</div>
        </div>
      </CardContent>
    </Card>
  );
};
