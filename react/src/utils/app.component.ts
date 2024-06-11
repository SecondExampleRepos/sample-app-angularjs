import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthService } from '../services/auth.service';
import { AppConfig } from '../utils/constants/appConfig';
import { LoadingIndicatorService } from '../services/loadingIndicator.service';

const AuthedController: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isAuthenticated());
  const [emailAddress, setEmailAddress] = useState(AppConfig.emailAddress);
  const history = useHistory();

  useEffect(() => {

    const unsubscribe = AuthService.onAuthStateChanged((authState) => {
      setIsAuthenticated(authState.isAuthenticated);
      setEmailAddress(authState.emailAddress);
    });


    window.location.reload();
  }, []);
  }, []);

  const logout = () => {
    AuthService.logout();
    history.push('/welcome');

    window.location.reload();
  };

  const isActive = (glob: string) => {
    // SECOND AGENT: [MISSING CONTEXT] - Implement logic to check if the current route matches the glob pattern
    return false;
  };

  return (
    <div className="navheader">
      {isAuthenticated && (
        <ul className="nav nav-tabs">
          <li className={isActive('mymessages') ? 'active' : ''}>
            <a href="/mymessages" role="button">Messages</a>
          </li>
          <li className={isActive('contacts') ? 'active' : ''}>
            <a href="/contacts" role="button">Contacts</a>
          </li>
          <li className={isActive('prefs') ? 'active' : ''}>
            <a href="/prefs" role="button">Preferences</a>
          </li>
          <li className="navbar-right">
            <button className="btn btn-primary fa fa-home" onClick={() => history.push('/home')}></button>
            <button style={{ marginRight: '15px' }} className="btn btn-primary" onClick={() => history.push('/mymessages/compose')}>
              <i className="fa fa-envelope"></i> New Message
            </button>
          </li>
          <li className="navbar-text navbar-right logged-in-user" style={{ margin: '0.5em 1.5em' }}>
            <div>
              {emailAddress} <i className="fa fa-chevron-down"></i>
              <div className="hoverdrop">
                <button className="btn btn-primary" onClick={logout}>Log Out</button>
              </div>
            </div>
          </li>
        </ul>
      )}
      <div>
        {/* SECOND AGENT: [MISSING CONTEXT] - Implement nested view rendering logic here */}
      </div>
    </div>
  );
};

export default AuthedController;