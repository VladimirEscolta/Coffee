import React, {useContext} from 'react';
import {TrashIcon} from "../../assets/icons";
import {goodsContext} from "../../App";
import CartGood from "./ui/CartGood";
import {useDispatch, useSelector} from "react-redux";
import coffee from "../../redux/slices/coffeeSlice";


const Cart = () => {

  const {items, sum} = useSelector((state) => state.coffee)
  const dispatch = useDispatch()

  // const {cartGoods, setCartGoods, sum} = useContext(goodsContext)

  // const delGoods = () => {
  //   setCartGoods([])
  // }

  const orderGoods = () => {
    window.alert('Заказ успешно оформлен!!! ')
    // setCartGoods([])
  }

  return (
    <>
      <div className='flex flex-col w-full md:w-3/4 mx-auto items-center mt-10 px-2 lg:px-0'>

        <div className='w-full flex justify-center lg:justify-end items-center'>
          <div
            className='flex justify-center items-center mx-auto cursor-pointer'
            // onClick={delGoods}
          >
            <TrashIcon className='w-6 '/>
            <p className='ps-2'>Очистить корзину</p>
          </div>
        </div>
        <hr className='w-full my-6'/>
        <div className='flex flex-col items-center w-full'>
          {items.length > 0 &&
            items.map(items => (
              <CartGood key={items.id} items={items} className="mt-8 first:mt-0"/>
            ))
          }
        </div>
        <hr className='w-full my-6'/>
        <div className='flex items-center mb-4'>
          <p>Сумма заказа: </p>
          <p className='w-32 flex text-2xl text-yellow-500 font-bold justify-end'>{sum} ₽</p>
        </div>
        <div className='flex w-32 h-10 bg-yellow-500 rounded-lg items-center justify-center'>
          <button className='px-2 text-white text-sm' onClick={orderGoods}>Оформить заказ</button>
        </div>
      </div>
    </>
  );

};

export default Cart;