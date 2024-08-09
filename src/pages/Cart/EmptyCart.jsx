import React from 'react';
import {Link} from "react-router-dom";
import {ScreenMainIcon} from "../../assets/image";


const EmptyCart = () => {

  return (
    <div className='flex w-full lg:w-4/5 px-2 lg:px-0 mx-auto flex-col items-center justify-center h-[calc(100dvh-144px)] lg:h-[calc(100dvh-224px)]'>
      <img src={ScreenMainIcon} alt="" className='w-3/4 lg:w-1/2 rounded-md'/>
      <div className='mt-10 font-bold text-2xl text-center'>Корзина пустая</div>
      <div className='mt-10'>
        <Link to="/">Перейти на главную страницу</Link>
      </div>
    </div>
  );
};

export default EmptyCart;