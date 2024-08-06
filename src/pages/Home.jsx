import React, {useEffect, useMemo, useState} from 'react';
import MainBlock from "../components/MainBlock";
import Skeleton from "../components/goods/Skeleton";
import Good from "../components/goods";
import Pagination from "../components/Pagination";
import Category from "../components/filterpanel/Category";
import Sort from "../components/filterpanel/Sort";
import Header from "../components/header";
import Footer from "../components/Footer";
import error from "./Error";
import {useSelector} from "react-redux";


const Home = ({search}) => {

  const {category, sort, shevron} = useSelector((state) => state.filter)
  const [dataCategory, setDataCategory] = useState([''])
  const [dataItems, setDataItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [countElements, setCountElements] = useState(0)
  const [limitElements, setLimitElements] = useState(10)

  useEffect(() => {
    setLoading(true)
    const searchItems = search && `&search=${search}`
    const filter = `${category === 'Все' ? '' : `name3=${category}`}`
    const sorted = `&orderby=${sort.value}`
    const order = `&order=${shevron ? 'asc' : 'desc'}`
    const currentPage = `&page=${page}`
    const limit = `&limit=${limitElements}`
    fetch(`https://652cbf4bd0d1df5273efa0ea.mockapi.io/items?${filter}${sorted}${order}${currentPage}${limit}${searchItems}`)
      .then(result => {
          if (result.ok) {
            return result.json()
          }
          throw new Error('Ошибка запроса')
        }
      )
      .then(array => {
        setDataItems(array)
        setLoading(false)
      })
      .catch((e) => console.error(e))
    window.scrollTo(0, 0)
  }, [category, sort, shevron, page, limitElements, search])


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
    const count = Math.floor(countElements / limitElements) + 1
    const array = [...Array(count)].map((_, i) => i + 1)
    setPage(1)
    return array
  }, [limitElements])

  // const maxInfo = loading ? 0 : dataItems.reduce((prev, curr) => curr.info2 > prev.info2 ? curr : prev);

  return (
    <>
      <Header/>
      <MainBlock/>
      <div className='flex flex-col justify-center items-center w-full md:w-3/4 mx-auto text-xs md:text-base'>
        <Category data={dataCategory} />
        <Sort />
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
        page={page}
        dataPage={dataPage}
        limitElements={limitElements}
        onClickPage={setPage}
        onClickLimitElements={setLimitElements}
      />
      <hr className='my-6'/>
      <Footer/>
    </>
  );
};

export default Home;