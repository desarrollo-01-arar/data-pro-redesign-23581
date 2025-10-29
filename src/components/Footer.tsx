import { Linkedin, Mail, MapPin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img src={logoLight} alt="DataPro Analítica" className="h-10 w-auto mb-4 dark:hidden" />
            <img src={logoDark} alt="DataPro Analítica" className="h-10 w-auto mb-4 hidden dark:block" />
            <p className="text-sm text-muted-foreground">
              Transformamos datos en decisiones inteligentes para empresas colombianas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[{
              label: "Tableros",
              href: "#tableros"
            }, {
              label: "Automatización",
              href: "#automatizacion"
            }, {
              label: "Consultorías",
              href: "#consultorias"
            }, {
              label: "Casos de Éxito",
              href: "#casos"
            }, {
              label: "Nosotros",
              href: "#nosotros"
            }, {
              label: "Contacto",
              href: "#contacto"
            }].map(link => <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={e => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: "smooth"
                });
              }}>
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contacto@datapro.com.co" className="hover:text-primary transition-colors">
                  contacto@datapro.com.co
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="https://maps.google.com/?q=Bogotá,Colombia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Centro Empresarial Natura
Torre 1 Oficina 206
Santander, Colombia</a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.linkedin.com/company/datapro" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} DataPro Analítica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};