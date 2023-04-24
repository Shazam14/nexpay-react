//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import AnimeProduct from './components/AnimeProduct';
import Message from './components/Message';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  return (

    <div className="App">
      <Routes>
        {/* Add your other routes here */}
        <Route path="/" element={<Dashboard/>}/> 
      </Routes>
      </div>
  );
};

 
  // return  (

  //   <div className="App">
  //   {/* {  message ? (
  //           <Message message={message}/>
  //     ):( */}
  //   <Routes> 
  //         {/* <Route exact path='/success' element={<Message/>}/>       */}
  //         <Route  path="/:animechars_id" element={<AnimeProduct/>}/> 
  //         <Route exact path="checkout/:animechars_id" element={<Checkout/>}/>         
  //   </Routes>
  //     {/* )} */}
  //   </div>
    
  // );


export default App;