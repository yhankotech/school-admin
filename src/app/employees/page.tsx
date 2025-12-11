"use client"
import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "@/lib/icons";
import { Input } from "@/components/ui/input";
import {StaffGrid} from "./_components/stafGrid";
import { useRouter } from "next/navigation";


export default function Staff () {
  const route = useRouter()

  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Funcionários da Instituição</h2>
                <p className="text-gray-600">Gerencie todos os funcionários e suas informações</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                onClick={() => route.push("/newteacher")}
                className="bg-[#6366f1] hover:bg-[#5856eb] text-white hover:cursor-pointer rounded-full">
                <UserPlus className="w-4 h-4 mr-2" />
                Adicionar Funcionário
              </Button>
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar funcionários..."
                  className="pl-10 w-80 bg-gray-50 border-gray-200 rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Staff Content */}
        <main className="p-6">
          <StaffGrid />
        </main>
      </div>
    </div>
  );
};