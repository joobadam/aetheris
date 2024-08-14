import React from 'react';
import { CreditCard, DollarSign, Landmark } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 mt-20">Payment Methods</h1>
      
      <p className="mb-6">
        At Aetheris Kft., we offer various payment methods to ensure a convenient shopping experience for our customers. Please review the following payment options available for your purchases:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <CreditCard className="w-8 h-8 mr-3 text-blue-500" />
            <h2 className="text-2xl font-semibold">Credit/Debit Cards</h2>
          </div>
          <p>
            We accept major credit and debit cards, including:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Visa</li>
            <li>Mastercard</li>
            <li>American Express</li>
          </ul>
          <p className="mt-2">
            Your card information is securely processed and encrypted to ensure safe transactions.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Landmark className="w-8 h-8 mr-3 text-green-500" />
            <h2 className="text-2xl font-semibold">Bank Transfer</h2>
          </div>
          <p>
            You can make a direct bank transfer to our company account. Please use your order number as the payment reference.
          </p>
          <p className="mt-2">
            Our bank details:
          </p>
          <p className="mt-2">
            Bank: Hungarian National Bank<br />
            Account Name: Aetheris Kft.<br />
            IBAN: HU12 3456 7890 1234 5678<br />
            SWIFT/BIC: HUNBHUHB
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <DollarSign className="w-8 h-8 mr-3 text-yellow-500" />
            <h2 className="text-2xl font-semibold">Cash on Delivery</h2>
          </div>
          <p>
            For orders within Hungary, we offer a cash on delivery option. You can pay in cash when your package is delivered.
          </p>
          <p className="mt-2">
            Please note that a small additional fee may apply for this service.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Payment Security</h2>
        <p>
          At Aetheris Kft., we prioritize the security of your payment information. All transactions are processed through secure and encrypted connections to protect your personal and financial data.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Questions About Payment?</h2>
        <p>
          If you have any questions about our payment methods or encounter any issues during the payment process, please don't hesitate to contact our customer support:
        </p>
        <p className="mt-2">
          Email: support@aetheris.com<br />
          Phone: +36 1 234 5678<br />
          Business Hours: Monday to Friday, 9:00 AM - 5:00 PM CET
        </p>
      </div>
    </div>
  );
};

export default PaymentMethods;