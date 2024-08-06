import React from 'react';
import {BellIcon, UserIcon} from "../../assets/icons";

const HeaderLevel1 = () => {
  return (
    <div className='flex h-12 w-full mx-auto justify-between items-center text-stone-500'>
      <div className='flex items-center'>
        <div className='mr-4'>Пермь</div>
        <div className='mr-4'>8 800 333-49-80</div>
      </div>
      <div className='flex items-center'>
        <div className='mr-4'>Ваша скидка 0%</div>
        <div className='mr-4 h-8 w-8 bg-stone-200 rounded-full flex justify-center items-center cursor-pointer'>
          <BellIcon className='h-4 stroke-black stroke-2'/>
        </div>
        <div className='mr-4 h-8 w-8 bg-stone-200 rounded-full flex justify-center items-center cursor-pointer'>
          <UserIcon className='h-4 stroke-black stroke-2'/>
        </div>
        <div className='text-end w-20'>
          <p className='text-yellow-500'>Владимир</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderLevel1;