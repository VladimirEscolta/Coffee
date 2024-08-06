import React from 'react';
import GoodInfo from "./GoodInfo";
import GoodName from "./GoodName";
import GoodFoto from "./GoodFoto";
import GoodDescription from "./GoodDescription";
import GoodOrder from "./GoodOrder";

const Index = ({good, max}) => {
  return (
    <div className='h-[580px] w-[300px] sm:w-[360px] bg-stone-100 rounded-md m-4 p-4 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-500'>
      <div className='w-full h-full'>
        <GoodInfo info={good} max={max}/>
        <GoodName name={good}/>
        <GoodFoto foto={good.foto}/>
        <GoodDescription {...good}/>
        <GoodOrder price={good}/>
      </div>
    </div>
  );
};

export default Index;