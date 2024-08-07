import React, {useContext, useState} from 'react';
import {ShopIcon} from "../../assets/icons";
import {goodsContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {countMinus} from "../../redux/slices/coffeeSlice";


const GoodOrder = ({price}) => {

  const {cartGoods, setCartGoods} = useContext(goodsContext)

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

  // const buyGoods = (price, count, isActive) => {
  //   if (count > 0) {
  //     let array = cartGoods
  //     let info = price
  //     if (isActive) {
  //       info.count = count
  //       info.count2 = info.count2 ? info.count2 : 0
  //     } else {
  //       info.count2 = count
  //       info.count = info.count ? info.count : 0
  //     }
  //     if (array.length > 0) {
  //       let indexObject = array.findIndex(el => el.id === info.id)
  //       if (indexObject !== -1) {
  //         array[indexObject] = info
  //       } else array.push(info)
  //     } else array.push(info)
  //     setCount(0)
  //     setCartGoods([...array])
  //   }
  // }

  const buyGoods = (price, count, isActive) => {
    if (count > 0) {
      let array = structuredClone(price)


      let info = price
      if (isActive) {
        info.count = count
        info.count2 = info.count2 ? info.count2 : 0
      } else {
        info.count2 = count
        info.count = info.count ? info.count : 0
      }
      if (array.length > 0) {
        let indexObject = array.findIndex(el => el.id === info.id)
        if (indexObject !== -1) {
          array[indexObject] = info
        } else array.push(info)
      } else array.push(info)
      setCount(0)
      setCartGoods([...array])
    }
  }

  return (
    <div className=''>
      <div className='flex justify-evenly text-sm mb-6'>
        <div className={`w-24 cursor-pointer flex flex-col ${isActive && 'font-bold'}`} onClick={onClickHandler}>
          <div className='flex'>
            <p className='flex'>{price.weight1} г</p>
            <p className='flex pl-2'>{price.discount1 && `- ${price.discount1} %`}</p>
          </div>
          <p className='flex text-2xl'>{isActive && count > 0 ? (price.price1 * count) : price.price1} ₽</p>
        </div>
        <div className={`w-24 cursor-pointer flex flex-col ${isActive2 && 'font-bold'}`} onClick={onClickHandler2}>
          <div className='flex'>
            <p className='flex'>{price.weight2} г</p>
            <p className='flex pl-2'>{price.discount2 && `- ${price.discount2} %`}</p>
          </div>
          <p className='flex text-2xl'>{isActive2 && count > 0 ? (price.price2 * count) : price.price2} ₽</p>
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
          onClick={() => buyGoods(price, count, isActive)}
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