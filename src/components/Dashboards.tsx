import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, Crown } from "lucide-react";
const dashboards = [{
  title: "Indicadores Comerciales",
  image: "https://datapro.com.co/imagen/comercial.png",
  description: "Está diseñado para ofrecer una visión integral y dinámica del desempeño de ventas.",
  features: ["Ventas Totales", "Comparación de Ventas Año sobre Año", "Ingresos por Cliente", "Desglose de Productos y Servicios", "KPIs de Efectividad de Ventas", "Costos de Adquisición de Cliente (CAC)", "Rentabilidad", "Mapa de Calor por Ubicación", "Indicadores de Satisfacción del Cliente", "Tendencias de Mercado", "Alertas e Indicadores de Performance"]
}, {
  title: "Indicadores Financieros",
  image: "https://datapro.com.co/imagen/financiero.jpeg",
  description: "Proporciona una perspectiva completa y actualizada del desempeño financiero.",
  features: ["Resumen Financiero General", "Ingresos y Ventas", "Ingresos por Cliente", "Costos y Gastos", "Rentabilidad y Margen", "Flujo de Caja", "Análisis de Inversión", "Mapa de Calor por Ubicación", "Indicadores de Endeudamiento", "Rendimiento de Activos", "Comparativos de Presupuesto", "Análisis de Tendencias"]
}, {
  title: "Administración de Talento Humano",
  image: "https://datapro.com.co/imagen/hcm.png",
  description: "Ofrece una visión general de la administración del talento humano.",
  features: ["Rotación de empleados", "Tasa de absentismo", "Costo promedio de contratación", "Duración media de la empleabilidad", "Diversidad y distribución de género", "Rendimiento por departamento", "Tiempo promedio en posiciones", "Retención de talento", "Indicadores de Satisfacción del Cliente", "Satisfacción y compromiso de empleados", "Análisis de desarrollo y capacitación"]
}, {
  title: "Indicadores Seguimiento Comercial",
  image: "https://datapro.com.co/imagen/bi3.png",
  description: "Análisis detallado de todos los factores que influyen en el proceso comercial.",
  features: ["Ventas Totales", "Ventas por Asesor Comercial", "Ventas por Producto", "Ventas por Región", "Top de Clientes", "Tasa de Crecimiento", "Objetivos de Ventas", "Ventas por Canal de Distribución", "Devoluciones y Cancelaciones", "Rentabilidad por Producto"]
}, {
  title: "Indicadores de Planta de Producción",
  image: "https://datapro.com.co/imagen/IMG_3.jpg",
  description: "Análisis del detalle de cada factor en los procesos del área de producción.",
  features: ["Resumen de Producción", "Eficiencia Operativa", "Cumplimiento de Metas de Producción", "Análisis de Tiempos de Parada", "Costos de Producción", "Análisis de Calidad del Producto", "Desempeño por Turno", "Consumo de Materiales", "Comparativa de Producción por Líneas", "Indicadores Clave de Rendimiento (KPIs)"]
}];
export const Dashboards = () => {
  return <section id="tableros" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background waves for consistency */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary-glow/30 to-primary/0 animate-wave-slow" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tableros de <span className="text-primary dark:text-primary-glow">Control</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre los indicadores esenciales que tu compañía necesita para optimizar la producción y superar las expectativas del mercado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-[70px]">
          {dashboards.map((dashboard, index) => <Card key={dashboard.title} className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in-up overflow-hidden bg-card/50 backdrop-blur-sm" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <CardHeader className="relative pb-0">
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Crown className="h-6 w-6 text-accent fill-accent animate-pulse-glow" />
                </div>
                
                {/* Dashboard Image with Premium Frame */}
                <div className="relative rounded-lg overflow-hidden border-2 border-accent/30 shadow-glow mb-4 bg-background/50 p-2">
                  <div className="relative rounded-md overflow-hidden aspect-video">
                    <img src={dashboard.image} alt={dashboard.title} loading="lazy" className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  {/* Star Rating */}
                  <div className="absolute bottom-4 left-20 flex gap-1 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-accent text-lg">★</span>)}
                  </div>
                </div>

                <CardTitle className="text-2xl mb-2">{dashboard.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-6 my-[15px]">{dashboard.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dashboard.features.map((feature, idx) => <div key={idx} className="flex items-start space-x-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};