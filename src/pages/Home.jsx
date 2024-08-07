import React, {useEffect, useMemo, useState} from 'react';
import MainBlock from "../components/MainBlock";
import Skeleton from "../components/goods/Skeleton";
import Good from "../components/goods";
import Pagination from "../components/Pagination";
import Category from "../components/filterpanel/Category";
import Sort from "../components/filterpanel/Sort";
import error from "./Error";
import {useSelector} from "react-redux";
import axios from "axios";


const Home = () => {

  const {category, sort, shevron, search, currentPage, limitPage} = useSelector((state) => state.filter)
  const [dataCategory, setDataCategory] = useState([''])
  const [dataItems, setDataItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [countElements, setCountElements] = useState(0)

  useEffect(() => {
    setLoading(true)
    const searchItems = search && `&search=${search}`
    const filter = `${category === 'Все' ? '' : `name3=${category}`}`
    const sorted = `&orderby=${sort.value}`
    const order = `&order=${shevron ? 'asc' : 'desc'}`
    const page = `&page=${currentPage}`
    const limit = `&limit=${limitPage}`

    axios.get(`https://652cbf4bd0d1df5273efa0ea.mockapi.io/items?${filter}${sorted}${order}${page}${limit}${searchItems}`)
      .then(result => {
        setDataItems(result.data)
        setLoading(false)
      })
      .catch((e) => console.error(e))

    window.scrollTo(0, 0)
  }, [category, sort, shevron, search, currentPage, limitPage])

  // Получение списка категорий
  useEffect(() => {
    const category = ['Все']
    let count = 0
    fetch('https://652cbf4bd0d1df5273efa0ea.mockapi.io/items?')
      .then(result => result.json())
      .then(array => {
        array.map(items => {
          !category.includes(items.name3) && category.push(items.name3)
          count += 1
        })
        setDataCategory(category)
        setCountElements(count)
      })
  }, [])

  const dataPage = useMemo(() => {
    const count = Math.floor(countElements / limitPage) + 1
    const array = [...Array(count)].map((_, i) => i + 1)
    return array
  }, [limitPage])

  // const maxInfo = loading ? 0 : dataItems.reduce((prev, curr) => curr.info2 > prev.info2 ? curr : prev);

  return (
    <>
      <MainBlock/>
      <div className='flex flex-col justify-center items-center w-full md:w-3/4 mx-auto text-xs md:text-base'>
        <Category data={dataCategory}/>
        <Sort/>
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