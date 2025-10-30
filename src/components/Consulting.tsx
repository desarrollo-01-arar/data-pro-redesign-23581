import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Briefcase, GraduationCap, Wrench, Shield, TrendingUp, Code, DollarSign, ShoppingCart, Settings, Package, Users, Monitor, CheckCircle2, ArrowRight } from "lucide-react";
const services = [{
  icon: Briefcase,
  title: "Consultoría de Implementación",
  description: "Implementación completa de Siesa EE adaptada a tus procesos de negocio",
  gradient: "from-blue-500/10 to-blue-600/10"
}, {
  icon: TrendingUp,
  title: "Optimización de Procesos",
  description: "Reimplementación y mejora continua de módulos existentes",
  gradient: "from-green-500/10 to-green-600/10"
}, {
  icon: GraduationCap,
  title: "Capacitación Especializada",
  description: "Formación funcional y técnica para usuarios y líderes de área",
  gradient: "from-purple-500/10 to-purple-600/10"
}, {
  icon: Wrench,
  title: "Soporte y Mesa de Ayuda",
  description: "Acompañamiento técnico y funcional continuo postimplementación",
  gradient: "from-orange-500/10 to-orange-600/10"
}, {
  icon: Code,
  title: "Integraciones",
  description: "Conexión de Siesa EE con BI, portales web, CRM y sistemas externos",
  gradient: "from-pink-500/10 to-pink-600/10"
}, {
  icon: Shield,
  title: "Actualización y Seguridad",
  description: "Proyectos de actualización, respaldos y seguridad de datos",
  gradient: "from-red-500/10 to-red-600/10"
}];
const areas = [{
  icon: DollarSign,
  title: "Financiera",
  description: "Contabilidad, cuentas por pagar, tesorería, costos",
  features: ["Contabilidad general", "Cuentas por pagar", "Tesorería", "Análisis de costos"]
}, {
  icon: ShoppingCart,
  title: "Comercial",
  description: "Ventas, pedidos, cartera, control de clientes",
  features: ["Gestión de ventas", "Control de pedidos", "Cartera y CRM", "Análisis comercial"]
}, {
  icon: Settings,
  title: "Manufactura",
  description: "Planeación, control de producción, costos de órdenes",
  features: ["Planeación productiva", "Control de órdenes", "Costos de producción", "Eficiencia operativa"]
}, {
  icon: Package,
  title: "Logística",
  description: "Inventarios, compras, control de bodegas",
  features: ["Gestión de inventarios", "Control de compras", "Administración de bodegas", "Trazabilidad"]
}, {
  icon: Users,
  title: "Nómina y Talento Humano",
  description: "Liquidaciones, seguridad social, reportes legales",
  features: ["Liquidación de nómina", "Seguridad social", "Reportes legales", "Gestión de personal"]
}, {
  icon: Monitor,
  title: "Tecnología",
  description: "Integraciones, bases de datos, servidores, BI",
  features: ["Integraciones API", "Bases de datos", "Infraestructura", "Business Intelligence"]
}];
export const Consulting = () => {
  return <section id="consultorias" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Premium breathing background */}
      <div className="absolute inset-0">
        <div className="absolute top-[25%] left-[10%] w-[450px] h-[450px] bg-gradient-breathing animate-breathing opacity-25" />
        <div className="absolute bottom-[15%] right-[5%] w-[500px] h-[500px] bg-gradient-wave-2 animate-breathing-slow opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Consultoría <span className="text-primary dark:text-primary-glow">Siesa EE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            En Datapro.com.co ayudamos a las empresas a maximizar el valor de su inversión en Siesa EE, mediante
            consultoría especializada, dirección de proyectos, capacitación y soporte continuo
          </p>

          {/* Key strengths */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Diagnóstico funcional y técnico", "Implementación a medida", "Capacitación especializada", "Integración con herramientas externas", "Soporte postimplementación"].map((strength, index) => <div key={index} className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CheckCircle2 className="h-4 w-4 text-primary dark:text-primary-glow" />
                <span className="text-sm font-medium">{strength}</span>
              </div>)}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nuestros <span className="text-primary dark:text-primary-glow">Servicios</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <Card className="group relative hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 border-2 hover:border-primary/50 overflow-hidden h-full">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <CardHeader className="relative">
                    <div className="p-3 rounded-xl bg-gradient-primary w-fit group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary dark:group-hover:text-primary-glow transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors mb-3">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-[5%] w-32 h-32 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-[8%] w-40 h-40 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl" />
          </div>

          <h3 className="text-3xl font-bold text-center mb-3 relative">
            Áreas de <span className="text-primary dark:text-primary-glow">Especialización</span>
          </h3>
          
          {/* Decorative line */}
          <div className="flex justify-center mb-12">
            <div className="h-1 w-24 bg-gradient-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {areas.map((area, index) => <motion.div key={area.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <Card className="group hover:shadow-elegant transition-all duration-500 border-2 hover:border-primary/50 overflow-hidden h-full relative bg-gradient-to-br from-card via-card to-secondary/20 dark:from-card dark:via-card dark:to-primary/5">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon glow effect */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full" />
                  
                  <CardContent className="p-6 relative">
                    <div className="flex items-center space-x-4 mb-0 group-hover:mb-4 transition-all duration-300">
                      <div className="p-3 rounded-xl bg-gradient-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0 shadow-md group-hover:shadow-lg">
                        <area.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-primary dark:group-hover:text-primary-glow transition-colors">
                        {area.title}
                      </h4>
                    </div>

                    {/* Description - only visible on hover */}
                    <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500">
                      <p className="text-sm text-muted-foreground mb-4 pl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {area.description}
                      </p>
                    </div>

                    {/* Features list - only visible on hover */}
                    <div className="max-h-0 group-hover:max-h-64 overflow-hidden transition-all duration-500">
                      <div className="space-y-2 pl-[60px]">
                        {area.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                      transitionDelay: `${200 + featureIndex * 50}ms`
                    }}>
                            <div className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-primary-glow group-hover:scale-125 transition-transform" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};