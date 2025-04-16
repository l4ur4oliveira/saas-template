import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import CheckoutClient from "./checkout-client";

export default async function Checkout() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <CheckoutClient />;
}
