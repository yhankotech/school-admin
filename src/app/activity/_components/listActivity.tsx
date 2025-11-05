"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    date: "Monday, June 31 2020",
    user: "Karen Hope",
    action: "has created new task on",
    task: "History Lesson",
    taskType: "task",
    time: "10:40 AM"
  },
  {
    id: 2,
    date: "Monday, June 31 2020",
    reminder: true,
    text: "Due date of",
    task: "Science Homework",
    message: "task will be coming",
    time: "10:40 AM"
  },
  {
    id: 3,
    date: "Monday, June 31 2020",
    user: "Tony Soap",
    action: "commented at",
    task: "Science Homework",
    taskType: "comment",
    time: "10:40 AM"
  },
  {
    id: 4,
    date: "Monday, June 31 2020",
    user: "Samantha William",
    action: "add 4 files on",
    task: "Art Class",
    taskType: "files",
    time: "10:40 AM",
    files: [
      { id: 1, preview: "/lovable-uploads/bfce4478-aa9a-46fc-b55c-6499d388097d.png" },
      { id: 2, preview: "/lovable-uploads/bfce4478-aa9a-46fc-b55c-6499d388097d.png" },
      { id: 3, preview: "/lovable-uploads/bfce4478-aa9a-46fc-b55c-6499d388097d.png" },
      { id: 4, preview: "/lovable-uploads/bfce4478-aa9a-46fc-b55c-6499d388097d.png" }
    ]
  },
  {
    id: 5,
    date: "Monday, June 31 2020",
    user: "You",
    action: "has moved",
    task: "Biology Homework",
    message: "task to Done",
    taskType: "move",
    time: "10:40 AM"
  }
];

const yesterdayActivities = [
  {
    id: 6,
    date: "Sunday, June 30 2020",
    user: "Johnny Ahmad",
    action: "mentioned you at",
    task: "Art Class, Homework",
    taskType: "mention",
    time: "10:40 AM"
  },
  {
    id: 7,
    date: "Sunday, June 30 2020",
    user: "Nadila Adja",
    action: "mentioned you at",
    task: "Programming Homework",
    taskType: "mention",
    time: "10:40 AM"
  }
];

export function TimelineActivity () {
  return (
    <Card className="h-full">
      <CardContent>
        <div className="space-y-6">
          {/* Today Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">All activitys</h2>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-1">{activity.date}</p>
                    <div className="text-sm">
                      {activity.reminder ? (
                        <p>
                          <Badge variant="destructive" className="mr-2 text-xs">REMINDER</Badge>
                          <span className="text-gray-600">{activity.text}</span>{" "}
                          <span className="text-red-500 font-medium">{activity.task}</span>{" "}
                          <span className="text-gray-600">{activity.message}</span>
                        </p>
                      ) : (
                        <p>
                          <span className="font-medium text-gray-900">{activity.user}</span>{" "}
                          <span className="text-gray-600">{activity.action}</span>{" "}
                          <span className="text-red-500 font-medium">{activity.task}</span>
                          {activity.message && (
                            <span className="text-gray-600"> {activity.message}</span>
                          )}
                        </p>
                      )}
                    </div>
                    
                    {activity.files && (
                      <div className="flex gap-2 mt-3">
                        {activity.files.map((file) => (
                          <div 
                            key={file.id} 
                            className="w-16 h-12 bg-purple-200 rounded-lg flex-shrink-0"
                          ></div>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yesterday Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Yesterday</h2>
            <div className="space-y-4">
              {yesterdayActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-1">{activity.date}</p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-900">{activity.user}</span>{" "}
                      <span className="text-gray-600">{activity.action}</span>{" "}
                      <span className="text-yellow-600 font-medium">{activity.task}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};