"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

export function ScheduleCard () {
  const scheduleItems = [
    {
      id: 1,
      title: "Basic Algorithm",
      subject: "Algorithm",
      date: "March 20, 2021",
      time: "09:00 - 10:00 AM",
      color: "purple",
      avatar: "A"
    },
    {
      id: 2,
      title: "Basic Art", 
      subject: "Art",
      date: "March 20, 2021",
      time: "09:00 - 10:00 AM",
      color: "orange",
      avatar: "A"
    },
    {
      id: 3,
      title: "HTML & CSS Class",
      subject: "Programming", 
      date: "March 20, 2021",
      time: "09:00 - 10:00 AM",
      color: "yellow",
      avatar: "P"
    },
    {
      id: 4,
      title: "Simple Past Tense",
      subject: "English",
      date: "March 20, 2021", 
      time: "09:00 - 10:00 AM",
      color: "purple",
      avatar: "E"
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

  const getAvatarColor = (color) => {
    switch(color) {
      case 'purple':
        return 'bg-purple-100 text-purple-600'
      case 'orange':
        return 'bg-orange-100 text-orange-600'
      case 'yellow':
        return 'bg-yellow-100 text-yellow-600'
      default:
        return 'bg-purple-100 text-purple-600'
    }
  }

  return (
    <div className="w-full max-w-sm space-y-4">
      {/* Schedule Header */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">Schedule Details</CardTitle>
          <p className="text-sm text-muted-foreground">Thursday, 10th April 2021</p>
        </CardHeader>
      </Card>

      {/* Schedule Items */}
      <div className="space-y-3">
        {scheduleItems.map((item) => (
          <Card key={item.id} className={`schedule-item ${getColorClasses(item.color)}`}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subject}</p>
                  
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </div>
                </div>
                
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${getAvatarColor(item.color)}`}>
                  {item.avatar}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View More Button */}
      <Card>
        <CardContent className="p-4">
          <Button variant="secondary" className="w-full">
            View More
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}