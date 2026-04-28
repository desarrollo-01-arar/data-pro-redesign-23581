import { z } from "zod";

export const nitSchema = z
  .string()
  .trim()
  .min(1, "El NIT es obligatorio")
  .max(15, "El NIT debe tener máximo 15 caracteres")
  .regex(/^[0-9]+$/, "Solo se permiten números");

export const cedulaSchema = z
  .string()
  .trim()
  .min(1, "La cédula es obligatoria")
  .max(15, "La cédula debe tener máximo 15 caracteres")
  .regex(/^[0-9]+$/, "Solo se permiten números");

export const telefonoSchema = z
  .string()
  .trim()
  .min(1, "El teléfono es obligatorio")
  .max(15, "El teléfono debe tener máximo 15 caracteres")
  .regex(/^[0-9]+$/, "Solo se permiten números");

export const nombreSchema = z
  .string()
  .trim()
  .min(1, "Este campo es obligatorio")
  .max(50, "El nombre debe tener máximo 50 caracteres")
  .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "Solo se permiten letras");

export const emailSchema = z
  .string()
  .trim()
  .min(1, "Este campo es obligatorio")
  .email("Ingrese un correo electrónico válido")
  .max(50, "El correo debe tener máximo 50 caracteres");

export const companySchema = z
  .string()
  .trim()
  .max(100, "La empresa debe tener máximo 100 caracteres")
  .optional();

export const subjectSchema = z
  .string()
  .trim()
  .min(1, "Este campo es obligatorio")
  .max(100, "El asunto debe tener máximo 100 caracteres");

export const messageSchema = z
  .string()
  .trim()
  .min(1, "Este campo es obligatorio")
  .max(500, "La descripción debe tener máximo 500 caracteres");

export const descriptionSchema = z
  .string()
  .trim()
  .min(1, "Este campo es obligatorio")
  .max(500, "La descripción debe tener máximo 500 caracteres");

export const empresaIdSchema = z
  .number()
  .nullable()
  .refine(val => val !== null && val !== undefined, {
    message: "Debes buscar y seleccionar una empresa válida",
  });

export function formatZodErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  error.errors.forEach((err) => {
    if (err.path[0]) {
      errors[err.path[0].toString()] = err.message;
    }
  });
  return errors;
}