"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trash2
} from "lucide-react";
import {
  Search,
} from "lucide-react";

export default function Deicipline(){
     const incidents = [
    {
      id: 1,
      studentName: "Carlos Ferreira",
      grade: "3B",
      date: "2024-06-10",
      type: "Atraso Frequente",
      severity: "Médio",
      description: "Aluno chegou atrasado pela 5ª vez no mês",
      teacher: "Prof. Carlos Silva",
      status: "Resolvido",
    },
    {
      id: 2,
      studentName: "Pedro Costa",
      grade: "4C",
      date: "2024-06-08",
      type: "Comportamento Inadequado",
      severity: "Alto",
      description: "Desrespeito ao professor durante a aula",
      teacher: "Prof. Pedro Costa",
      status: "Pendente",
    },
    {
      id: 3,
      studentName: "Diego Martins",
      grade: "4A",
      date: "2024-06-05",
      type: "Falta de Material",
      severity: "Baixo",
      description: "Aluno não trouxe material escolar",
      teacher: "Prof. Carlos Silva",
      status: "Resolvido",
    },
    {
      id: 4,
      studentName: "João Silva",
      grade: "3A",
      date: "2024-06-03",
      type: "Conversa em Aula",
      severity: "Baixo",
      description: "Aluno conversando durante a explicação",
      teacher: "Profa. Ana Santos",
      status: "Resolvido",
    },
    {
      id: 5,
      studentName: "Fernando Gomes",
      grade: "1B",
      date: "2024-06-01",
      type: "Agressão Verbal",
      severity: "Alto",
      description: "Xingamentos direcionados a colega",
      teacher: "Profa. Juliana Costa",
      status: "Pendente",
    },
  ];

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      "Baixo": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
      "Médio": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
      "Alto": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    };
    return colors[severity] || colors["Médio"];
  };

  const getStatusColor = (status: string) => {
    return status === "Resolvido"
      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
  };

  return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Ocorrências</CardTitle>
          </CardHeader>
          <div className="flex gap-4 flex-col sm:flex-row p-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Pesquisar por ocorrencia"
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              </div>
            </div>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-gray-300 border-2">
                <thead>
                  <tr className="border-b border-gray-300 border-2">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Aluno</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Tipo</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Descrição</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Data</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Severidade</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {incidents.map((incident) => (
                    <tr key={incident.id} className="border-b border-gray-300 border-2 hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium text-foreground">{incident.studentName}</td>
                      <td className="py-3 px-4 text-muted-foreground">{incident.type}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">{incident.description}</td>
                      <td className="py-3 px-4 text-muted-foreground">{incident.date}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                          {incident.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex gap-2 justify-center">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}