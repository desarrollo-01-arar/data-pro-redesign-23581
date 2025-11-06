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
  { value: 200, label: "Dashboard interactivos en Power BI", suffix: "+" },
  { value: 25, label: "Consultorias en implementaciones de Siesa EE", suffix: "+" },
  { value: 110, label: "Procesos automatizados exitosos", suffix: "+" },
];

const CounterAnimation = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 1000;
    
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
    <div ref={ref} className="text-5xl font-bold text-primary-glow">
      {count}{suffix}
    </div>
  );
};

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Premium Breathing Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-gradient-breathing animate-breathing-slow opacity-60" />
        <div className="absolute bottom-[-10%] right-[15%] w-[500px] h-[500px] bg-gradient-breathing animate-breathing opacity-50" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-gradient-wave-1 animate-float-soft opacity-40" />
        <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] bg-gradient-wave-2 animate-breathing-slow opacity-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center max-w-6xl mx-auto">          

          {/* left side - Content mejorado */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Decisiones inteligentes con <br />{" "}
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
                    className="inline-block w-0.5 h-[0.9em] ml-1 align-middle bg-gradient-to-b from-primary to-accent"
                  />
                )}
              </motion.span>
            </h1>

            <div className="min-h-[140px] flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl text-muted-foreground flex flex-col items-center lg:items-start gap-2 font-bold">
                <span>Transformando tus datos en</span>
                <span className="relative inline-flex items-center justify-center min-w-[280px] px-8 py-2 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 overflow-hidden backdrop-blur-md border-2 border-primary/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  {/* Efecto de brillo de fondo */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 dark:via-primary/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      initial={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                      animate={{ 
                        y: 0, 
                        opacity: 1, 
                        filter: "blur(0px)",
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      exit={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                      transition={{
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1],
                        backgroundPosition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                      className="relative z-10 uppercase text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg"
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

            <p className="text-lg sm:text-xl text-muted-foreground font-semibold max-w-2xl mx-auto lg:mx-0">
              Especialistas en analítica de datos, automatización de procesos y consultoría Siesa EE
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-2">
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
          </motion.div>

          {/* right side - Logo con métricas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-12 items-center justify-center max-lg:hidden"
          >
            {/* Logo con efectos mejorados */}
            <div className="relative w-full max-w-lg">
              {/* Glow background más intenso */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/20 dark:from-primary/40 dark:via-accent/30 dark:to-primary/40 rounded-full blur-[100px]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Logo con animación mejorada */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <motion.img
                  src={logoDark}
                  alt="DataPro Logo"
                  className="dark:hidden w-80 mx-auto"
                  animate={{
                    filter: [
                      "drop-shadow(0 20px 40px rgba(34, 211, 238, 0.3))",
                      "drop-shadow(0 25px 50px rgba(34, 211, 238, 0.5))",
                      "drop-shadow(0 20px 40px rgba(34, 211, 238, 0.3))"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src={logoLight}
                  alt="DataPro Logo"
                  className="w-80 hidden dark:block mx-auto"
                  animate={{
                    filter: [
                      "drop-shadow(0 20px 40px rgba(34, 211, 238, 0.3))",
                      "drop-shadow(0 25px 50px rgba(34, 211, 238, 0.5))",
                      "drop-shadow(0 20px 40px rgba(34, 211, 238, 0.3))"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Partículas decorativas */}
              <motion.div
                className="absolute top-1/4 -left-4 w-3 h-3 bg-primary rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/3 -right-6 w-4 h-4 bg-accent rounded-full"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>

            {/* Metrics Cards - Ahora aquí */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 sm:gap-4 w-full items-center max-w-lg"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="p-4 sm:p-6 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] group relative overflow-hidden">
                    {/* Efecto de brillo al hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="space-y-2 relative z-10">
                      <CounterAnimation value={metric.value} suffix={metric.suffix} />
                      <p className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors">
                        {metric.label}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};