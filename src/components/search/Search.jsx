import React, {useContext} from 'react';
import {SearchIcon, XIcon} from "../../assets/icons";
import {goodsContext} from "../../App";

const Search = () => {

  const {search, setSearch} = useContext(goodsContext)

  return (
    <>
      <div
        className="h-8 w-8 bg-black rounded-full flex justify-center items-center"
      >
        <SearchIcon className='h-4 w-4 stroke-white stroke-2'/>
      </div>
      <div className='flex items-center w-52'>
        <input
          type="text"
          placeholder='Поиск'
          value={search}
          className='mx-3 w-40 bg-inherit outline-none italic opacity-50 transition-all focus:opacity-100 focus:placeholder:text-transparent blur:bg-yellow-500'
          onChange={(e) => setSearch(e.target.value)}
        />
        {search &&
          <XIcon
            className='h-4 w-4 cursor-pointer opacity-50 hover:opacity-100'
            onClick={() => setSearch('')}
          />
        }
      </div>
    </>
  );
};

export default Search;