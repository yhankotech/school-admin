import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { RegulationsClient } from './_components/client';

export default function RegulationsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Regulamentos Internos
            </h1>
            <p className="text-slate-600">
              Crie, gerencie e compartilhe os regulamentos da sua instituição
            </p>
          </div>
          <Link href="/new-rule">
            <Button className="gap-2 bg-[#6366f1] hover:bg-[#4043f8] hover:cursor-pointer">
              <Plus className="h-4 w-4" />
              Novo Regulamento
            </Button>
          </Link>
        </div>

        <RegulationsClient />
      </div>
    </div>
  );
}
