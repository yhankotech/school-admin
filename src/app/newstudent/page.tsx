"use client"
import React from 'react';

const StudentParentForm: React.FC = () => {
  return (
    <div className="container pl-4 flex flex-col justify-center space-x-8">
      {/* Student Details */}
      <div className="bg-white w-[67rem] rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-600">New Student</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-2">
            <div className='flex space-x-3'>
              <label>Gerar número de estudante</label>
              <button className="bg-[#5856eb] hover:bg-[#3e3bf0] w-[6rem] text-white px-4 h-8 rounded-[8px] hover:cursor-pointer">
                Gerar
              </button>
            </div>
            <input type="text" value="1234hs" className="border rounded-lg p-2 w-[20rem]" />
          </div>
          <div className="flex flex-col">
            <label>First Name</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Cíclo</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Curso</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Turma</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Certidão de nascimento ou BI</label>
            <input type="file" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Certificado ou declaração</label>
            <input type="file" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Vacina</label>
            <input type="file" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input type="email" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Phone</label>
            <input type="tel" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Comprovativo</label>
            <input type="file" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col h-[8rem] space-y-4">
            <label>Password</label>
            <div className="flex flex-col space-y-4">
              <input type="password" name="password" className="h-8 border border-gray-200 rounded-[8px] p-2" />
              <input type="password" name="password" className="h-8 border border-gray-200 rounded-[8px] p-2" />
            </div>
          </div>
        </form>
      </div>

      {/* Parent Details */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-[67rem]">
        <h2 className="text-2xl font-bold text-purple-600">Parent Details</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <label>First Name</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input type="email" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Phone</label>
            <input type="tel" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>BI</label>
            <input type="file" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col h-[8rem] space-y-4">
            <label>Password</label>
            <div className="flex flex-col space-y-4">
              <input type="password" name="password" className="h-8 border border-gray-200 rounded-[8px] p-2" />
              <input type="password" name="password" className="h-8 border border-gray-200 rounded-[8px] p-2" />
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 w-[16rem] text-white px-4 py-2 rounded-lg hover:cursor-pointer">Registrar</button>
      </div>
    </div>
  );
};

export default StudentParentForm;