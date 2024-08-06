import React from 'react';

const Skeleton = () => {
  return (
    <div className='h-[580px] w-[360px] bg-stone-100 rounded-md m-4 animate-pulse'>
    </div>
    // <div className='h-[580px] m-4'>
    //   <div className='w-full h-full flex flex-col items-center'>
    //     <div className='h-12 w-[360px] bg-stone-100 rounded-md mb-4 animate-pulse'></div>
    //     <div className='h-20 w-48 bg-stone-100 rounded-md mb-4 animate-pulse'></div>
    //     <div className='h-40 w-[360px] bg-stone-100 rounded-md mb-4 animate-pulse'></div>
    //     <div className='h-24 w-[360px] bg-stone-100 rounded-md mb-4 animate-pulse'></div>
    //     <div className='h-32 w-[360px] bg-stone-100 rounded-md m-0 animate-pulse'></div>
    //   </div>
    // </div>
  );
};

export default Skeleton;