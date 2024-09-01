'use client'

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from '@/app/providers/CartContext';
import { X } from 'lucide-react';

export const CartPreview: React.FC = () => {
  const { items, getCartTotal, isCartPreviewOpen, setIsCartPreviewOpen } = useCart();

  if (!isCartPreviewOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-64 bg-secondary shadow-lg p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCartPreviewOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
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
            <Button 
              className="w-full mt-2"
              onClick={() => setIsCartPreviewOpen(false)}
            >
              View Full Cart
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};