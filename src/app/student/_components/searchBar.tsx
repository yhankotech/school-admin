"use client"
import { Search, Plus, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation'

export function SearchBar() {
    const router = useRouter();
      
    function goTo(link:string){
      router.push(link)
    }
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      {/* Search Input */}
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search here..."
          className="pl-10 bg-white border border-gray-200 rounded-full h-12 text-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-white border border-gray-200 rounded-full px-6 h-12 text-gray-700 hover:bg-gray-50 font-medium"
            >
              Newest
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg rounded-lg">
            <DropdownMenuItem className="hover:bg-gray-50">Newest</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-50">Oldest</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-50">Name A-Z</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-50">Name Z-A</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* New Student Button */}
        <Button onClick={()=>goTo("/newstudent")} className="bg-[#6366f1] hover:bg-[#5856eb] text-white rounded-full px-6 h-12 font-medium cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          New Student
        </Button>
      </div>
    </div>
  );
};