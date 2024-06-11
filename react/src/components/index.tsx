import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/app.css';

const App: React.FC = () => {
  return (
    <div>
      <div className="navheader">
        <ul className="nav nav-tabs">
          <li className="active">
            <a href="#mymessages" role="button">Messages</a>
          </li>
          <li>
            <a href="#contacts" role="button">Contacts</a>
          </li>
          <li>
            <a href="#prefs" role="button">Preferences</a>
          </li>
          <li className="navbar-right">
            <button className="btn btn-primary fa fa-home" />
            <button style={{ marginRight: '15px' }} className="btn btn-primary">
              <i className="fa fa-envelope"></i> New Message
            </button>
          </li>
          <li className="navbar-text navbar-right logged-in-user" style={{ margin: '0.5em 1.5em' }}>
            <div>
              {/* SECOND AGENT: [MISSING CONTEXT] - Email address should be dynamically inserted here */}
              <i className="fa fa-chevron-down"></i>
              <div className="hoverdrop">
                <button className="btn btn-primary">Log Out</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        {/* SECOND AGENT: [MISSING CONTEXT] - Nested views should be dynamically inserted here */}
      </div>
    </div>
  );
};

export default App;