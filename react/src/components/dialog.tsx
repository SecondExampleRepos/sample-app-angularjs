import React, { useEffect, useState } from 'react';

interface DialogProps {
  message?: string;
  details?: string;
  yesMsg: string;
  noMsg: string;
  onYes: () => void;
  onNo: () => void;
}

const Dialog: React.FC<DialogProps> = ({ message, details, yesMsg, noMsg, onYes, onNo }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`dialog ${active ? 'active' : ''}`}>
      <div className="backdrop"></div>
      <div className="wrapper">
        <div className="content">
          {message && <h4>{message}</h4>}
          {details && <div>{details}</div>}
          <div style={{ paddingTop: '1em' }}>
            <button className="btn btn-primary" onClick={onYes}>{yesMsg}</button>
            <button className="btn btn-primary" onClick={onNo}>{noMsg}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;