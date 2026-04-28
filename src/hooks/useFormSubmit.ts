import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { formatZodErrors } from "@/utils/validation";

interface UseFormSubmitOptions<T> {
  schema: z.ZodSchema<T>;
  onSuccess?: (data: T) => void | Promise<void>;
  onError?: (error: unknown, data: T) => void;
}

interface FormState {
  isSubmitting: boolean;
  errors: Record<string, string>;
}

export function useFormSubmit<T extends Record<string, unknown>>(
  initialData: T,
  options: UseFormSubmitOptions<T>
) {
  const { schema, onSuccess, onError } = options;
  const { toast } = useToast();

  const [formData, setFormData] = useState<T>(initialData);
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    errors: {},
  });

  const setFieldValue = useCallback((field: keyof T, value: T[keyof T]) => {
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

  const setFieldError = useCallback((field: string, error: string) => {
    setFormState(prev => ({
      ...prev,
      errors: { ...prev.errors, [field]: error },
    }));
  }, []);

  const clearErrors = useCallback(() => {
    setFormState(prev => ({ ...prev, errors: {} }));
  }, []);

  const clearForm = useCallback(() => {
    setFormData(initialData);
    setFormState(prev => ({ ...prev, errors: {} }));
  }, [initialData]);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      clearErrors();

      const result = schema.safeParse(formData);

      if (!result.success) {
        const errors = formatZodErrors(result.error);
        setFormState(prev => ({ ...prev, errors }));
        toast({
          title: "Error de validación",
          description: "Por favor, revisa los campos marcados en rojo",
          variant: "destructive",
        });
        return;
      }

      setFormState(prev => ({ ...prev, isSubmitting: true }));

      try {
        if (onSuccess) {
          await onSuccess(result.data);
        }
      } catch (error) {
        if (onError) {
          onError(error, formData);
        }
      } finally {
        setFormState(prev => ({ ...prev, isSubmitting: false }));
      }
    },
    [schema, formData, onSuccess, onError, toast, clearErrors]
  );

  return {
    formData,
    setFormData,
    isSubmitting: formState.isSubmitting,
    errors: formState.errors,
    setFieldValue,
    setFieldError,
    clearErrors,
    clearForm,
    submit,
  };
}