import React, {useCallback, useRef, useState} from 'react';
import {SearchIcon, XIcon} from "../../assets/icons";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../redux/slices/filterSlice";
import {debounce} from "lodash";

const Search = () => {

  const search = useSelector(state => state.filter.search)
  const dispatch = useDispatch()
  const inputRef = useRef()
  const [value, setValue] = useState('')

  const onClearSearch = () => {
    setValue('')
    dispatch(setSearch(''))
    inputRef.current.focus()
  }

  const deb = useCallback(
    debounce(event => {
      dispatch(setSearch(event))
    }, 500),
    []
  )

  const searchResult = (e) => {
    setValue(e.target.value)
    deb(e.target.value)
  }

  return (
    <>
      <div
        className="h-8 w-8 bg-black rounded-full flex justify-center items-center"
      >
        <SearchIcon className='h-4 w-4 stroke-white stroke-2'/>
      </div>
      <div className='flex items-center flex-1 w-full sm:w-52'>
        <input
          ref={inputRef}
          type="text"
          placeholder='Поиск'
          value={value}
          className='mx-3 w-full sm:w-40 bg-inherit outline-none italic opacity-50 transition-all focus:opacity-100 focus:placeholder:text-transparent blur:bg-yellow-500'
          onChange={(e) => searchResult(e)}
        />
        {search &&
          <XIcon
            className='h-4 w-4 mr-2 sm:mr-0 cursor-pointer opacity-50 hover:opacity-100'
            onClick={onClearSearch}
          />
        }
      </div>
    </>
  );
};

export default Search;