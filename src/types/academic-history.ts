export interface SubjectGrade {
  subject: string;
  firstTerm: number;
  secondTerm: number;
  thirdTerm: number;
  finalGrade: number;
}

export interface AcademicYear {
  year: string;
  grade: string;
  class: string;
  school: string;
  subjects: SubjectGrade[];
  average: number;
  passed: boolean;
  observations: string;
  attendanceRate: number;
  totalClasses: number;
  attendedClasses: number;
}

export interface StudentDocument {
  id: string;
  type: "certificate" | "declaration" | "transcript";
  title: string;
  issuedDate: Date;
  withGrades: boolean;
}

export interface StudentFullProfile {
  id: string;
  name: string;
  birthDate: Date;
  gender: "M" | "F";
  nationality: string;
  documentNumber: string;
  documentType: string;
  address: string;
  phone: string;
  email: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  enrollmentDate: Date;
  currentSchool: string;
  currentGrade: string;
  currentClass: string;
  studentNumber: string;
  photo?: string;
  academicHistory: AcademicYear[];
  issuedDocuments: StudentDocument[];
}