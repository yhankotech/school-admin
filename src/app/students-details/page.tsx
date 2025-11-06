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
import { Card, CardHeader } from "@/components/ui/card";
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
          </Button>
        </div>
      </div>

      <div className="lg:col-span-2 pl-4 pr-4">
        <Card className="bg-white w-[67rem]">
          <CardHeader className="relative">
            {/* Background with gradient circles */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-t-lg overflow-hidden">
              <div className="absolute top-4 right-8 w-24 h-24 bg-orange-400 rounded-full opacity-80"></div>
                <div className="absolute top-8 right-24 w-16 h-16 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute top-12 right-4 w-12 h-12 bg-red-400 rounded-full opacity-70"></div>
              </div>
                
                {/* Profile content */}
                <div className="relative z-10 flex items-center gap-6 pt-8 pb-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="text-white">
                    <h1 className="text-3xl font-bold mb-2">Maria Historia</h1>
                    <p className="text-purple-100">History Teacher</p>
                  </div>
              </div>
            </CardHeader>
        </Card>
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
        </div>
  );
}