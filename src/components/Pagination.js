import { useState, useContext, useEffect } from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'
import { GlobalStates } from '../context/GlobalStates'
import { DataContext } from '../context/DataContext'

export default function Pagination() {
    const { setPageNumberToDisplay } = useContext(DataContext)
    const { Styles } = useContext(GlobalStates)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [showLeftDots, setShowLeftDots] = useState(false)
    const [showRightDots, setShowRightDots] = useState(true)
    const [isBtnActive, setIsBtnActive] = useState(true)
    
    const TotalPages = 10;

    const toggleDotsVisibility = () => {
        if (currentPage + 2 >= TotalPages) {
            setShowRightDots(false)
            setShowLeftDots(true)
        } else {
            setShowRightDots(true)
            setShowLeftDots(false)
        }
    }
    
    const next = () => {
        if (currentPage === TotalPages) return
        if(currentPage + 1 < TotalPages ) {
            setCurrentPage(currentPage + 1)
        } else {
            setIsBtnActive(currentPage + 1 === TotalPages ?  false : true)
            setCurrentPage(TotalPages)
        }
    }
    const prev = () => {
        if (currentPage === 1) return
        setIsBtnActive(true)
        if(currentPage - 1 > 0) {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(1)
        }
    }
    const totalBtn = (e) =>{
        setCurrentPage(TotalPages)
        setIsBtnActive(false)
        e.target.style = 'display: none;'
    }

    console.log(currentPage)
    useEffect(()=> {
        toggleDotsVisibility()
    }, [currentPage])

    const btnStyles = 'px-[13px] py-[9px] mx-[6px] rounded-full bg-gray-200 text-gray-100 hover:text-cyan'
    
    return(
        <div className="col-span-2 flex flex-col gap-4 my-8 sm:my-0 sm:flex-row items-center justify-between">
            <label className='text-nowrap'>per page: 
                <select onClick={(e)=> setPageNumberToDisplay(e.target.value)} className={`${Styles.inputStyle}`}>
                    {['5', '10', '15', '20'].map((num, ind)=> <option vlaue={num} key={ind}>{num}</option>)}
                </select>
            </label>

            <div className='flex items-center justify-end text-sm font-semibold'>
                <button onClick={prev} className={`rotate-180 hover:-translate-x-0.5 transition-all duration-200 [&>*]:w-full`}> 
                    <img src={paginationArrow} alt='previous' />
                </button>
                {showLeftDots && <button className={btnStyles} onClick={()=> setCurrentPage(Math.max(currentPage - 2, 1))}>..</button>}
                <button className={`${btnStyles} ${isBtnActive ? 'btn-active' : ''}`}>{currentPage === TotalPages ? currentPage - 1 : currentPage}</button>
                <button className={`${btnStyles} ${!isBtnActive ? 'btn-active' : ''}`}>{currentPage === TotalPages ? currentPage : currentPage + 1}</button>
                {showRightDots && <button className={btnStyles} onClick={()=> setCurrentPage(Math.min(currentPage + 2, TotalPages))}>..</button>}
                {TotalPages > currentPage + 1 && <button className={btnStyles} onClick={(e) => totalBtn(e)}>{TotalPages}</button>}
                <button onClick={next} className={`hover:translate-x-0.5 transition-all duration-200 [&>*]:w-full`}> 
                    <img src={paginationArrow} alt='next' />
                </button>
            </div>
        </div>
    )
}