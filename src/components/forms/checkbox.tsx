import clsx from "clsx";
import get from "lodash.get";
import * as React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Typography from "../core/typography";
import clsxm from "@/type/clsxm";

export type CheckboxProps = {
  label: string;
  name: string;
  value?: string | number;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
} & Omit<React.ComponentPropsWithoutRef<"input">, "size">;

export default function Checkbox({
  label,
  name,
  value,
  placeholder = "",
  helperText,
  readOnly = false,
  hideError = false,
  validation,
  disabled,
  ...rest
}: CheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);

  return (
    <div>
      <div className="flex items-center gap-2">
        <input
          {...register(name, validation)}
          {...rest}
          type="checkbox"
          name={name}
          id={`${name}_${value}`}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          className={clsxm(
            "mt-[0.25em]",
            "shrink-0 cursor-pointer",
            "rounded-sm focus:ring-0 focus:ring-offset-0",
            (readOnly || disabled) &&
              "cursor-not-allowed bg-gray-100 disabled:checked:bg-d-400",
            error && "border-danger-400 bg-danger-100"
          )}
          placeholder={placeholder}
          aria-describedby={name}
        />
        <Typography
          className={clsx((readOnly || disabled) && "cursor-not-allowed")}
          as="label"
          htmlFor={`${name}_${value}`}
          variant="p"
        >
          {label}
        </Typography>
      </div>
      {helperText && (
        <Typography variant="small" className="mt-1">
          {helperText}
        </Typography>
      )}
      {!hideError && error && (
        <Typography variant="small" color="danger" className="mt-1">
          {error?.message?.toString()}
        </Typography>
      )}
    </div>
  );
}
