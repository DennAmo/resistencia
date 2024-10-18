import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import "./styles/app.scss";
import Home from "./pages/Home.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
