"use client"
import { Card, CardContent } from "@/components/ui/card"

export function MetricCard ({ icon, title, value, iconBgColor, iconColor }) {
  return (
    <Card className="metric-card">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className={`p-4 rounded-full ${iconBgColor}`}>
            <div className={`w-8 h-8 ${iconColor}`}>
              {icon}
            </div>
          </div>
          <div>
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
