"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Modal } from "./_components/modal";
import {
  Plus,
  User,
  FileText,
  Upload,
  Check,
  AlertCircle,
  ChevronRight,
} from "@/lib/icons";

type AcademicLevel = "1-6" | "7-9" | "10-13" | "transfer" | null;

interface StudentFormData {
  // Student Info
  studentNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  birthCertificate: File | null;
  vaccineCard: File | null;
  proofOfAddress: File | null;

  // Parent Info (for 1-6)
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  parentPhone: string;
  parentBI: File | null;

  // Guardian Info (for 10-13)
  guardianFirstName: string;
  guardianLastName: string;
  guardianEmail: string;
  guardianPhone: string;
  guardianRelationship: string;
  guardianBI: File | null;

  // Academic Info
  cycle: string;
  course: string;
  class: string;

  // Documents
  previousCertificate: File | null; // for 7-9
  grade9Certificate: File | null; // for 10-13
  transferRequest: File | null; // for transfer
  previousSchool: string; // for transfer
  previousClass: string; // for transfer
}

export default function StudentRegistration() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<AcademicLevel>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<StudentFormData>({
    studentNumber: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    birthCertificate: null,
    vaccineCard: null,
    proofOfAddress: null,
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    parentBI: null,
    guardianFirstName: "",
    guardianLastName: "",
    guardianEmail: "",
    guardianPhone: "",
    guardianRelationship: "",
    guardianBI: null,
    cycle: "",
    course: "",
    class: "",
    previousCertificate: null,
    grade9Certificate: null,
    transferRequest: null,
    previousSchool: "",
    previousClass: "",
  });

  const [submittedStudents, setSubmittedStudents] = useState<
    Array<{ id: string; name: string; level: string; date: string }>
  >([]);

  const generateStudentNumber = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    setFormData({ ...formData, studentNumber: `${year}${random}` });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleSubmit = () => {
    const newStudent = {
      id: formData.studentNumber,
      name: `${formData.firstName} ${formData.lastName}`,
      level: selectedLevel === "transfer" ? "Transferência" : `Classes ${selectedLevel}`,
      date: new Date().toLocaleDateString("pt-PT"),
    };
    setSubmittedStudents([...submittedStudents, newStudent]);
    resetForm();
  };

  const resetForm = () => {
    setShowModal(false);
    setSelectedLevel(null);
    setCurrentStep(1);
    setFormData({
      studentNumber: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      phone: "",
      birthCertificate: null,
      vaccineCard: null,
      proofOfAddress: null,
      parentFirstName: "",
      parentLastName: "",
      parentEmail: "",
      parentPhone: "",
      parentBI: null,
      guardianFirstName: "",
      guardianLastName: "",
      guardianEmail: "",
      guardianPhone: "",
      guardianRelationship: "",
      guardianBI: null,
      cycle: "",
      course: "",
      class: "",
      previousCertificate: null,
      grade9Certificate: null,
      transferRequest: null,
      previousSchool: "",
      previousClass: "",
    });
  };

  const getTotalSteps = () => {
    if (selectedLevel === "1-6") return 3;
    if (selectedLevel === "7-9") return 3;
    if (selectedLevel === "10-13") return 4;
    if (selectedLevel === "transfer") return 4;
    return 1;
  };

  const renderLevelSelection = () => (
    <div className="space-y-4">
      <p className="text-muted-foreground mb-6">
        Selecione o nível acadêmico do aluno para continuar:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            level: "1-6" as AcademicLevel,
            title: "Classes 1-6",
            description: "Ensino Primário",
            icon: "📚",
          },
          {
            level: "7-9" as AcademicLevel,
            title: "Classes 7-9",
            description: "Ensino Secundário I",
            icon: "📖",
          },
          {
            level: "10-13" as AcademicLevel,
            title: "Classes 10-13",
            description: "Ensino Secundário II",
            icon: "🎓",
          },
          {
            level: "transfer" as AcademicLevel,
            title: "Transferência",
            description: "Aluno por Transferência",
            icon: "🔄",
          },
        ].map((option) => (
          <button
            key={option.level}
            onClick={() => {
              setSelectedLevel(option.level);
              setCurrentStep(2);
            }}
            className="p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-muted transition-all duration-200 text-left"
          >
            <div className="text-3xl mb-2">{option.icon}</div>
            <h3 className="font-semibold text-foreground text-lg">
              {option.title}
            </h3>
            <p className="text-sm text-muted-foreground">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStudentInfo = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Informações do Aluno
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Número de Estudante
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={formData.studentNumber}
              readOnly
              className="flex-1 border border-border rounded-lg p-2 bg-muted"
            />
            <Button
              onClick={generateStudentNumber}
              className="bg-[#5856eb] text-white hover:bg-[#5856eb] hover:text-white"
            >
              Gerar
            </Button>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Primeiro Nome *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="João"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Último Nome *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="Silva"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Data de Nascimento *
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">Género</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
          >
            <option value="">Selecione</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="joao@example.com"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Telefone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="+244 923 456 789"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">Ciclo</label>
          <select
            name="cycle"
            value={formData.cycle}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
          >
            <option value="">Selecione</option>
            <option value="Primário">Primário</option>
            <option value="Secundário I">Secundário I</option>
            <option value="Secundário II">Secundário II</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">Curso</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="Curso/Especialidade"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">Turma</label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="Ex: 1A"
          />
        </div>
      </div>

      <div className="space-y-4 mt-6">
        <h4 className="font-semibold text-foreground">Documentos Necessários</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-foreground">
              Certidão de Nascimento ou BI *
            </label>
            <label className="border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-primary transition-all text-center">
              <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {formData.birthCertificate
                  ? formData.birthCertificate.name
                  : "Clique para enviar"}
              </span>
              <input
                type="file"
                name="birthCertificate"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-foreground">
              Cartão de Vacina *
            </label>
            <label className="border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-primary transition-all text-center">
              <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {formData.vaccineCard
                  ? formData.vaccineCard.name
                  : "Clique para enviar"}
              </span>
              <input
                type="file"
                name="vaccineCard"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-foreground">
              Comprovativo de Morada
            </label>
            <label className="border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-primary transition-all text-center">
              <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {formData.proofOfAddress
                  ? formData.proofOfAddress.name
                  : "Clique para enviar"}
              </span>
              <input
                type="file"
                name="proofOfAddress"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderParentInfo = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Informações dos Pais/Encarregados
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Primeiro Nome *
          </label>
          <input
            type="text"
            name="parentFirstName"
            value={formData.parentFirstName}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="Maria"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Último Nome *
          </label>
          <input
            type="text"
            name="parentLastName"
            value={formData.parentLastName}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="Silva"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            name="parentEmail"
            value={formData.parentEmail}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="maria@example.com"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Telefone *
          </label>
          <input
            type="tel"
            name="parentPhone"
            value={formData.parentPhone}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="+244 923 456 789"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            BI/Documento de Identidade *
          </label>
          <label className="border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-primary transition-all text-center">
            <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {formData.parentBI ? formData.parentBI.name : "Clique para enviar"}
            </span>
            <input
              type="file"
              name="parentBI"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );

  const renderGuardianInfo = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Informações do Encarregado
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Primeiro Nome *
          </label>
          <input
            type="text"
            name="guardianFirstName"
            value={formData.guardianFirstName}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Último Nome *
          </label>
          <input
            type="text"
            name="guardianLastName"
            value={formData.guardianLastName}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Relação com o Aluno *
          </label>
          <select
            name="guardianRelationship"
            value={formData.guardianRelationship}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
          >
            <option value="">Selecione</option>
            <option value="Pai">Pai</option>
            <option value="Mãe">Mãe</option>
            <option value="Avô">Avô</option>
            <option value="Avó">Avó</option>
            <option value="Tio">Tio</option>
            <option value="Tia">Tia</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            name="guardianEmail"
            value={formData.guardianEmail}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Telefone *
          </label>
          <input
            type="tel"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            BI/Documento de Identidade *
          </label>
          <label className="border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-primary transition-all text-center">
            <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {formData.guardianBI
                ? formData.guardianBI.name
                : "Clique para enviar"}
            </span>
            <input
              type="file"
              name="guardianBI"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );

  const renderPreviousCertificate = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Documentos Académicos
      </h3>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-foreground">
          Declaração ou Certificado das Classes Anteriores *
        </label>
        <label className="border-2 border-dashed border-border rounded-lg p-6 cursor-pointer hover:border-primary transition-all text-center">
          <FileText className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {formData.previousCertificate
              ? formData.previousCertificate.name
              : "Clique para enviar o certificado"}
          </span>
          <input
            type="file"
            name="previousCertificate"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );

  const renderTransferInfo = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Informações de Transferência
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Escola Anterior *
          </label>
          <input
            type="text"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="Nome da escola anterior"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Classe Anterior *
          </label>
          <input
            type="text"
            name="previousClass"
            value={formData.previousClass}
            onChange={handleInputChange}
            className="border border-border rounded-lg p-2"
            placeholder="Ex: 9ª Classe"
          />
        </div>
      </div>

      <div className="space-y-4 mt-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Pedido de Transferência *
          </label>
          <label className="border-2 border-dashed border-border rounded-lg p-6 cursor-pointer hover:border-primary transition-all text-center">
            <FileText className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {formData.transferRequest
                ? formData.transferRequest.name
                : "Clique para enviar o pedido"}
            </span>
            <input
              type="file"
              name="transferRequest"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-foreground">
            Declaração da 9ª Classe (se aplicável)
          </label>
          <label className="border-2 border-dashed border-border rounded-lg p-6 cursor-pointer hover:border-primary transition-all text-center">
            <FileText className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {formData.grade9Certificate
                ? formData.grade9Certificate.name
                : "Clique para enviar (opcional)"}
            </span>
            <input
              type="file"
              name="grade9Certificate"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );

  const renderFormStep = () => {
    if (currentStep === 1) return renderLevelSelection();
    if (currentStep === 2) return renderStudentInfo();

    if (selectedLevel === "1-6") {
      if (currentStep === 3) return renderParentInfo();
    } else if (selectedLevel === "7-9") {
      if (currentStep === 3) return renderPreviousCertificate();
    } else if (selectedLevel === "10-13") {
      if (currentStep === 3) return renderGuardianInfo();
      if (currentStep === 4) return renderPreviousCertificate();
    } else if (selectedLevel === "transfer") {
      if (currentStep === 3) return renderGuardianInfo();
      if (currentStep === 4) return renderTransferInfo();
    }

    return null;
  };

  const handleNext = () => {
    if (currentStep < getTotalSteps()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
      <div className="space-y-8 p-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Cadastro de Alunos
            </h1>
            <p className="text-muted-foreground">
              Registre novos alunos no sistema com formulários específicos por
              nível acadêmico
            </p>
          </div>
          <Button
            onClick={() => setShowModal(true)}
            className="gap-2 bg-[#5856eb] text-white rounded-full hover:cursor-pointer hover:bg-[#5856eb] hover:text-white"
          >
            <Plus className="w-4 h-4" />
            Novo Aluno
          </Button>
        </div>

        {/* Modal */}
        <Modal
          isOpen={showModal}
          onClose={() => {
            resetForm();
          }}
          title={
            selectedLevel === null
              ? "Selecionar Nível Acadêmico"
              : `Cadastro de Aluno - Passo ${currentStep} de ${getTotalSteps()}`
          }
          size="xl"
        >
          <div className="space-y-6">
            {/* Progress Bar */}
            {selectedLevel !== null && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Progresso</span>
                  <span>
                    {currentStep} de {getTotalSteps()}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-[#5856eb] h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(currentStep / getTotalSteps()) * 100}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Form Content */}
            <div>{renderFormStep()}</div>

            {/* Buttons */}
            <div className="flex justify-between gap-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="bg-blue-600 text-white rounded-full hover:bg-blue-500 hover:text-white hover:cursor-pointer"
              >
                Anterior
              </Button>

              {currentStep === getTotalSteps() ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 gap-2 hover:cursor-pointer rounded-full"
                >
                  <Check className="w-4 h-4" />
                  Registrar Aluno
                </Button>
              ) : (
                <Button onClick={handleNext} className="gap-2 bg-green-600 hover:bg-green-700 hover:cursor-pointer">
                  Próximo
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </Modal>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                Documentos Necessários
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Classes 1-6:</strong> Certidão de nascimento, cartão de
                vacina, comprovativo de morada
              </p>
              <p>
                <strong>Classes 7-9:</strong> Documentos acima + Declaração das
                classes anteriores
              </p>
              <p>
                <strong>Classes 10-13:</strong> Todos os anteriores + Declaração
                da 9ª classe
              </p>
              <p>
                <strong>Transferência:</strong> Pedido de transferência + Todos
                os documentos anteriores
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-green-600" />
                Informações Adicionais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                O número de estudante é gerado automaticamente com base no ano
                atual
              </p>
              <p>
                Todos os campos marcados com * são obrigatórios para o
                prosseguimento
              </p>
              <p>
                Os dados dos pais/encarregados variam conforme o nível
                acadêmico
              </p>
              <p>
                Após o registro, o aluno receberá um email de confirmação
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
