import { Hero } from "@/components/Hero";
import { OpenDayActivities } from "@/components/OpenDayActivities";
import { WhyLeonardo } from "@/components/WhyLeonardo";
import { RegistrationForm } from "@/components/RegistrationForm";
import { PracticalInfo, Footer } from "@/components/PracticalInfo";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <OpenDayActivities />
      <WhyLeonardo />
      <RegistrationForm />
      <PracticalInfo />
      <Footer />
      <StickyCta />
    </main>
  );
}
