import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar } from '@/lib/icons';

export function RelatoriosPage() {
  const reports = [
    {
      id: 1,
      title: 'Relatório de Frequência',
      description: 'Frequência dos estudantes por turma',
      date: '15/01/2025',
    },
    {
      id: 2,
      title: 'Relatório de Notas',
      description: 'Desempenho acadêmico dos estudantes',
      date: '12/01/2025',
    },
    {
      id: 3,
      title: 'Relatório Financeiro',
      description: 'Receitas e despesas do mês',
      date: '10/01/2025',
    },
    {
      id: 4,
      title: 'Relatório de Professores',
      description: 'Carga horária e distribuição de turmas',
      date: '08/01/2025',
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Relatórios</h1>
          <Button className="gap-2 rounded-full bg-[#5856eb] hover:bg-[#4947f7] hover:cursor-pointer">
            <FileText className="h-4 w-4" />
            Gerar Novo Relatório
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <FileText className="h-6 w-6 text-[#5856eb]" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-1">{report.title}</CardTitle>
                      <p className="text-sm text-slate-500">{report.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>{report.date}</span>
                  </div>
                  <Button size="sm" variant="outline" className="gap-2 rounded-full hover:cursor-pointer bg-[#4D44B5] text-white hover:bg-[#4D44B5] hover:text-white">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Tipos de Relatórios Disponíveis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                <h3 className="font-medium text-slate-900 mb-2">Acadêmico</h3>
                <p className="text-sm text-slate-500">
                  Notas, frequência e desempenho dos estudantes
                </p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                <h3 className="font-medium text-slate-900 mb-2">Financeiro</h3>
                <p className="text-sm text-slate-500">
                  Receitas, despesas e inadimplência
                </p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                <h3 className="font-medium text-slate-900 mb-2">Administrativo</h3>
                <p className="text-sm text-slate-500">
                  Professores, turmas e estrutura escolar
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
