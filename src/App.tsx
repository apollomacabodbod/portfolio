import React, { useEffect } from "react";
import {  Routes, Route, useLocation} from "react-router-dom";
import Home from "./home/page";
import Contact from "./contact/page";
import Header from "./components/kit/header";
import { LenisProvider } from "./context/smooth-scroll";
import Footer from "./components/kit/footer";
import NotFound from "./components/kit/not-found";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/kit/scroll-top";

function App() {


  const location = useLocation(); // Now safe to use because it's inside a Router

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);




  return (

    <LenisProvider>


      <Header/>

      <ScrollToTop/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


      <div key={location.pathname} >
        
        <Footer/>

      </div>


      <Toaster position="top-right"/>

   




    </LenisProvider>


  );
}

export default App;
