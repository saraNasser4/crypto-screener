import { useContext, useEffect, useState } from 'react'
import searchIcon from '../assets/search-icon.svg'
import { DataContext } from '../context/DataContext'

export default function Search (props){
  const { getSearchResult, searchData } = useContext(DataContext)

  const [searchText, setSearchText] = useState('')
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText)

  const handleInput = (e)=> {
    setSearchText(e.target.value)
  }
  
  const filterData = searchData?.categories
    .filter((category)=> category.name.toLowerCase().includes(debouncedSearchText.toLowerCase())).slice(0, 10) || []

  const uniqueFilterData = filterData.filter((el, ind, arr)=> ind === arr.findIndex((category)=> category.name === el.name))


  useEffect(()=> {
    const timer = setTimeout(()=> {
      setDebouncedSearchText(searchText)
    }, 300)

    return ()=> clearTimeout(timer)
  }, [searchText])

  useEffect(()=> {
    if (debouncedSearchText) {
      getSearchResult(debouncedSearchText)
    }
  }, [debouncedSearchText])

  return (
    <>
      <form className='relative w-full lg:max-w-[300px] xl:max-w-[450px]' onSubmit={(e)=> e.preventDefault()}>
          <input value={searchText} onChange={(e)=> handleInput(e)} type='text' placeholder='Enter Currency Name' required className={`w-full py-1 ${props.Style}`}/>
          <button type='submit' className='absolute right-1 top-1'>
              <img src={searchIcon} alt='search button' />
          </button>
      </form>
      {searchText.length > 0 && filterData?.length > 0 ?
        (<ul className='absolute top-11 lg:top-14 lg:right-0 lg:left-0 -right-2 left-2 text-center bg-gray-200 bg-opacity-50 backdrop-blur-md overflow-x-hidden rounded z-50'>
          {uniqueFilterData.map((el, ind)=> {
            
            return(
              <li key={ind} className='py-2 border-b border-b-gray-100 hover:border-b-cyan cursor-pointer'>{el.name}</li>
            )
          })}
        </ul>
        ) : searchText.length > 0 ? (
          <div className='absolute top-11 lg:top-14 lg:right-0 lg:left-0 -right-2 left-2 text-center bg-gray-200 bg-opacity-50 backdrop-blur-md overflow-x-hidden rounded z-50 py-2'>
            No results found
          </div>
        )

        : null}
    </>
  )
}