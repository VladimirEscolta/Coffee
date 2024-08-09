import React from 'react';
import {TrashIcon} from "../../assets/icons";
import CartGood from "./ui/CartGood";
import {useDispatch, useSelector} from "react-redux";
import {deleteAll} from "../../redux/slices/coffeeSlice";
import EmptyCart from "./EmptyCart";


const Cart = () => {

  const {items, sum} = useSelector((state) => state.coffee)
  const dispatch = useDispatch()

  const clearAll = () => {
    window.confirm('Вы действительно хотите очистить корзину?') && dispatch(deleteAll())
  }

  const orderGoods = () => {
    window.alert('Заказ успешно оформлен!!! ')
    dispatch(deleteAll())
  }

  if (items.length === 0) {
    return <EmptyCart/>
  }

  return (
    <>
      <div className='flex flex-col w-full lg:w-4/5 mx-auto items-center mt-10 px-2 lg:px-0 min-h-[calc(100dvh-184px)] lg:min-h-[calc(100dvh-264px)]'>
        <div className='w-full flex justify-center lg:justify-end items-center'>
          <button
            className='flex h-10 w-48 justify-center items-center mx-auto cursor-pointer text-white bg-red-500 border rounded-lg'
            onClick={clearAll}
          >
            <TrashIcon className='w-6 '/>
            <p className='ps-2'>Очистить корзину</p>
          </button>
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