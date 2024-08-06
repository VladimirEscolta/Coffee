import React from 'react';
import {BarIcon, ComparisonIcon, HeartIcon, MessageIcon, StarIcon} from "../../assets/icons";

const GoodInfo = ({info, max}) => {

  return (
    <div className='mb-6 flex text-xs sm:text-sm'>
      <div className='flex w-12 items-center'>
        <StarIcon className='w-4 h-4 fill-gray-500 stroke-stone-500'/>
        <p className='pl-1'>{info.info1}</p>
      </div>
      <div className='flex w-14 items-center'>
        <MessageIcon className='w-4 h-4 fill-gray-500 stroke-stone-500'/>
        <p className='pl-1'>{info.info2}</p>
      </div>
      <div className='flex w-6 sm:w-8 items-center'>
        <BarIcon className='w-4 h-4 fill-gray-500 stroke-stone-500'/>
      </div>
      <div className='flex w-6 sm:w-8 items-center'>
        <HeartIcon className='w-4 h-4 fill-gray-500 stroke-stone-500'/>
      </div>
      <div className='flex w-6 sm:w-8 items-center'>
        <ComparisonIcon className='w-4 h-4 fill-gray-500 stroke-stone-500'/>
      </div>
      <div className='flex items-center md:ml-8'>
        <p className='pl-1'>{info.info2 === max.info2 ? 'Сорт недели' : ''}</p>
      </div>
    </div>
  )
};

export default GoodInfo;