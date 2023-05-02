//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, Switch} from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';


import AnimeProduct from './components/AnimeProduct';
import Message from './components/Message';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard';



const App = () => {
    return (
      <Provider store={store}>
        <App/>
        <Routes>
            <Route path="/" element={Home} />
            <Route path="/login" element={Login} />
            <Route path="/signup" element={Signup} />
            <Route path="/reset-password" element={ResetPassword} />
            <Route path="/password/reset/confirm/:uid/:token" element={ResetPasswordConfirm} />
            <Route path="/activate/:uid/:token" element={Activate} />
        </Routes>
      </Provider>
    );
  };
export default App;