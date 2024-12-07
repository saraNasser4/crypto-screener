import { useRef, useState } from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'
// import { GlobalStates } from '../context/GlobalStates'

export default function Pagination() {
    // const { Styles } = useContext(GlobalStates)
    const btnStyles = 'px-[13px] py-[9px] mx-[6px] rounded-full bg-gray-200 text-gray-100 hover:text-cyan'
    const [currentPage, setCurrentPage] = useState(1)
    
    const refs = useRef({})
    
    const TotalPages = 250;

    const next = ()=> {
        if(currentPage === TotalPages) {
            setCurrentPage(TotalPages)
            return
        }else if(currentPage < TotalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    
    const previous = ()=> {

        currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
    }
    
    const multiStepNext = ()=> {
        if(currentPage + 2 > TotalPages) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(currentPage + 2)
        }
    } 
    const multiStepPrev = ()=> {
        if(currentPage - 2 < 1) {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage - 2)
        }

        
    } 
    
    const totalPagesBtn = ()=> {
        setCurrentPage(TotalPages)
        
        Object.keys(refs.current).forEach(el => el?.classList?.remove('btn-active'))
        refs.current.next.classList.add('btn-active');

        refs.current.leftDots.style ='display: block;'
        refs.current.rightDots.style ='display: none;'
        refs.current.totalPagesBtn.style ='display: none;'

        refs.current.next.innerText = TotalPages - 1;
        refs.current.current.innerText = TotalPages;
    } 

    const BtnsDisplay = [
        { 
            name: 'leftArrow',
            onClickFunc: previous, 
            styles: `rotate-180 hover:-translate-x-0.5 transition-all duration-200 [&>*]:w-full`, 
            content: (<img src={paginationArrow} alt='previous' />) 
        },
        { 
            name: 'leftDots',
            onClickFunc: multiStepPrev, 
            styles: `${btnStyles} hidden`, 
            content: '..', 
        },
        { 
            name: 'current',
            onClickFunc: multiStepPrev, 
            styles: `${btnStyles}`, 
            content: currentPage, 
        },
        { 
            name: 'next',
            onClickFunc: next, 
            styles: `${btnStyles}`, 
            content: currentPage + 1, 
        },
        { 
            name: 'rightDots',
            onClickFunc: multiStepNext, 
            styles: btnStyles, 
            content: '..', 
        },
        { 
            name: 'totalPagesBtn',
            onClickFunc: totalPagesBtn, 
            styles: btnStyles, 
            content: TotalPages, 
        },
        { 
            name: 'rightArrow',
            onClickFunc: next, 
            styles: `hover:translate-x-0.5 transition-all duration-200 [&>*]:w-full`, 
            content: (<img src={paginationArrow} alt='next' />) 
        },
    ]
    return(
        <div className="flex items-center justify-between">
            {/* <form>
                <label>per page: </label>
                <input className={`${Styles.inputStyle} w-16 py-0.5 !appearance-none`} type='number' placeholder='10' />
            </form> */}
            <div className='flex items-center justify-end text-sm font-semibold'>
                {BtnsDisplay.map(btnObj => {
                    return(
                        <button 
                            key={btnObj.name}
                            ref={(el)=> refs.current[btnObj.name] = el}
                            className={btnObj.styles}
                            onClick={btnObj.onClickFunc}
                        >
                            {btnObj.content}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}