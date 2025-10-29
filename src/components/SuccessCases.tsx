import { Award, Building2 } from "lucide-react";
const cases = [{
  name: "Agencia de seguros Asekura",
  logo: "https://datapro.com.co/CasosExito/Agencia%20de%20seguros%20Asekura.png",
  industry: "Seguros"
}, {
  name: "Agroinversiones Hecarse",
  logo: "https://datapro.com.co/CasosExito/Agroinversiones%20Hecarse.png",
  industry: "Agroindustria"
}, {
  name: "Arar Financiera",
  logo: "https://datapro.com.co/CasosExito/Arar%20Financiera.png",
  industry: "Financiero"
}, {
  name: "ColMotos",
  logo: "https://datapro.com.co/CasosExito/ColMotos.png",
  industry: "Automotriz"
}, {
  name: "Distribuidora Rayco",
  logo: "https://datapro.com.co/CasosExito/Distribuidora%20Rayco.png",
  industry: "Distribución"
}, {
  name: "Distribuidora Rex",
  logo: "https://datapro.com.co/CasosExito/Distribuidora%20Rex.png",
  industry: "Distribución"
}, {
  name: "Inversiones Arar",
  logo: "https://datapro.com.co/CasosExito/Inversiones%20Arar.png",
  industry: "Financiero"
}, {
  name: "Italo Colombiana de Baterías (ICB)",
  logo: "https://datapro.com.co/CasosExito/Italo%20Colombiana%20de%20Bater%C3%ADas.png",
  industry: "Automotriz"
}, {
  name: "Promotores del Oriente",
  logo: "https://datapro.com.co/CasosExito/Promotores%20del%20Oriente.png",
  industry: "Automotriz"
}, {
  name: "Representaciones An kal",
  logo: "https://datapro.com.co/CasosExito/Repesentaciones%20An%20kal.png",
  industry: "Comercial"
}];
export const SuccessCases = () => {
  return <section id="casos-exito" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-wave-slow" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-wave-medium" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-accent rounded-full mb-6 animate-pulse-glow">
            <Award className="h-8 w-8 text-accent-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Casos de <span className="text-primary dark:text-primary-glow">Éxito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora cómo hemos transformado desafíos en triunfos con nuestros casos de éxito en implementación y optimización
          </p>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {cases.map((company, index) => <div key={index} style={{
          animationDelay: `${index * 50}ms`
        }} className="group relative bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 animate-fade-in-up flex flex-col items-center justify-center">
              
              {/* Logo container */}
              <div className="relative w-full aspect-video flex items-center justify-center mb-4 transition-transform duration-500">
                <img src={company.logo} alt={company.name} loading="lazy" className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
              </div>

              {/* Company name - always visible, better styled */}
              <h3 className="text-center text-sm font-bold mb-2 text-foreground group-hover:text-primary dark:group-hover:text-primary-glow transition-colors duration-300 leading-snug min-h-[2.5rem] flex items-center justify-center">
                {company.name}
              </h3>

              {/* Industry badge - shows on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-glow border border-primary/20 text-xs whitespace-nowrap">
                  <Building2 className="h-3 w-3 mr-1.5" />
                  {company.industry}
                </span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 pointer-events-none" />
            </div>)}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de <span className="font-bold text-primary dark:text-primary-glow">una década de experiencia</span> transformando datos en decisiones estratégicas
          </p>
        </div>
      </div>
    </section>;
};