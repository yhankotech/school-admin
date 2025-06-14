import { Search, Mail } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const contacts = [
  { id: 1, name: "Samantha William", status: "online", avatar: "SW" },
  { id: 2, name: "Tony Soap", status: "online", avatar: "TS" },
  { id: 3, name: "Karen Hope", status: "offline", avatar: "KH" },
  { id: 4, name: "Jordan Nico", status: "offline", avatar: "JN" },
  { id: 5, name: "Nadilla Adja", status: "offline", avatar: "NA" }
];

export function ContactsList () {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Contacts</h2>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 rounded-full w-8 h-8 p-0">
            <span className="text-white text-sm">+</span>
          </Button>
        </div>
        <p className="text-sm text-gray-500">323 Contacts</p>
        
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-purple-100 text-purple-600 text-sm">
                      {contact.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                    contact.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
                  }`}></div>
                </div>
                <div>
                  <p className="font-medium text-sm">{contact.name}</p>
                  <p className="text-xs text-gray-500">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-600 p-1">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <Button variant="ghost" className="w-full mt-4 text-purple-600 hover:bg-purple-50">
          View More
        </Button>
      </CardContent>
    </Card>
  );
};