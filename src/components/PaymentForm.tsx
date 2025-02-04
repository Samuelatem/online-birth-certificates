import React, { useState } from 'react';
import { Phone, AlertCircle } from 'lucide-react';

interface PaymentFormProps {
  onPaymentComplete: () => void;
  amount: number;
}

export function PaymentForm({ onPaymentComplete, amount }: PaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'mtn' | 'orange' | ''>('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      setError('Please select a payment method');
      return;
    }

    if (!phoneNumber.match(/^(237|)\d{9}$/)) {
      setError('Please enter a valid Cameroon phone number (9 digits)');
      return;
    }

    setError('');
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    onPaymentComplete();
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Mobile Money Payment</h2>
        <div className="mb-6">
          <p className="text-lg font-medium">Amount to Pay: {amount.toLocaleString()} FCFA</p>
          <p className="text-sm text-gray-500">Registration fee for birth certificate</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Payment Method
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('mtn')}
                className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-colors ${
                  paymentMethod === 'mtn'
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-gray-200 hover:border-yellow-500'
                }`}
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold">MTN</span>
                </div>
                <span className="text-sm font-medium">MTN Mobile Money</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('orange')}
                className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-colors ${
                  paymentMethod === 'orange'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-500'
                }`}
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold">OM</span>
                </div>
                <span className="text-sm font-medium">Orange Money</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Money Number</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g., 677123456"
                className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">Enter your {paymentMethod === 'mtn' ? 'MTN' : 'Orange'} number</p>
          </div>

          {error && (
            <div className="flex items-center p-4 bg-red-50 rounded-md">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <p className="ml-3 text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="bg-blue-50 rounded-md p-4">
            <p className="text-sm text-blue-700">
              After clicking "Pay Now", you will receive a prompt on your phone to confirm the payment of {amount.toLocaleString()} FCFA.
            </p>
          </div>

          <button
            type="submit"
            disabled={isProcessing || !paymentMethod}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <span className="animate-spin mr-2">⌛</span>
                Processing...
              </>
            ) : (
              'Pay Now'
            )}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Secured by {paymentMethod === 'mtn' ? 'MTN MoMo' : 'Orange Money'} Payment Gateway
          </p>
        </div>
      </div>
    </div>
  );
}