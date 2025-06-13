"use client"
import {Teachears} from "./_components/teachears";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from 'next/navigation'

export default function TeachearDatails(){
  const router = useRouter();
    
  function goTo(link:string){
    router.push(link)
  }
    
    return(
      <>
        <Button
          onClick={()=>goTo("/newteacher")}
          variant="outline" 
          className="bg-[#6366f1] hover:bg-[#5856eb] text-white hover:text-white rounded-full px-6 h-12 font-medium cursor-pointer"
        >
                
          <Plus className="mr-2 h-4 w-4" />
            New Teacher
            </Button>
          <Teachears/>
      </>
    )
}