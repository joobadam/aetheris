"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useCart } from '@/app/providers/CartContext'

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart()
  const [hasCleared, setHasCleared] = useState(false);

  useEffect(() => {
    if (!hasCleared && sessionId) {
      clearCart();
      setHasCleared(true);
    }
  }, [clearCart, sessionId, hasCleared]);

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center text-center">
      <Card className="p-8 rounded-lg shadow-lg max-w-md w-full">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Successful Payment!</h1>
        <p className="text-lg mb-2">Thank you for your purchase.</p>
        <p className="text-sm text-foreground mb-6">
          Your order is being processed.
        </p>
        <p className="text-sm">Order ID: </p>
        <p className="text-xs mb-14 break-all">{sessionId}</p>
        <Button onClick={() => router.push("/")} className="w-full">
          Back to Homepage
        </Button>
      </Card>
    </div>
  );
}