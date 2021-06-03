//EXTERN IMPORTS
import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
//LOCAL IMPORTS
import Header from "./hoc/Header/Header"

export default function App() {
  return (
    <Router>
      <Header/>
    </Router>
    
  );
}