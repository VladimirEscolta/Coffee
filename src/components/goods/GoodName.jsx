import React from 'react';

const GoodName = ({name}) => {
  return (
    <div className='flex flex-col items-center justify-center mb-4 sm:mb-6'>
      <p className=''>{name.name1}</p>
      <p className='text-lg font-bold'>{name.name2}</p>
      <p className='h-6'>{name.name3}</p>
    </div>
  );
};

export default GoodName;