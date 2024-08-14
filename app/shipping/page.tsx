import React from 'react';
import { Truck, Clock, Globe, Package } from 'lucide-react';

const ShippingInformation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 mt-20">Shipping Information</h1>
      
      <p className="mb-6">
        At Aetheris Kft., we strive to provide reliable and efficient shipping services to ensure your products reach you in perfect condition. Please review our shipping policies and options below:
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Globe className="w-6 h-6 mr-2" />
          Shipping Destinations
        </h2>
        <p>
          We currently ship to the following regions:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>All countries within the European Union</li>
          <li>United Kingdom</li>
          <li>Switzerland</li>
          <li>Norway</li>
        </ul>
        <p className="mt-2">
          For destinations outside these areas, please contact our customer support for availability and custom shipping quotes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Truck className="w-6 h-6 mr-2" />
          Shipping Methods
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Standard Shipping</h3>
            <p>Delivery within 3-5 business days</p>
            <p>Free for orders over €100</p>
            <p>€5.99 for orders under €100</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Express Shipping</h3>
            <p>Delivery within 1-2 business days</p>
            <p>€12.99 flat rate</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Clock className="w-6 h-6 mr-2" />
          Processing Time
        </h2>
        <p>
          Orders are typically processed within 1-2 business days. During peak seasons or promotional periods, processing times may be slightly longer. We will notify you if there are any unexpected delays in processing your order.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Package className="w-6 h-6 mr-2" />
          Order Tracking
        </h2>
        <p>
          Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package's progress on our website or the carrier's website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Customs and Import Duties</h2>
        <p>
          For shipments outside the European Union, please be aware that you may be responsible for paying customs fees, import duties, and taxes imposed by your country's customs authorities. These fees are not included in the purchase price or shipping costs and are the responsibility of the recipient.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Returns and Exchanges</h2>
        <p>
          If you're not completely satisfied with your purchase, you can return or exchange your items within 30 days of delivery. Please see our Returns and Exchanges policy for more details.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about our shipping policies or need assistance with a specific order, please don't hesitate to contact our customer support:
        </p>
        <p className="mt-2">
          Email: shipping@aetheris.com<br />
          Phone: +36 1 234 5678<br />
          Business Hours: Monday to Friday, 9:00 AM - 5:00 PM CET
        </p>
      </section>
    </div>
  );
};

export default ShippingInformation;