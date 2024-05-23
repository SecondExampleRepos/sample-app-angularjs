import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import all the routes
import Home from './Home';
import About from './About';
import Contact from './Contact';
// Add more imports as needed

const RootRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default RootRouter;