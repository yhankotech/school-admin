"use client"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Plus,
} from "lucide-react";


const SEVERITY = [
  'Baixo',
  'Médio',
  'Alto'
];

const STATUS = [
  'Resolvido',
  'Pendente',
  'Em andamento'
];

export interface ClassFormData {
  name: string;
  severity: string;
  description: string;
  status: string;
  type: string;
}

export function NewOccurrence() {
    const [formData, setFormData] = useState<ClassFormData>({
        name: '',
        severity: '',
        description: '',
        status: '',
        type: ""
    });


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
            className="gap-2 bg-[#5856eb] rounded-full text-white hover:bg-[#423ff3] hover:text-white hover:cursor-pointer">
            <Plus className="w-4 h-4 " />
            Nova ocorrência
        </Button>
      </SheetTrigger>
      <SheetContent style={{minWidth:600}} className="w-[70rem] overflow-y-auto scrollbar-none p-8">
        <SheetHeader>
          <SheetTitle>Ocorrência</SheetTitle>
          <SheetDescription>
            Adicione uma nova ocorrência
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do aluno
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: João da Silva"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo 
              </label>
              <input
                type="text"
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: tipo de ocorrência"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Severidade
              </label>
              <select
                required
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {SEVERITY.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <input
                type="text"
                required
                value={formData.description}
                onChange={(e) =>
                   setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
                required
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {STATUS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
          </div>
        <SheetFooter>
          <Button type="submit" className="bg-[#5856eb] rounded-full text-white hover:cursor-pointer hover:text-white hover:bg-[#3c3ad6]">Guardar</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}