import { Send, Paperclip } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function ChatArea () {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-indigo-100 text-indigo-600">
                SW
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-gray-900">Samantha William</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-gray-400">
              <span className="text-lg">📹</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400">
              <span className="text-lg">⋯</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {/* Received Message */}
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-indigo-100 text-indigo-600 text-xs">
              SW
            </AvatarFallback>
          </Avatar>
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs shadow-sm">
            <p className="text-sm text-gray-900">Hello Nabila!</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-indigo-100 text-indigo-600 text-xs">
              SW
            </AvatarFallback>
          </Avatar>
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs shadow-sm">
            <p className="text-sm text-gray-900">Can I see your history lesson homework?</p>
            <p className="text-xs text-gray-400 mt-1">12:46 PM</p>
          </div>
        </div>

        {/* Sent Messages */}
        <div className="flex justify-end">
          <div className="bg-indigo-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
            <p className="text-sm">Hello Samantha!</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-indigo-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
            <p className="text-sm">Im not finished yet, why dont work together to finish homework?</p>
            <p className="text-xs text-indigo-200 mt-1">12:46 PM</p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Write your message..."
              className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Paperclip className="w-4 h-4" />
            </Button>
          </div>
          <Button className="bg-indigo-500 hover:bg-indigo-600 rounded-full w-12 h-12 p-0">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};