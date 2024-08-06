import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../redux/slices/filterSlice";

const Category = ({data}) => {

  const filterValue = useSelector((state) => state.filter.category)
  const dispatch = useDispatch()

  return (
    <div className='flex mx-4'>
      {data.map((items) => (
        <div
          key={items}
          className={`m-2 cursor-pointer select-none ${filterValue === items ? 'opacity-100 border-b-2 border-b-yellow-500' : 'opacity-50'}`}
          onClick={() => dispatch(setCategory(items))}
        >
          {items}
        </div>
      ))}
    </div>
  );
};

export default Category;