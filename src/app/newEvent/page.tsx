"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, } from "lucide-react";
import { Activity } from "@/types/school-system";


export default function NewEvent(){
    const [activities] = useState<Activity[]>([
    {
      id: "act1",
      title: "Feira de Ciências",
      description: "Apresentação de projetos científicos",
      date: new Date("2024-03-15"),
      type: "event",
      organizer: "Coordenação Pedagógica"
    }
  ]);

    return (
    <div>
        <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Gestão de Atividades e Eventos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Criar Nova Atividade</h4>
                    <div className="space-y-2">
                      <Label htmlFor="title">Título</Label>
                      <Input id="title" placeholder="Nome da atividade" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Descrição</Label>
                      <Textarea id="description" placeholder="Descrição da atividade" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Data</Label>
                      <Input id="date" type="date" />
                    </div>
                    <Button className="w-full">Criar Atividade</Button>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Atividades Programadas</h4>
                    {activities.map((activity) => (
                      <div key={activity.id} className="border rounded-lg p-3">
                        <h5 className="font-medium">{activity.title}</h5>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">
                            {activity.date.toLocaleDateString()}
                          </span>
                          <Badge variant="outline">{activity.type}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
    </div>
)
}