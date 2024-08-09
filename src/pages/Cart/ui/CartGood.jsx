import React from 'react';
import {CloseIcon} from "../../../assets/icons";
import {useDispatch} from "react-redux";
import {deleteItems, minusItems1, minusItems2, plusItems1, plusItems2} from "../../../redux/slices/coffeeSlice";

const CartGood = ({items, className}) => {

  const dispatch = useDispatch()

  return (
    <div className={`flex flex-col xl:flex-row items-center justify-between w-full ${className}`}>
      <div className='flex w-80 items-center mb-2 lg:mb-0'>
        <img src={items.foto} alt="" className='w-20'/>
        <p className='px-2 font-bold'>{items.name2}</p>
      </div>
      <div className='flex flex-col sm:flex-row mb-2 lg:mb-0'>
        <div className="flex">
          <div className={`w-32 cursor-pointer flex flex-col items-end mr-4`}>
            <div className="flex">
              <p className='opacity-50 mr-2'>{items.weight1} г</p>
              <p className=''>{items.price1} ₽</p>
            </div>
            <p className="text-yellow-500">{items.price1 * items.count1} ₽</p>
          </div>
          <div className={`flex items-center justify-end text-xl font-bold ${items.count1 > 0 ? 'opacity-100' : 'opacity-10'}`}>
            <button onClick={() => dispatch(minusItems1(items))}>-</button>
            <div className='w-6 mx-3 text-center'>{items.count1}</div>
            <button onClick={() => dispatch(plusItems1(items))}>+</button>
          </div>
        </div>
        <div className="flex">
          <div className={`w-32 cursor-pointer flex flex-col items-end mr-4`}>
            <div className="flex">
              <p className='opacity-50 mr-2'>{items.weight2} г</p>
              <p className=''>{items.price2} ₽</p>
            </div>
            <p className="text-yellow-500">{items.price2 * items.count2} ₽</p>
          </div>
          <div className={`flex items-center justify-end text-xl font-bold ${items.count2 > 0 ? 'opacity-100' : 'opacity-10'}`}>
            <button onClick={() => dispatch(minusItems2(items))}>-</button>
            <div className='w-6 mx-3 text-center'>{items.count2}</div>
            <button onClick={() => dispatch(plusItems2(items))}>+</button>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <p className='w-32 mr-5 flex text-2xl text-yellow-500 font-bold justify-end'>{items.price1 * items.count1 + items.price2 * items.count2} ₽</p>
        <div
          className='flex w-32 text-white bg-red-500 border rounded-lg items-center justify-center cursor-pointer'
          onClick={() => dispatch(deleteItems(items))}
        >
          <CloseIcon className='w-4 h-10'/>
          <button className='ps-2 text-sm'>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default CartGood;