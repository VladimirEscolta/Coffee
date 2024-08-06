import React from 'react';
import {CoffeeIcon, ScreenMainIcon, ScreenMainIcon2, TastyIcon} from "../assets/image";

const MainBlock = () => {
  return (
    <div className='flex flex-col w-100 h-96 bg-stone-100 items-center justify-center font-bold mb-5 md:mb-10'>
      {/*<img src={ScreenMainIcon2} alt="" className=''/>*/}
      <p className='flex m-5 font-onest font-black text-yellow-500 text-2xl xl:text-5xl uppercase text-center'>каждый день мы
        обжариваем
        кофе</p>
      <img src={TastyIcon} alt="" className='w-auto h-40'/>
      {/*<img src={CoffeeIcon} alt="" className='w-auto h-80 rounded-md'/>*/}
      <p className='flex m-5 font-bold text-2xl xl:text-4xl text-center md:text-start'>и бесплатно доставляем по всей России</p>
    </div>
  );
};

export default MainBlock;