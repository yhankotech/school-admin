export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  permissions: Permission[];
}

export type UserRole = 
  | 'diretor'
  | 'subdiretor_pedagogico'
  | 'secretario_geral'
  | 'tesoureiro'
  | 'coordenador_pedagogico'
  | 'contabilista'
  | 'coordenador_curso'
  | 'professor'
  | 'brigada_escolar'
  | 'equipa_limpeza'
  | 'pastoral_juvenil'
  | 'aluno'
  | 'encarregado_educacao';

export type Permission = 
  | 'full_access'
  | 'financial_management'
  | 'student_management'
  | 'teacher_management'
  | 'academic_reports'
  | 'disciplinary_actions'
  | 'payment_processing'
  | 'view_grades'
  | 'create_lesson_plans'
  | 'parent_communication';

export interface Student {
  id: string;
  name: string;
  class: string;
  grade: number;
  parentId: string;
  payments: Payment[];
  grades: Grade[];
  disciplinaryRecords: DisciplinaryRecord[];
}

export interface Payment {
  id: string;
  studentId: string;
  type: PaymentType;
  amount: number;
  dueDate: Date;
  paidDate?: Date;
  status: PaymentStatus;
}

export type PaymentType = 
  | 'matricula'
  | 'confirmacao_matricula'
  | 'mensalidade'
  | 'cartao_aluno'
  | 'folha_prova'
  | 'manutencao_escola'
  | 'custos_estagio';

export type PaymentStatus = 'pending' | 'paid' | 'overdue';

export interface Grade {
  id: string;
  studentId: string;
  subject: string;
  value: number;
  term: string;
  teacherId: string;
}

export interface DisciplinaryRecord {
  id: string;
  studentId: string;
  description: string;
  action: string;
  date: Date;
  reportedBy: string;
}

export interface LessonPlan {
  id: string;
  teacherId: string;
  subject: string;
  class: string;
  date: Date;
  content: string;
  objectives: string[];
  status: 'draft' | 'submitted' | 'approved';
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'extracurricular' | 'event' | 'meeting';
  organizer: string;
}

export interface FinancialReport {
  id: string;
  period: string;
  income: number;
  expenses: number;
  balance: number;
  details: FinancialDetail[];
}

export interface FinancialDetail {
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: UserRole;
  recipientId: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export interface Assessment {
  id: string;
  studentId: string;
  subject: string;
  type: 'test' | 'assignment' | 'project' | 'participation';
  title: string;
  score: number;
  maxScore: number;
  percentage: number;
  date: Date;
  teacherId: string;
  teacherName: string;
  comments?: string;
}

export const CLASS_FEES = {
  '1-4': {
    matricula: 3500,
    confirmacao_matricula: 3500,
    mensalidade: 2000,
    cartao_aluno: 700,
    folha_prova: 0,
    manutencao_escola: 10000
  },
  '5-6': {
    matricula: 3500,
    confirmacao_matricula: 3500,
    mensalidade: 3000,
    cartao_aluno: 700,
    folha_prova: 2000,
    manutencao_escola: 10000
  },
  '7-9': {
    matricula: 3500,
    confirmacao_matricula: 3500,
    mensalidade: 4000,
    cartao_aluno: 700,
    folha_prova: 5000,
    manutencao_escola: 10000
  },
  '10-12': {
    matricula: 3500,
    confirmacao_matricula: 3500,
    mensalidade: 5000,
    cartao_aluno: 700,
    folha_prova: 5000,
    manutencao_escola: 10000
  },
  'finalistas': {
    confirmacao_matricula: 3500,
    mensalidade: 6000,
    cartao_aluno: 700,
    custos_estagio: 10000
  }
};