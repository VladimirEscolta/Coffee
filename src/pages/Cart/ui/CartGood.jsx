import React from 'react';
import {CloseIcon} from "../../../assets/icons";
import {useDispatch} from "react-redux";
import {deleteItems, minusItems, plusItems} from "../../../redux/slices/coffeeSlice";

const CartGood = ({items, className}) => {

  const dispatch = useDispatch()

  const deleteItem = () => {
    window.confirm('Вы действительно хотите удалить товар?') && dispatch(deleteItems(items))
  }

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
            <button className="px-2" onClick={() => dispatch(minusItems({count: 'count1', data: items}))}>-</button>
            <div className='w-6 mx-3 text-center'>{items.count1}</div>
            <button className="px-2" onClick={() => dispatch(plusItems({count: 'count1', data: items}))}>+</button>
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
            <button className="px-2" onClick={() => dispatch(minusItems({count: 'count2', data: items}))}>-</button>
            <div className='w-6 mx-3 text-center'>{items.count2}</div>
            <button className="px-2" onClick={() => dispatch(plusItems({count: 'count2', data: items}))}>+</button>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <p className='w-32 mr-5 flex text-2xl text-yellow-500 font-bold justify-end'>{items.price1 * items.count1 + items.price2 * items.count2} ₽</p>
        <button
          className='flex w-32 h-10 text-red-500 bg-stone-100 border rounded-lg items-center justify-center cursor-pointer'
          onClick={deleteItem}
        >
          <CloseIcon className='w-4'/>
          <p className='ps-2 text-sm'>Удалить</p>
        </button>
      </div>
    </div>
  );
};

export default CartGood;