import React, {useContext} from 'react';
import {CloseIcon} from "../../../assets/icons";
import {goodsContext} from "../../../App";

const CartGood = ({items, index}) => {

  const {cartGoods, setCartGoods} = useContext(goodsContext)

  const sumItem = (items.price1 * items.count) + (items.price2 * items.count2)

  const CountMinus = () => {
    let value = (items.count > 0) ? (items.count -= 1) : items.count
    let array = cartGoods
    array[index].count = value
    setCartGoods([...array])
  }
  const CountPlus = () => {
    let value = (items.count < 10) ? (items.count += 1) : items.count
    let array = cartGoods
    array[index].count = value
    setCartGoods([...array])
  }
  const CountMinus2 = () => {
    let value = (items.count2 > 0) ? (items.count2 -= 1) : items.count2
    let array = cartGoods
    array[index].count2 = value
    setCartGoods([...array])
  }
  const CountPlus2 = () => {
    let value = (items.count2 < 10) ? (items.count2 += 1) : items.count2
    let array = cartGoods
    array[index].count2 = value
    setCartGoods([...array])
  }

  const delGoods = () => {
    let array = cartGoods
    array.splice(index, 1);
    setCartGoods([...array])
  }

  return (
    <div className='flex flex-col xl:flex-row items-center justify-between w-full' key={items.name2}>
      <div className='flex w-80 items-center mb-2 lg:mb-0'>
        <img src={items.foto} alt="" className='w-20'/>
        <p className='px-2 font-bold'>{items.name2}</p>
      </div>
      <div className='flex mb-2 lg:mb-0'>
        <div className={`w-24 cursor-pointer flex flex-col items-center`}
        >
          <p className='flex opacity-50'>{items.weight1} г</p>
          <p className={`flex`}>{items.price1} ₽</p>
        </div>
        <div
          className={`flex items-center justify-end text-xl font-bold ${items.count > 0 ? 'opacity-100' : 'opacity-10'}`}>
          <button onClick={CountMinus}>-</button>
          <div className='w-6 mx-3 text-center'>{items.count}</div>
          <button onClick={CountPlus}>+</button>
        </div>
        <div className={`w-24 cursor-pointer flex flex-col items-center`}
        >
          <p className='flex opacity-50'>{items.weight2} г</p>
          <p className={`flex`}>{items.price2} ₽</p>
        </div>
        <div
          className={`flex items-center justify-end text-xl font-bold ${items.count2 > 0 ? 'opacity-100' : 'opacity-10'}`}>
          <button onClick={CountMinus2}>-</button>
          <div className='w-6 mx-3 text-center'>{items.count2}</div>
          <button onClick={CountPlus2}>+</button>
        </div>
      </div>
      <div className='flex justify-between'>
        <p className='w-32 mr-5 flex text-2xl text-yellow-500 font-bold justify-end'>{sumItem} ₽</p>
        <div
          className='flex w-32 hover:bg-red-500 hover:text-white rounded-lg items-center justify-center cursor-pointer'
          onClick={delGoods}
        >
          <CloseIcon className='w-4 h-4'/>
          <button className='ps-2 text-sm'>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default CartGood;