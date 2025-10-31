import { motion } from "framer-motion";
import { Award, Building2, CheckCircle2, ChevronLeft, ChevronRight, Sprout, Factory, ShoppingBag, Car, DollarSign, Shield, Truck } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import asekuraLogo from "@/assets/success-cases/asekura.png";
import hecarseLogo from "@/assets/success-cases/hecarse.png";
import ararFinancieraLogo from "@/assets/success-cases/arar-financiera.png";
import colmotosLogo from "@/assets/success-cases/colmotos.png";
import raycoLogo from "@/assets/success-cases/rayco.png";
import rexLogo from "@/assets/success-cases/rex.png";
import inversionesArarLogo from "@/assets/success-cases/inversiones-arar.png";
import icbLogo from "@/assets/success-cases/icb.png";
import promotoresLogo from "@/assets/success-cases/promotores.png";
import ankalLogo from "@/assets/success-cases/ankal.png";

const cases = [{
  name: "Agencia de seguros Asekura",
  logo: asekuraLogo,
  industry: "Seguros"
}, {
  name: "Agroinversiones Hecarse",
  logo: hecarseLogo,
  industry: "Agroindustria"
}, {
  name: "Arar Financiera",
  logo: ararFinancieraLogo,
  industry: "Financiero"
}, {
  name: "ColMotos",
  logo: colmotosLogo,
  industry: "Automotriz"
}, {
  name: "Distribuidora Rayco",
  logo: raycoLogo,
  industry: "Distribución"
}, {
  name: "Distribuidora Rex",
  logo: rexLogo,
  industry: "Distribución"
}, {
  name: "Inversiones Arar",
  logo: inversionesArarLogo,
  industry: "Financiero"
}, {
  name: "Italo Colombiana de Baterías (ICB)",
  logo: icbLogo,
  industry: "Automotriz"
}, {
  name: "Promotores del Oriente",
  logo: promotoresLogo,
  industry: "Automotriz"
}, {
  name: "Representaciones Ankal",
  logo: ankalLogo,
  industry: "Comercial"
}];

const sectors = [
  { name: "Agricultura", icon: Sprout },
  { name: "Manufactura", icon: Factory },
  { name: "Comercial", icon: ShoppingBag },
  { name: "Automotriz", icon: Car },
  { name: "Financiero", icon: DollarSign },
  { name: "Seguros", icon: Shield },
  { name: "Transporte", icon: Truck },
];

export const SuccessCases = () => {
  const [isPaused, setIsPaused] = useState(false);

  return <section id="casos" className="py-20 bg-background relative overflow-hidden">
    {/* Premium breathing background */}
    <div className="absolute inset-0">
      <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-gradient-breathing animate-breathing-slow opacity-20" />
      <div className="absolute bottom-[25%] left-[10%] w-[350px] h-[350px] bg-gradient-wave-1 animate-breathing opacity-25" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-gradient-accent rounded-full mb-6 animate-pulse-glow">
          <Award className="h-8 w-8 text-accent-foreground" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Casos de <span className="text-primary dark:text-primary-glow">Éxito</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explora cómo hemos transformado desafíos en triunfos con nuestros casos de éxito en implementación y optimización
        </p>
      </motion.div>

      {/* Logos Carousel */}
      <div 
        className="relative max-w-6xl mx-auto mb-20 overflow-hidden py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-5"
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {/* Duplicamos los casos para crear el efecto infinito sin cortes */}
          {[...cases, ...cases].map((company, index) => (
            <div 
              key={`${company.name}-${index}`}
              className="min-w-[250px] group relative bg-gradient-to-br from-card via-card to-card/80 border-2 border-border/50 rounded-2xl p-6 hover:border-primary/60 hover:shadow-elegant hover:-translate-y-3 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Success badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <CheckCircle2 className="h-5 w-5 text-primary dark:text-primary-glow" strokeWidth={2.5} />
              </div>

              {/* Logo container */}
              <div className="relative w-full aspect-video flex items-center justify-center mb-4 transition-transform duration-500">
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Company name */}
              <h3 className="text-center text-sm font-bold mb-2 text-foreground group-hover:text-primary dark:group-hover:text-primary-glow transition-all duration-300 leading-tight min-h-[2.5rem] flex items-center justify-center tracking-tight">
                <span className="relative">
                  {company.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500" />
                </span>
              </h3>

              {/* Industry badge */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-2">
                <span className="inline-flex items-center font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary dark:text-primary-glow border border-primary/30 text-xs whitespace-nowrap backdrop-blur-sm">
                  <Building2 className="h-3 w-3 mr-1.5" strokeWidth={2.5} />
                  {company.industry}
                </span>
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sectors Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Sectores en los que <span className="text-primary dark:text-primary-glow">Trabajamos</span>
          </h3>
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-16 bg-gradient-primary rounded-full" />
            <div className="h-1 w-8 bg-gradient-primary rounded-full" />
            <div className="h-0.5 w-16 bg-gradient-primary rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-2 hover:border-accent/50 bg-card/50 backdrop-blur-sm h-full">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3">
                  <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                    <sector.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {sector.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom message */}
      <div className="text-center mt-16">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Más de <span className="font-bold text-primary dark:text-primary-glow">una década de experiencia</span> transformando datos en decisiones estratégicas
        </p>
      </div>
    </div>
  </section>;
};