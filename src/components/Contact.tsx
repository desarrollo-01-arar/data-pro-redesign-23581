import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  subject: z.string()
    .trim()
    .min(1, "Este campo es obligatorio")
    .max(50, "El asunto debe tener máximo 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Solo se permiten letras"),
  name: z.string()
    .trim()
    .min(1, "Este campo es obligatorio")
    .max(30, "El nombre debe tener máximo 30 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Solo se permiten letras"),
  company: z.string().trim().max(100, "La empresa debe tener máximo 100 caracteres").optional(),
  email: z.string()
    .trim()
    .min(1, "Este campo es obligatorio")
    .email("Ingrese un correo electrónico válido")
    .max(50, "El correo debe tener máximo 50 caracteres"),
  phone: z.string()
    .trim()
    .min(1, "Este campo es obligatorio")
    .regex(/^\+?[0-9\s]+$/, "Ingrese un número de teléfono válido")
    .max(15, "El teléfono debe tener máximo 15 caracteres"),
  message: z.string()
    .trim()
    .min(1, "Este campo es obligatorio")
    .max(300, "El mensaje debe tener máximo 300 caracteres"),
});
export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validación manual con zod
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto."
    });
    setFormData({
      subject: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
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
                    <a href="mailto:contacto@datapro.com.co" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">gerencia@datapro.com.co</a>
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
                    <a href="tel:+573001234567" className="text-sm font-semibold text-muted-foreground hover:text-accent transition-colors">+57 317 430 7397</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Horario de Atención</h3>
                <p className="text-sm font-semibold text-muted-foreground">
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
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Asunto - Full width */}
                <div className="space-y-2">
                  <Label htmlFor="subject">
                    Asunto <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    placeholder="Motivo del contacto" 
                    className={`transition-all focus:shadow-glow ${errors.subject ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-sm font-semibold text-destructive mt-1">{errors.subject}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Nombre completo <span className="text-destructive">*</span>
                    </Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Ingrese su nombre" 
                      className={`transition-all focus:shadow-glow ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Correo Electrónico <span className="text-destructive">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="ejemplo@correo.com" 
                      className={`transition-all focus:shadow-glow ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Empresa <span className="text-muted-foreground">(Opcional)</span>
                    </Label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange}
                      placeholder="Nombre de su empresa" 
                      className={`transition-all focus:shadow-glow ${errors.company ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.company && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.company}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Teléfono <span className="text-destructive">*</span>
                    </Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="Ingrese su número de teléfono" 
                      className={`transition-all focus:shadow-glow ${errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Descripción <span className="text-destructive">*</span>
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Escriba su mensaje aquí" 
                    rows={5} 
                    className={`transition-all focus:shadow-glow resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-sm font-semibold text-destructive mt-1">{errors.message}</p>
                  )}
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