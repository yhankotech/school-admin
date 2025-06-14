import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function ProfileCard () {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <Card className="relative overflow-hidden">
        <CardHeader className="relative">
          {/* Background with gradient circles */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-t-lg overflow-hidden">
            <div className="absolute top-4 right-8 w-16 h-16 bg-orange-400 rounded-full opacity-80"></div>
            <div className="absolute top-8 right-20 w-12 h-12 bg-yellow-400 rounded-full opacity-60"></div>
            <div className="absolute top-2 right-4 w-8 h-8 bg-red-400 rounded-full opacity-70"></div>
          </div>
          
          {/* Profile content */}
          <div className="relative z-10 flex flex-col items-center text-center pt-4 pb-6">
            <Avatar className="w-20 h-20 mb-4 border-4 border-white">
              <AvatarFallback className="bg-gray-200 text-gray-600 text-xl">
                NA
              </AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-bold text-white mb-1">Nabila Azalea</h1>
            <p className="text-purple-100 text-sm">Admin</p>
            <p className="text-purple-100 text-xs mt-1">Jakarta, Indonesia</p>
          </div>
        </CardHeader>
        
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-gray-700">+12 345 6789 0</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-red-500" />
              </div>
              <span className="text-gray-700">jane@gmail.com</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plan Card */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800"></div>
        <div className="absolute top-4 right-4 w-16 h-16 bg-orange-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-400 rounded-full opacity-60 translate-x-8 translate-y-8"></div>
        
        <CardContent className="relative z-10 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Your Plan</h3>
            <Button variant="ghost" className="text-white p-1">
              <span className="text-xl">⋯</span>
            </Button>
          </div>
          
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <div className="space-y-1 text-sm">
              <p>• 50 GB Storage</p>
              <p>• Security Features</p>
            </div>
          </div>
          
          <p className="text-xs text-purple-100 mb-4">
            Upgrade to Premium Plan to get more features
          </p>
          
          <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 font-medium">
            Upgrade Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};