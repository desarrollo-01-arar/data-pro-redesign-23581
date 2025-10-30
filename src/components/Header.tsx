import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = [
        "tableros",
        "automatizacion",
        "consultorias",
        "casos",
        "nosotros",
        "contacto",
      ];

      const scrollPosition = window.scrollY + 100;

      if (window.scrollY < 100) {
        setActiveSection("");
        setIndicatorStyle({ left: 0, width: 0 });
        return;
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection) {
      const activeButton = document.querySelector(`[data-section="${activeSection}"]`);
      if (activeButton) {
        const rect = activeButton.getBoundingClientRect();
        const container = activeButton.parentElement;
        if (container) {
          const containerRect = container.getBoundingClientRect();
          setIndicatorStyle({
            left: rect.left - containerRect.left,
            width: rect.width,
          });
        }
      }
    }
  }, [activeSection]);

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
                isScrolled ? "h-10" : "h-20"
              }`}
            />
            <img
              src={logoLight}
              alt="DataPro Analítica"
              className={`w-auto hidden dark:block transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "h-10" : "h-20 relative"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 relative">
            <div
              className="absolute bottom-0 h-0.5 bg-gradient-primary rounded-full transition-all duration-500 ease-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: activeSection ? 1 : 0,
              }}
            />
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  data-section={item.href.substring(1)}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-all duration-300 text-base ${
                    isActive
                      ? "text-primary dark:text-primary-glow"
                      : ""
                  }`}
                >
                  {item.label}
                </Button>
              );
            })}
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
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full justify-start text-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-300 ${
                    isActive
                      ? "bg-secondary/50 text-primary dark:text-primary-glow font-medium border-l-4 border-primary dark:border-primary-glow"
                      : ""
                  }`}
                >
                  {item.label}
                </Button>
              );
            })}
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