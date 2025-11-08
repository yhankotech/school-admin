"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const messages = [
  { name: "Samantha William", message: "Lorem ipsum dolor sit amet...", time: "12:45 PM" },
  { name: "Tony Soap", message: "Lorem ipsum dolor sit amet...", time: "12:45 PM" },
  { name: "Jordan Nico", message: "Lorem ipsum dolor sit amet...", time: "12:45 PM" },
  { name: "Nadila Adja", message: "Lorem ipsum dolor sit amet...", time: "12:45 PM" }
];

export function MessagesWidget () {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">Messages</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-700 font-medium text-sm">{getInitials(msg.name)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-gray-900 text-sm">{msg.name}</p>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              <p className="text-xs text-gray-600 truncate">{msg.message}</p>
            </div>
          </div>
        ))}
        <Button variant="link" className="w-full text-[#6366f1] text-sm">
          View More
        </Button>
      </CardContent>
    </Card>
  );
};
