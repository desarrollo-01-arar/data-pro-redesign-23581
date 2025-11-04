import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Lightbulb, Users, TrendingUp, Database, Code, CheckCircle2, DollarSign, ShoppingCart, Factory, Package, UserCheck, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState, useEffect } from "react";

const services = [
  {
    icon: Briefcase,
    title: "Consultoría de Implementación",
    description: "Implementación completa de Siesa EE adaptada a tus procesos de negocio",
    gradient: "from-blue-500/10 to-blue-600/10",
  },
  {
    icon: TrendingUp,
    title: "Optimización de Procesos",
    description: "Reimplementación y mejora continua de módulos existentes",
    gradient: "from-green-500/10 to-green-600/10",
  },
  {
    icon: Lightbulb,
    title: "Capacitación Especializada",
    description: "Formación funcional y técnica para usuarios y líderes de área",
    gradient: "from-purple-500/10 to-purple-600/10",
  },
  {
    icon: Users,
    title: "Soporte y Mesa de Ayuda",
    description: "Acompañamiento técnico y funcional continuo postimplementación",
    gradient: "from-orange-500/10 to-orange-600/10",
  },
  {
    icon: Code,
    title: "Integraciones",
    description: "Conexión de Siesa EE con BI, portales web, CRM y sistemas externos",
    gradient: "from-pink-500/10 to-pink-600/10",
  },
  {
    icon: Database,
    title: "Actualización y Seguridad",
    description: "Proyectos de actualización, respaldos y seguridad de datos",
    gradient: "from-red-500/10 to-red-600/10",
  },
];

const areas = [
  {
    icon: DollarSign,
    title: "Financiera",
    description: "Contabilidad, cuentas por pagar, tesorería, costos",
    features: ["Contabilidad general", "Cuentas por pagar", "Tesorería", "Análisis de costos"],
  },
  {
    icon: ShoppingCart,
    title: "Comercial",
    description: "Ventas, pedidos, cartera, control de clientes",
    features: ["Gestión de ventas", "Control de pedidos", "Cartera y CRM", "Análisis comercial"],
  },
  {
    icon: Factory,
    title: "Manufactura",
    description: "Planeación, control de producción, costos de órdenes",
    features: ["Planeación productiva", "Control de órdenes", "Costos de producción", "Eficiencia operativa"],
  },
  {
    icon: Package,
    title: "Logística",
    description: "Inventarios, compras, control de bodegas",
    features: ["Gestión de inventarios", "Control de compras", "Administración de bodegas", "Trazabilidad"],
  },
  {
    icon: UserCheck,
    title: "Nómina y Talento Humano",
    description: "Liquidaciones, seguridad social, reportes legales",
    features: ["Liquidación de nómina", "Seguridad social", "Reportes legales", "Gestión de personal"],
  },
  {
    icon: Server,
    title: "Tecnología",
    description: "Integraciones, bases de datos, servidores, BI",
    features: ["Integraciones API", "Bases de datos", "Infraestructura", "Business Intelligence"],
  },
];

const strengths = ["Diagnóstico funcional y técnico", "Implementación a medida", "Capacitación especializada", "Integración con herramientas externas", "Soporte postimplementación"];

export const Consulting = () => {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);
  const [currentStrengthIndex, setCurrentStrengthIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStrengthIndex((prev) => (prev + 1) % strengths.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="consultorias" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Premium breathing background */}
      <div className="absolute inset-0">
        <div className="absolute top-[25%] left-[10%] w-[450px] h-[450px] bg-gradient-breathing animate-breathing opacity-25" />
        <div className="absolute bottom-[15%] right-[5%] w-[500px] h-[500px] bg-gradient-wave-2 animate-breathing-slow opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Consultoría <span className="text-primary dark:text-primary-glow">Siesa EE</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 px-4">
            En Datapro.com.co ayudamos a las empresas a maximizar el valor de su inversión en Siesa EE, mediante consultoría especializada, dirección de proyectos, capacitación y soporte continuo.
          </p>
          
          {/* Animated strengths - ONLY on mobile */}
          <div className="md:hidden max-w-4xl mx-auto h-20 mb-4 px-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStrengthIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up"
              >
                <CheckCircle2 className="h-5 w-5 text-primary dark:text-primary-glow flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-muted-foreground whitespace-nowrap">
                  {strengths[currentStrengthIndex]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Static strengths - Desktop only */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <CheckCircle2 className="h-4 w-4 text-primary dark:text-primary-glow" />
                <span className="text-sm font-medium">{strength}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => {
              // En móvil solo mostrar 4 servicios
              if (typeof window !== 'undefined' && window.innerWidth < 768 && index >= 4) {
                return null;
              }
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 border-2 hover:border-primary/50 overflow-hidden h-full">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <CardHeader className="relative flex-row gap-3">
                      <div className="p-3 self-end rounded-xl bg-gradient-primary w-fit h-min group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary dark:group-hover:text-primary-glow transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Areas Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-4"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-3 relative">
            Áreas de <span className="text-primary dark:text-primary-glow">Especialización</span>
          </h3>
          
          {/* Decorative line */}
          <div className="flex justify-center mb-12">
            <div className="h-1 w-24 bg-gradient-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {areas.map((area, index) => {
              // En móvil solo mostrar 4 áreas
              if (typeof window !== 'undefined' && window.innerWidth < 768 && index >= 4) {
                return null;
              }
              
              const isExpanded = expandedArea === area.title;
              
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer hover:shadow-elegant transition-all duration-700 border-2 overflow-hidden relative bg-gradient-to-br from-card via-card to-secondary/20 dark:from-card dark:via-card dark:to-primary/5 ${isExpanded ? 'border-primary/50 shadow-elegant z-10' : 'hover:border-primary/30'}`}
                    onClick={() => setExpandedArea(isExpanded ? null : area.title)}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transition-opacity duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
                    
                    {/* Icon glow effect */}
                    <div className={`absolute top-6 left-6 w-12 h-12 bg-gradient-primary blur-xl transition-opacity duration-700 rounded-full ${isExpanded ? 'opacity-20' : 'opacity-0'}`} />
                    
                    <CardContent className="p-6 relative">
                      <div className={`flex items-center space-x-4 transition-all duration-500 ${isExpanded ? 'mb-4' : 'mb-0'}`}>
                        <div className={`p-3 rounded-xl bg-gradient-accent transition-all duration-500 flex-shrink-0 shadow-md ${isExpanded ? 'scale-110 rotate-3 shadow-lg' : ''}`}>
                          <area.icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <h4 className={`text-xl font-semibold transition-colors duration-500 ${isExpanded ? 'text-primary dark:text-primary-glow' : ''}`}>
                          {area.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-sm text-muted-foreground mb-4 pl-[60px]">
                          {area.description}
                        </p>
                      </div>

                      {/* Features list */}
                      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="space-y-2 pl-[60px]">
                          {area.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="flex items-center space-x-2 text-sm"
                            >
                              <div className={`h-1.5 w-1.5 rounded-full bg-primary dark:bg-primary-glow transition-transform duration-300 ${isExpanded ? 'scale-125' : 'scale-0'}`} />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};