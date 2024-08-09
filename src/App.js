import React from "react";
import {Routes, Route} from 'react-router-dom';
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error";
import Home from "./pages/Home";
import GoodCard from "./pages/GoodCard";
import Header from "./components/header";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/*<Route path="/:id" element={<GoodCard/>} />*/}
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
