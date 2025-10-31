import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Database,
  Mail,
  FileText,
  BarChart3,
  Webhook,
  Calendar,
  MessageSquare,
  Timer,
  TrendingUp,
  Users,
  Bell,
  Bot,
  Cloud,
  FileSpreadsheet,
  Share2,
  Workflow
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import {
  SiMake,
  SiPython
} from "react-icons/si";

const automationExamples = [
  {
    icon: Mail,
    title: "Facturación Automática",
    description: "Envío automático de facturas del ERP o DMS por correo a clientes",
    color: "primary",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Mantente informado con notificaciones automáticas sobre respaldos, pagos vencidos y variaciones en los indicadores clave de tu negocio",
    color: "accent",
  },
  {
    icon: Database,
    title: "Sincronización de Datos",
    description: "Actualización automática de dashboards y bases de datos",
    color: "primary",
  },
  {
    icon: Users,
    title: "Gestión de Leads",
    description: "Registro automático desde formularios web y correos de bienvenida",
    color: "accent",
  },
  {
    icon: Webhook,
    title: "Integraciones API",
    description: "Conexión entre sistemas mediante webhooks y APIs REST",
    color: "primary",
  },
  {
    icon: Bot,
    title: "Bots y Mensajería",
    description: "Integración con Telegram, WhatsApp y publicación en redes",
    color: "accent",
  },
];

const rotatingPhrases = [
  "Aumenta la productividad y minimiza los errores mediante procesos automáticos diseñados para mantener tu negocio en movimiento todo el tiempo.",
  "Transforma la gestión de tu empresa con automatizaciones inteligentes que garantizan precisión, continuidad operativa y ahorro de tiempo.",
  "Impulsa la eficiencia de tu organización con procesos automatizados que operan 24/7, reducen errores y optimizan el uso de tus recursos.",
];

const technologies = [
  {
    name: "n8n",
    icon: Zap,
  },
  {
    name: "Power BI",
    icon: TrendingUp,
  },
  {
    name: "Slack",
    icon: Bell,
  },
  {
    name: "Siesa EE",
    icon: Database,
  },
  {
    name: "WhatsApp",
    icon: Bot,
  },
  {
    name: "Telegram",
    icon: Bot,
  },
  {
    name: "Google Drive",
    icon: Cloud,
  },
  {
    name: "APIs REST",
    icon: Webhook,
  },
];

export const Automation = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="automatizacion" className="py-20 relative overflow-hidden">
      {/* Smooth gradient background with enhanced flowing lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background">
        <div
          className="absolute inset-0 bg-gradient-soft-blue animate-gradient-shift opacity-50"
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Enhanced flowing lines */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[6%] left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-wave-slow shadow-glow" />
          <div className="absolute top-[25%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/70 to-transparent animate-wave-medium shadow-yellow-glow" />
          <div className="absolute top-[35%] left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/75 to-transparent animate-wave-fast shadow-glow" />
          <div className="absolute top-[50%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/80 to-transparent animate-wave-slow shadow-yellow-glow" />
          <div className="absolute top-[68%] left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/70 to-transparent animate-wave-medium shadow-glow" />
          <div className="absolute top-[80%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/75 to-transparent animate-wave-fast shadow-yellow-glow" />
          <div className="absolute top-[92%] left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/85 to-transparent animate-wave-slow shadow-glow" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-primary rounded-full mb-6 animate-pulse-glow">
            <Zap className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-primary dark:text-primary-glow">Automatización</span> de Procesos
          </h2>

          {/* Rotating phrases with smooth animation */}
          <div className="relative h-auto min-h-[140px] sm:min-h-[120px] md:min-h-[100px] max-w-3xl mx-auto overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPhraseIndex}
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 15 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground absolute inset-0 flex items-center justify-center text-center px-4"
                style={{ perspective: "1000px" }}
              >
                {rotatingPhrases[currentPhraseIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {rotatingPhrases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhraseIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentPhraseIndex
                  ? "w-8 bg-primary dark:bg-primary-glow"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                aria-label={`Go to phrase ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Automation Examples - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {automationExamples.map((example, index) => {
            const Icon = example.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className={`group cursor-pointer h-full border-2 hover:border-${example.color}/50 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-2 bg-gradient-to-br from-card via-card to-${example.color}/5`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`p-4 rounded-2xl bg-gradient-${example.color} mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-primary-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 group-hover:text-${example.color} transition-colors`}>
                      {example.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {example.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Automation Examples - Mobile Carousel */}
        <div className="md:hidden mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {automationExamples.map((example, index) => {
                const Icon = example.icon;
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="h-full"
                    >
                      <Card className={`group h-full border-2 hover:border-${example.color}/50 transition-all duration-300 hover:shadow-elegant bg-gradient-to-br from-card via-card to-${example.color}/5`}>
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className={`p-4 rounded-2xl bg-gradient-${example.color} mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-8 w-8 text-primary-foreground" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-primary-glow transition-colors">
                            {example.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                            {example.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Integrated Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            Integramos con las <span className="text-primary dark:text-primary-glow">mejores herramientas</span>
          </h3>

          {/* Technologies Grid - Desktop */}
          <div className="hidden sm:gap-6 md:flex md:flex-wrap md:justify-center gap-3 sm:gap-4">
            {technologies.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  key={tool.name}
                  className="group px-6 py-3 rounded-xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 cursor-default flex items-center space-x-2"
                >
                  <tool.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Infinite Carousel - Mobile */}
          <div className="md:hidden relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: ["0%", "-200%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...technologies, ...technologies].map((tool) => (
                <div
                  key={tool.name}
                  className="group px-6 py-3 rounded-xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 cursor-default flex items-center space-x-2"
                >
                  <tool.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};