


import React from "react";
import Header from "./components/Header";
import './App.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
