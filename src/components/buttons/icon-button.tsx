import cn from "@/type/clsxm";
import * as React from "react";
import { IconType } from "react-icons";
import { ImSpinner2 } from "react-icons/im";

const ButtonVariant = [
  "primary",
  "secondary",
  "outline",
  "ghost",
  "warning",
] as const;
const ButtonSize = ["sm", "base", "lg"] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  icon?: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithRef<"button">;

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      size = "base",
      icon: Icon,
      iconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg ",
          "focus:outline-none focus-visible:ring",
          "shadow-sm",
          "transition-colors duration-100",
          "active:bg-ready-400",
          "disabled:bg-danger-400",
          //#region  //*=========== Size ===========
          [
            size === "lg" && ["px-3 py-2.5"],
            size === "base" && ["px-2.5 py-2"],
            size === "sm" && ["px-2 py-1.5"],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === "primary" && [
              "bg-d-500 text-color-100",
              "border border-d-600",
              "hover:bg-d-600 hover:border-d-500",
            ],

            variant === "warning" && [
              "bg-amber-500 text-white",
              "border border-amber-500",
              "hover:bg-amber-600 hover:text-color-100",
              "active:bg-amber-700",
              "disabled:bg-amber-600",
            ],
            variant === "outline" && [
              "bg-clip-padding backdrop-filter backdrop-blur-sm border border-d-400 text-color-100",
              "hover:bg-d-400 hover:text-typography-800 active:bg-typo-divider disabled:bg-typo-divider",
            ],
            variant === "ghost" && [
              "shadow-none text-color-100",
              "hover:bg-d-400 hover:text-typography-800 active:bg-primary-100 disabled:bg-primary-100",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "text-white": [
                  "primary",
                  "secondary",
                  "danger",
                  "warning",
                ].includes(variant),
                "text-primary-500": ["outline", "ghost"].includes(variant),
              }
            )}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        )}
        {Icon && <Icon size="1rem" className={cn(iconClassName)} />}
      </button>
    );
  }
);

export default IconButton;
