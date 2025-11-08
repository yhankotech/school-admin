"use client"
import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


export default function EmployeeProfile () {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
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
                <div className="relative z-10 flex items-center gap-6 pt-2 pb-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="text-white">
                    <h1 className="text-3xl font-bold mb-2">Funcionário</h1>
                    <p className="text-purple-100">Funcionario Maria</p>
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
        </div>
  );
};