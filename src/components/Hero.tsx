import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

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
      {/* Enhanced Breathing Background */}
      <div className="absolute inset-0 bg-background">
        {/* Larger, more vibrant gradient orbs */}
        <div className="absolute top-[-25%] left-[5%] w-[800px] h-[800px] bg-gradient-breathing animate-breathing-slow opacity-70 blur-3xl" />
        <div className="absolute bottom-[-15%] right-[10%] w-[700px] h-[700px] bg-gradient-breathing animate-breathing opacity-60 blur-3xl" />
        <div className="absolute top-[35%] left-[-15%] w-[600px] h-[600px] bg-gradient-wave-1 animate-float-soft opacity-50 blur-2xl" />
        <div className="absolute bottom-[15%] right-[-10%] w-[650px] h-[650px] bg-gradient-wave-2 animate-breathing-slow opacity-55 blur-2xl" />
        
        {/* Accent light rays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Decisiones inteligentes con{" "}
            <span className="relative inline-block group">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-pulse-glow font-extrabold drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                información clara
              </span>
              {/* Neon glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-40 blur-xl animate-pulse-glow" />
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-primary-glow animate-pulse-glow" />
              <Sparkles className="absolute -bottom-2 -left-8 w-5 h-5 text-accent animate-pulse-glow" />
            </span>
          </motion.h1>

          <motion.div 
            className="h-24 flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-muted-foreground flex items-center gap-3 font-bold">
              Transforma tus{" "}
              <span className="relative inline-flex items-center justify-center min-w-[240px] px-8 py-3 rounded-2xl bg-gradient-to-r from-primary/20 via-primary-glow/20 to-accent/30 overflow-hidden backdrop-blur-sm border-2 border-primary/30 shadow-elegant">
                {/* Animated background shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-glow/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: -25, opacity: 0, filter: "blur(8px)", scale: 0.9 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1, 
                      filter: "blur(0px)",
                      scale: 1,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    exit={{ y: 25, opacity: 0, filter: "blur(8px)", scale: 0.9 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                      backgroundPosition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    className="relative z-10 uppercase text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
                    style={{
                      backgroundSize: "200% 100%"
                    }}
                  >
                    {dynamicWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-semibold leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Especialistas en analítica de datos, automatización de procesos y consultoría Siesa EE
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 0 0 hsl(var(--primary) / 0)",
                  "0 0 35px 10px hsl(var(--primary-glow) / 0.25)",
                  "0 0 0 0 hsl(var(--primary) / 0)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="rounded-lg"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:shadow-glow transition-all group text-lg px-10 py-6 text-white font-bold relative overflow-hidden border border-primary-glow/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Comienza ahora
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%", skewX: -20 }}
                  whileHover={{ 
                    x: "200%",
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                />
                {/* Glow pulse */}
                <motion.div
                  className="absolute inset-0 bg-primary-glow/20 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document.querySelector("#casos-exito")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-lg px-10 py-6 border-2 border-primary/40 hover:border-primary hover:bg-primary/15 hover:text-primary dark:hover:text-primary-glow hover:shadow-elegant transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                Ver soluciones
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
