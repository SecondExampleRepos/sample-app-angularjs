import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useRootScope from './hooks/useRootScope';

// Importing all the components
import App from './components/App';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Prefs from './components/Prefs';
import MyMessages from './components/MyMessages';

const AppRouter: React.FC = () => {
  const { someState, setSomeState, someFunction } = useRootScope();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/prefs" component={Prefs} />
        <Route path="/mymessages" component={MyMessages} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;