"use client";

import { useStripe } from "@/app/hooks/useStripe";

export default function CheckoutClient() {
  const { createPaymentStripeCheckout } = useStripe();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold">Pagamentos</h1>
      <button
        className="p-4 border rounded-md cursor-pointer"
        onClick={() => createPaymentStripeCheckout({ testeId: "123" })}
      >
        Checkout
      </button>
    </div>
  );
}
