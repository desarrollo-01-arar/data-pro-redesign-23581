import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "password" | "number";
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  className?: string;
  inputClassName?: string;
}

export function FormField({
  label,
  name,
  value,
  onChange,
  onKeyDown,
  placeholder,
  type = "text",
  error,
  disabled = false,
  readOnly = false,
  required = false,
  rows = 5,
  className,
  inputClassName,
}: FormFieldProps) {
  const isTextarea = type === "textarea";
  const inputId = `${name}-input`;

  const errorClass = error ? "border-destructive focus-visible:ring-destructive" : "";

  const baseInputClasses = cn(
    "transition-all focus:shadow-glow",
    errorClass,
    disabled && "opacity-50",
    readOnly && "cursor-not-allowed",
    inputClassName
  );

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={inputId}>
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>

      {isTextarea ? (
        <Textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={cn(baseInputClasses, "resize-none")}
        />
      ) : (
        <Input
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          type={type === "textarea" ? "text" : type}
          disabled={disabled}
          readOnly={readOnly}
          className={baseInputClasses}
        />
      )}

      {error && (
        <p className="text-sm font-semibold text-destructive mt-1">{error}</p>
      )}
    </div>
  );
}

interface FormFieldReadOnlyProps {
  label: string;
  name: string;
  value: string;
  error?: string;
  required?: boolean;
  className?: string;
}

export function FormFieldReadOnly({
  label,
  name,
  value,
  error,
  required = false,
  className,
}: FormFieldReadOnlyProps) {
  return (
    <FormField
      label={label}
      name={name}
      value={value}
      onChange={() => {}}
      placeholder=""
      error={error}
      required={required}
      readOnly
      className={className}
    />
  );
}