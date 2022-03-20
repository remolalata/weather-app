import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-3qpvycxq.us.auth0.com"
      clientId="EjlfLJEFiBAhmCmuSZMPxqe1o3OqjhBH"
      redirectUri={'http://localhost:3000/'}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
