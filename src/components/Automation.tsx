import { Zap, Mail, Bell, Database, Webhook, Bot, ArrowRight, FileText, Users, TrendingUp, Calendar, Cloud } from "lucide-react";
import { Card, CardContent } from "./ui/card";
const automationExamples = [{
  icon: Mail,
  title: "Facturación Automática",
  description: "Envío automático de facturas del ERP por correo a clientes",
  color: "from-blue-500/20 to-blue-600/20"
}, {
  icon: Bell,
  title: "Alertas Inteligentes",
  description: "Notificaciones de respaldos, pagos vencidos y umbrales de indicadores",
  color: "from-yellow-500/20 to-yellow-600/20"
}, {
  icon: Database,
  title: "Sincronización de Datos",
  description: "Actualización automática de dashboards y bases de datos",
  color: "from-purple-500/20 to-purple-600/20"
}, {
  icon: Users,
  title: "Gestión de Leads",
  description: "Registro automático desde formularios web y correos de bienvenida",
  color: "from-green-500/20 to-green-600/20"
}, {
  icon: Webhook,
  title: "Integraciones API",
  description: "Conexión entre sistemas mediante webhooks y APIs REST",
  color: "from-red-500/20 to-red-600/20"
}, {
  icon: Bot,
  title: "Bots y Mensajería",
  description: "Integración con Telegram, WhatsApp y publicación en redes",
  color: "from-indigo-500/20 to-indigo-600/20"
}];
export const Automation = () => {
  return <section id="automatizacion" className="py-20 relative overflow-hidden">
      {/* Animated background with flowing waves */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[10%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-wave-slow" />
          <div className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-wave-medium" />
          <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent animate-wave-fast" />
          <div className="absolute top-[55%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-wave-slow" />
          <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-wave-medium" />
          <div className="absolute top-[85%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent animate-wave-fast" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-primary rounded-full mb-6 animate-pulse-glow">
            <Zap className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary dark:text-primary-glow">Automatización</span> de Procesos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ahorra tiempo y reduce errores con procesos automáticos que trabajan 24/7 por tu empresa
          </p>
        </div>

        {/* Premium automation cards with flow connections */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection lines between cards */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" style={{
            position: 'absolute'
          }}>
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationExamples.map((example, index) => {
            const Icon = example.icon;
            return <Card key={index} className="group relative hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 border-2 hover:border-primary/50 animate-fade-in-up overflow-hidden" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardContent className="p-6 relative">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary dark:group-hover:text-primary-glow transition-colors">
                          {example.title}
                        </h3>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                          {example.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow indicator */}
                    
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>

        {/* Technologies section with enhanced design */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Integramos con las <span className="text-primary dark:text-primary-glow">mejores herramientas</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[{
            name: "n8n",
            icon: Zap
          }, {
            name: "Power BI",
            icon: TrendingUp
          }, {
            name: "Slack",
            icon: Bell
          }, {
            name: "Siesa EE",
            icon: Database
          }, {
            name: "WhatsApp",
            icon: Bot
          }, {
            name: "Telegram",
            icon: Bot
          }, {
            name: "Google Drive",
            icon: Cloud
          }, {
            name: "APIs REST",
            icon: Webhook
          }].map(tool => <div key={tool.name} className="group px-6 py-3 rounded-xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 cursor-default flex items-center space-x-2">
                <tool.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tool.name}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};