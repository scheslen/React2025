import './page.css'

export const Page = () =>{
    const pNumber = 12;
    return(
        <div className="page">
            <div>Page:</div>
            <div className='page__number'>{pNumber}</div>
            <button className='btn page__btn'>prev</button>
            <button className='btn page__btn' >next</button>
        </div>
    )
}