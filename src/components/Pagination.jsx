import React, {useEffect, useState} from 'react';
import {ShevronDownIcon} from "../assets/icons";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setLimitPage} from "../redux/slices/filterSlice";

const Pagination = ({dataPage}) => {

  const {currentPage, limitPage} = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const dataLimit = [5,10,15]

  const pageDown = () => {
    currentPage > 1 && dispatch(setCurrentPage(currentPage-1))
  }

  const pageUp = () => {
    currentPage < dataPage[dataPage.length - 1] && dispatch(setCurrentPage(currentPage+1))
  }

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
    <>
      <div className='flex relative m-5 justify-center items-center'>
        <div className=''>Отображать:</div>
        <div className='flex justify-center items-center'>
          <div
            className='modal-sorted border-b-2 border-b-yellow-500 text-center mx-2 w-28 cursor-pointer select-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            {limitPage}
          </div>
          {
            isOpen &&
            <div className="absolute z-10 top-10 w-32 bg-white border border-yellow-500 rounded-md flex flex-col">
              {dataLimit.map((items, index) => (
                <div
                  key={index}
                  className="flex px-2 py-1 opacity-50 cursor-pointer select-none rounded-md hover:bg-yellow-50 hover:opacity-100"
                  onClick={() => dispatch(setLimitPage(items))}
                >
                  {items}
                </div>
              ))}
            </div>
          }
        </div>
      </div>
      <div className='flex justify-center items-center mx-auto'>
        <ShevronDownIcon className='w-4 h-4 cursor-pointer rotate-90' onClick={() => pageDown()}/>
        <div className='flex flex-wrap w-fit justify-center items-center'>
          {dataPage.map((items) => (
            <div
              key={items}
              className={`flex bg-stone-100 px-4 py-2 rounded-md mx-2 cursor-pointer select-none hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500 ${currentPage === items && 'scale-105 shadow-lg shadow-yellow-500'}`}
              onClick={() => dispatch(setCurrentPage(items))}
            >
              {items}
            </div>
          ))}
        </div>
        <ShevronDownIcon className='w-4 h-4 cursor-pointer -rotate-90' onClick={() => pageUp()}/>
      </div>
    </>
  );
};

export default Pagination;