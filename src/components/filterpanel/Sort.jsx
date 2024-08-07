import React, {useEffect, useState} from 'react';
import {ShevronDownIcon} from "../../assets/icons";
import {useDispatch, useSelector} from "react-redux";
import {setSort, setRotateShevron} from "../../redux/slices/filterSlice";


const Sort = ({data}) => {

  const sortValue = useSelector((state) => state.filter.sort)
  const shevronValue = useSelector((state) => state.filter.shevron)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const bodyClick = (event) => {
      !event.target.closest('.modal-sorted') && setIsOpen(false);
    }
    {
      isOpen && document.body.addEventListener('click', bodyClick);
    }
    return () => {
      document.body.removeEventListener('click', bodyClick);
    };
  }, [isOpen]);

  return (
    <div className='flex relative m-2 justify-center items-center'>
      <div className=''>Сортировка по:</div>
      <div className='flex justify-center items-center'>
        <div
          className='modal-sorted border-b-2 border-b-yellow-500 text-center mx-2 w-28 cursor-pointer select-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {sortValue.name}
        </div>
        {
          isOpen &&
          <div className="absolute z-10 top-10 w-32 bg-white border border-yellow-500 rounded-md flex flex-col">
            {data.map((items) => (
              <div
                key={items.name}
                className="flex px-2 py-1 opacity-50 cursor-pointer select-none rounded-md hover:bg-yellow-50 hover:opacity-100"
                onClick={() => dispatch(setSort(items))}
              >
                {items.name}
              </div>
            ))}
          </div>
        }
        <ShevronDownIcon
          className={`w-4 h-4 cursor-pointer transition-all duration-500 ${shevronValue === 'desc' && 'rotate-180'}`}
          onClick={() => dispatch(setRotateShevron(shevronValue === 'asc' ? 'desc' : 'asc'))}
        />
      </div>
    </div>
  );
};

export default Sort;