import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.global.css';
import SignIn from './components/SignIn/SignIn';
// import Dashboard from './components/Dashboard/Dashboard';

export default function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={SignIn} />
    </HashRouter>
  );
}
