import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Dashboards } from "@/components/Dashboards";
import { Automation } from "@/components/Automation";
import { Consulting } from "@/components/Consulting";
import { SuccessCases } from "@/components/SuccessCases";
import { AboutUs } from "@/components/AboutUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Dashboards />
        <Automation />
        <Consulting />
        <SuccessCases />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
