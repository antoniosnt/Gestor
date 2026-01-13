import React, { JSX } from "react";

// LUCIDE ICONS
import { LucideIcon } from "lucide-react";

// CONSTANTS
import { COLOR_OPTIONS } from "@/constants/";

type VariantButtonType = keyof typeof COLOR_OPTIONS;

type ButtonAdornmentType = {
  startIcon: LucideIcon;
};

interface GestorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: VariantButtonType;
  mode?: "default" | "redirect";
  buttonAdornment?: ButtonAdornmentType;
}

const GestorButton = ({
  children,
  mode = "redirect",
  onClick,
  className,
  variant = "info",
  buttonAdornment,
  ...props
}: GestorButtonProps): JSX.Element => {
  const StartIcon = buttonAdornment?.startIcon;

  if (mode === "default") {
    return (
      <button
        onClick={onClick}
        {...props}
        className={
          className
            ? className
            : `${COLOR_OPTIONS[variant]} flex items-center justify-center gap-1 text-white p-3 pl-5 pr-5 font-medium text-sm rounded cursor-pointer drop-shadow-lg transition ease-in-out active:scale-95 hover:opacity-95`
        }
      >
        {StartIcon && <StartIcon />}
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      {...props}
      className={
        className
          ? className
          : `${COLOR_OPTIONS[variant]} flex items-center justify-around text-white pr-24 pl-24 pt-4 pb-4 font-medium text-sm rounded-2xl cursor-pointer drop-shadow-lg transition ease-in-out active:scale-95 hover:opacity-95`
      }
    >
      {StartIcon && <StartIcon />}
      {children}
    </button>
  );
};

export default GestorButton;
