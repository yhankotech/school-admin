"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export function StudentTable () {
  const students = [
    { name: "Samantha William", id: "123456789", class: "VII A", amount: "50,036", initials: "SW" },
    { name: "Tony Soap", id: "123456789", class: "VII A", amount: "50,036", initials: "TS" },
    { name: "Jordan Nico", id: "123456789", class: "VII A", amount: "50,036", initials: "JN" },
    { name: "Karen Hope", id: "123456789", class: "VII A", amount: "50,036", initials: "KH" },
    { name: "Nadila Adja", id: "123456789", class: "VII A", amount: "50,036", initials: "NA" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Unpaid Student Tuition</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full boder-[1px] boder-gray-200">
            <tbody className="divide-y divide-border border-[1px] border-gray-200">
              {students.map((student, index) => (
                <tr key={index} className="hover:bg-muted/50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-lg">{student.initials}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-foreground">{student.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-blue-600 font-medium">ID {student.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="bg-orange-100 p-2 rounded-full mr-2">
                        <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-muted-foreground">{student.class}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-lg font-bold text-foreground">$ {student.amount}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">1-5 of <span className="font-semibold text-foreground">100</span></p>
          <div className="flex space-x-2">
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}