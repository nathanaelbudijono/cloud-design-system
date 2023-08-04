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
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      size = "base",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
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
              "bg-color-300 text-color-100",
              "border border-color-300",
              "hover:bg-color-600 hover:border-color-600",
            ],
            variant === "secondary" && [
              "bg-color-400 text-color-100",
              "border border-color-400",
              "hover:bg-color-300 hover:border-color-300  ",
              "disabled:border-danger-500",
            ],

            variant === "warning" && [
              "bg-amber-500 text-white",
              "border border-amber-500",
              "hover:bg-amber-600 hover:text-white",
              "active:bg-amber-700",
              "disabled:bg-amber-700",
            ],
            variant === "outline" && [
              "border-color-100 border-[1px] text-color-100 ",
              "hover:bg-blue-200 hover:text-typography-700 active:bg-typo-divider disabled:bg-typo-divider",
            ],
            variant === "ghost" && [
              "shadow-none text-color-100",
              "hover:bg-color-200 hover:text-typography-800 active:bg-primary-100 disabled:bg-primary-100",
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
        {LeftIcon && (
          <div
            className={cn([
              size === "lg" && "mr-3",
              size === "base" && "mr-2",
              size === "sm" && "mr-1",
            ])}
          >
            <LeftIcon
              size="1em"
              className={cn("text-base", leftIconClassName)}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={cn([
              size === "lg" && "ml-3",
              size === "base" && "ml-2",
              size === "sm" && "ml-1",
            ])}
          >
            <RightIcon
              size="1em"
              className={cn("text-base", rightIconClassName)}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
