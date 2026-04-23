import { Header } from "@/components/Header";
import { Tickets } from "@/components/Tickets";
import { Footer } from "@/components/Footer";

const TicketsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Tickets />
      </main>
      <Footer />
    </div>
  );
};

export default TicketsPage;