"use client"

import { Search} from "lucide-react";
import { Input } from "@/components/ui/input";
import {SchoolManagementSystem} from "./_components/schoolMangeSystem";

export default function Manage () {
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Main Content */}
      <div className="flex-1 ml-60">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar..."
                  className="pl-10 w-80 bg-gray-50 border-gray-200"
                />
              </div>  
            </div>
          </div>
        </header>

        {/* School Management System */}
        <main className="p-6 overflow-auto">
          <SchoolManagementSystem />
        </main>
      </div>
    </div>
  );
};