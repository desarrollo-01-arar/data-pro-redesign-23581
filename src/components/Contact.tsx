import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormField } from "./FormField";
import { useCallback, useState } from "react";
import {
  subjectSchema,
  nombreSchema,
  emailSchema,
  telefonoSchema,
  companySchema,
  messageSchema,
  formatZodErrors
} from "@/utils/validation";

import { z } from "zod";

const contactSchema = z.object({
  subject: subjectSchema,
  name: nombreSchema,
  company: companySchema,
  email: emailSchema,
  phone: telefonoSchema,
  message: messageSchema,
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormState {
  isSubmitting: boolean;
  errors: Record<string, string>;
}

const initialFormData: ContactFormData = {
  subject: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formState, setFormState] = useState<ContactFormState>({
    isSubmitting: false,
    errors: {},
  });

  const setFieldValue = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setFormState(prev => {
      if (prev.errors[field as string]) {
        const newErrors = { ...prev.errors };
        delete newErrors[field as string];
        return { ...prev, errors: newErrors };
      }
      return prev;
    });
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFieldValue(name as keyof ContactFormData, value);
  }, [setFieldValue]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, errors: {} }));

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const errors = formatZodErrors(result.error);
      setFormState(prev => ({ ...prev, errors }));
      toast({
        title: "Error de validación",
        description: "Por favor, revisa los campos marcados en rojo.",
        variant: "destructive",
      });
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true }));

    try {
      const response = await fetch('https://datapro.com.co/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: data.message || "Nos pondremos en contacto contigo pronto.",
        });
        setFormData(initialFormData);
      } else {
        if (data.errors) {
          setFormState(prev => ({ ...prev, errors: data.errors }));
        }
        toast({
          title: "Error al enviar",
          description: data.message || "Hubo un problema al enviar tu mensaje. Intenta nuevamente.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error de conexión",
        description: "No se pudo conectar con el servidor. Por favor, verifica tu conexión e intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  }, [formData, toast]);

  const { isSubmitting, errors } = formState;

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-gradient-breathing animate-breathing opacity-30" />
        <div className="absolute bottom-[15%] right-[10%] w-[450px] h-[450px] bg-gradient-wave-2 animate-breathing-slow opacity-35" />
        <div className="absolute top-[50%] left-[5%] w-[300px] h-[300px] bg-gradient-wave-1 animate-float-soft opacity-25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Hablemos de tu <span className="text-primary dark:text-primary-glow">Proyecto</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos listos para ayudarte a transformar tu empresa con datos e inteligencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          <div className="hidden lg:block space-y-4 sm:space-y-6 animate-fade-in-up">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                    <a
                      href="mailto:gerencia@datapro.com.co"
                      className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                    >
                      gerencia@datapro.com.co
                    </a>
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
                    <a
                      href="tel:+573174307397"
                      className="text-sm font-semibold text-muted-foreground hover:text-accent transition-colors"
                    >
                      +57 317 430 7397
                    </a>
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

          <Card
            className="lg:col-span-2 col-span-1 border-2 hover:border-primary/30 transition-all animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <CardContent className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <FormField
                  label="Asunto"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Motivo del contacto"
                  error={errors.subject}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Nombre completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ingrese su nombre"
                    error={errors.name}
                    required
                  />

                  <FormField
                    label="Correo Electrónico"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="ejemplo@correo.com"
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Empresa"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de su empresa"
                    error={errors.company}
                  />

                  <FormField
                    label="Teléfono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Ingrese su número de teléfono"
                    error={errors.phone}
                    required
                  />
                </div>

                <FormField
                  label="Descripción"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  type="textarea"
                  rows={5}
                  placeholder="Escriba su mensaje aquí"
                  error={errors.message}
                  required
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all group"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};