import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, MoreHorizontal } from "lucide-react"

export function ProfileCard () {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-0">
        {/* Header with gradient background */}
        <div className="profile-header relative p-6 rounded-t-lg">
          {/* Decorative circles */}
          <div className="absolute top-4 right-4">
            <div className="w-16 h-16 rounded-full bg-orange-400/30 absolute"></div>
            <div className="w-12 h-12 rounded-full bg-yellow-400/40 absolute top-2 left-2"></div>
          </div>
          <div className="absolute top-6 right-20">
            <div className="w-20 h-20 rounded-full bg-orange-500/20 absolute"></div>
            <div className="w-16 h-16 rounded-full bg-yellow-400/30 absolute top-2 left-2"></div>
          </div>
          
          {/* More options */}
          <div className="absolute top-4 right-4 z-10">
            <MoreHorizontal className="w-6 h-6 text-white/80" />
          </div>
          
          {/* Profile Avatar */}
          <div className="profile-avatar mb-4"></div>
          
          {/* Profile Info */}
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-1">Maria Historia</h1>
            <p className="text-white/80 text-sm">History Teacher</p>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="p-6 space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-sm text-muted-foreground">Jakarta, Indonesia</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-sm text-muted-foreground">+12 345 6789 0</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-sm text-muted-foreground">Historia@mail.com</span>
          </div>
        </div>
        
        {/* About Section */}
        <div className="px-6 pb-4">
          <h3 className="font-semibold text-foreground mb-2">About:</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        
        {/* Education Section */}
        <div className="px-6 pb-4">
          <h3 className="font-semibold text-foreground mb-3">Education:</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">History Major, University Akademi Historia</p>
                  <p className="text-xs text-muted-foreground">2015-2017</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Master of History, University Akademi Historia</p>
                  <p className="text-xs text-muted-foreground">2017-2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expertise Section */}
        <div className="px-6 pb-6">
          <h3 className="font-semibold text-foreground mb-2">Expertise:</h3>
          <p className="text-sm text-muted-foreground">
            World History, Philosophy, Prehistoric, Culture, Ancient
          </p>
        </div>
      </CardContent>
    </Card>
  )
}