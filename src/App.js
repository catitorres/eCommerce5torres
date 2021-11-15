import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
    
  );
}

export default App;
