import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 mt-20">PRIVACY POLICY</h1>

      <p className="mb-4">
        This Privacy Policy describes how Aetheris Kft. (registered office: Szabo utca 1., H-1097 Budapest; company registration number: 07-09-386; short company name: Aetheris Kft.; represented by: Don Diab general manager) collects, uses, and shares your personal information.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information you provide directly to us, such as when you:</p>
        <ul className="list-disc pl-6">
          <li>Create an account</li>
          <li>Make a purchase</li>
          <li>Sign up for our newsletter</li>
          <li>Contact our customer service</li>
        </ul>
        <p className="mt-4">This information may include:</p>
        <ul className="list-disc pl-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Postal address</li>
          <li>Phone number</li>
          <li>Payment information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6">
          <li>Process your orders and payments</li>
          <li>Communicate with you about your orders, products, and services</li>
          <li>Send you marketing communications</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
        <p className="mb-4">We may share your information with:</p>
        <ul className="list-disc pl-6">
          <li>Service providers who perform services on our behalf</li>
          <li>Business partners, with your consent</li>
          <li>Law enforcement or other authorities, when required by law</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction or damage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing of your information</li>
          <li>Request restriction of processing</li>
          <li>Data portability</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <address className="not-italic">
          Aetheris Kft.<br />
          Szabo utca 1.<br />
          H-1097 Budapest<br />
          Email: privacy@aetheris.com<br />
          Phone: +36 1 234 5678
        </address>
      </section>

      <p className="mt-8">
        Last updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
      </p>
    </div>
  );
};

export default PrivacyPolicy;