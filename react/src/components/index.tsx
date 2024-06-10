import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/app.css';

const App: React.FC = () => {
  return (
    <div>
      {/* the app goes here */}
      <div id="app-root"></div>

      <script src="//cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,MutationObserver"></script>
      <script src="_bundles/vendors~sampleapp.js"></script>
      <script src="_bundles/sampleapp.js"></script>
    </div>
  );
};

export default App;