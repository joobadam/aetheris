import { Banner } from "@/components/Banner";
import Mid from "@/components/Mid";
import Popular from "@/components/Popular";
import Presentation from "@/components/Presentation";
import Promo from "@/components/Promo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner/>
      <Promo/>
      <Mid/>
      <Presentation/>
      <Popular/>
    </main>
  );
}
