"use client"
import React, { useState, useEffect } from 'react';

// Tipos de dados para o aluno e encarregado de educação
interface StudentData {
  photo: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthCity: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
  dataCycle: 'initial' | 'mid-term' | 'final';
}

interface ParentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: 'cash' | 'debit';
}

// Dados simulados para diferentes ciclos
const initialStudentData: StudentData = {
  photo: '',
  firstName: 'João',
  lastName: 'Silva',
  birthDate: '2010-05-15',
  birthCity: 'Lisboa',
  parentName: 'Maria Silva',
  phone: '912345678',
  email: 'joao.silva@example.com',
  address: 'Rua Principal, 10',
  dataCycle: 'initial',
};

const initialParentData: ParentData = {
  firstName: 'Maria',
  lastName: 'Silva',
  email: 'maria.silva@example.com',
  phone: '912345678',
  address: 'Rua Principal, 10',
  paymentMethod: 'cash',
};

const midTermStudentData: StudentData = {
  ...initialStudentData,
  email: 'joao.s.updated@example.com', // Simulação de atualização
  address: 'Avenida Secundária, 25', // Simulação de atualização
  dataCycle: 'mid-term',
};

const finalStudentData: StudentData = {
  ...midTermStudentData,
  phone: '939876543', // Simulação de atualização
  dataCycle: 'final',
};

const midTermParentData: ParentData = {
  ...initialParentData,
  paymentMethod: 'debit', // Simulação de atualização
};

const finalParentData: ParentData = {
  ...midTermParentData,
  phone: '939876543', // Simulação de atualização
};

export default function StudentParentForm() {
  const [currentCycle, setCurrentCycle] = useState<StudentData['dataCycle']>('initial');
  const [studentData, setStudentData] = useState<StudentData>(initialStudentData);
  const [parentData, setParentData] = useState<ParentData>(initialParentData);

  // Função para simular o carregamento de dados com base no ciclo
  const loadDataByCycle = (cycle: StudentData['dataCycle']) => {
    setCurrentCycle(cycle);
    switch (cycle) {
      case 'initial':
        setStudentData(initialStudentData);
        setParentData(initialParentData);
        break;
      case 'mid-term':
        setStudentData(midTermStudentData);
        setParentData(midTermParentData);
        break;
      case 'final':
        setStudentData(finalStudentData);
        setParentData(finalParentData);
        break;
      default:
        setStudentData(initialStudentData);
        setParentData(initialParentData);
    }
  };

  // Efeito para carregar os dados iniciais
  useEffect(() => {
    loadDataByCycle('initial');
  }, []);

  // Handlers de mudança para os campos do aluno
  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStudentData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do Aluno Submetidos:', studentData);
    console.log('Dados do Encarregado de Educação Submetidos:', parentData);
    alert(`Dados do ciclo "${currentCycle}" submetidos com sucesso!`);
  };


  return (
    <form onSubmit={handleSubmit} className="container p-2">

      {/* Student Details */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-600">Editar dados do candidato</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <label>Foto</label>
            <div className="border-dashed border-2 border-gray-300 h-32 flex items-center justify-center text-gray-500">
              {studentData.photo ? 'Foto Carregada' : 'Arraste e solte ou clique para selecionar o ficheiro'}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstName">Primeiro Nome</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="border rounded-lg p-2"
              value={studentData.firstName}
              onChange={handleStudentChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Último Nome</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="border rounded-lg p-2"
              value={studentData.lastName}
              onChange={handleStudentChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthDate">Data de Nascimento</label>
            <input
              id="birthDate"
              name="birthDate"
              type="date"
              className="border rounded-lg p-2"
              value={studentData.birthDate}
              onChange={handleStudentChange}
              required
            />
            <label htmlFor="birthCity" className="mt-2">Local de Nascimento (Cidade) *</label>
            <input
              id="birthCity"
              name="birthCity"
              type="text"
              placeholder="Cidade"
              className="border rounded-lg p-2 mt-1"
              value={studentData.birthCity}
              onChange={handleStudentChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              className="border rounded-lg p-2"
              value={studentData.phone}
              onChange={handleStudentChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border rounded-lg p-2"
              value={studentData.email}
              onChange={handleStudentChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Morada</label>
            <textarea
              id="address"
              name="address"
              className="border rounded-lg p-2"
              rows={4}
              maxLength={200}
              value={studentData.address}
              onChange={handleStudentChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-150">Submeter</button>
      </div>
    </form>
  );
};