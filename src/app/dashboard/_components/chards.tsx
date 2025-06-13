"use client"
import { Search, Users, GraduationCap, Calendar, DollarSign } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'
import {MetricCard} from './MetricCard.tsx'
import {PerformanceChart} from './PerformanceChart.tsx'
import {SchoolCalendar} from './SchoolCalendar.tsx'
import {FinanceChart} from './FinanceChart.tsx'
import {StudentTable} from './StudentTable.tsx'

export function Chard() {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto px-6 py-8  bg-background">
      <div className="">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 w-64"
            />
          </div>
        </header>

        {/* Metric Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            icon={<Users className="w-full h-full" />}
            title="Students"
            value="932"
            iconBgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
          <MetricCard
            icon={<GraduationCap className="w-full h-full" />}
            title="Teachers"
            value="754"
            iconBgColor="bg-orange-100"
            iconColor="text-orange-600"
          />
          <MetricCard
            icon={<Calendar className="w-full h-full" />}
            title="Events"
            value="40"
            iconBgColor="bg-yellow-100"
            iconColor="text-yellow-600"
          />
          <MetricCard
            icon={<DollarSign className="w-full h-full" />}
            title="Income"
            value="32k"
            iconBgColor="bg-purple-100"
            iconColor="text-purple-600"
          />
        </section>

        {/* School Performance Chart */}
        <section className="mb-8">
          <PerformanceChart />
        </section>

        {/* Calendar and Finance Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SchoolCalendar />
          <FinanceChart />
        </section>

        {/* Student Table */}
        <section>
          <StudentTable />
        </section>
      </div>
    </div>
  )
}
