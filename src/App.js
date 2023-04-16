import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./components/login/Login"
import Home from "./components/Home";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route>
          <Route path="/alura-geek" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
     
    </>
  );
};

export default App;
