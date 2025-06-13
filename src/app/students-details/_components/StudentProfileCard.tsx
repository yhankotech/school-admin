"use client"
import { Card, CardContent } from "@/components/ui/card"
import { User, MapPin, Phone, Mail, MoreHorizontal } from "lucide-react"

export function StudentProfileCard () {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-0">
        {/* Header with gradient background */}
        <div className="profile-header relative p-6 rounded-t-lg">
          {/* Decorative shapes */}
          <div className="decorative-shapes">
            <div className="shape-orange"></div>
            <div className="shape-yellow"></div>
          </div>
          
          {/* More options */}
          <div className="absolute top-4 right-4 z-10">
            <MoreHorizontal className="w-6 h-6 text-white/80" />
          </div>
          
          {/* Profile Avatar */}
          <div className="profile-avatar mb-4"></div>
          
          {/* Profile Info */}
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-1">Karen Hope</h1>
            <p className="text-white/80 text-sm">Student</p>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Parents</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-orange-600" />
                </div>
                <span className="text-sm text-foreground">Justin Hope</span>
              </div>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground mb-1">Address</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-orange-600" />
                </div>
                <span className="text-sm text-foreground">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Phone</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 text-orange-600" />
                </div>
                <span className="text-sm text-foreground">+12 345 6789 0</span>
              </div>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <Mail className="w-3 h-3 text-orange-600" />
                </div>
                <span className="text-sm text-foreground">Hope@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

