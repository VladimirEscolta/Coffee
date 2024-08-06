import React from 'react';
import {SearchIcon, XIcon} from "../../assets/icons";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../redux/slices/filterSlice";

const Search = () => {

  const search = useSelector(state => state.filter.search)
  const dispatch = useDispatch()

  return (
    <>
      <div
        className="h-8 w-8 bg-black rounded-full flex justify-center items-center"
      >
        <SearchIcon className='h-4 w-4 stroke-white stroke-2'/>
      </div>
      <div className='flex items-center flex-1 w-full sm:w-52'>
        <input
          type="text"
          placeholder='Поиск'
          value={search}
          className='mx-3 w-full sm:w-40 bg-inherit outline-none italic opacity-50 transition-all focus:opacity-100 focus:placeholder:text-transparent blur:bg-yellow-500'
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        {search &&
          <XIcon
            className='h-4 w-4 mr-2 sm:mr-0 cursor-pointer opacity-50 hover:opacity-100'
            onClick={() => dispatch(setSearch(''))}
          />
        }
      </div>
    </>
  );
};

export default Search;