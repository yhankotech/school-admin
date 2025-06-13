"use client"
import React from 'react';

export function MessageInterface () {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/3 bg-white p-4 shadow-lg">
        <h2 className="text-2xl font-semibold">Messages</h2>
        <div className="mt-4">
          <input 
            type="text" 
            placeholder="Search here..." 
            className="w-full p-2 border rounded"
          />
        </div>

        <h3 className="mt-8 font-semibold">Groups</h3>
        <ul className="mt-2">
          {['Class History VII-A', 'Class VII-A', 'All Student VII'].map(group => (
            <li key={group} className="flex items-center justify-between p-2 hover:bg-gray-100">
              <span className="text-blue-600">{group}</span>
              <span className="text-gray-500">12:45 PM</span>
            </li>
          ))}
        </ul>
        
        <h3 className="mt-8 font-semibold">Chats</h3>
        <ul className="mt-2">
          {['Samantha William', 'Tony Soap', 'Karen Hope'].map(chat => (
            <li key={chat} className="flex items-center justify-between p-2 hover:bg-gray-100">
              <span className="text-purple-600">{chat}</span>
              <span className="text-gray-500">12:45 PM</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 px-4 py-2 text-white bg-purple-600 rounded">View More</button>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-gray-50 p-4">
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <h2 className="text-xl font-semibold">Samantha William</h2>
        </div>
        <div className="mb-4">
          <div className="bg-white p-2 rounded shadow mb-2">
            <p>Hello Nabiola!</p>
          </div>
          <div className="bg-purple-100 p-2 rounded shadow mb-2">
            <p>Hello Samantha!</p>
          </div>
          <div className="bg-white p-2 rounded shadow mb-2">
            <p>Can I see your history lesson homework?</p>
          </div>
          <div className="bg-purple-100 p-2 rounded shadow mb-2">
            <p>Im not finished yet, why dont work together to finish homework?</p>
          </div>
        </div>

        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Write your message..." 
            className="flex-1 p-2 border rounded"
          />
          <button className="ml-2 px-4 py-2 text-white bg-purple-600 rounded">Send</button>
        </div>
      </div>
    </div>
  );
};
