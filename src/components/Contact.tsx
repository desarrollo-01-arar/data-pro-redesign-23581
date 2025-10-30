import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto."
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contacto" className="py-20 relative overflow-hidden">
      {/* Premium breathing background */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-gradient-breathing animate-breathing opacity-30" />
        <div className="absolute bottom-[15%] right-[10%] w-[450px] h-[450px] bg-gradient-wave-2 animate-breathing-slow opacity-35" />
        <div className="absolute top-[50%] left-[5%] w-[300px] h-[300px] bg-gradient-wave-1 animate-float-soft opacity-25" />
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
            Hablemos de tu <span className="text-primary dark:text-primary-glow">Proyecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarte a transformar tu empresa con datos e inteligencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                    <a href="mailto:contacto@datapro.com.co" className="text-sm text-muted-foreground hover:text-primary transition-colors">gerencia@datapro.com.co</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-accent">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <a href="tel:+573001234567" className="text-sm text-muted-foreground hover:text-accent transition-colors">+57 317 430 7397</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Horario de Atención</h3>
                <p className="text-sm text-muted-foreground">
                  Lunes a Viernes<br />
                  8:00 AM - 6:00 PM<br />
                  Zona horaria: Colombia (GMT-5)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-2 hover:border-primary/30 transition-all animate-fade-in-up" style={{
          animationDelay: "100ms"
        }}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" className="transition-all focus:shadow-glow" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa *</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Nombre de tu empresa" className="transition-all focus:shadow-glow" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="tu@email.com" className="transition-all focus:shadow-glow" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+57 300 123 4567" className="transition-all focus:shadow-glow" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Cuéntanos sobre tu proyecto..." rows={5} className="transition-all focus:shadow-glow resize-none" />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-primary hover:shadow-glow transition-all group">
                  {isSubmitting ? "Enviando..." : <>
                      Enviar mensaje
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};