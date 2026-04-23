import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Ticket, Send, Building, User, FileText, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const ticketsSchema = z.object({
  IdEmpresa: z.number().nullable().refine(val => val !== null && val !== undefined, {
    message: "Debes buscar y seleccionar una empresa válida",
  }),
  empresaNit: z.string()
    .trim()
    .min(1, "El NIT es obligatorio")
    .max(15, "El NIT debe tener máximo 15 caracteres")
    .regex(/^[0-9]+$/, "Solo se permiten números"),
  empresaNombre: z.string()
    .trim()
    .min(1, "El nombre de la empresa es obligatorio")
    .max(50, "El nombre debe tener máximo 50 caracteres"),
  CedulaSolicitante: z.string()
    .trim()
    .min(1, "La cédula es obligatoria")
    .max(15, "La cédula debe tener máximo 15 caracteres")
    .regex(/^[0-9]+$/, "Solo se permiten números"),
  TelefonoSolicitante: z.string()
    .trim()
    .min(1, "El teléfono es obligatorio")
    .max(15, "El teléfono debe tener máximo 15 caracteres")
    .regex(/^[0-9]+$/, "Solo se permiten números"),
  NombreSolicitante: z.string()
    .trim()
    .min(1, "El nombre es obligatorio")
    .max(50, "El nombre debe tener máximo 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Solo se permiten letras"),
  Asunto: z.string()
    .trim()
    .min(1, "El asunto es obligatorio")
    .max(100, "El asunto debe tener máximo 100 caracteres"),
  Descripcion: z.string()
    .trim()
    .min(1, "La descripción es obligatoria")
    .max(500, "La descripción debe tener máximo 500 caracteres"),
});

type TicketsFormData = z.infer<typeof ticketsSchema>;

interface EmpresaData {
  id: number;
  nombre: string;
}

