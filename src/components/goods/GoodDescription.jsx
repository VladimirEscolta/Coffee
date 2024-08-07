import React from 'react';

const GoodDescription = ({description, acidity, density}) => {
  return (
    <div className='mb-6 text-sm'>
      <div className='mb-6'>{description}</div>
      <div className='flex'>
        <div className='flex flex-col w-1/2'>
          <div className="h-1 w-28 md:w-32 bg-stone-300">
            <span className={`block h-1 bg-black`} style={{width: `${acidity}%`}}></span>
          </div>
          <div className='flex'>Кислотность</div>
        </div>
        <div className='flex flex-col w-1/2'>
          <div className="h-1 w-28 md:w-32 bg-stone-300">
            <span className={`block h-1 bg-black`} style={{width: `${density}%`}}></span>
          </div>
          <div className='flex'>Плотность</div>
        </div>
      </div>
    </div>
  );
};

export default GoodDescription;