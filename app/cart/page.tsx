'use client'

import React from 'react';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from '../providers/CartContext';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="container mx-auto p-4 min-h-[60vh]">
        <div className='mt-20'>
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      {items.length === 0 ? (
        <div className='text-center mt-20'>
          <p>Your cart is empty.</p>
          <Link href="/" passHref>
            <Button className="mt-4">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="mr-4" />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.price.toLocaleString()} Ft</p>
                </div>
              </div>
              <div className="flex items-center">
                <Button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  variant="outline"
                  size="sm"
                >-</Button>
                <span className="mx-2">{item.quantity}</span>
                <Button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  variant="outline"
                  size="sm"
                >+</Button>
                <Button 
                  onClick={() => removeItem(item.id)} 
                  size="sm"
                  className="ml-4 bg-red-500 text-white hover:text-black"
                >Remove</Button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-2xl font-bold">Total: {getCartTotal().toLocaleString()} Ft</p>
            <Button className="mt-4">Proceed to Checkout</Button>
          </div>
        </>
      )}
      </div>
    </div>
  );
}