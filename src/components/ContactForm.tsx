import React from 'react';
import { RegistrationFormData } from '../types';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactFormProps {
  data: Partial<RegistrationFormData>;
  onUpdate: (data: Partial<RegistrationFormData>) => void;
}

export function ContactForm({ data, onUpdate }: ContactFormProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
      <p className="text-sm text-gray-600">Please provide your contact details for communication regarding the registration.</p>
      
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={data.email || ''}
            onChange={(e) => onUpdate({ email: e.target.value })}
            className="pl-11 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Email address"
            required
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            value={data.phone || ''}
            onChange={(e) => onUpdate({ phone: e.target.value })}
            className="pl-11 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Phone number"
            required
          />
          <p className="mt-1 text-sm text-gray-500">Format: +237 XXX XXX XXX</p>
        </div>
        
        <div className="relative">
          <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            value={data.address || ''}
            onChange={(e) => onUpdate({ address: e.target.value })}
            rows={3}
            className="pl-11 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Full address"
            required
          />
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-md p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Mail className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Communication Preference</h3>
            <p className="mt-2 text-sm text-blue-700">
              Important updates about your registration will be sent to both your email and phone number. Please ensure they are accurate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}