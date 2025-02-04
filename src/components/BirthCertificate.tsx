import React from 'react';
import { RegistrationFormData } from '../types';
import { Download } from 'lucide-react';

interface BirthCertificateProps {
  data: RegistrationFormData;
}

export function BirthCertificate({ data }: BirthCertificateProps) {
  const handleDownload = () => {
    // In a real app, this would trigger a PDF download
    alert('Birth certificate download started');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-indigo-600">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Republic of Cameroon</h1>
          <h2 className="text-xl font-semibold text-gray-700 mt-2">Certificate of Birth</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{data.childName}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Date of Birth</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {new Date(data.dateOfBirth).toLocaleDateString('en-GB')}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Place of Birth</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{data.placeOfBirth}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Gender</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Parents Information</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Father's Name</h4>
                <p className="mt-1 text-lg font-medium text-gray-900">{data.fatherName}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Mother's Name</h4>
                <p className="mt-1 text-lg font-medium text-gray-900">{data.motherName}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Registration Number</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date of Issue</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {new Date().toLocaleDateString('en-GB')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
}