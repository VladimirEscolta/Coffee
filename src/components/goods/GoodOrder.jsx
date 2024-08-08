import React, {useContext, useState} from 'react';
import {ShopIcon} from "../../assets/icons";
import {goodsContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {countMinus, setItems, setSum} from "../../redux/slices/coffeeSlice";


const GoodOrder = ({good}) => {

  const {value, sum} = useSelector((state) => state.coffee)
  const dispatch = useDispatch()

  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [isActive2, setIsActive2] = useState(false)

  const CountMinus = () => {
    {
      count > 0 &&
      setCount(count - 1)
    }
  }
  const CountPlus = () => {
    {
      count < 10 &&
      setCount(count + 1)
    }
  }

  const onClickHandler = () => {
    setIsActive2(false)
    setIsActive(true)
  }
  const onClickHandler2 = () => {
    setIsActive(false)
    setIsActive2(true)
  }

  const buyGoods = (good, count, isActive) => {
    if (count > 0) {
      let arrayGood = structuredClone(good)
      if (isActive) {
        arrayGood.count1 = count
        arrayGood.count2 = 0
      } else {
        arrayGood.count1 = 0
        arrayGood.count2 = count
      }
      setCount(0)
      dispatch(setItems(arrayGood))
      // dispatch(setSum())
    }
  }

  return (
    <div className=''>
      <div className='flex justify-evenly text-sm mb-6'>
        <div className={`w-24 cursor-pointer flex flex-col ${isActive && 'font-bold'}`} onClick={onClickHandler}>
          <div className='flex'>
            <p className='flex'>{good.weight1} г</p>
            <p className='flex pl-2'>{good.discount1 && `- ${good.discount1} %`}</p>
          </div>
          <p className='flex text-2xl'>{isActive && count > 0 ? (good.price1 * count) : good.price1} ₽</p>
        </div>
        <div className={`w-24 cursor-pointer flex flex-col ${isActive2 && 'font-bold'}`} onClick={onClickHandler2}>
          <div className='flex'>
            <p className='flex'>{good.weight2} г</p>
            <p className='flex pl-2'>{good.discount2 && `- ${good.discount2} %`}</p>
          </div>
          <p className='flex text-2xl'>{isActive2 && count > 0 ? (good.price2 * count) : good.price2} ₽</p>
        </div>
      </div>
      <div className='flex justify-evenly'>
        <div className='flex items-center justify-end text-xl font-bold'>
          <button onClick={CountMinus}>-</button>
          <div className='mx-3'>{count}</div>
          <button onClick={CountPlus}>+</button>
        </div>
        <div
          className='flex w-32 bg-black rounded-lg items-center justify-center cursor-pointer'
          onClick={() => buyGoods(good, count, isActive)}
        >
          <ShopIcon className='w-4 h-4 stroke-white'/>
          <button className='px-2 text-white text-sm'>Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodOrder;