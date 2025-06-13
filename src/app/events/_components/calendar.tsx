"use client"

import { Calendar as CalendarIcon, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScheduleItem {
  id: string;
  title: string;
  subject: string;
  date: string;
  time: string;
  color: 'purple' | 'orange' | 'yellow' | 'blue';
}

const scheduleItems: ScheduleItem[] = [
  {
    id: "1",
    title: "Basic Algorithm",
    subject: "Algorithm",
    date: "March 20, 2020",
    time: "09:00 - 10:00 AM",
    color: "purple"
  },
  {
    id: "2",
    title: "Basic Art",
    subject: "Art",
    date: "March 20, 2020",
    time: "09:00 - 10:00 AM",
    color: "orange"
  },
  {
    id: "3",
    title: "HTML & CSS Class",
    subject: "Programming",
    date: "March 20, 2020",
    time: "09:00 - 10:00 AM",
    color: "yellow"
  },
  {
    id: "4",
    title: "Simple Past Tense",
    subject: "English",
    date: "March 20, 2020",
    time: "09:00 - 10:00 AM",
    color: "blue"
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'purple':
      return 'border-l-[#6366f1] bg-purple-50';
    case 'orange':
      return 'border-l-[#FF5777] bg-orange-50';
    case 'yellow':
      return 'border-l-yellow-500 bg-yellow-50';
    case 'blue':
      return 'border-l-blue-500 bg-blue-50';
    default:
      return 'border-l-gray-500 bg-gray-50';
  }
};

export function  CalendarSchedule () {

  return (
    <div className="min-h-screen bg-[#1B191F] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">Calendar</CardTitle>
                <div className="flex items-center gap-3">
                  {/* Month Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="bg-white border border-gray-200 rounded-full px-4 py-2">
                        January
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>January</DropdownMenuItem>
                      <DropdownMenuItem>February</DropdownMenuItem>
                      <DropdownMenuItem>March</DropdownMenuItem>
                      <DropdownMenuItem>April</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Year Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="bg-white border border-gray-200 rounded-full px-4 py-2">
                        2021
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>2021</DropdownMenuItem>
                      <DropdownMenuItem>2022</DropdownMenuItem>
                      <DropdownMenuItem>2023</DropdownMenuItem>
                      <DropdownMenuItem>2024</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* New Student Button */}
                  <Button className="bg-[#6366f1] hover:bg-[#5856eb] text-white rounded-full px-4 py-2">
                    <Plus className="mr-2 h-4 w-4" />
                    New Student
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="calendar-grid">
                  {/* Custom Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2">
                    {/* Calendar Days */}
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 5; // Adjust for starting position
                      const isCurrentMonth = day > 0 && day <= 31;
                      const isToday = day === 6;
                      const hasEvents = [2, 10, 15, 18, 20, 24, 29].includes(day);
                      const isSpecialDay = day === 10; // Purple background
                      
                      return (
                        <div
                          key={i}
                          className={`
                            h-16 border border-gray-200 rounded-lg p-2 text-sm
                            ${isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400'}
                            ${isToday ? 'bg-[#FF5777] text-white' : ''}
                            ${isSpecialDay ? 'bg-[#6366f1] text-white' : ''}
                            cursor-pointer hover:bg-gray-50
                          `}
                        >
                          {isCurrentMonth && (
                            <>
                              <div className="font-medium">{day}</div>
                              {hasEvents && (
                                <div className="flex gap-1 mt-1">
                                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>
                              )}
                              {isSpecialDay && (
                                <div className="text-xs mt-1">Forms 2+</div>
                              )}
                              {day === 15 && (
                                <div className="flex items-center justify-center w-6 h-6 bg-purple-200 text-purple-700 rounded-full text-xs font-bold mt-1">
                                  2+
                                </div>
                              )}
                              {day === 18 && (
                                <div className="text-xs mt-1 text-red-500">Tony 2+</div>
                              )}
                              {day === 29 && (
                                <div className="text-xs mt-1 text-gray-600">Jeremy</div>
                              )}
                            </>
                          )}
                          {!isCurrentMonth && day > 31 && (
                            <div className="font-medium">{day - 31}</div>
                          )}
                          {!isCurrentMonth && day <= 0 && (
                            <div className="font-medium">{31 + day}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Schedule Details Section */}
          <div className="lg:col-span-1">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Schedule Details</CardTitle>
                <p className="text-sm text-gray-500">Thursday, 10th April, 2020</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {scheduleItems.map((item) => (
                  <div
                    key={item.id}
                    className={`border-l-4 pl-4 py-3 rounded-r-lg ${getColorClasses(item.color)}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.subject}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-6 text-[#6366f1] hover:bg-purple-50"
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};