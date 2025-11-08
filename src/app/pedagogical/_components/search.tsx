import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";

export function Search(){
    const router = useRouter();
        
  function goTo(link:string){
    router.push(link)
  }
    return(
        <div className="flex items-center justify-between gap-4 mb-6 mt-6">
            <div className="flex w-96 relative gap-6">
                <Input
                    type="text"
                    placeholder="Search here..."
                    className="bg-white border border-gray-400 rounded-full h-8 w-40 text-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button
                    onClick={()=>goTo("/newteacher")}
                    variant="outline" 
                    className="bg-[#6366f1] hover:bg-[#5856eb] text-white hover:text-white rounded-full px-6 h-8 font-medium cursor-pointer"
                >
                        
                    <Plus className="mr-2 h-4 w-4" />
                    New Teacher
                </Button>
            </div>
      </div>
    )
}