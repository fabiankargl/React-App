import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-sm px-2 py-1 mx-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
      {...props}
    >
      {children}
    </button>
  );
};
