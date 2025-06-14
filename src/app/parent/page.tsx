"use client"
import {ParentDashboard} from "./_components/parentDashboard";
import { Student } from "@/types/school-system";

export default function Manage () {
  const student: Student = {
    id: "1",
    name: "João Santos",
    class: "7º A",
    grade: 7,
    parentId: "p1",
    payments: [],
    grades: [],
    disciplinaryRecords: []
  };
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Main Content */}
      <div className="flex-1 ml-60">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
          </div>
        </header>

        {/* School Management System */}
        <main className="p-6 overflow-auto">
          <ParentDashboard parentId="p1" student={student} />;
        </main>
      </div>
    </div>
  );
};