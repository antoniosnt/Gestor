import React, { JSX } from "react";

interface GestorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
}

const GestorButton = ({
  children,
  mode = "redirect",
  onClick,
  className,
  ...props
}: GestorButtonProps): JSX.Element => {
  if (mode === "modal") return <span>in development</span>;

  return (
    <button onClick={onClick} {...props} className={className ? className : "bg-blue-950 text-white font-bold"}>
      {children}
    </button>
  );
};

export default GestorButton;
