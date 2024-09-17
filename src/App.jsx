import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={NavBar} />
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/RegisterPage" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
