import React from 'react';
import ReactDOM from 'react-dom';

import Providers from 'components/Providers';
import App from 'components/App';

import * as serviceWorker from './serviceWorker';

import 'styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
