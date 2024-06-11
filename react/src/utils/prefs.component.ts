import React, { useState } from 'react';

interface AppConfig {
  restDelay: number;
  save: () => void;
}

interface PrefsProps {
  appConfig: AppConfig;
}

const PrefsComponent: React.FC<PrefsProps> = ({ appConfig }) => {
  const [prefs, setPrefs] = useState({ restDelay: appConfig.restDelay });

  const reset = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  const savePrefs = () => {
    appConfig.restDelay = prefs.restDelay;
    appConfig.save();
    window.location.reload();
  };

  return (
    <div>
      <div>
        <button className="btn btn-primary" onClick={reset}>
          <i className="fa fa-recycle"></i> <span>Reset All Data</span>
        </button>
      </div>

      <div>
        <label htmlFor="restDelay">Simulated REST API delay (ms)</label>
        <input
          type="text"
          name="restDelay"
          value={prefs.restDelay}
          onChange={(e) => setPrefs({ ...prefs, restDelay: Number(e.target.value) })}
        />
        <button className="btn btn-primary" onClick={savePrefs}>Save</button>
      </div>
    </div>
  );
};

export default PrefsComponent;