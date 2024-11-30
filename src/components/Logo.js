import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg"

export default function Logo (){
    return(
        <Link 
            to='/'
            className="absolute left-5 top-5 flex items-center text-cyan text-2xl md:text-3xl lg:text-4xl">
            <img src={logoSvg} alt='our logo' />
            <span>CryptoBucks</span>
        </Link>
    )
}