"use client"
import {Employees} from "./_components/employe";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function TeachearDatails(){

    return(
      <>
        <Button
          variant="outline" 
          className="bg-[#6366f1] hover:bg-[#5856eb] text-white hover:text-white rounded-full px-6 h-12 font-medium cursor-pointer"
        >
                
          <Plus className="mr-2 h-4 w-4" />
            New Teacher
            </Button>
          <Employees/>
      </>
    )
}