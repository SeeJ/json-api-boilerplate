import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from 'store';

// import Router from 'components/Router'
// import Loader from 'components/Loader'

const snackClasses = {
  variantSuccess: 'notification__success',
  variantError: 'notification__error',
  variantWarning: 'notification__warning',
  variantInfo: 'notification__info',
};

const Providers: React.FC = ({ children }) => (
  <StoreProvider store={store}>
    <ConnectedRouter history={history}>
      <HelmetProvider>
        <SnackbarProvider
          maxSnack={3}
          classes={snackClasses}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {children}
        </SnackbarProvider>
      </HelmetProvider>
    </ConnectedRouter>
  </StoreProvider>
);

export default Providers;
