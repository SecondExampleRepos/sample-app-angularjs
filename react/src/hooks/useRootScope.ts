import { useState, useEffect } from 'react';

const useRootScope = () => {

  const [prefs, setPrefs] = useState({ restDelay: 0 });

  useEffect(() => {
    // Assuming we have a way to get initial values similar to $rootScope
    const initialPrefs = { restDelay: 1000 }; // Example initial value
    setPrefs(initialPrefs);
  }, []);

  const reset = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  const savePrefs = (newPrefs) => {
    setPrefs(newPrefs);
    // Assuming we have a way to save preferences similar to $rootScope
    // Example: save to local storage or a backend service
    localStorage.setItem('prefs', JSON.stringify(newPrefs));
    window.location.reload();
  };

  return {
    prefs,
    reset,
    savePrefs,
  };
};
};

export default useRootScope;