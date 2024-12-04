import selectImg from '../assets/select-icon.svg'


export default function Sorting (props){
    const sortingOptions= ['Market Cap Desc', 'Market Cap Asc', 'Volume Desc', 'Volume Asc', 'Id Desc', 'Id Asc', 'Gecko Desc', 'Gecko Asc']
    return (
        <div className='flex items-center relative text-nowrap mt-2 md:mt-0 w-full md:w-fit md:mr-3'>
           <label htmlFor='sort' className='font-bold text-[1.1rem]'>sort by: </label>
           <select id='sort' className={`${props.Style} w-full md:w-40 py-0.5 border-none appearance-none`}>
                {sortingOptions.map((option, index)=> <option key={index} value={option}>{option}</option>)}
           </select>
           <img src={selectImg} alt='submit button' className='absolute right-5'/>  
        </div>
    )
}
