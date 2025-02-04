import React from 'react';
import { BookCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookCheck size={32} />
            <div>
              <h1 className="text-2xl font-bold">Birth Certificate Registration</h1>
              <p className="text-indigo-200">Republic of Cameroon</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-indigo-200 transition-colors">Home</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Track Application</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Help</a>
          </nav>
        </div>
      </div>
    </header>
  );
}