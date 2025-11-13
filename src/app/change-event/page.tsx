"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Plus, Sparkles } from "lucide-react";

export default function NewEvent() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#646cffaa] via-[#3b44e4aa] to-[#646cffaa] bg-clip-text text-transparent">
            Atividades e Eventos
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Edite qualquer atividades escolares em um só lugar
          </p>
        </div>

        {/* Main Content */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
          <CardHeader className="border-b bg-gradient-to-r from-card to-muted/30 ">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-[#646cffaa]" />
              </div>
              Atualização da Atividade
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Plus className="h-5 w-5 text-[#646cffaa]" />
                  <h4 className="font-semibold text-lg">Editar Atividade</h4>
                </div>
                
                <div className="space-y-5 w-[60rem]">
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
                    className="w-full h-12 rounded-full hover:cursor-pointer bg-[#2d36e9aa] hover:bg-[#3942ebaa] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold group"
                  >
                    <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                    Atualizar atividade
                  </Button>
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