import { Hero } from "@/components/Hero";
import { OpenDayActivities } from "@/components/OpenDayActivities";
import { WhyLeonardo } from "@/components/WhyLeonardo";
import { RegistrationForm } from "@/components/RegistrationForm";
import { PracticalInfo, Footer } from "@/components/PracticalInfo";
import { Reviews } from "@/components/Reviews";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <main className="w-full min-w-0 flex-1 overflow-x-hidden">
      <Hero />
      <OpenDayActivities />
      <WhyLeonardo />
      <Reviews />
      <RegistrationForm />
      <PracticalInfo />
      <Footer />
      <StickyCta />
    </main>
  );
}
