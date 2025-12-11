"use client"
import { ChevronLeft, ChevronRight } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SchoolCalendar () {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const calendarDays = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, null, null, null, null, null]
  ];

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-gray-800">School Calendar</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium text-gray-600">March 2021</span>
          <Button variant="ghost" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center text-xs font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.flat().map((day, index) => (
            <div
              key={index}
              className={`text-center py-2 text-sm ${
                day === null 
                  ? "" 
                  : day === 8 
                    ? "bg-[#6366f1] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto"
                    : day === 20
                      ? "bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto"
                      : day === 23
                        ? "text-orange-500 font-semibold"
                        : "text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};