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
      {/* Premium Breathing Background */}
      <div className="absolute inset-0 bg-background">
        {/* Breathing gradient orbs */}
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-gradient-breathing animate-breathing-slow opacity-60" />
        <div className="absolute bottom-[-10%] right-[15%] w-[500px] h-[500px] bg-gradient-breathing animate-breathing opacity-50" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-gradient-wave-1 animate-float-soft opacity-40" />
        <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] bg-gradient-wave-2 animate-breathing-slow opacity-45" />
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
