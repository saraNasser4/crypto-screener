import submitImg from '../assets/submit-icon.svg'
export default function Currency (props){
    return (
        <div className='flex items-center'>
           <label for='currency' className='font-bold text-[1.1rem]'>currency: </label>
           <input id='currency' type='text' placeholder="usd" minLength='2' maxLength='4' className={`${props.Style} w-16 py-0.5`} /> 
           <button type='submit'>
                <img src={submitImg} alt='submit button' />
           </button>
        </div>
    )
}