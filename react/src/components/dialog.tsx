import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface DialogProps {
  message: string;
  details?: string;
  yesMsg?: string;
  noMsg?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Dialog: React.FC<DialogProps> = ({ message, details = "Are you sure?", yesMsg = "Yes", noMsg = "No", onConfirm, onCancel }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    return () => {
      setIsOpen(false);
    };
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <div className="dialog">
      <div className="dialog-content">
        <h2>{message}</h2>
        <p>{details}</p>
        <button onClick={onConfirm}>{yesMsg}</button>
        <button onClick={onCancel}>{noMsg}</button>
      </div>
    </div>,
    document.body
  );
};

export default Dialog;