import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Tableros", href: "#tableros" },
    { label: "Automatización", href: "#automatizacion" },
    { label: "Consultorías", href: "#consultorias" },
    { label: "Casos de Éxito", href: "#casos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <img
              src={logoDark}
              alt="DataPro Analítica"
              className={`w-auto dark:hidden transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "h-10" : "h-14"
              }`}
            />
            <img
              src={logoLight}
              alt="DataPro Analítica"
              className={`w-auto hidden dark:block transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "h-10" : "h-14"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-all"
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="default"
              className="ml-4 bg-gradient-primary hover:shadow-glow transition-all"
              onClick={() => window.open("https://datapro.com.co/portal", "_blank")}
            >
              Portal de Clientes
            </Button>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 space-y-2 animate-fade-in-up bg-background/98 backdrop-blur-md rounded-lg border border-border shadow-lg">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="w-full justify-start text-foreground hover:text-foreground hover:bg-secondary/80"
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="default"
              className="w-full bg-gradient-primary mx-2"
              onClick={() => window.open("https://datapro.com.co/portal", "_blank")}
            >
              Portal de Clientes
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
