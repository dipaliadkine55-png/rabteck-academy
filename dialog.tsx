import React, { useEffect, useRef } from "react";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      dialogRef.current?.focus();
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-desc"
      ref={dialogRef}
      tabIndex={-1}
      className="dialog"
    >
      <h2 id="dialog-title">{title}</h2>
      <div id="dialog-desc">{children}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
