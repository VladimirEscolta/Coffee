import React from 'react';

const GoodFoto = ({foto}) => {
  return (
    <div className='flex items-center justify-center mb-4 sm:mb-6 cursor-pointer'>
      <img src={foto} alt="" className='w-40'/>
    </div>
  );
};

export default GoodFoto;