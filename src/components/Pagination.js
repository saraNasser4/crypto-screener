import { useState, useContext, useEffect } from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'
import { GlobalStates } from '../context/GlobalStates'
import { DataContext } from '../context/DataContext'

export default function Pagination() {
    const { page, setPage, totalPages ,setPerPage } = useContext(DataContext)
    const { Styles } = useContext(GlobalStates)
    
    const [showLeftDots, setShowLeftDots] = useState(false)
    const [showRightDots, setShowRightDots] = useState(true)
    const [isBtnActive, setIsBtnActive] = useState(true)
    
    const toggleDotsVisibility = () => {
        if (page + 2 >= totalPages) {
            setShowRightDots(false)
            setShowLeftDots(true)
        } else {
            setShowRightDots(true)
            setShowLeftDots(false)
        }
    }
    
    const next = () => {
        if (page === totalPages) return
        if(page + 1 < totalPages ) {
            setPage(page + 1)
        } else {
            setIsBtnActive(page + 1 === totalPages ?  false : true)
            setPage(totalPages)
        }
    }
    const prev = () => {
        if (page === 1) return
        setIsBtnActive(true)
        if(page - 1 > 0) {
            setPage(page - 1)
        } else {
            setPage(1)
        }
    }
    const totalBtn = (e) =>{
        setPage(totalPages)
        setIsBtnActive(false)
        e.target.style = 'display: none;'
    }

    useEffect(()=> {
        toggleDotsVisibility()
    }, [page])

    const btnStyles = 'px-[13px] py-[9px] mx-[6px] rounded-full bg-gray-200 text-gray-100 hover:text-cyan'
    
    return(
        <div className="col-span-2 flex flex-col gap-4 my-8 sm:my-0 sm:flex-row items-center justify-between">
            <label className='text-nowrap'>per page: 
                <select onClick={(e)=> setPerPage(e.target.value)} className={`${Styles.inputStyle}`}>
                    {[5, 10, 15, 20].map((num, ind)=> <option vlaue={num} key={ind}>{num}</option>)}
                </select>
            </label>

            <div className='flex items-center justify-end text-sm font-semibold'>
                <button onClick={prev} className={`rotate-180 hover:-translate-x-0.5 transition-all duration-200 [&>*]:w-full`}> 
                    <img src={paginationArrow} alt='previous' />
                </button>
                {showLeftDots && <button className={btnStyles} onClick={()=> setPage(Math.max(page - 2, 1))}>..</button>}
                <button onClick={totalPages === page? prev : null} className={`${btnStyles} ${isBtnActive ? 'btn-active' : ''}`}>{page === totalPages ? page - 1 : page}</button>
                <button onClick={next} className={`${btnStyles} ${!isBtnActive ? 'btn-active' : ''}`}>{page === totalPages ? page : page + 1}</button>
                {showRightDots && <button className={btnStyles} onClick={()=> setPage(Math.min(page + 2, totalPages))}>..</button>}
                {totalPages > page + 1 && <button className={btnStyles} onClick={(e) => totalBtn(e)}>{totalPages}</button>}
                <button onClick={next} className={`hover:translate-x-0.5 transition-all duration-200 [&>*]:w-full`}> 
                    <img src={paginationArrow} alt='next' />
                </button>
            </div>
        </div>
    )
}