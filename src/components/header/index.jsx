import React from 'react';
import HeaderLevel1 from "./HeaderLevel1";
import HeaderLevel2 from "./HeaderLevel2";
import Mobile from "./Mobile";


const Index = () => {

  return (
    <div className='relative h-16 lg:h-36'>
      <div className='fixed top-0 left-0 right-0 z-10 bg-white h-16 lg:h-36'>
        <div className='flex w-full lg:w-4/5 bg-white items-center justify-between mx-auto mb-2 px-2 lg:px-0'>
          <div className='w-full hidden lg:flex lg:flex-col'>
            <HeaderLevel1/>
            <hr className='my-4'/>
            <HeaderLevel2/>
          </div>
          <div className='flex flex-col lg:hidden w-full mt-2'>
            <Mobile/>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Index;