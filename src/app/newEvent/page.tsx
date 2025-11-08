"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Users, Plus, Sparkles } from "lucide-react";
import { Activity } from "@/types/types";

export default function NewEvent() {
  const [activities] = useState<Activity[]>([
    {
      id: "act1",
      title: "Feira de Ciências",
      description: "Apresentação de projetos científicos desenvolvidos pelos alunos",
      date: new Date("2024-03-15"),
      type: "event",
      organizer: "Coordenação Pedagógica",
      location: "Auditório Principal",
      participants: 150
    },
    {
      id: "act2",
      title: "Reunião de Pais",
      description: "Encontro para discussão do desenvolvimento acadêmico",
      date: new Date("2024-03-20"),
      type: "meeting",
      organizer: "Direção",
      location: "Sala de Conferências",
      participants: 80
    },
    {
      id: "act3",
      title: "Olimpíada Escolar",
      description: "Competição esportiva entre as turmas",
      date: new Date("2024-03-25"),
      type: "activity",
      organizer: "Educação Física",
      location: "Quadra Poliesportiva",
      participants: 200
    }
  ]);

  const typeColors: Record<Activity["type"], string> = {
    event: "bg-primary/10 text-primary border-primary/20",
    activity: "bg-secondary/10 text-secondary border-secondary/20",
    meeting: "bg-accent/10 text-accent border-accent/20",
    holiday: "bg-muted text-muted-foreground border-border"
  };

  const typeLabels: Record<Activity["type"], string> = {
    event: "Evento",
    activity: "Atividade",
    meeting: "Reunião",
    holiday: "Feriado"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#646cffaa] via-[#3b44e4aa] to-[#646cffaa] bg-clip-text text-transparent">
            Atividades e Eventos
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Organize e gerencie todas as atividades escolares em um só lugar
          </p>
        </div>

        {/* Main Content */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
          <CardHeader className="border-b bg-gradient-to-r from-card to-muted/30">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-[#646cffaa]" />
              </div>
              Gestão de Atividades
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Plus className="h-5 w-5 text-[#646cffaa]" />
                  <h4 className="font-semibold text-lg">Criar Nova Atividade</h4>
                </div>
                
                <div className="space-y-5">
                  <div className="space-y-2 group">
                    <Label htmlFor="title" className="text-sm font-medium flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-[#646cffaa]" />
                      Título da Atividade
                    </Label>
                    <Input 
                      id="title" 
                      placeholder="Ex: Feira Cultural 2024" 
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 border-border hover:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-[#646cffaa]" />
                      Descrição
                    </Label>
                    <Textarea 
                      id="description" 
                      placeholder="Descreva os detalhes da atividade..." 
                      rows={4}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 border-border hover:border-primary/50 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-[#646cffaa]" />
                        Data
                      </Label>
                      <Input 
                        id="date" 
                        type="date" 
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 border-border hover:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-[#646cffaa]" />
                        Local
                      </Label>
                      <Input 
                        id="location" 
                        placeholder="Local do evento" 
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 border-border hover:border-primary/50"
                      />
                    </div>
                  </div>

                  <Button 
                    className="w-full h-12 bg-[#2d36e9aa] hover:bg-[#646cffaa] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold group"
                  >
                    <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                    Criar Atividade
                  </Button>
                </div>
              </div>

              {/* Activities List Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-2 border-b">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#646cffaa]" />
                    <h4 className="font-semibold text-lg">Atividades Programadas</h4>
                  </div>
                  <Badge variant="secondary" className="font-semibold text-[rgba(39,82,94,0.67)]">
                    {activities.length} eventos
                  </Badge>
                </div>
                
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {activities.map((activity, index) => (
                    <div 
                      key={activity.id} 
                      className="group border rounded-xl p-5 bg-gradient-to-br from-card to-muted/20 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h5 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {activity.title}
                        </h5>
                        <Badge 
                          variant="outline" 
                          className={`${typeColors[activity.type]} font-medium shrink-0 text-green-600`}
                        >
                          {typeLabels[activity.type]}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {activity.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-[#646cffaa]" />
                          <span className="font-medium text-foreground">
                            {activity.date.toLocaleDateString('pt-BR', { 
                              day: '2-digit', 
                              month: 'long', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                        
                        {activity.location && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-[#646cffaa]" />
                            <span>{activity.location}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 text-[#646cffaa]" />
                            <span>{activity.participants} participantes</span>
                          </div>
                          <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                            {activity.organizer}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--muted));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary-glow));
        }
      `}</style>
    </div>
  );
}