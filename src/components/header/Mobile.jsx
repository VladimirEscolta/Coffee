import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {
  Bars3Icon,
  BellIcon,
  CartIcon, CloseIcon,
  ComparisonIcon,
  HeartIcon,
  SiteLogoIcon,
  UserIcon
} from "../../assets/icons";
import Search from "../search/Search";

const Mobile = ({sum}) => {

  const [openMenu, setOpenMenu] = useState(false)
  const clickOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <div className='w-full flex items-center mx-auto justify-between'>
        <Link to="/"><SiteLogoIcon className='h-10 w-auto'/></Link>
        <p className='hidden sm:block text-stone-500'>Интернет-магазин свежего кофе</p>
        <div className='h-10 relative'>
          <CloseIcon
            className={`${openMenu ? 'opacity-100 rotate-180' : 'opacity-0'} h-10 absolute right-0 cursor-pointer self-start stroke-yellow-500 transition-all duration-500`}
            onClick={clickOpenMenu}/>
          <Bars3Icon
            className={`${openMenu ? 'opacity-0 ' : 'opacity-100'} h-10 absolute right-0 cursor-pointer self-start transition-all duration-500`}
            onClick={clickOpenMenu}/>
        </div>
      </div>
      <div
        className={`${openMenu ? 'h-auto opacity-100 translate-x-0' : 'h-0 opacity-0 -translate-x-full -z-10'} flex flex-col w-full mx-auto justify-between items-start text-stone-500 duration-500 text-xs sm:text-base`}>
        <hr className='w-full my-2'/>
        <div className='flex items-center mb-2'>
          <div className='mr-4 h-8 w-8 bg-stone-200 rounded-full flex justify-center items-center cursor-pointer'>
            <UserIcon className='h-4 stroke-black stroke-2'/>
          </div>
          <p className='text-yellow-500'>Владимир</p>
        </div>
        <div className='flex items-center mb-2'>
          <div className='mr-4 h-8 w-8 bg-stone-200 rounded-full flex justify-center items-center cursor-pointer'>
            <BellIcon className='h-4 stroke-black stroke-2'/>
          </div>
          <p className='flex'>Оповещения</p>
        </div>
        <div className='flex items-center'>
          <div className='mr-4'>Ваша скидка 0%</div>
        </div>
        <hr className='my-4'/>
        {
          window.location.href.includes('main') &&
          <div className='flex items-center mb-2'>
            <div className='flex items-center bg-stone-100 rounded-full'>
              <Search/>
            </div>
          </div>
        }
        <div className='flex items-center mb-2'>
          <div className="mr-4 h-8 w-8 bg-black rounded-full flex justify-center items-center cursor-pointer">
            <HeartIcon className='h-4 stroke-white stroke-2 fill-none'/>
          </div>
          <p className='flex'>Избранное</p>
        </div>
        <div className='flex items-center mb-2'>
          <div className="mr-4 h-8 w-8 bg-black rounded-full flex justify-center items-center cursor-pointer">
            <ComparisonIcon className='h-4 stroke-white stroke-2 fill-none'/>
          </div>
          <p className='flex'>Товары для сравнения</p>
        </div>
        <Link to='/cart' className='flex items-center'>
          <div className="mr-4 h-8 w-8 bg-black rounded-full flex justify-center items-center cursor-pointer">
            <CartIcon className='h-4 stroke-white stroke-2'/>
          </div>
          <p className='flex mr-4'>Корзина</p>
          <div className="text-end flex lg:block">
            <p className='text-yellow-500'>{sum[0]} ₽</p>
            <p className='ms-2 lg:ms-0'>{sum[1]} товар</p>
          </div>
        </Link>
        <hr className='my-4 w-full'/>
        <div className='flex items-center'>
          <div className='mr-4'>Пермь</div>
          <div className=''>8 800 333-49-80</div>
        </div>
      </div>
    </>
  );
};

export default Mobile;