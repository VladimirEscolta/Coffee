import React, {createContext, useMemo, useState} from "react";
import {Routes, Route} from 'react-router-dom';
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error";
import Home from "./pages/Home";
import GoodCard from "./pages/GoodCard";
import Header from "./components/header";
import Footer from "./components/Footer";

export const goodsContext = createContext();


function App() {

  const [cartGoods, setCartGoods] = useState([]);

  const sum = useMemo(() => {
    let allCount = 0
    let items = cartGoods.length
    cartGoods.map(items => {
      const count = items.count * items.price1 + items.count2 * items.price2
      allCount += count
    })
    return [allCount, items]
  }, [cartGoods])

  return (
    <>
      <goodsContext.Provider value={{cartGoods, setCartGoods, sum}}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/*<Route path="/:id" element={<GoodCard/>} />*/}
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </goodsContext.Provider>
    </>
  );
}

export default App;
