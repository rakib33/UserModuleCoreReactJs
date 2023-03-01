import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Auth from './UserAuth/Auth'
import HomePage from './Home/HomePage'
import ParentFile from './Practice/ParentFile'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(()=> JSON.parse(localStorage.getItem('auth'))||false);

  const setAuth = (value) => {
    setIsAuthenticated(value);
    alert(value);
  };

  useEffect(()=>{
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
    console.log("isAuthenticated value is: " + isAuthenticated);
  }, [isAuthenticated]);

  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={ isAuthenticated?<HomePage/> : <ParentFile/>} />
   <Route path="/auth" element={<Auth />} />
   </Routes>
   </BrowserRouter> 
  )
}

export default App;
