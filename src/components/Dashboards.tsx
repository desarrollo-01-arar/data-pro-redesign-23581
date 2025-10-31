import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, Crown } from "lucide-react";
import comercialesImg from "@/assets/dashboards/comerciales.png";
import financierosImg from "@/assets/dashboards/financieros.png";
import hcmImg from "@/assets/dashboards/hcm.png";
import seguimientoComercialImg from "@/assets/dashboards/seguimiento-comercial.png";
import ventasImg from "@/assets/dashboards/ventas.png";
const dashboards = [{
  title: "Indicadores Comerciales",
  image: comercialesImg,
  description: "Está diseñado para ofrecer una visión integral y dinámica del desempeño de ventas.",
  features: ["Ventas Totales", "Comparación de Ventas Año sobre Año", "Ingresos por Cliente", "Desglose de Productos y Servicios", "KPIs de Efectividad de Ventas", "Costos de Adquisición de Cliente (CAC)", "Rentabilidad", "Mapa de Calor por Ubicación", "Indicadores de Satisfacción del Cliente", "Tendencias de Mercado", "Alertas e Indicadores de Performance"]
}, {
  title: "Indicadores Financieros",
  image: financierosImg,
  description: "Proporciona una perspectiva completa y actualizada del desempeño financiero.",
  features: ["Resumen Financiero General", "Ingresos y Ventas", "Ingresos por Cliente", "Costos y Gastos", "Rentabilidad y Margen", "Flujo de Caja", "Análisis de Inversión", "Mapa de Calor por Ubicación", "Indicadores de Endeudamiento", "Rendimiento de Activos", "Comparativos de Presupuesto", "Análisis de Tendencias"]
}, {
  title: "Administración de Talento Humano",
  image: hcmImg,
  description: "Ofrece una visión general de la administración del talento humano.",
  features: ["Rotación de empleados", "Tasa de absentismo", "Costo promedio de contratación", "Duración media de la empleabilidad", "Diversidad y distribución de género", "Rendimiento por departamento", "Tiempo promedio en posiciones", "Retención de talento", "Indicadores de Satisfacción del Cliente", "Satisfacción y compromiso de empleados", "Análisis de desarrollo y capacitación"]
}, {
  title: "Indicadores Seguimiento Comercial",
  image: seguimientoComercialImg,
  description: "Análisis detallado de todos los factores que influyen en el proceso comercial.",
  features: ["Ventas Totales", "Ventas por Asesor Comercial", "Ventas por Producto", "Ventas por Región", "Top de Clientes", "Tasa de Crecimiento", "Objetivos de Ventas", "Ventas por Canal de Distribución", "Devoluciones y Cancelaciones", "Rentabilidad por Producto"]
}, {
  title: "Indicadores de Planta de Producción",
  image: ventasImg,
  description: "Análisis del detalle de cada factor en los procesos del área de producción.",
  features: ["Resumen de Producción", "Eficiencia Operativa", "Cumplimiento de Metas de Producción", "Análisis de Tiempos de Parada", "Costos de Producción", "Análisis de Calidad del Producto", "Desempeño por Turno", "Consumo de Materiales", "Comparativa de Producción por Líneas", "Indicadores Clave de Rendimiento (KPIs)"]
}];
export const Dashboards = () => {
  return <section id="tableros" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Premium breathing background */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-breathing animate-breathing opacity-30" />
        <div className="absolute bottom-[10%] left-[15%] w-[450px] h-[450px] bg-gradient-wave-2 animate-breathing-slow opacity-25" />
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
            Tableros de <span className="text-primary dark:text-primary-glow">Control</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre los indicadores esenciales que tu compañía necesita para optimizar la producción y superar las expectativas del mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-[70px]">
          {dashboards.map((dashboard, index) => <motion.div key={dashboard.title} initial={{
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
            <Card className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden bg-card/50 backdrop-blur-sm h-full">
              <CardHeader className="relative pb-0 mb-4"> 
                {/* Dashboard Image with Premium Frame */}
                <div className="relative rounded-lg overflow-hidden border-2 border-accent/30 shadow-glow mb-4 bg-background/50 p-1.5">
                  <div className="relative rounded-md overflow-hidden aspect-video">
                    <img src={dashboard.image} alt={dashboard.title} loading="lazy" className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500" />
                    {/* Professional gradient overlay - lighter in light mode, darker in dark mode */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/15 to-transparent dark:from-black/60 dark:via-black/15 dark:to-transparent pointer-events-none" />
                    
                    {/* Crown and Stars in bottom left corner */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      {/* Crown */}
                      <div className="flex items-center justify-center bg-background/80 dark:bg-accent/20 backdrop-blur-md border border-primary/40 dark:border-accent/40 rounded-lg px-2.5 py-1.5">
                        <Crown className="h-5 w-5 text-accent dark:text-accent fill-accent dark:fill-accent" />
                      </div>
                      {/* Stars */}
                      <div className="flex gap-0.5 bg-background/80 dark:bg-background/20 backdrop-blur-md border border-primary/40 dark:border-accent/30 px-2.5 py-1.5 rounded-lg">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-accent dark:text-accent text-sm">★</span>)}
                      </div>
                    </div>
                  </div>
                </div>

                <CardTitle className="text-2xl mb-2">{dashboard.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-6 my-[15px]">{dashboard.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dashboard.features.map((feature, idx) => <div key={idx} className="flex items-start text-sm text-foreground/80 items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary dark:text-accent flex-shrink-0 mt-0.5" />
                      <span className="leading-4">{feature}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </motion.div>)}
        </div>
      </div>
    </section>;
};