export const Tickets = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<TicketsFormData & { IdEmpresa: number | null }>({
    empresaNit: "",
    IdEmpresa: null,
    empresaNombre: "",
    CedulaSolicitante: "",
    TelefonoSolicitante: "",
    NombreSolicitante: "",
    Asunto: "",
    Descripcion: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === "empresaNit") {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.empresaNombre;
        return newErrors;
      });

      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      if (value.trim().length >= 3) {
        searchTimeoutRef.current = setTimeout(() => {
          handleSearchEmpresa(value);
        }, 500);
      } else if (value.trim().length === 0) {
        setFormData(prev => ({ ...prev, empresaNombre: "" }));
      }
    }

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleNumericKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End',
    ];

    if (
      allowedKeys.includes(e.key) ||
      e.key === 'a' && (e.ctrlKey || e.metaKey) ||
      e.key === 'c' && (e.ctrlKey || e.metaKey) ||
      e.key === 'v' && (e.ctrlKey || e.metaKey) ||
      e.key === 'x' && (e.ctrlKey || e.metaKey)
    ) {
      return;
    }

    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleLetterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End',
    ];

    if (
      e.key === 'c' && (e.ctrlKey || e.metaKey) ||
      e.key === 'v' && (e.ctrlKey || e.metaKey) ||
      e.key === 'x' && (e.ctrlKey || e.metaKey)
    ) {
      return;
    }

    if (allowedKeys.includes(e.key)) {
      return;
    }

    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]$/.test(e.key)) {
      return;
    }

    e.preventDefault();
  };

  const handleSearchEmpresa = async (nit: string) => {
    if (!nit.trim()) return;

    if (!/^[0-9]+$/.test(nit.trim())) {
      toast({
        title: "Formato inválido",
        description: "El NIT solo debe contener números",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors.empresaNombre;
      return newErrors;
    });

    try {
      const response = await fetch('https://datapro.com.co/app/tickets/empresas/' + nit, {
        method: 'GET',         
      });

      const data = await response.json();

      if (data.success && data.data) {
        const empresa: EmpresaData = data.data;
        setFormData(prev => ({
          ...prev,
          empresaNit: nit,
          IdEmpresa: empresa.id,
          empresaNombre: empresa.nombre,
        }));
      } else {
        setFormData(prev => ({ ...prev, empresaNit: nit, IdEmpresa: null, empresaNombre: "" }));
        setErrors(prev => ({
          ...prev,
          empresaNombre: data.message || "NIT no identificado en el sistema",
        }));
      }
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        empresaNombre: "Error al buscar la empresa. Intenta nuevamente.",
      }));
      toast({
        title: "Error de conexión",
        description: "No se pudo conectar con el servidor",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!formData.IdEmpresa) {
      setErrors(prev => ({
        ...prev,
        empresaNit: "Debes buscar y seleccionar una empresa válida",
      }));
      toast({
        title: "Empresa requerida",
        description: "Por favor, busca y selecciona una empresa válida",
        variant: "destructive",
      });
      return;
    }

    const result = ticketsSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(newErrors);
      toast({
        title: "Error de validación",
        description: "Por favor, revisa los campos marcados en rojo",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      IdEmpresa: formData.IdEmpresa,
      CedulaSolicitante: formData.CedulaSolicitante,
      TelefonoSolicitante: formData.TelefonoSolicitante,
      NombreSolicitante: formData.NombreSolicitante,
      Asunto: formData.Asunto,
      Descripcion: formData.Descripcion,
    };

    try {
      const response = await fetch('https://datapro.com.co/app/tickets/crear_ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "¡Ticket creado!",
          description: data.message || "Tu solicitud ha sido enviada exitosamente",
        });

        setFormData({
          empresaNit: "",
          IdEmpresa: null,
          empresaNombre: "",
          CedulaSolicitante: "",
          TelefonoSolicitante: "",
          NombreSolicitante: "",
          Asunto: "",
          Descripcion: "",
        });
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        toast({
          title: "Error al crear ticket",
          description: data.message || "Hubo un problema al enviar tu solicitud",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error de conexión",
        description: "No se pudo conectar con el servidor",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-gradient-breathing animate-breathing-slow opacity-60" />
        <div className="absolute bottom-[-10%] right-[15%] w-[500px] h-[500px] bg-gradient-breathing animate-breathing opacity-50" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-gradient-wave-1 animate-float-soft opacity-40" />
        <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] bg-gradient-wave-2 animate-breathing-slow opacity-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-accent mb-6">
            <Ticket className="h-10 w-10 text-accent-foreground" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Crear <span className="text-accent">Ticket</span> de Soporte
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Reporta tu solicitud y nuestro equipo de mesa de ayuda se pondrá en contacto contigo
          </p>
        </motion.div>

        <Card className="max-w-4xl mx-auto border-2 border-accent/30 animate-fade-in-up">
          <CardContent className="p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-border">
                  <Building className="h-6 w-6 text-accent" />
                  <h2 className="text-xl font-semibold">Empresa Solicitante</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="empresaNit">
                      NIT <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="empresaNit"
                      name="empresaNit"
                      value={formData.empresaNit}
                      onChange={handleInputChange}
                      onKeyDown={handleNumericKeyDown}
                      placeholder="Número de identificación tributaria"
                      className={`transition-all focus:shadow-glow ${
                        errors.empresaNit ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {errors.empresaNit && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.empresaNit}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="empresaNombre">
                      Nombre de la Empresa <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="empresaNombre"
                      name="empresaNombre"
                      value={formData.empresaNombre}
                      readOnly
                      placeholder="Nombre de la empresa"
                      className={`transition-all focus:shadow-glow ${
                        errors.empresaNombre ? "border-destructive focus-visible:ring-destructive" : ""
                      } cursor-not-allowed`}
                    />
                    {errors.empresaNombre && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.empresaNombre}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-border">
                  <User className="h-6 w-6 text-accent" />
                  <h2 className="text-xl font-semibold">Datos del Solicitante</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="CedulaSolicitante">
                      Cédula <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="CedulaSolicitante"
                      name="CedulaSolicitante"
                      value={formData.CedulaSolicitante}
                      onChange={handleInputChange}
                      onKeyDown={handleNumericKeyDown}
                      placeholder="Número de cédula"
                      className={`transition-all focus:shadow-glow ${
                        errors.CedulaSolicitante ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {errors.CedulaSolicitante && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.CedulaSolicitante}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="TelefonoSolicitante">
                      Teléfono <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="TelefonoSolicitante"
                      name="TelefonoSolicitante"
                      value={formData.TelefonoSolicitante}
                      onChange={handleInputChange}
                      onKeyDown={handleNumericKeyDown}
                      type="tel"
                      placeholder="Número de teléfono"
                      className={`transition-all focus:shadow-glow ${
                        errors.TelefonoSolicitante ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {errors.TelefonoSolicitante && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.TelefonoSolicitante}</p>
                    )}
                  </div>

                  <div className="space-y-2 md:col-span-1">
                    <Label htmlFor="NombreSolicitante">
                      Nombre Completo <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="NombreSolicitante"
                      name="NombreSolicitante"
                      value={formData.NombreSolicitante}
                      onChange={handleInputChange}
                      onKeyDown={handleLetterKeyDown}
                      placeholder="Nombre completo"
                      className={`transition-all focus:shadow-glow ${
                        errors.NombreSolicitante ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {errors.NombreSolicitante && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.NombreSolicitante}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-border">
                  <FileText className="h-6 w-6 text-accent" />
                  <h2 className="text-xl font-semibold">Detalles de la Solicitud</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="Asunto">
                      Asunto <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="Asunto"
                      name="Asunto"
                      value={formData.Asunto}
                      onChange={handleInputChange}
                      placeholder="Breve descripción del problema o solicitud"
                      className={`transition-all focus:shadow-glow ${
                        errors.Asunto ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {errors.Asunto && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.Asunto}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="Descripcion">
                      Descripción <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="Descripcion"
                      name="Descripcion"
                      value={formData.Descripcion}
                      onChange={handleInputChange}
                      placeholder="Describe detalladamente tu solicitud o problema"
                      rows={6}
                      className={`transition-all focus:shadow-glow resize-none ${
                        errors.Descripcion ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {errors.Descripcion && (
                      <p className="text-sm font-semibold text-destructive mt-1">{errors.Descripcion}</p>
                    )}
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSearching}
                className="w-full bg-gradient-accent hover:shadow-glow transition-all group text-accent-foreground"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : isSearching ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Buscando empresa...
                  </>
                ) : (
                  <>
                    Crear Ticket
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};