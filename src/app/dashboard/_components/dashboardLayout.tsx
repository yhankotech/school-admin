"use client"
import { Search, Bell, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
//import {MetricCard} from "./MetricCard";
import {SchoolCalendar} from "./school-calendar";
import {StudentTable} from "./StudentTable";
import {MessagesWidget} from "./messageWidget";
import {SchoolFinance} from "./schoolFinance";
import { PerformanceChart } from "./PerformanceChart";
import { RecentStudents } from "./recentStudent";
import { DashboardMetrics } from "./dashboardMetrics";

export function DashboardLayout () {
  return (
    <div className="flex h-screen bg-gray-50">  
      {/* Main Content */}
      <div className="flex-1 ml-60">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search here..."
                  className="pl-10 w-80 bg-gray-50 border-gray-200"
                />
              </div>
              
              {/* Notifications */}
              <Button size="icon" variant="ghost" className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              
              {/* Settings */}
              <Button size="icon" variant="ghost">
                <Settings className="h-5 w-5 text-gray-600" />
              </Button>
              
              {/* Profile */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Nabila A.</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <Avatar>
                  <AvatarFallback className="bg-purple-200 text-purple-700">NA</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          <DashboardMetrics />
          {/* Metrics */}
          <PerformanceChart  />
          
          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-8 space-y-6">
              
              <div className="grid grid-cols-2 gap-6">
                <SchoolCalendar />
                <SchoolFinance />
              </div>
              
              <StudentTable />
            </div>
            
            {/* Right Column */}
            <div className="col-span-4 space-y-6">
              <RecentStudents />
              <MessagesWidget />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};