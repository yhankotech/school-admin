import { Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const messages = [
  {
    id: 1,
    name: "Samantha William",
    message: "Lorem ipsum dolor sit amet...",
    time: "12:45",
    unread: true,
    avatar: "SW"
  },
  {
    id: 2,
    name: "Tony Soap",
    message: "Lorem ipsum dolor sit amet...",
    time: "12:15",
    unread: true,
    avatar: "TS"
  },
  {
    id: 3,
    name: "Karen Hope",
    message: "Lorem ipsum dolor sit amet...",
    time: "11:40",
    unread: false,
    avatar: "KH"
  },
  {
    id: 4,
    name: "Jordan Nico",
    message: "Lorem ipsum dolor sit amet...",
    time: "02:40",
    unread: false,
    avatar: "JN"
  },
  {
    id: 5,
    name: "Nadilla Adja",
    message: "Lorem ipsum dolor sit amet...",
    time: "01:20",
    unread: false,
    avatar: "NA"
  }
];

export function MessagesList () {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <h2 className="text-lg font-semibold">Messages</h2>
        
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
          {messages.map((message) => (
            <div key={message.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-purple-100 text-purple-600 text-sm">
                  {message.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm truncate">{message.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{message.time}</span>
                    {message.unread && (
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 truncate mt-1">{message.message}</p>
              </div>
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