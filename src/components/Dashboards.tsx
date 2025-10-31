import { motion } from "framer-motion";
import { BarChart3, DollarSign, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import comercialesImg from "@/assets/dashboards/comerciales.png";
import financierosImg from "@/assets/dashboards/financieros.png";
import hcmImg from "@/assets/dashboards/hcm.png";
import seguimientoComercialImg from "@/assets/dashboards/seguimiento-comercial.png";
import ventasImg from "@/assets/dashboards/ventas.png";

const dashboards = [
  {
    title: "Indicadores Comerciales",
    icon: BarChart3,
    image: comercialesImg,
    description: "Está diseñado para ofrecer una visión integral y dinámica del desempeño de ventas.",
    features: [
      "Ventas Totales",
      "Comparación Año sobre Año",
      "Ingresos por Cliente",
      "Desglose de Productos",
      "KPIs de Efectividad",
      "Rentabilidad",
    ],
    allFeatures: [
      "Ventas Totales",
      "Comparación de Ventas Año sobre Año",
      "Ingresos por Cliente",
      "Desglose de Productos y Servicios",
      "KPIs de Efectividad de Ventas",
      "Costos de Adquisición de Cliente (CAC)",
      "Rentabilidad",
      "Mapa de Calor por Ubicación",
      "Indicadores de Satisfacción del Cliente",
      "Tendencias de Mercado",
      "Alertas e Indicadores de Performance",
    ],
  },
  {
    title: "Indicadores Financieros",
    icon: DollarSign,
    image: financierosImg,
    description: "Proporciona una perspectiva completa y actualizada del desempeño financiero.",
    features: [
      "Resumen Financiero",
      "Ingresos y Ventas",
      "Costos y Gastos",
      "Rentabilidad y Margen",
      "Flujo de Caja",
    ],
    allFeatures: [
      "Resumen Financiero General",
      "Ingresos y Ventas",
      "Ingresos por Cliente",
      "Costos y Gastos",
      "Rentabilidad y Margen",
      "Flujo de Caja",
      "Análisis de Inversión",
      "Mapa de Calor por Ubicación",
      "Indicadores de Endeudamiento",
      "Rendimiento de Activos",
      "Comparativos de Presupuesto",
      "Análisis de Tendencias",
    ],
  },
  {
    title: "Administración de Talento Humano",
    icon: Users,
    image: hcmImg,
    description: "Ofrece una visión general de la administración del talento humano.",
    features: [
      "Rotación de empleados",
      "Tasa de absentismo",
      "Costo de contratación",
      "Retención de talento",
      "Satisfacción de empleados",
    ],
    allFeatures: [
      "Rotación de empleados",
      "Tasa de absentismo",
      "Costo promedio de contratación",
      "Duración media de la empleabilidad",
      "Diversidad y distribución de género",
      "Rendimiento por departamento",
      "Tiempo promedio en posiciones",
      "Retención de talento",
      "Satisfacción y compromiso de los empleados",
      "Análisis de desarrollo y capacitación",
    ],
  },
  {
    title: "Indicadores Seguimiento Comercial",
    icon: TrendingUp,
    image: seguimientoComercialImg,
    description: "Análisis detallado de todos los factores que influyen en el proceso comercial.",
    features: [
      "Ventas Totales",
      "Ventas por Asesor",
      "Ventas por Producto",
      "Top de Clientes",
      "Objetivos de Ventas",
    ],
    allFeatures: [
      "Ventas Totales",
      "Ventas por Asesor Comercial",
      "Ventas por Producto",
      "Ventas por Región",
      "Top de Clientes",
      "Tasa de Crecimiento",
      "Objetivos de Ventas",
      "Ventas por Canal de Distribución",
      "Devoluciones y Cancelaciones",
      "Rentabilidad por Producto",
    ],
  },
  {
    title: "Indicadores de Planta de Producción",
    icon: TrendingUp,
    image: ventasImg,
    description: "Análisis del detalle de cada factor en los procesos del área de producción.",
    features: [
      "Resumen de Producción",
      "Eficiencia Operativa",
      "Cumplimiento de Metas",
      "Costos de Producción",
      "Calidad del Producto",
    ],
    allFeatures: [
      "Resumen de Producción",
      "Eficiencia Operativa",
      "Cumplimiento de Metas de Producción",
      "Análisis de Tiempos de Parada",
      "Costos de Producción",
      "Análisis de Calidad del Producto",
      "Desempeño por Turno",
      "Consumo de Materiales",
      "Comparativa de Producción por Líneas",
      "Indicadores Clave de Rendimiento (KPIs)",
    ],
  },
];

export const Dashboards = () => {
  return (
    <section id="tableros" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Premium breathing background */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-breathing animate-breathing opacity-30" />
        <div className="absolute bottom-[10%] left-[15%] w-[450px] h-[450px] bg-gradient-wave-2 animate-breathing-slow opacity-25" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Tableros de <span className="text-primary dark:text-primary-glow">Control</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Descubre los indicadores esenciales que tu compañía necesita para optimizar la producción y superar las expectativas del mercado
          </p>
        </motion.div>

        {/* Dashboards Carousel - Mobile & Tablet */}
        <div className="md:hidden px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {dashboards.map((dashboard, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant bg-gradient-to-br from-card via-card to-card/90">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                            <dashboard.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <Badge variant="secondary" className="font-semibold">
                            BI Dashboard
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {dashboard.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {dashboard.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video rounded-lg overflow-hidden mb-4 border-2 border-border group-hover:border-primary/30 transition-colors">
                          <img
                            src={dashboard.image}
                            alt={dashboard.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <ul className="space-y-2">
                          {dashboard.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Dashboards Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={dashboard.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant bg-gradient-to-br from-card via-card to-card/90">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <dashboard.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="font-semibold">
                      BI Dashboard
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {dashboard.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {dashboard.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 border-2 border-border group-hover:border-primary/30 transition-colors">
                    <img
                      src={dashboard.image}
                      alt={dashboard.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {dashboard.allFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};