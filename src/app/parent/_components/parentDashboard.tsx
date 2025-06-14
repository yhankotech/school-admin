import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  TrendingUp,
  Calendar,
  Star,
  Clock
} from "lucide-react";
import { Assessment, Student } from "@/types/school-system";

interface ParentDashboardProps {
  parentId: string;
  student: Student;
}

export function ParentDashboard  ({ student }: ParentDashboardProps) {


  const [assessments] = useState<Assessment[]>([
    {
      id: "1",
      studentId: student.id,
      subject: "Matemática",
      type: "test",
      title: "Teste de Álgebra",
      score: 15,
      maxScore: 20,
      percentage: 75,
      date: new Date("2024-02-10"),
      teacherId: "t1",
      teacherName: "Prof. Ana Silva",
      comments: "Bom desempenho, mas precisa praticar mais as equações do segundo grau."
    },
    {
      id: "2",
      studentId: student.id,
      subject: "Português",
      type: "assignment",
      title: "Redação - Texto Argumentativo",
      score: 18,
      maxScore: 20,
      percentage: 90,
      date: new Date("2024-02-12"),
      teacherId: "t2",
      teacherName: "Prof. Carlos Costa",
      comments: "Excelente estruturação do texto e argumentação sólida."
    },
    {
      id: "3",
      studentId: student.id,
      subject: "Ciências",
      type: "project",
      title: "Projeto Sistema Solar",
      score: 16,
      maxScore: 20,
      percentage: 80,
      date: new Date("2024-02-14"),
      teacherId: "t3",
      teacherName: "Prof. Maria Fernandes",
      comments: "Criatividade na apresentação e boa pesquisa científica."
    }
  ]);

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadgeVariant = (percentage: number) => {
    if (percentage >= 80) return "default";
    if (percentage >= 60) return "secondary";
    return "destructive";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Painel do Encarregado</h1>
              <p className="text-gray-600 mt-1">
                Acompanhamento do aluno: {student.name} - {student.class}
              </p>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Encarregado de Educação
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Média Geral</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(assessments.reduce((acc, ass) => acc + ass.percentage, 0) / assessments.length).toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Baseado em {assessments.length} avaliações
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Última Avaliação</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {assessments[assessments.length - 1]?.percentage}%
              </div>
              <p className="text-xs text-muted-foreground">
                {assessments[assessments.length - 1]?.subject}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="chat" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="assessments">Avaliações do Aluno</TabsTrigger>
          </TabsList>

          {/* Chat Tab */}
          

          {/* Assessments Tab */}
          <TabsContent value="assessments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Avaliações do Aluno
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assessments.map((assessment) => (
                    <div key={assessment.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{assessment.title}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{assessment.subject}</Badge>
                            <Badge variant="secondary">{assessment.type}</Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            Professor: {assessment.teacherName}
                          </p>
                        </div>
                        <div className="text-right space-y-1">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <Badge variant={getScoreBadgeVariant(assessment.percentage)}>
                              {assessment.percentage}%
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">
                            {assessment.score}/{assessment.maxScore}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {assessment.date.toLocaleDateString()}
                      </div>
                      
                      {assessment.comments && (
                        <div className="bg-gray-50 rounded p-3">
                          <p className="text-sm font-medium mb-1">Comentários do Professor:</p>
                          <p className="text-sm text-gray-700">{assessment.comments}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo de Desempenho por Disciplina</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Matemática", "Português", "Ciências"].map((subject) => {
                    const subjectAssessments = assessments.filter(a => a.subject === subject);
                    const average = subjectAssessments.length > 0
                      ? subjectAssessments.reduce((acc, a) => acc + a.percentage, 0) / subjectAssessments.length
                      : 0;
                    
                    return (
                      <div key={subject} className="text-center p-4 border rounded-lg">
                        <h4 className="font-medium">{subject}</h4>
                        <div className={`text-2xl font-bold ${getScoreColor(average)}`}>
                          {average.toFixed(1)}%
                        </div>
                        <p className="text-sm text-gray-500">
                          {subjectAssessments.length} avaliações
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
