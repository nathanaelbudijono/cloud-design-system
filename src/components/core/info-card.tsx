import cn from "@/type/clsxm";
import * as React from "react";
import { IconType } from "react-icons";
import Typography from "./typography";
import Skeleton from "./skeleton";

const infoCardVariant = [
  "primary",
  "secondary",
  "warning",
  "success",
  "outline",
] as const;

type InfoCardVariant = (typeof infoCardVariant)[number];

type InfoCardProps = {
  icon?: IconType;
  iconClassNames?: string;
  isLoading?: boolean;
  label?: string;
  desc?: string;
  variant: InfoCardVariant;
} & React.ComponentPropsWithoutRef<"div">;

export default function InfoCard({
  className,
  icon: Icon,
  isLoading = false,
  label,
  desc,
  variant = "primary",
  ...rest
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-3 shadow-md",
        "flex items-center gap-3  text-color-100",
        "transition-colors duration-100",
        [
          variant === "primary" && ["bg-color-300 "],
          variant === "secondary" && ["bg-color-400"],
          variant === "warning" && ["bg-amber-500"],
          variant === "success" && ["bg-green-500"],
          variant === "outline" && [
            "border-color-100 border-[1px] hover:bg-blue-200 hover:text-typography-800 ",
          ],
        ]
      )}
      {...rest}
    >
      {Icon && (
        <div
          className={cn("p-2 bg-gray-200 rounded-lg", [
            variant === "primary" && ["bg-color-600 text-color-100"],
            variant === "secondary" && ["bg-color-300 text-color-100"],
            variant === "warning" && ["bg-amber-600 text-color-100"],
            variant === "success" && ["bg-green-600 text-color-100"],
            variant === "outline" && ["text-typography-800"],
          ])}
        >
          <Icon size={24} />
        </div>
      )}
      {isLoading ? (
        <section className="flex flex-col gap-2 w-full">
          <Skeleton className="w-1/2 h-5" />
          <Skeleton className="h-5" />
        </section>
      ) : (
        <section>
          <p className="leading-7">{label}</p>
          <p className="text-sm font-medium leading-none">{desc}</p>
        </section>
      )}
    </div>
  );
}