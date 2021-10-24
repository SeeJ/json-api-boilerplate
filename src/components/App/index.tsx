import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';
import { Auth } from 'services';

import './styles.scss';



const App = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentUser, isFetching } = useAppSelector((state) => ({
    currentUser: state.currentUser,
    isFetching: state.isFetching
  }));


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useAppDispatch();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    Auth.check();
    return () => {
      isMounted.current = false;
    };
  }, []);

  function renderBody() {
    if (currentUser) {
      return (
        <div>isAuthenticated</div>
      );
    }
    if (isFetching) {
      return (
        <div>loading...</div>
      );
    }
    return <Redirect to="/login" />;
  }

  return (
    <div className="app">
      <div>Template App</div>
      {renderBody()}
    </div>
  );
  
};

export default App;
