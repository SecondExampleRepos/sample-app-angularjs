import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../services/authService';
import { AppConfig } from '../utils/constants/appConfig';

interface LoginProps {
  returnTo: {
    state: string;
    params: any;
    options: any;
  };
}

const Login: React.FC<LoginProps> = ({ returnTo }) => {
  const [credentials, setCredentials] = useState({
    username: AppConfig.emailAddress,
    password: 'password'
  });
  const [authenticating, setAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const history = useHistory();

  const handleLogin = async () => {
    setAuthenticating(true);
    try {
      await authenticate(credentials.username, credentials.password);
      history.push(returnTo.state, { ...returnTo.params, ...returnTo.options, reload: true });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <div className="container">
      <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <h3>Log In</h3>
        <p>(This login screen is for demonstration only... just pick a username, enter 'password' and click <b>"Log in"</b>)</p>
        <hr />

        <div>
          <label htmlFor="username">Username:</label>
          <select
            className="form-control"
            name="username"
            id="username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          >
            {/* SECOND AGENT: [MISSING CONTEXT] - Populate options dynamically */}
          </select>
          <i
            style={{ position: 'relative', bottom: '1.8em', marginLeft: '10em', height: 0 }}
            hidden={!!credentials.username}
            className="fa fa-arrow-left bounce-horizontal"
          >
            Choose
          </i>
        </div>
        <br />

        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <i
            style={{ position: 'relative', bottom: '1.8em', marginLeft: '5em', height: 0 }}
            hidden={!credentials.username || credentials.password === 'password'}
            className="fa fa-arrow-left bounce-horizontal"
          >
            Enter '<b>password</b>' here
          </i>
        </div>

        {errorMessage && <div className="well error">{errorMessage}</div>}

        <hr />
        <div>
          <button
            className="btn btn-primary"
            type="button"
            disabled={authenticating}
            onClick={handleLogin}
          >
            <i className="fa fa-spin fa-spinner" hidden={!authenticating}></i> <span>Log in</span>
          </button>
          <i
            hidden={!credentials.username || credentials.password !== 'password'}
            style={{ position: 'relative' }}
            className="fa fa-arrow-left bounce-horizontal"
          >
            Click Me!
          </i>
        </div>
      </div>
    </div>
  );
};

export default Login;