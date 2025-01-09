import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import Contact from "./contact/page";
import Header from "./components/kit/header";
import { LenisProvider } from "./context/smooth-scroll";

function App() {
  return (

    <LenisProvider>


      <Header/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>




    </LenisProvider>


  );
}

export default App;
