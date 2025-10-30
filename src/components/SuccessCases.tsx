import { motion } from "framer-motion";
import { Award, Building2, CheckCircle2 } from "lucide-react";
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
export const SuccessCases = () => {
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

        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {cases.map((company, index) => <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative bg-gradient-to-br from-card via-card to-card/80 border-2 border-border/50 rounded-2xl p-8 hover:border-primary/60 hover:shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-3 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden"
          >
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-bl-full transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-accent opacity-0 group-hover:opacity-15 rounded-tr-full transition-all duration-500" />
              
              {/* Success badge - subtle detail */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <CheckCircle2 className="h-5 w-5 text-primary dark:text-primary-glow" strokeWidth={2.5} />
              </div>

              {/* Decorative line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-3/4 transition-all duration-700" />
              
              {/* Logo container */}
              <div className="relative w-full aspect-video flex items-center justify-center mb-6 transition-transform duration-500">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  loading="lazy" 
                  className="max-w-full max-h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Company name - enhanced typography */}
              <h3 className="text-center text-base font-bold mb-3 text-foreground group-hover:text-primary dark:group-hover:text-primary-glow transition-all duration-300 leading-tight min-h-[2.5rem] flex items-center justify-center tracking-tight">
                <span className="relative">
                  {company.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500" />
                </span>
              </h3>

              {/* Industry badge - shows on hover with better design */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="inline-flex items-center font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary dark:text-primary-glow border border-primary/30 text-xs whitespace-nowrap backdrop-blur-sm">
                  <Building2 className="h-3.5 w-3.5 mr-2" strokeWidth={2.5} />
                  {company.industry}
                </span>
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />
            </motion.div>)}
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