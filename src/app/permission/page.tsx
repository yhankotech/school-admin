"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  Settings,
  UserCheck,
} from "lucide-react";

export default function Permission () {
  return (
    <main className="flex h-screen bg-gray-50">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Configurações do Sistema
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Gestão de Usuários</h4>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Adicionar Funcionário
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <UserCheck className="h-4 w-4 mr-2" />
                      Gerenciar Permissões
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Configurações Gerais</h4>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Calendário Escolar
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Regulamento Interno
                    </Button>
                  </div>
                </div>
            </CardContent>
        </Card>
    </main>
  );
};