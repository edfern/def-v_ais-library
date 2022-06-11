import React from 'react';
import { Router } from '@reach/router';
import { UserContextProvider } from '../context/userContext';

import LoginApp from '../pages/login/index';
import Test from '../pages/test';
import { Sidebar } from '../components/sidebar/sidebar';

const RouterApp = () => {
  return (
    <>
      <UserContextProvider>
        <Router>
          {/** <Test path="/test" />*/}
          <LoginApp path="/" />
          <Sidebar path="dashboard/*" />
        </Router>
      </UserContextProvider>
    </>
  );
};

export default RouterApp;
