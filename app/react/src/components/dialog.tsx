import React, { useState } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="dialog-close-button">X</button>
        </div>
        <div className="dialog-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;