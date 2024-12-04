import { useContext } from 'react'
import selectImg from '../assets/select-icon.svg'
import { DataContext } from '../context/DataContext'


export default function Sorting (props){
    const { setSortBy } = useContext(DataContext)

    const sortingOptions= ['Market Cap Desc', 'Market Cap Asc', 'Volume Desc', 'Volume Asc', 'Id Desc', 'Id Asc', 'Gecko Desc', 'Gecko Asc']
    const handleSorting = (e)=> {
        e.preventDefault()
        setSortBy(e.target.value)
    }
    return (
        <div className='flex items-center relative text-nowrap mt-2 md:mt-0 w-full md:w-fit md:mr-3'>
           <label htmlFor='sort' className='font-bold text-[1.1rem]'>sort by: </label>
           <select onChange={(e)=> handleSorting(e)} name='sort' id='sort' className={`${props.Style} w-full md:w-40 py-0.5 border-none appearance-none`}>
                {sortingOptions.map((option, index)=> {
                    let val = option.toLowerCase().split(" ").join("_")
                    return (
                        <option key={index} value={val}>{option}</option>
                    )
                })}
           </select>
           <img src={selectImg} alt='submit button' className='absolute right-5'/>  
        </div>
    )
}
