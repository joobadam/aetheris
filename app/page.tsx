import { Banner } from "@/components/Banner";
import Mid from "@/components/Mid";
import Popular from "@/components/Popular";
import Promo from "@/components/Promo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner/>
      <Promo/>
      <Mid/>
      <Popular/>
    </main>
  );
}
