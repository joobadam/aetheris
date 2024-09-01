"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "@/app/providers/CartContext";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export function CheckoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { items, clearCart, setIsCartPreviewOpen } = useCart();
  const { toast } = useToast();
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  const handleCheckout = async () => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      toast({
        title: "Sign-in required",
        description: "You need to sign in to proceed with the payment.",
        variant: "destructive",
      });
      router.push("/sign-in?redirect=/cart");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          throw error;
        }
      }
    } catch (err) {
      console.error("Error in handleCheckout:", err);
      toast({
        title: "An error occurred",
        description:
          "Failed to initiate the payment process. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded) {
    return <Button disabled>Loading...</Button>;
  }

  return (
    <>
      {!isSignedIn && (
        <Alert className="mb-4">
          <AlertTitle>Sign-in Required</AlertTitle>
          <AlertDescription>
            You need to sign in to proceed with the payment. Click the button to
            sign in.
          </AlertDescription>
        </Alert>
      )}
      <Button
        onClick={handleCheckout}
        disabled={isLoading || items.length === 0}
        className="w-full"
      >
        {isLoading
          ? "Processing..."
          : isSignedIn
            ? "Proceed to payment"
            : "Sign in and pay"}
      </Button>
    </>
  );
}
