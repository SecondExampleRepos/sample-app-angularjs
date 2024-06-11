import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Services from './routes/Services';
import Portfolio from './routes/Portfolio';
import Blog from './routes/Blog';
import useRootScope from './hooks/useRootScope';

const App: React.FC = () => {
  const { prefs, setPrefs, resetPrefs, savePrefs } = useRootScope();

  useEffect(() => {
    // Initialize preferences on component mount
    setPrefs({
      restDelay: prefs.restDelay
    });
  }, [prefs.restDelay, setPrefs]);

  return (
    <Router>
      <div>
        <button className="btn btn-primary" onClick={resetPrefs}>
          <i className="fa fa-recycle"></i> <span>Reset All Data</span>
        </button>

        <div>
          <label htmlFor="restDelay">Simulated REST API delay (ms)</label>
          <input
            type="text"
            name="restDelay"
            value={prefs.restDelay}
            onChange={(e) => setPrefs({ ...prefs, restDelay: e.target.value })}
          />
          <button className="btn btn-primary" onClick={savePrefs}>Save</button>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;