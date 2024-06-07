// react/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useRootScope from './hooks/useRootScope';

// Importing all the routes
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';

const App: React.FC = () => {
  const { exampleState, setExampleState, exampleFunction } = useRootScope();

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      {/* Example usage of the state and functions from useRootScope */}
      <p>Example State: {exampleState}</p>
      <button onClick={exampleFunction}>Call Example Function</button>
    </div>
  );
};

export default App;