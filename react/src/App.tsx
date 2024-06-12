import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useRootScope from './hooks/useRootScope';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Services from './routes/Services';
import Portfolio from './routes/Portfolio';
import Blog from './routes/Blog';

const App: React.FC = () => {
  const { state, someFunction } = useRootScope();

  React.useEffect(() => {
    // Logic to replace $rootScope initialization
    const initializeRootScope = () => {
      // Example initialization logic
      setState({ initialized: true });
    };

    initializeRootScope();

    return () => {
      // Cleanup logic if needed
      setState(null);
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
};

export default App;