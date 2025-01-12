import React from "react";
import {  Routes, Route} from "react-router-dom";
import Home from "./home/page";
import Contact from "./contact/page";
import Header from "./components/kit/header";
import { LenisProvider } from "./context/smooth-scroll";
import Footer from "./components/kit/footer";
import NotFound from "./components/kit/not-found";

function App() {
  return (

    <LenisProvider>


      <Header/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>




    </LenisProvider>


  );
}

export default App;
