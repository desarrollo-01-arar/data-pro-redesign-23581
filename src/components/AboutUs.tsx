import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Target, Eye, ChevronLeft, ChevronRight, Shield, Lock, Zap, TrendingUp, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import analistaDatos from "@/assets/team/analista-datos.png";
import consultorErp from "@/assets/team/consultor-erp.png";
import coordinadorMesa from "@/assets/team/coordinador-mesa.png";
import ingenieroAutomatizacion from "@/assets/team/ingeniero-automatizacion.png";
export const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const team = [
    {
      role: "Gerencia Comercial",
      name: "Ernesto Velandia Sanchez",
      image: consultorErp,
      quote:
        "Transformando organizaciones a través de la tecnología, la auditoría y la gestión estratégica de sistemas",
      specialty: "Especialista en Auditoría, TI y ERP Siesa EE",
      description:
        "Ingeniero de Sistemas con formación de posgrado en Auditoría y Consultoría en Sistemas de Comunicación, experto en liderazgo tecnológico, transformación digital y consultoría en ERP Siesa EE, con más de 20 años de experiencia impulsando la eficiencia y la innovación empresarial.",
    },
    {
      role: "Analista de automatizacion",
      name: "Nicolas Stiven Jaimes Duarte",
      image: ingenieroAutomatizacion,
      quote: "Transformando lo manual en automático, y lo complejo en simple.",
      specialty: "Automatización de procesos y Bases de datos",
      description:
        "Ingeniero de sistemas certificado en Power BI, especializado en la automatización de procesos mediante herramientas y desarrollo a medida. Con experiencia en bases de datos y creación de aplicaciones que optimizan la eficiencia y la toma de decisiones.",
    },
    {
      role: "Coordinador Mesa de Ayuda",
      name: "Liliana Barragán Pineda",
      image: coordinadorMesa,
      quote: "Comprometida con optimizar procesos y garantizar un soporte técnico cercano, humano y confiable.",
      specialty: "Contabilidad",
    },
    {
      role: "Analista de Datos",
      name: "Carlos Alberto Lopez Duran",
      image: analistaDatos,
      quote: "Transformo la complejidad de los datos en conocimiento estratégico que impulsa decisiones inteligentes",
      specialty: "Inteligencia de Negocios",
      description:
        "Certificados en herramientas como SQL, Power BI y Excel para generar indicadores clave (KPIs), detectar tendencias y respaldar decisiones empresariales basadas en evidencia, optimizando procesos y mejorando la eficiencia organizacional.",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % team.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + team.length) % team.length);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % team.length);
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, [isPaused, team.length]);

  return (
    <section id="nosotros" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Premium breathing background */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-gradient-breathing animate-breathing-slow opacity-25" />
        <div className="absolute bottom-[30%] right-[10%] w-[450px] h-[450px] bg-gradient-wave-1 animate-breathing opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 px-4">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-elegant h-full">
              <div className="absolute inset-0 bg-gradient-primary opacity-10" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/20 group-hover:animate-pulse-glow">
                    <Target className="h-6 w-6 text-primary dark:text-primary-glow" />
                  </div>
                  <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  En <span className="font-semibold text-foreground">DataPro Analítica</span>, nuestra misión es
                  transformar datos en decisiones estratégicas que potencien el éxito empresarial. Con más de una década
                  de experiencia, asistimos a empresas en la consecución de sus metas mediante un análisis de datos
                  visual y eficiente.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all backdrop-blur-sm hover:shadow-elegant h-full">
              <div className="absolute inset-0 bg-gradient-accent opacity-10" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Nuestra Visión</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Estamos comprometidos con la innovación y la excelencia, asegurando que cada proyecto exceda las
                  expectativas de nuestros clientes. Buscamos ser el aliado estratégico que transforme datos en valor
                  real para las empresas colombianas.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Best Practices Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 mb-10"
        >
          <div className="text-center mb-8 px-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Nuestras <span className="text-primary dark:text-primary-glow">Buenas Prácticas</span>
            </h3>
            <div className="h-0.5 w-16 bg-gradient-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto px-4">
            {[
              {
                icon: Shield,
                text: "Desarrollo bajo estándares de calidad y seguridad",
              },
              {
                icon: Lock,
                text: "Protección y confidencialidad de la información del cliente",
              },
              {
                icon: Zap,
                text: "Uso de metodologías ágiles para optimizar procesos",
              },
              {
                icon: TrendingUp,
                text: "Mejora continua y soporte post implementación",
              },
              {
                icon: MessageSquare,
                text: "Transparencia y comunicación constante con el cliente",
              },
              {
                icon: Target,
                text: "Soluciones adaptadas a las necesidades reales del negocio",
              },
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <practice.icon className="h-5 w-5 text-primary dark:text-primary-glow" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{practice.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section - Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          {/* Title with decorative line */}
          <div className="text-center mb-12 px-4">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Nuestro <span className="text-primary dark:text-primary-glow">Equipo</span>
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-16 bg-gradient-primary rounded-full" />
              <div className="h-1 w-8 bg-gradient-primary rounded-full" />
              <div className="h-0.5 w-16 bg-gradient-primary rounded-full" />
            </div>
          </div>

          {/* Elegant card container for carousel */}
          <Card className="relative max-w-5xl mx-4 sm:mx-auto bg-secondary/50 dark:bg-secondary/30 border-2 border-border/50 shadow-elegant backdrop-blur-sm overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-subtle opacity-30 pointer-events-none" />

            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 relative z-10">
              <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                {/* Carousel container */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {team.map((member, index) => (
                      <div key={index} className="min-w-full px-2 sm:px-4 flex items-center justify-center">
                        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center">
                          {/* Avatar side */}
                          <div className="relative group flex-shrink-0">
                            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 overflow-hidden rounded-full border-4 border-primary/30 shadow-elegant bg-card">
                              <img
                                src={member.image}
                                alt={member.role}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                              {/* Subtle gradient overlay on hover */}
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                          </div>

                          {/* Info side */}
                          <div className="space-y-3 sm:space-y-5 text-center md:text-left max-w-xl flex-1">
                            <div>
                              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-primary dark:text-primary-glow">
                                {member.role}
                              </h4>
                              <p className="text-base sm:text-lg md:text-xl text-foreground mb-2">{member.name}</p>
                              <div className="h-1 w-16 sm:w-20 bg-gradient-primary mx-auto md:mx-0 rounded-full mb-4" />
                            </div>

                            <blockquote className="text-sm sm:text-base italic text-foreground/80 sm:border-l-4 sm:border-primary/30 pl-4 sm:pl-6">
                              "{member.quote}"
                            </blockquote>

                            {/* Specialty */}
                            <div className="bg-accent/20 dark:bg-accent/10 dark:border-accent/50 border border-accent/50 rounded-lg p-4">
                              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">
                                Especialidad
                              </p>
                              <p className="text-base text-foreground">{member.specialty}</p>
                            </div>

                            {/* Optional description */}
                            {member.description && (
                              <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute h-min left-0 sm:left-2 md:-left-5 -bottom-5 sm:top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card border-2 border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 group z-10"
                  aria-label="Previous team member"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute h-min right-0 sm:right-2 md:-right-5 -bottom-5 sm:top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card border-2 border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 group z-10"
                  aria-label="Next team member"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>

                {/* Dots indicator */}
                <div className="flex justify-center space-x-2 mt-8">
                  {team.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-primary dark:bg-primary-glow" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                      aria-label={`Go to team member ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team description */}
          <div className="text-center mt-12 max-w-3xl mx-auto px-4">
            <p className="text-sm sm:text-base text-muted-foreground">
              Nuestro equipo está compuesto por{" "}
              <span className="font-semibold text-foreground">Matemáticos e Ingenieros</span> expertos en inteligencia
              de negocios, análisis de datos y automatización, todos certificados y dedicados a diseñar soluciones
              personalizadas y de última generación.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
