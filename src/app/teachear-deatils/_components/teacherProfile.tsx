"use client"
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ScheduleItem {
  id: string;
  subject: string;
  class: string;
  time: string;
  color: string;
}

const scheduleItems: ScheduleItem[] = [
  {
    id: "1",
    subject: "World History",
    class: "Class 5A",
    time: "09:00 - 10:00 AM",
    color: "bg-blue-500"
  },
  {
    id: "2",
    subject: "Ancient History",
    class: "Class 5B",
    time: "10:15 - 11:15 AM", 
    color: "bg-orange-500"
  },
  {
    id: "3",
    subject: "Culture",
    class: "Class 4A",
    time: "11:30 - 12:30 PM",
    color: "bg-yellow-500"
  },
  {
    id: "4",
    subject: "World History",
    class: "Class 5A",
    time: "01:00 - 02:00 PM",
    color: "bg-blue-500"
  }
];

export function TeacherProfile () {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader className="relative">
                {/* Background with gradient circles */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-t-lg overflow-hidden">
                  <div className="absolute top-4 right-8 w-24 h-24 bg-orange-400 rounded-full opacity-80"></div>
                  <div className="absolute top-8 right-24 w-16 h-16 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute top-12 right-4 w-12 h-12 bg-red-400 rounded-full opacity-70"></div>
                </div>
                
                {/* Profile content */}
                <div className="relative z-10 flex items-center gap-6 pt-8 pb-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="text-white">
                    <h1 className="text-3xl font-bold mb-2">Maria Historia</h1>
                    <p className="text-purple-100">History Teacher</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-gray-700">Jakarta, Indonesia</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">+62 856 8760 0</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-gray-700">Historia@email.com</span>
                  </div>
                </div>
                
                {/* About Section */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">About:</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                
                {/* Education Section */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Education:</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">• History Major, University Akademi Historia</h3>
                      <p className="text-gray-500 text-sm">2015 - 2019</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900">• Master of History, University Akademi Historia</h3>
                      <p className="text-gray-500 text-sm">2019 - 2021</p>
                    </div>
                  </div>
                </div>
                
                {/* Experience Section */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience:</h2>
                  <p className="text-gray-600">
                    World History, Philosophy, Prehistoric, Culture, Ancient
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Schedule Details Section */}
          <div className="lg:col-span-1">
            <Card className="bg-white">
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">Schedule Details</h2>
                <p className="text-sm text-gray-500">Today, March 13th, 2020</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {scheduleItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.subject}</h3>
                      <p className="text-xs text-gray-500">{item.class}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="ghost" className="w-full mt-6 text-purple-600 hover:bg-purple-50">
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