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
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

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
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="overflow-hidden px-16">
            <div className="flex gap-6">
              {cases.map((company, index) => {
                // Calculate position relative to current index
                let position = index - currentIndex;
                if (position < 0) position += cases.length;
                if (position >= itemsPerView) return null;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="min-w-[calc(25%-1.125rem)] group"
                  >
                    <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/50 hover:border-primary/40 bg-card h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        {/* Company name at top */}
                        <h3 className="text-sm font-semibold text-foreground leading-tight min-h-[2.5rem] flex items-center">
                          {company.name}
                        </h3>
                        
                        {/* Logo container */}
                        <div className="w-full aspect-video flex items-center justify-center">
                          <img 
                            src={company.logo} 
                            alt={company.name} 
                            loading="lazy" 
                            className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                          />
                        </div>

                        {/* Industry at bottom */}
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/30 text-xs font-medium">
                          {company.industry}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
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