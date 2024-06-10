import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Portfolio from './Portfolio';

const RootRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
<Route path="/services" component={Services} />
<Route path="/portfolio" component={Portfolio} />
<Route path="/blog" component={Blog} />
<Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
};

export default RootRouter;