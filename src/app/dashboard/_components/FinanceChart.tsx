"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts"

export function FinanceChart () {
  const chartOptions:  ApexOptions = {
    chart: {
      type: 'bar',
      height: 300,
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    colors: ['#FBBF24', '#FF5777'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#6B7280'
        }
      }
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          colors: '#6B7280'
        }
      }
    },
    grid: {
      borderColor: '#F3F4F6',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      theme: 'light'
    }
  }

  const chartSeries = [
    {
      name: 'Income',
      data: [65, 85, 70, 95, 80, 75, 90]
    },
    {
      name: 'Expenses',
      data: [45, 65, 50, 75, 60, 55, 70]
    }
  ]

  return (
    <Card className="chart-container">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">School Finance</CardTitle>
          <div className="flex space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
              <span className="text-muted-foreground">1245</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
              <span className="text-muted-foreground">1356</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height="100%"
          />
        </div>
      </CardContent>
    </Card>
  )
}

