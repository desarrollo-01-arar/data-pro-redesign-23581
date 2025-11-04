import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { useTheme } from "next-themes";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import React from "react";

const dynamicWords = ["ventajas competitivas", "resultados inteligentes", "nuevas estrategias"];
const typingText = "información clara";

const metrics = [
  { value: 20, label: "Años de experiencia", suffix: "+" },
  { value: 100, label: "Proyectos exitosos", suffix: "+" },
  { value: 10, label: "Sectores atendidos", suffix: "+" },
];

const CounterAnimation = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
};

export const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText("");
    setIsTypingComplete(false);

    const typingInterval = setInterval(() => {
      if (currentIndex < typingText.length) {
        setDisplayedText(typingText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

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

  const logo = mounted && theme === "dark" ? logoLight : logoDark;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium Breathing Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-gradient-breathing animate-breathing-slow opacity-60" />
        <div className="absolute bottom-[-10%] right-[15%] w-[500px] h-[500px] bg-gradient-breathing animate-breathing opacity-50" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-gradient-wave-1 animate-float-soft opacity-40" />
        <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] bg-gradient-wave-2 animate-breathing-slow opacity-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Logo (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Gradient glow background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Logo with pulse animation */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src={logo}
                  alt="DataPro Logo"
                  className="w-full max-w-md drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Decisiones inteligentes con{" "}
              <motion.span 
                className="relative inline-block bg-gradient-to-r from-[hsl(210,100%,30%)] via-[hsl(200,100%,55%)] to-[hsl(210,100%,30%)] dark:from-[hsl(195,100%,35%)] dark:via-[hsl(195,100%,60%)] dark:to-[hsl(195,100%,35%)] bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {displayedText}
                {!isTypingComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-[0.9em] ml-1 align-middle"
                    style={{background: 'linear-gradient(to bottom, hsl(210 100% 30%), hsl(200 100% 55%))'}}
                  />
                )}
              </motion.span>
            </h1>

            <div className="min-h-[120px] flex items-center justify-center lg:justify-start">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground flex flex-col items-center lg:items-start gap-3 font-bold">
                <span>Transforma tus datos en</span>
                <span className="relative inline-flex items-center justify-center min-w-[240px] px-6 py-2 rounded-xl bg-gradient-to-r from-primary/10 via-primary/20 to-accent/20 overflow-hidden backdrop-blur-sm border border-primary/20">
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
                      className="relative z-10 uppercase text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
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

            <p className="text-base sm:text-lg text-muted-foreground font-semibold">
              Especialistas en analítica de datos, automatización de procesos y consultoría Siesa EE
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
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
                  className="bg-gradient-primary hover:shadow-glow transition-all group text-base sm:text-lg px-8 w-full sm:w-auto relative overflow-hidden"
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
                  document.querySelector("#casos")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-base sm:text-lg px-8 w-full sm:w-auto border-2 hover:border-primary hover:bg-primary/10 hover:text-primary dark:hover:text-primary-glow hover:shadow-lg transition-all duration-300"
              >
                Ver soluciones
              </Button>
            </div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {metrics.map((metric, index) => (
                <Card key={index} className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
                  <div className="space-y-2">
                    <CounterAnimation value={metric.value} suffix={metric.suffix} />
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                      {metric.label}
                    </p>
                  </div>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
