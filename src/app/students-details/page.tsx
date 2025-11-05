"use client"
import { mockStudent } from '@/lib/mockData';
import StudentHeader from './_components/StudentHeader';
import AcademicInfo from './_components/AcademicInfo';
import SubjectsSection from './_components/SubjectsSection';
import TeachersSection from './_components/TeachersSection';
import PaymentsSection from './_components/PaymentsSection';
import GuardianInfo from './_components/GuardianInfo';
import ClassroomInfo from './_components/ClassroomInfo';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";

export default function StudentDetails() {
    const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header com botão voltar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/student")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <StudentHeader student={mockStudent} />
        <AcademicInfo student={mockStudent} />
        <SubjectsSection student={mockStudent} />
        <TeachersSection student={mockStudent} />
        <PaymentsSection student={mockStudent} />
        <GuardianInfo student={mockStudent} />
        <ClassroomInfo student={mockStudent} />
      </div>
    </div>
  );
}