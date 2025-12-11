import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus, Upload } from '@/lib/icons';
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
          <div className='flex space-x-4'>
            <Button className="gap-2 bg-[#6366f1] rounded-full hover:bg-[#4043f8] hover:cursor-pointer">
              <Upload className="h-4 w-4" />
              Importar regulamento
            </Button>
            <Link href="/new-rule">
              <Button className="gap-2 bg-[#6366f1] rounded-full hover:bg-[#4043f8] hover:cursor-pointer">
                <Plus className="h-4 w-4" />
                Criar regulamento
              </Button>
            </Link>
          </div>
        </div>

        <RegulationsClient />
      </div>
    </div>
  );
}
