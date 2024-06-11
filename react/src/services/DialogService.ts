import { useState, useEffect } from 'react';

interface DialogService {
  showDialog: () => void;
  hideDialog: () => void;
}

const useDialogService = (): DialogService => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
  };

  return {
    showDialog,
    hideDialog,
  };
};

export default useDialogService;