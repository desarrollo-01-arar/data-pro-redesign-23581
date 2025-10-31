import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const dynamicWords = ["datos", "decisiones", "resultados"];
const typingText = "información clara";

export const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    setDisplayedText("");
    setIsTypingComplete(false);

    const typingInterval = setInterval(() => {
      if (!isDeleting && currentIndex < typingText.length) {
        // Escribiendo
        setDisplayedText(typingText.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === typingText.length) {
          setIsTypingComplete(true);
          setTimeout(() => {
            isDeleting = true;
          }, 2000); // Pausa de 2 segundos cuando termina de escribir
        }
      } else if (isDeleting && currentIndex > 0) {
        // Borrando
        setIsTypingComplete(false);
        currentIndex--;
        setDisplayedText(typingText.slice(0, currentIndex));
        if (currentIndex === 0) {
          setTimeout(() => {
            isDeleting = false;
          }, 500); // Pequeña pausa antes de volver a escribir
        }
      }
    }, isDeleting ? 50 : 100); // Borrar más rápido que escribir

    return () => clearInterval(typingInterval);
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
            Decisiones inteligentes con{" "}
            <span className="text-primary dark:text-primary-glow relative inline-block">
              {displayedText}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-[0.9em] bg-primary dark:bg-primary-glow ml-1 align-middle"
                />
              )}
            </span>
          </h1>

          <div className="h-20 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-muted-foreground flex items-center gap-3 font-bold">
              Transforma tus{" "}
              <span className="relative inline-flex items-center justify-center min-w-[240px] px-6 py-1 rounded-xl bg-gradient-to-r from-primary/10 via-primary/20 to-accent/20 overflow-hidden backdrop-blur-sm border border-primary/20">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                    animate={{ 
                      y: 0, 
                      opacity: 1, 
                      filter: "blur(0px)",
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    exit={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                      backgroundPosition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    className="relative z-10 uppercase text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 100%"
                    }}
                  >
                    {dynamicWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-bold">
            Especialistas en analítica de datos, automatización de procesos y consultoría Siesa EE
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 0 0 rgba(var(--primary-rgb), 0)",
                  "0 0 20px 8px rgba(var(--primary-rgb), 0.15)",
                  "0 0 0 0 rgba(var(--primary-rgb), 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="rounded-md"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:shadow-glow transition-all group text-lg px-8 relative overflow-hidden"
              >
                <span className="relative z-10">Comienza ahora</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
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
