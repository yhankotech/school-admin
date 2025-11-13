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

const ACADEMIC_LEVELS = [
  'Dashboar',
  'Pagamentos',
  'Perfil',
  'Regulamentos',
  'Disciplinar',
  'Turmas',
  'Funcionários',
  'Alunos',
  'Professores',
  'Tudo'
];

export interface ClassFormData {
  name: string;
  period: string;
  academic_level: string;
  room: string;
  student_count: number;
  teacher_ids: string[];
  subject_ids: string[];
}

export function AddNewUserPermission() {
    const [formData, setFormData] = useState<ClassFormData>({
        name: '',
        period: 'Manhã',
        academic_level: 'Educação Infantil',
        room: '',
        student_count: 0,
        teacher_ids: [],
        subject_ids: [],
    });


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gap-2 rounded-full hover:cursor-pointer bg-[#5856eb] text-white hover:text-white hover:bg-[#2d2add]">
            <Plus className="w-4 h-4" />
            Novo usuário
        </Button>
      </SheetTrigger>
      <SheetContent style={{minWidth:600}} className="w-[70rem] overflow-y-auto scrollbar-none p-8">
        <SheetHeader>
          <SheetTitle>Permissão</SheetTitle>
          <SheetDescription>
            Adicione novo usuário e permissões
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Romeu Cajamba"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail 
              </label>
              <input
                type="email"
                required
                value={formData.room}
                onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="romeucajamba@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Permissões
              </label>
              <select
                required
                value={formData.academic_level}
                onChange={(e) => setFormData({ ...formData, academic_level: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {ACADEMIC_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Função
              </label>
              <input
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, student_count: parseInt(e.target.value) || 0 })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        <SheetFooter>
          <Button type="submit" className="bg-[#5856eb] rounded-full text-white hover:cursor-pointer hover:text-white hover:bg-[#3c3ad6]">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
