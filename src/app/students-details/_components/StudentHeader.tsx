import { Student } from '@/types/types';
import { Card } from '@/components/ui/card';
import { User, IdCard } from '@/lib/icons';
import StatusBadge from './StatusBadge';

interface StudentHeaderProps {
  student: Student;
}

export default function StudentHeader({ student }: StudentHeaderProps) {
  return (
    <Card className="p-6 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-700" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{student.fullName}</h1>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <IdCard className="w-4 h-4" />
                {student.studentNumber}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <p className="text-sm text-gray-600 font-medium">Ano Letivo</p>
              <p className="text-lg font-semibold text-gray-900">{student.academicYear}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Classe</p>
              <p className="text-lg font-semibold text-gray-900">{student.class}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Turma</p>
              <p className="text-lg font-semibold text-gray-900">{student.classGroup}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Data de Nascimento</p>
              <p className="text-lg font-semibold text-gray-900">
                {student.dateOfBirth ? new Date(student.dateOfBirth).toLocaleDateString('pt-PT') : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <StatusBadge status={student.status} />
          <div className="text-right">
            <p className="text-sm text-gray-600 font-medium">Data de Inscrição</p>
            <p className="text-lg font-semibold text-gray-900">
              {new Date(student.enrollmentDate).toLocaleDateString('pt-PT')}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
