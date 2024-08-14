"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Youtube, X } from "lucide-react";

const navigation = {
  contactInformation: [
    { name: "Aetheris Kft." },
    { name: "ID Number: 07-09-386" },
    { name: "VAT Number: 11113-1-43" },
    { name: "Szabo street 1" },
    { name: "1097 Budapest" },
    { name: "Hungary" },
    { name: "e-mail: contact@aetheris.hu" },
  ],
  workDaysHours: [
    { name: "Aetheris web shop works 00-24 / 365 days in year" },
    { name: "Contact center: Work days" },
  ],
  additionalInformation: [
    { name: "Reclamations", href: "/reclamations" },
    { name: "General terms of business", href: "/terms" },
    { name: "Privacy policy", href: "/policy" },
  ],
  paymentAndShipping: [
    { name: "Payment methods", href: "/payment" },
    { name: "Shipping information", href: "/shipping" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "X",
      href: "#",
      icon: X,
    },
    {
      name: "YouTube",
      href: "#",
      icon: Youtube,
    },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer aria-labelledby="footer-heading" className="bg-background">
        <Separator />

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary">
                  Contact Information
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.contactInformation.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm leading-6 text-muted-foreground ">
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-primary">
                  Work Days/Hours
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.workDaysHours.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm leading-6 text-muted-foreground ">
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary">
                  Additional Information
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.additionalInformation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-primary">
                  Payment and Shipping
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.paymentAndShipping.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-primary">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Sign up for our newsletter and find out among the first news we receive
            </p>
            <form onSubmit={handleSubmit} className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                id="email-address"
                name="email-address"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-64 xl:w-full"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-muted-foreground md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Joobadam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;