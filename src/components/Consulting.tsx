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
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-wave-slow" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-wave-medium" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Consultoría <span className="text-primary dark:text-primary-glow">Siesa EE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            En Datapro.com.co ayudamos a las empresas a maximizar el valor de su inversión en Siesa EE, 
            mediante consultoría especializada, dirección de proyectos, capacitación y soporte continuo
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
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nuestros <span className="text-primary dark:text-primary-glow">Servicios</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <Card key={service.title} className="group relative hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 border-2 hover:border-primary/50 animate-fade-in-up overflow-hidden" style={{
            animationDelay: `${index * 100}ms`
          }}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative">
                  <div className="p-3 rounded-xl bg-gradient-primary w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
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
              </Card>)}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Áreas de <span className="text-primary dark:text-primary-glow">Especialización</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => <Card key={area.title} className="group hover:shadow-elegant transition-all duration-500 border-2 hover:border-primary/50 animate-fade-in-up overflow-hidden" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-0 group-hover:mb-4 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
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
                          <div className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-primary-glow" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 animate-fade-in-up">
          <a 
            href="#casos-exito" 
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-elegant hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Ver Soluciones</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>;
};