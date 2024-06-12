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

const Dialog: React.FC<DialogProps> = ({
  message,
  details = "Are you sure?",
  yesMsg = "Yes",
  noMsg = "No",
  onConfirm,
  onCancel
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    return () => {
      setIsActive(false);
    };
  }, []);

  return createPortal(
    <div className={`dialog ${isActive ? 'active' : ''}`}>
      <div className="dialog-content">
        <p>{message}</p>
        <p>{details}</p>
        <button onClick={onConfirm}>{yesMsg}</button>
        <button onClick={onCancel}>{noMsg}</button>
      </div>
    </div>,
    document.body
  );
};

export default Dialog;