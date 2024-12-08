import { NavLink } from 'react-router-dom' 
export default function NavBar () {
    const navLinksData = ['crypto', 'trending', 'saved']

    return(
        <nav className='w-[90%] sm:w-[40%] max-w-[650px] sm:min-w-[450px] mt-20 md:mt-16 flex justify-evenly align-middle border border-cyan rounded-lg'>
            {navLinksData.map((link, index)=> {
                return(
                    <NavLink key={index} to={index === 0 ? '/' : `/${link}`} className={({isActive})=> `${isActive ? 'bg-cyan text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-cyan'} font-semibold w-full text-center rounded py-0.5 md:py-1 m-1.5 transition-all duration-200`}>{link[0].toUpperCase() + link.slice(1)}</NavLink>
                )
            })}
               
        </nav>
    )
}