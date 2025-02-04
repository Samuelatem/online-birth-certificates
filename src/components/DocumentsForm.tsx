import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { RegistrationFormData } from '../types';

interface DocumentsFormProps {
  data: Partial<RegistrationFormData>;
  onUpdate: (data: Partial<RegistrationFormData>) => void;
  onComplete: () => void;
}

export function DocumentsForm({ onComplete }: DocumentsFormProps) {
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, File | null>>({
    hospitalDoc: null,
    parentId: null,
    proofOfResidence: null
  });

  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (docType: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedDocs(prev => ({
        ...prev,
        [docType]: e.target.files![0]
      }));
    }
  };

  const handleUpload = async () => {
    setIsUploading(true);
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUploading(false);
    onComplete();
  };

  const isComplete = Object.values(uploadedDocs).every(doc => doc !== null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Required Documents</h2>
        <p className="mt-1 text-sm text-gray-600">
          Please upload clear, legible scans or photos of the following documents
        </p>
      </div>

      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-gray-900">Hospital Birth Document</h3>
          <p className="text-sm text-gray-500 mt-1">Birth notification or discharge summary from the hospital</p>
          <div className="mt-3">
            {uploadedDocs.hospitalDoc ? (
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>{uploadedDocs.hospitalDoc.name}</span>
              </div>
            ) : (
              <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none">
                <div className="flex flex-col items-center space-y-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Click to upload document</span>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange('hospitalDoc')}
                />
              </label>
            )}
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-gray-900">Parent's ID</h3>
          <p className="text-sm text-gray-500 mt-1">Valid government-issued ID of either parent</p>
          <div className="mt-3">
            {uploadedDocs.parentId ? (
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>{uploadedDocs.parentId.name}</span>
              </div>
            ) : (
              <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none">
                <div className="flex flex-col items-center space-y-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Click to upload document</span>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange('parentId')}
                />
              </label>
            )}
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-gray-900">Proof of Residence</h3>
          <p className="text-sm text-gray-500 mt-1">Utility bill or rental agreement</p>
          <div className="mt-3">
            {uploadedDocs.proofOfResidence ? (
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>{uploadedDocs.proofOfResidence.name}</span>
              </div>
            ) : (
              <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none">
                <div className="flex flex-col items-center space-y-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Click to upload document</span>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange('proofOfResidence')}
                />
              </label>
            )}
          </div>
        </div>
      </div>

      {!isComplete && (
        <div className="flex items-start p-4 bg-yellow-50 rounded-md">
          <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
          <p className="ml-3 text-sm text-yellow-700">
            Please upload all required documents before proceeding
          </p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!isComplete || isUploading}
        className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isUploading ? (
          <>
            <span className="animate-spin mr-2">⌛</span>
            Uploading...
          </>
        ) : (
          'Upload Documents'
        )}
      </button>
    </div>
  );
}