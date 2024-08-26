'use client'

import React from 'react';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from '@/app/providers/CartContext';

export const CartPreview: React.FC = () => {
  const { items, getCartTotal } = useCart();

  return (
    <div className="p-4 w-64">
      <h2 className="text-lg font-bold mb-2">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Image src={item.imageUrl} alt={item.name} width={30} height={30} className="mr-2" />
                <p className="text-sm">{item.name}</p>
              </div>
              <p className="text-sm">{item.quantity}x</p>
            </div>
          ))}
          {items.length > 3 && (
            <p className="text-sm">And {items.length - 3} more items...</p>
          )}
          <div className="mt-2">
            <p className="text-sm font-bold">Total: {getCartTotal().toLocaleString()} Ft</p>
          </div>
          <Link href="/cart" passHref>
            <Button className="w-full mt-2">View Full Cart</Button>
          </Link>
        </>
      )}
    </div>
  );
};