import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

export function ScheduleCard () {
  const scheduleItems = [
    {
      id: 1,
      title: "World History",
      class: "Class VII-B",
      date: "March 20, 2021",
      time: "08:00 - 10:00 AM",
      color: "purple"
    },
    {
      id: 2,
      title: "Ancient History", 
      class: "Class VII-A",
      date: "March 20, 2021",
      time: "09:30 - 10:00 AM",
      color: "orange"
    },
    {
      id: 3,
      title: "Culture",
      class: "Class VII-A", 
      date: "March 20, 2021",
      time: "09:00 - 10:00 AM",
      color: "yellow"
    },
    {
      id: 4,
      title: "World History",
      class: "Class VII-C",
      date: "March 20, 2021", 
      time: "09:00 - 10:00 AM",
      color: "purple"
    }
  ]

  const getColorClasses = (color) => {
    switch(color) {
      case 'purple':
        return 'schedule-item-purple'
      case 'orange':
        return 'schedule-item-orange'
      case 'yellow':
        return 'schedule-item-yellow'
      default:
        return 'schedule-item-purple'
    }
  }

  return (
    <div className="w-full max-w-sm space-y-4">
      {/* Schedule Header */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">Schedule Details</CardTitle>
          <p className="text-sm text-muted-foreground">Monday, 20th April 2021</p>
        </CardHeader>
      </Card>

      {/* Schedule Items */}
      <div className="space-y-3">
        {scheduleItems.map((item) => (
          <Card key={item.id} className={`schedule-item ${getColorClasses(item.color)}`}>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.class}</p>
                
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{item.time}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}