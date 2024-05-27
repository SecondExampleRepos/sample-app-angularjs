import React, { useState, useEffect } from 'react';

interface DialogProps {
  // Define the props that the dialog component will accept
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, title, onClose, children }) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-header">
          <h2>{title}</h2>
          <button onClick={handleClose} className="dialog-close-button">X</button>
        </div>
        <div className="dialog-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;