import submitImg from '../assets/submit-icon.svg'

import { useContext, useRef } from "react"
import { DataContext } from "../context/DataContext"

export default function Currency (props){
    let { setCurrency } = useContext(DataContext)
    
    let currenciesList = [
        "btc", "eth", "ltc", "bch", "bnb", "eos", 
        "xrp", "xlm", "link", "dot", "yfi", "usd", 
        "aed", "ars", "aud", "bdt", "bhd", "bmd",
        "brl", "cad", "chf", "clp", "cny", "czk",
        "dkk", "eur", "gbp", "gel", "hkd", "huf",
        "idr", "ils", "inr", "jpy","krw", "kwd",
        "lkr", "mmk", "mxn", "myr", "ngn", "nok",
        "nzd", "php", "pkr", "pln", "rub", "sar",
        "sek", "sgd", "thb", "try", "twd", "uah",
        "vef", "vnd", "zar", "xdr", "xag", "xau",
        "bits", "sats"
    ]

    const currencyRef = useRef(null)
    const handleCurrencySubmit = (e)=> {
        e.preventDefault()
        let val = currencyRef.current.value;
        if(currenciesList.includes(val.toLowerCase())){
            setCurrency(val)
            currencyRef.current.value =''
        } else {
            currencyRef.current.value ='N/A'
            currencyRef.current.style = 'color: red;'
            return
        }
        currencyRef.current.style = 'color: white;'


    }
    return (
        <form className='flex items-center' onSubmit={handleCurrencySubmit}>
            <label htmlFor='currency' className='font-bold text-[1.1rem]'>currency: </label>
            <input ref={currencyRef} id='currency' type='text' placeholder="usd" minLength='2' maxLength='4' className={`${props.Style} w-16 py-0.5`} /> 
            <button type='submit'>
                <img src={submitImg} alt='submit button' />
            </button>
        </form>
    )
}