"use client"
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
      <div className="flex-1">
        {/* Dashboard Content */}
        <main className="p-2 space-y-2">
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