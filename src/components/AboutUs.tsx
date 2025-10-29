import { Card, CardContent } from "./ui/card";
import { Target, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import analistaDatos from "@/assets/team/analista-datos.png";
import consultorErp from "@/assets/team/consultor-erp.png";
import coordinadorMesa from "@/assets/team/coordinador-mesa.png";
import ingenieroAutomatizacion from "@/assets/team/ingeniero-automatizacion.png";
export const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const team = [{
    name: "Analista de Datos",
    role: "Analista de Datos",
    image: analistaDatos,
    quote: "Transformando información en insights accionables"
  }, {
    name: "Consultor ERP",
    role: "Consultor ERP, Inteligencia de Negocio",
    image: consultorErp,
    quote: "Optimizando procesos empresariales con tecnología"
  }, {
    name: "Coordinador Mesa de Ayuda",
    role: "Coordinador Mesa Ayuda",
    image: coordinadorMesa,
    quote: "Soporte técnico de excelencia para tu empresa"
  }, {
    name: "Ingeniero de Automatización",
    role: "Ingeniero de Automatización",
    image: ingenieroAutomatizacion,
    quote: "Automatizando procesos para maximizar eficiencia"
  }];
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % team.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + team.length) % team.length);
  };
  return <section id="nosotros" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-wave-slow" />
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Mission */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all animate-fade-in-up hover:shadow-elegant">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/20 group-hover:animate-pulse-glow">
                  <Target className="h-6 w-6 text-primary dark:text-primary-glow" />
                </div>
                <h3 className="text-2xl font-bold">Nuestra Misión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                En <span className="font-semibold text-foreground">DataPro Analítica</span>, nuestra misión es transformar datos en decisiones
                estratégicas que potencien el éxito empresarial. Con más de una década de experiencia, asistimos
                a empresas en la consecución de sus metas mediante un análisis de datos visual y eficiente.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all animate-fade-in-up backdrop-blur-sm hover:shadow-elegant" style={{
          animationDelay: "100ms"
        }}>
            <div className="absolute inset-0 bg-gradient-accent opacity-10" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/20">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Nuestra Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Estamos comprometidos con la innovación y la excelencia, asegurando que cada proyecto exceda las expectativas de nuestros clientes. 
                Buscamos ser el aliado estratégico que transforme datos en valor real para las empresas colombianas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section - Carousel */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nuestro <span className="text-primary dark:text-primary-glow">Equipo</span>
          </h3>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-out" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
                {team.map((member, index) => <div key={index} className="min-w-full px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Image side */}
                      <div className="relative group">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-primary/20 shadow-elegant">
                          <img src={member.image} alt={member.role} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      {/* Info side */}
                      <div className="space-y-6 text-center md:text-left">
                        <div>
                          <h4 className="text-3xl font-bold mb-3 text-primary dark:text-primary-glow">
                            {member.name}
                          </h4>
                          <p className="text-xl text-muted-foreground mb-4">
                            {member.role}
                          </p>
                          <div className="h-1 w-20 bg-gradient-primary mx-auto md:mx-0 rounded-full" />
                        </div>
                        
                        <blockquote className="text-lg italic text-foreground/80 border-l-4 border-primary/30 pl-6">
                          "{member.quote}"
                        </blockquote>

                        {/* Decorative element */}
                        <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-muted-foreground">
                          <div className="h-2 w-2 rounded-full bg-primary dark:bg-primary-glow animate-pulse" />
                          <span>Experto certificado</span>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Navigation buttons */}
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-card border-2 border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 group" aria-label="Previous team member">
              <ChevronLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-card border-2 border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 group" aria-label="Next team member">
              <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {team.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-primary dark:bg-primary-glow" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Go to team member ${index + 1}`} />)}
            </div>
          </div>

          {/* Team description */}
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              Nuestro equipo está compuesto por <span className="font-semibold text-foreground">Matemáticos e Ingenieros</span> expertos en inteligencia de negocios, análisis de datos y automatización, todos certificados y dedicados a diseñar soluciones personalizadas y de última generación.
            </p>
          </div>
        </div>
      </div>
    </section>;
};