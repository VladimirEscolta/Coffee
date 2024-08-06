import React, {useContext} from 'react';
import {CartIcon, ComparisonIcon, HeartIcon, SiteLogoIcon} from "../../assets/icons";
import {Link} from "react-router-dom";
import Search from "../search/Search";


const HeaderLevel2 = ({sum}) => {

  return (
    <div className='flex h-12 w-full mx-auto justify-between items-center text-stone-500'>
      <div className='flex items-center'>
        <Link to="/">
          <SiteLogoIcon className='h-10 w-auto mr-2'/>
        </Link>
        <p>Интернет-магазин свежего кофе</p>
      </div>
      <div className='flex items-center bg-stone-100 rounded-full'>
        <Search/>
      </div>
      <div className='flex'>
        <div className='flex items-center'>
          <div className="mr-4 h-8 w-8 bg-black rounded-full flex justify-center items-center cursor-pointer">
            <HeartIcon className='h-4 stroke-white stroke-2 fill-none'/>
          </div>
        </div>
        <div className='flex items-center'>
          <div className="mr-4 h-8 w-8 bg-black rounded-full flex justify-center items-center cursor-pointer">
            <ComparisonIcon className='h-4 stroke-white stroke-2 fill-none'/>
          </div>
        </div>
        <Link to='/cart' className='flex items-center'>
          <div className="mr-4 h-8 w-8 bg-black rounded-full flex justify-center items-center cursor-pointer">
            <CartIcon className='h-4 stroke-white stroke-2'/>
          </div>
          <div className="text-end w-20">
            <p className='text-yellow-500'>{sum[0]} ₽</p>
            <p className='ms-2 lg:ms-0'>{sum[1]} шт.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLevel2;