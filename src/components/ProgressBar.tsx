import React from 'react';
import { Step } from '../types';

interface ProgressBarProps {
  currentStep: Step;
}

const steps: { key: Step; label: string }[] = [
  { key: 'child', label: 'Child Details' },
  { key: 'parents', label: 'Parents Info' },
  { key: 'contact', label: 'Contact' },
  { key: 'documents', label: 'Documents' },
  { key: 'review', label: 'Review' },
];

export function ProgressBar({ currentStep }: ProgressBarProps) {
  const currentIndex = steps.findIndex(step => step.key === currentStep);

  return (
    <div className="w-full py-6">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.key} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentIndex
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index + 1}
            </div>
            <span className="mt-2 text-sm text-gray-600">{step.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-indigo-600 -translate-y-1/2 transition-all duration-300"
          style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}