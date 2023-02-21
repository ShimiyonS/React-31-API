import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import { All } from './Componenets/AllData';
import Dashboard from './Componenets/Dashboard';
import { Students } from './Componenets/Student';
import Teachers from './Componenets/Teachers';
import Context from './Context';
import { Form } from './From/From';
import Home from './Homepage';
import Login from './Login/Login';
import ProtectedRoute from './ProtectedRouter';

function App() {
  let isLoggedin = localStorage.getItem('loggedin');
  const shop = useContext(Context);


  return (
    <div className="App" style={shop.colormode ==='light'?{background:'white',
    color:'black',
    minHeight:'100vh'}
    :{    
    background:'black',
    color:'white',
    minHeight:'100vh'}}>
      <ChakraProvider>
        <ColorModeScript initialColorMode="black" />

        <BrowserRouter>
          {shop.loginState ==='jwejdfodsj-sdfnsdofsdjosdjf-wenrwelrm-saodfjsddom-sndfd' ? (<Dashboard />) : (<div></div>)}
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route
              path="/"
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Home/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/all"
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <All/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/teachers"
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Teachers/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/students"
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Students/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/form"
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Form />
                </ProtectedRoute>
              }
            />
            <Route
              path="/form/:id"
              element={
                <ProtectedRoute isLoggedin={isLoggedin}>
                  <Form />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
