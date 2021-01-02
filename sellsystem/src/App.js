//EXTERN IMPORTS
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//LOCAL IMPORTS
import Sells from "./containers/Sells/Sells"
import Inventory from "./containers/Inventory/Inventory"
import Header from "./hoc/Header/Header"

export default function App() {
  return (
    <Router>
      <Header/>
      
       
    </Router>
  );
}