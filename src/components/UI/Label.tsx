import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
  forHtml: string;
  className: string;
}

export const Label = ({ children, forHtml, className }: LabelProps) => {
    return (
      <label
        htmlFor={forHtml}
        className={`text-lg p-2 ${className}`}
      >
        {children}
      </label>
    );
  };