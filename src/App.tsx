import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { ChildDetailsForm } from './components/ChildDetailsForm';
import { ParentsForm } from './components/ParentsForm';
import { ContactForm } from './components/ContactForm';
import { DocumentsForm } from './components/DocumentsForm';
import { PaymentForm } from './components/PaymentForm';
import { BirthCertificate } from './components/BirthCertificate';
import { Step, RegistrationFormData } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('child');
  const [formData, setFormData] = useState<Partial<RegistrationFormData>>({});
  const [isPaid, setIsPaid] = useState(false);
  const [isDocumentsUploaded, setIsDocumentsUploaded] = useState(false);

  const updateFormData = (newData: Partial<RegistrationFormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleNext = () => {
    switch (currentStep) {
      case 'child':
        setCurrentStep('parents');
        break;
      case 'parents':
        setCurrentStep('contact');
        break;
      case 'contact':
        setCurrentStep('documents');
        break;
      case 'documents':
        if (isDocumentsUploaded && isPaid) {
          setCurrentStep('review');
        }
        break;
      default:
        break;
    }
  };

  const handlePrevious = () => {
    switch (currentStep) {
      case 'parents':
        setCurrentStep('child');
        break;
      case 'contact':
        setCurrentStep('parents');
        break;
      case 'documents':
        setCurrentStep('contact');
        break;
      case 'review':
        setCurrentStep('documents');
        break;
      default:
        break;
    }
  };

  const handlePaymentComplete = () => {
    setIsPaid(true);
  };

  const handleDocumentsComplete = () => {
    setIsDocumentsUploaded(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ProgressBar currentStep={currentStep} />
            
            <div className="mt-8">
              {currentStep === 'child' && (
                <ChildDetailsForm
                  data={formData}
                  onUpdate={updateFormData}
                />
              )}
              {currentStep === 'parents' && (
                <ParentsForm
                  data={formData}
                  onUpdate={updateFormData}
                />
              )}
              {currentStep === 'contact' && (
                <ContactForm
                  data={formData}
                  onUpdate={updateFormData}
                />
              )}
              {currentStep === 'documents' && (
                <div className="space-y-8">
                  {!isPaid && (
                    <PaymentForm
                      amount={5000}
                      onPaymentComplete={handlePaymentComplete}
                    />
                  )}
                  {isPaid && (
                    <DocumentsForm
                      data={formData}
                      onUpdate={updateFormData}
                      onComplete={handleDocumentsComplete}
                    />
                  )}
                </div>
              )}
              {currentStep === 'review' && (
                <BirthCertificate data={formData as RegistrationFormData} />
              )}
              
              <div className="mt-8 flex justify-between">
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={currentStep === 'child'}
                >
                  Previous
                </button>
                {currentStep !== 'review' && (
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={currentStep === 'documents' && (!isPaid || !isDocumentsUploaded)}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Need Help?</h3>
            <p className="mt-2 text-sm text-gray-600">
              If you need assistance with your birth certificate registration, please contact our support team:
            </p>
            <div className="mt-4 text-sm text-gray-600">
              <p>Email: support@birthregistry.gov.cm</p>
              <p>Phone: +237 123 456 789</p>
              <p>Working hours: Monday to Friday, 8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;