'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  FileText,
  Download,
  Share2,
  Eye,
  Trash2,
  Users,
  GraduationCap,
  Briefcase,
} from '@/lib/icons';
import Link from 'next/link';

interface Regulation {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'published';
  created_at: string;
  school_name?: string;
}

export function RegulationsClient() {
  const [regulations, setRegulations] = useState<Regulation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shareDialog, setShareDialog] = useState<string | null>(null);

  useEffect(() => {
    const mockData: Regulation[] = [
      {
        id: '1',
        title: 'Regulamento Geral de Funcionamento',
        description:
          'Documento que estabelece as normas gerais de funcionamento da instituição',
        status: 'published',
        created_at: '2025-01-10',
        school_name: 'Escola Estadual Principal',
      },
      {
        id: '2',
        title: 'Código de Conduta Estudantil',
        description: 'Normas e disciplina aplicáveis aos estudantes',
        status: 'published',
        created_at: '2025-01-05',
        school_name: 'Escola Estadual Principal',
      },
      {
        id: '3',
        title: 'Política de Avaliação',
        description: 'Critérios e metodologias de avaliação',
        status: 'draft',
        created_at: '2025-01-08',
      },
    ];
    setRegulations(mockData);
    setIsLoading(false);
  }, []);

  const shareOptions = [
    { icon: Users, label: 'Encarregados de Educação', color: 'text-blue-600' },
    { icon: GraduationCap, label: 'Educandos', color: 'text-purple-600' },
    { icon: Users, label: 'Professores', color: 'text-green-600' },
    { icon: Briefcase, label: 'Funcionários', color: 'text-orange-600' },
  ];

  if (isLoading) {
    return <div className="text-center py-8">Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      {regulations.length === 0 ? (
        <Card className="border-2 border-dashed border-slate-200 bg-slate-50">
          <CardContent className="py-16 text-center">
            <FileText className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Nenhum regulamento criado ainda
            </h3>
            <p className="text-slate-600 mb-6">
              Comece criando seu primeiro regulamento interno
            </p>
            <Link href="/new-rule">
              <Button>Criar Regulamento</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regulations.map((regulation) => (
            <Card
              key={regulation.id}
              className="hover:shadow-lg transition-shadow flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <Badge
                    variant={
                      regulation.status === 'published'
                        ? 'default'
                        : 'secondary'
                    }
                    className='bg-[#4043f8] tex-white'
                  >
                    {regulation.status === 'published' ? 'Publicado' : 'Rascunho'}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-4">
                  {regulation.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-slate-600 line-clamp-2">
                  {regulation.description}
                </p>
                <p className="text-xs text-slate-500">
                  Criado em{' '}
                  {new Date(regulation.created_at).toLocaleDateString('pt-PT')}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  <Link href={`/regulamentos/${regulation.id}`}>
                    <Button size="sm" variant="outline" className="gap-2 hover:cursor-pointer">
                      <Eye className="h-4 w-4" />
                      Ver
                    </Button>
                  </Link>

                  <Dialog open={shareDialog === regulation.id}>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 hover:cursor-pointer"
                        onClick={() => setShareDialog(regulation.id)}
                      >
                        <Share2 className="h-4 w-4" />
                        Partilhar
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Partilhar Regulamento</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-3">
                        {shareOptions.map((option, index) => {
                          const Icon = option.icon;
                          return (
                            <Button
                              key={index}
                              variant="outline"
                              className="w-full justify-start gap-3 hover:cursor-pointer"
                              onClick={() => {
                                alert(
                                  `Regulamento compartilhado com ${option.label}`
                                );
                                setShareDialog(null);
                              }}
                            >
                              <Icon className={`h-4 w-4 ${option.color}`} />
                              {option.label}
                            </Button>
                          );
                        })}
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 hover:cursor-pointer"
                    onClick={() =>
                      alert('Regulamento baixado em PDF')
                    }
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 text-red-600 hover:text-red-700 hover:cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                    Apagar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}