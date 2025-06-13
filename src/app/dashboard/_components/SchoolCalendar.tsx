"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SchoolCalendar () {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const calendarDays = [
    { day: '', empty: true },
    { day: '1', normal: true },
    { day: '2', normal: true },
    { day: '3', normal: true },
    { day: '4', normal: true },
    { day: '5', normal: true },
    { day: '6', normal: true },
    { day: '7', highlighted: true },
    { day: '8', selected: true },
    { day: '9', normal: true },
    { day: '10', normal: true },
    { day: '11', normal: true },
    { day: '12', normal: true },
    { day: '13', normal: true },
    { day: '14', highlighted: true },
    { day: '15', normal: true },
    { day: '16', normal: true },
    { day: '17', normal: true },
    { day: '18', normal: true },
    { day: '19', normal: true },
    { day: '20', event: true },
    { day: '21', highlighted: true },
    { day: '22', normal: true },
    { day: '23', accent: true },
    { day: '24', normal: true },
    { day: '25', normal: true },
    { day: '26', normal: true },
    { day: '27', normal: true },
    { day: '28', highlighted: true },
    { day: '29', normal: true },
    { day: '30', normal: true },
    { day: '31', normal: true },
  ]

  const getDayClasses = (dayInfo) => {
    if (dayInfo.empty) return 'text-transparent'
    if (dayInfo.selected) return 'bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto font-semibold'
    if (dayInfo.accent) return 'bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto font-semibold'
    if (dayInfo.event) return 'bg-yellow-200 text-yellow-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto font-semibold'
    if (dayInfo.highlighted) return 'text-accent font-semibold hover:bg-muted rounded cursor-pointer py-2'
    return 'text-foreground hover:bg-muted rounded cursor-pointer py-2'
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">School Calendar</CardTitle>
          <h3 className="text-md font-medium text-muted-foreground">March 2021</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {calendarDays.map((dayInfo, index) => (
            <div key={index} className={getDayClasses(dayInfo)}>
              {dayInfo.day}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}