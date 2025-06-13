"use client"
// Importando as bibliotecas
import React from 'react';

// Componente AddNewTeacher
const AddNewTeacher: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 p-5">Add New Teacher</h1>
        
        <div className="bg-indigo-600 text-white p-5 rounded-t-lg">
          <h2 className="text-lg font-semibold">Personal Details</h2>
        </div>
        
        <div className="p-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name *</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" placeholder="Name" />
            </div>
            <div>
              <label className="block text-gray-700">Last Name *</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" placeholder="Surname" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email *</label>
              <input type="email" className="mt-1 p-2 border rounded w-full" placeholder="example@email.com" />
            </div>
            <div>
              <label className="block text-gray-700">Phone *</label>
              <input type="tel" className="mt-1 p-2 border rounded w-full" placeholder="(xxx) xxx-xxxx" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Address</label>
              <textarea className="mt-1 p-2 border rounded w-full" rows={3} placeholder="Your address here..."></textarea>
            </div>

            <div>
              <label className="block text-gray-700">Photo</label>
              <div className="border-dashed border-2 border-gray-300 rounded p-4 flex items-center justify-center text-gray-400">
                Drag and drop a file here
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Date of Birth *</label>
              <input type="date" className="mt-1 p-2 border rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700">Place of Birth *</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" placeholder="City, Country" />
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 text-white p-5 rounded-t-lg">
          <h2 className="text-lg font-semibold">Education</h2>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">University *</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" placeholder="University Name" />
            </div>
            <div>
              <label className="block text-gray-700">Degree *</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" placeholder="Bachelor's, Master's, etc." />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Start & End Date *</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" placeholder="Start - End" />
            </div>
            <div>
              <label className="block text-gray-700">City *</label>
              <input type="text" className="mt-1 p-2 border rounded w-full" placeholder="City Name" />
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <button className="bg-gray-300 text-gray-700 p-2 rounded">Save as Draft</button>
            <button className="bg-indigo-600 text-white p-2 rounded">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTeacher;