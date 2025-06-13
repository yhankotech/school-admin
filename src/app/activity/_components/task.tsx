import React from 'react';

interface Task {
  date: string;
  content: string;
  type: 'today' | 'yesterday';
}

const tasks: Task[] = [
  {
    date: "Monday, June 30 2020",
    content: "Karen Hope has created new task at <a href='#' class='text-blue-500'>History Lesson</a>",
    type: 'today'
  },
  {
    date: "Monday, June 30 2020",
    content: "[REMINDER] Due date of <a href='#' class='text-red-500'>Science Homework</a> task will be coming",
    type: 'today'
  },
  {
    date: "Monday, June 30 2020",
    content: "Tony Soap commented at <a href='#' class='text-blue-500'>Science Homework</a>",
    type: 'today'
  },
  {
    date: "Monday, June 30 2020",
    content: "Samantha William added 4 files on <a href='#' class='text-blue-500'>Art Class</a>",
    type: 'today'
  },
  {
    date: "Monday, June 30 2020",
    content: "You have moved <span class='text-green-500'>“Biology Homework”</span> task to Done",
    type: 'yesterday'
  },
  {
    date: "Sunday, June 30 2020",
    content: "Johnny Ahmad mentioned you at <a href='#' class='text-blue-500'>Art Class Homework</a>",
    type: 'yesterday'
  },
  {
    date: "Sunday, June 30 2020",
    content: "Nadia Adja mentioned you at <a href='#' class='text-blue-500'>Programming Homework</a>",
    type: 'yesterday'
  },
];

export function TaskTimeline () {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Today</h2>
      {tasks.filter(task => task.type === 'today').map((task, index) => (
        <div key={index} className="mb-4">
          <p className="text-gray-500">{task.date}</p>
          <p dangerouslySetInnerHTML={{ __html: task.content }} />
        </div>
      ))}
      <h2 className="text-xl font-bold mb-4 mt-8">Yesterday</h2>
      {tasks.filter(task => task.type === 'yesterday').map((task, index) => (
        <div key={index} className="mb-4">
          <p className="text-gray-500">{task.date}</p>
          <p dangerouslySetInnerHTML={{ __html: task.content }} />
        </div>
      ))}
    </div>
  );
};