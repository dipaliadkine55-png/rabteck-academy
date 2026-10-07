import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="btn"
    >
      {label}
    </button>
  );
};
