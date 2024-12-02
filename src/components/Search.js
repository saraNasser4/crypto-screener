import searchIcon from '../assets/search-icon.svg'

export default function Search (props){
  return (
    <form className='relative w-full lg:max-w-[300px] xl:max-w-[450px]'>
        <input type='text' placeholder='Enter Currency Name' className={`w-full py-1 ${props.Style}`}/>
        <button type='submit' className='absolute right-1 top-1'>
            <img src={searchIcon} alt='search button' />
        </button>
    </form>
  )
}