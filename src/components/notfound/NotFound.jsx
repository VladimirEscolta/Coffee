import React from 'react';
import {Link} from "react-router-dom";
import {ScreenMainIcon} from "../../assets/image";

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
      <img src={ScreenMainIcon} alt="" className='w-1/2 max-w-md mb-10 rounded-md'/>
      <div className='font-bold text-2xl text-center'>Такой страницы не существует</div>
      <div className='mt-10'>
        <Link to="/">Перейти на главную страницу</Link>
      </div>
    </div>
  );
};

export default NotFound;