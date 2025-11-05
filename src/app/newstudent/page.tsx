"use client"
import React from 'react';

const StudentParentForm: React.FC = () => {
  return (
    <div className="container p-2 ml-48">
      {/* Student Details */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-600">New Student</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <label>Photo *</label>
            <div className="border-dashed border-2 border-gray-300 h-32 flex items-center justify-center text-gray-500">
              Drag and drop or click here to select file
            </div>
          </div>
          <div className="flex flex-col">
            <label>First Name *</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Last Name *</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Date & Place of Birth *</label>
            <input type="date" className="border rounded-lg p-2" />
            <input type="text" placeholder="City" className="border rounded-lg p-2 mt-2" />
          </div>
          <div className="flex flex-col">
            <label>Parent Name *</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Phone *</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Email *</label>
            <input type="email" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Address *</label>
            <textarea className="border rounded-lg p-2" rows={4} maxLength={200} />
          </div>
        </div>
      </div>

      {/* Parent Details */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-600">Parent Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <label>First Name *</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Last Name *</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Email *</label>
            <input type="email" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Phone *</label>
            <input type="text" className="border rounded-lg p-2" />
          </div>
          <div className="flex flex-col">
            <label>Address *</label>
            <textarea className="border rounded-lg p-2" rows={4} maxLength={200} />
          </div>
          <div className="flex flex-col">
            <label>Payments *</label>
            <div className="flex items-center">
              <input type="radio" name="payment" value="cash" className="mr-2" /> Cash
              <input type="radio" name="payment" value="debit" className="ml-4 mr-2" /> Debit
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save as Draft</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
      </div>
    </div>
  );
};

export default StudentParentForm;