
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  Calendar, 
  FileText, 
  Settings, 
  GraduationCap,
  AlertCircle,
  TrendingUp,
  Clock,
  CheckCircle,
  UserCheck,
} from "lucide-react";
import {  Student, LessonPlan, Activity, FinancialReport, CLASS_FEES } from "@/types/school-system";

export function SchoolManagementSystem () {

  const [students] = useState<Student[]>([
    {
      id: "1",
      name: "João Santos",
      class: "7º A",
      grade: 7,
      parentId: "p1",
      payments: [
        {
          id: "pay1",
          studentId: "1",
          type: "mensalidade",
          amount: 4000,
          dueDate: new Date("2024-01-15"),
          paidDate: new Date("2024-01-10"),
          status: "paid"
        },
        {
          id: "pay2",
          studentId: "1",
          type: "mensalidade",
          amount: 4000,
          dueDate: new Date("2024-02-15"),
          status: "pending"
        }
      ],
      grades: [
        {
          id: "g1",
          studentId: "1",
          subject: "Matemática",
          value: 15,
          term: "1º Trimestre",
          teacherId: "t1"
        }
      ],
      disciplinaryRecords: []
    },
    {
      id: "2",
      name: "Ana Costa",
      class: "5º B",
      grade: 5,
      parentId: "p2",
      payments: [
        {
          id: "pay3",
          studentId: "2",
          type: "mensalidade",
          amount: 3000,
          dueDate: new Date("2024-01-15"),
          status: "overdue"
        }
      ],
      grades: [
        {
          id: "g2",
          studentId: "2",
          subject: "Português",
          value: 18,
          term: "1º Trimestre",
          teacherId: "t2"
        }
      ],
      disciplinaryRecords: []
    }
  ]);

  const [lessonPlans] = useState<LessonPlan[]>([
    {
      id: "lp1",
      teacherId: "t1",
      subject: "Matemática",
      class: "7º A",
      date: new Date("2024-02-20"),
      content: "Equações do primeiro grau",
      objectives: ["Resolver equações simples", "Aplicar propriedades"],
      status: "submitted"
    }
  ]);

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

  const [financialReport] = useState<FinancialReport>({
    id: "fr1",
    period: "Janeiro 2024",
    income: 450000,
    expenses: 320000,
    balance: 130000,
    details: [
      { category: "Mensalidades", amount: 400000, type: "income" },
      { category: "Matrículas", amount: 50000, type: "income" },
      { category: "Salários", amount: 200000, type: "expense" },
      { category: "Infraestrutura", amount: 120000, type: "expense" }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="students">Estudantes</TabsTrigger>
            <TabsTrigger value="finances">Finanças</TabsTrigger>
            <TabsTrigger value="academic">Acadêmico</TabsTrigger>
            <TabsTrigger value="activities">Atividades</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Resumo Financeiro
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Receitas</span>
                    <span className="text-lg font-bold text-green-600">
                      {financialReport.income.toLocaleString()} Kz
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm font-medium">Despesas</span>
                    <span className="text-lg font-bold text-red-600">
                      {financialReport.expenses.toLocaleString()} Kz
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Saldo</span>
                    <span className="text-lg font-bold text-blue-600">
                      {financialReport.balance.toLocaleString()} Kz
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Atividades Recentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.date.toLocaleDateString()}</p>
                      </div>
                      <Badge variant="outline">{activity.type}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Gestão de Estudantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-gray-600">Classe: {student.class}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={
                            student.payments.some(p => p.status === 'overdue') ? 'destructive' :
                            student.payments.some(p => p.status === 'pending') ? 'secondary' :
                            'default'
                          }>
                            {student.payments.some(p => p.status === 'overdue') ? 'Em Atraso' :
                             student.payments.some(p => p.status === 'pending') ? 'Pendente' :
                             'Em Dia'}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Últimas Notas:</span>
                          {student.grades.map(grade => (
                            <p key={grade.id}>{grade.subject}: {grade.value}</p>
                          ))}
                        </div>
                        <div>
                          <span className="font-medium">Pagamentos:</span>
                          <p>{student.payments.filter(p => p.status === 'paid').length} pagos</p>
                          <p>{student.payments.filter(p => p.status === 'pending').length} pendentes</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Ver Detalhes</Button>
                          <Button size="sm">Editar</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Finances Tab */}
          <TabsContent value="finances" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Gestão de Pagamentos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Tabela de Preços por Classe</h4>
                    <div className="space-y-2 text-sm">
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-medium">1º ao 4º ano:</p>
                        <p>Mensalidade: {CLASS_FEES['1-4'].mensalidade.toLocaleString()} Kz</p>
                        <p>Matrícula: {CLASS_FEES['1-4'].matricula.toLocaleString()} Kz</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-medium">5º ao 6º ano:</p>
                        <p>Mensalidade: {CLASS_FEES['5-6'].mensalidade.toLocaleString()} Kz</p>
                        <p>Folha de Prova: {CLASS_FEES['5-6'].folha_prova.toLocaleString()} Kz</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-medium">7º ao 9º ano:</p>
                        <p>Mensalidade: {CLASS_FEES['7-9'].mensalidade.toLocaleString()} Kz</p>
                        <p>Folha de Prova: {CLASS_FEES['7-9'].folha_prova.toLocaleString()} Kz</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">Processar Pagamentos</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recibos e Controle de Caixa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Emitir Recibo
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Relatório de Fluxo de Caixa
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Confirmar Pagamentos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Academic Tab */}
          <TabsContent value="academic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Planos de Aula
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {lessonPlans.map((plan) => (
                    <div key={plan.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{plan.subject} - {plan.class}</h4>
                        <Badge variant={
                          plan.status === 'approved' ? 'default' :
                          plan.status === 'submitted' ? 'secondary' :
                          'outline'
                        }>
                          {plan.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{plan.content}</p>
                      <p className="text-xs text-gray-500 mt-2">{plan.date.toLocaleDateString()}</p>
                    </div>
                  ))}
                  <Button className="w-full">Criar Novo Plano</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Desempenho Acadêmico
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Relatórios de Desempenho</h4>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Por Disciplina
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Por Turma
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Por Professor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-6">
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
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Relatórios e Análises
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <FileText className="h-6 w-6 mb-2" />
                    Relatório Financeiro
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <GraduationCap className="h-6 w-6 mb-2" />
                    Desempenho Acadêmico
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <UserCheck className="h-6 w-6 mb-2" />
                    Frequência
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <DollarSign className="h-6 w-6 mb-2" />
                    Pagamentos
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <AlertCircle className="h-6 w-6 mb-2" />
                    Disciplinar
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Calendar className="h-6 w-6 mb-2" />
                    Atividades
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
