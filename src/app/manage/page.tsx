"use client"

import {SchoolManagementSystem} from "./_components/schoolMangeSystem";

export default function Manage () {
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Main Content */}
      <div className="flex-1 ml-60">

        {/* School Management System */}
        <main className="p-6 overflow-auto">
          <SchoolManagementSystem />
        </main>
      </div>
    </div>
  );
};