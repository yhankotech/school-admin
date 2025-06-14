import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    user: "Karen Hope",
    action: "moved task ",
    details: "Team to Progress -> Done",
    time: "1 min ago",
    avatar: "KH"
  },{
    id: 2,
    user: "Samantha William",
    action: "add 4 attached files",
    details: "on 'New Task'",
    time: "8 min ago",
    avatar: "SW"
  },
  {
    id: 3,
    user: "Tony Soap",
    action: "invite you in task ",
    details: "in New Project",
    time: "12 min ago",
    avatar: "TS"
  },
  {
    id: 4,
    user: "Samantha William",
    action: "created new Task",
    details: "on Project",
    time: "1 day ago",
    avatar: "SW"
  }
];

export function ActivityFeed () {
  return (
    <Card className="h-full">
      <CardHeader>
        <h2 className="text-lg font-semibold">Lastest Activity</h2>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">
                  {activity.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium text-gray-900">{activity.user}</span>{" "}
                  <span className="text-gray-600">{activity.action}</span>
                </p>
                <p className="text-xs text-purple-600">{activity.details}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};