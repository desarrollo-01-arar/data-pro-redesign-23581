import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
const dynamicWords = ["datos", "decisiones", "resultados"];
export const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Smooth animated gradient background with color fade-in effect */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5 animate-color-fade-in" />
        <div className="absolute inset-0 bg-gradient-soft-blue animate-gradient-shift opacity-60" 
             style={{ backgroundSize: "200% 200%" }} />
        <div className="absolute inset-0 bg-gradient-soft-yellow animate-gradient-shift opacity-40"
             style={{ backgroundSize: "200% 200%", animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Decisiones inteligentes con <span className="text-primary dark:text-primary-glow">información clara</span>
          </h1>

          <div className="h-20 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-muted-foreground flex items-center gap-3 font-bold">
              Transforma tus{" "}
              <span className="relative inline-flex items-center justify-center min-w-[180px] h-12 px-4 rounded-xl bg-gradient-accent overflow-hidden uppercase text-3xl">
                <span
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                  className=""
                />
                <span
                  key={currentWordIndex}
                  className="relative z-10 text-accent-foreground font-bold animate-scale-out"
                >
                  {dynamicWords[currentWordIndex]}
                </span>
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-bold">
            Especialistas en analítica de datos, automatización de procesos y consultoría Siesa EE
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-primary hover:shadow-glow transition-all group text-lg px-8"
            >
              Comienza ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.querySelector("#casos-exito")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="text-lg px-8 border-2 hover:border-primary hover:bg-primary/10 hover:text-primary dark:hover:text-primary-glow hover:shadow-lg transition-all duration-300"
            >
              Ver soluciones
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
