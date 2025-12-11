import { Search } from "@/lib/icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const groups = [
  {
    id: 1,
    name: "Class History VII-A",
    message: "Lorem ipsum dolor sit amet...",
    time: "12:46 PM",
    unread: 1,
    color: "bg-indigo-500"
  },
  {
    id: 2,
    name: "Class VII-A",
    message: "Lorem ipsum dolor sit amet...",
    time: "12:46 PM",
    unread: 1,
    color: "bg-orange-500"
  },
  {
    id: 3,
    name: "All Student VII",
    message: "Lorem ipsum dolor sit amet...",
    time: "12:46 PM",
    unread: 0,
    color: "bg-yellow-500"
  }
];

const chats = [
  {
    id: 1,
    name: "Samantha William",
    message: "Lorem ipsum dolor sit amet...",
    time: "12:46 PM",
    unread: 1,
    avatar: "SW"
  },
  {
    id: 2,
    name: "Tony Soap",
    message: "Lorem ipsum dolor sit amet...",
    time: "12:46 PM",
    unread: 1,
    avatar: "TS"
  },
  {
    id: 3,
    name: "Karen Hope",
    message: "Lorem ipsum dolor sit amet...",
    time: "12:46 PM",
    unread: 0,
    avatar: "KH"
  }
];

export function ChatSidebar () {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">Messages</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Groups Section */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Groups</h3>
          <div className="space-y-2">
            {groups.map((group) => (
              <div key={group.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className={`w-10 h-10 ${group.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-sm font-medium">
                    {group.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm text-gray-900 truncate">{group.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{group.time}</span>
                      {group.unread > 0 && (
                        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">{group.unread}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-1">{group.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chats Section */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Chats</h3>
          <div className="space-y-2">
            {chats.map((chat) => (
              <div key={chat.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-indigo-100 text-indigo-600 text-sm">
                    {chat.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm text-gray-900 truncate">{chat.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{chat.time}</span>
                      {chat.unread > 0 && (
                        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">{chat.unread}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-1">{chat.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="p-4">
          <Button variant="ghost" className="w-full text-indigo-600 hover:bg-indigo-50">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};