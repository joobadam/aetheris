import React from 'react';
import { Truck, CircleDollarSign, CalendarCheck } from 'lucide-react';

export const Guarantee = () => {
  const guaranteeData = [
    {
      icon: <Truck />,
      title: 'free shipping',
      description: 'Free shipping on orders over 25,000 forints.',
    },
    {
      icon: <CircleDollarSign />,
      title: 'money-back guarantee',
      description: 'We guarantee a 100% refund.​',
    },
    {
      icon: <CalendarCheck />,
      title: 'phone and online customer service',
      description: 'Every day from 10 AM to 7 PM Email: contact@aetheris.hu',
    },
  ];

  return (
    <div className='w-full p-5 grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3'>
      {guaranteeData.map((item, index) => (
        <div key={index} className='flex gap-2 py-8'>
          {item.icon}
          <div>
            <h4 className='uppercase font-bold'>{item.title}</h4>
            <p className='text-xs text-muted-foreground'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};