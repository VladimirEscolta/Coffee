import React, {useEffect, useRef, useState} from 'react';
import MainBlock from "../components/MainBlock";
import Skeleton from "../components/goods/Skeleton";
import Good from "../components/goods";
import Pagination from "../components/Pagination";
import Category from "../components/filterpanel/Category";
import Sort from "../components/filterpanel/Sort";
import error from "./Error";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {
  setCategory,
  setCurrentPage,
  setLimitPage,
  setRotateShevron,
  setSearch,
  setSort
} from "../redux/slices/filterSlice";


const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const searchRef = useRef(false)
  const mountedRef = useRef(false)
  const {category, sort, shevron, search, currentPage, limitPage} = useSelector((state) => state.filter)
  const [dataCategory, setDataCategory] = useState([''])
  const [dataItems, setDataItems] = useState([])
  const [dataPage, setDataPage] = useState([])
  const [loading, setLoading] = useState(true)
  const [countElements, setCountElements] = useState(0)
  const dataSort = [
    {name: 'цене', value: 'price1'},
    {name: 'названию', value: 'name2'},
    {name: 'отзывам', value: 'info2'}
  ]

  const featchCoffee = () => {
    setLoading(true)
    axios.get(`https://652cbf4bd0d1df5273efa0ea.mockapi.io/items?${category === 'Все' ? '' : `name3=${category}`}&orderby=${sort.value}&order=${shevron}&page=${currentPage}&limit=${limitPage}&search=${search}`)
      .then(result => {
        setDataItems(result.data)
        setLoading(false)
      })
      .catch((e) => console.error(e))

    const count = Math.floor(countElements / limitPage) + 1
    const array = [...Array(count)].map((_, i) => i + 1)
    setDataPage(array)
  }

  useEffect(() => {
    if (mountedRef.current) {
      const queryString = qs.stringify({
        category,
        sort: sort.value,
        shevron,
        currentPage,
        limitPage,
        search
      })
      navigate(`?${queryString}`)
    }
    mountedRef.current = true
  },[category, sort, shevron, search, currentPage, limitPage])

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const sort = dataSort.find(obj => obj.value === params.sort)
      dispatch(setCategory(params.category))
      dispatch(setSort(sort))
      dispatch(setRotateShevron(params.shevron))
      dispatch(setSearch(params.search))
      dispatch(setCurrentPage(params.currentPage))
      dispatch(setLimitPage(params.limitPage))

      searchRef.current = true
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!searchRef.current) {
      featchCoffee()
    }
    searchRef.current = false
  }, [category, sort, shevron, search, currentPage, limitPage])

  // Получение списка категорий
  useEffect(() => {
    const category = ['Все']
    axios.get('https://652cbf4bd0d1df5273efa0ea.mockapi.io/items?')
      .then(result => {
        result.data.map(items => {
          !category.includes(items.name3) && category.push(items.name3)
        })
        setDataCategory(category)
        setCountElements(result.data.length)
      })
  }, [])

  // const maxInfo = loading ? 0 : dataItems.reduce((prev, curr) => curr.info2 > prev.info2 ? curr : prev);

  return (
    <>
      <MainBlock/>
      <div className='flex flex-col justify-center items-center w-full md:w-3/4 mx-auto text-xs md:text-base'>
        <Category data={dataCategory}/>
        <Sort data={dataSort}/>
      </div>
      <hr className='my-6'/>
      <div className='flex flex-col w-full md:w-3/4 mx-auto items-center'>
        <div className='flex flex-wrap justify-center'>
          {
            loading
              ?
              [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
              :
              dataItems?.map(good => (
                <Good key={good.id} good={good} max={1}/>
              ))
          }
        </div>
      </div>
      <hr className='my-6'/>
      <Pagination
        dataPage={dataPage}
      />
      <hr className='my-6'/>
    </>
  );
};

export default Home;