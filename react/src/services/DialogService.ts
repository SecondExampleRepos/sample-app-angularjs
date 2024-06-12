import { useState } from 'react';
import { createPortal } from 'react-dom';

interface DialogOptions {
  message: string;
  details?: string;
  yesMsg?: string;
  noMsg?: string;
}

export const useDialogService = () => {
  const [dialogOptions, setDialogOptions] = useState<DialogOptions | null>(null);
  const [resolvePromise, setResolvePromise] = useState<((value: boolean) => void) | null>(null);

  const confirm = (message: string, details = "Are you sure?", yesMsg = "Yes", noMsg = "No"): Promise<boolean> => {
    return new Promise((resolve) => {
      setDialogOptions({ message, details, yesMsg, noMsg });
      setResolvePromise(() => resolve);
    });
  };

  const handleYes = () => {
    if (resolvePromise) resolvePromise(true);
    setDialogOptions(null);
  };

  const handleNo = () => {
    if (resolvePromise) resolvePromise(false);
    setDialogOptions(null);
  };

  const DialogComponent = dialogOptions ? (
    createPortal(
      <div className="dialog">
        <div className="dialog-content">
          <p>{dialogOptions.message}</p>
          <p>{dialogOptions.details}</p>
          <button onClick={handleYes}>{dialogOptions.yesMsg}</button>
          <button onClick={handleNo}>{dialogOptions.noMsg}</button>
        </div>
      </div>,
      document.body
    )
  ) : null;

  return { confirm, DialogComponent };
};