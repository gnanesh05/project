import React from 'react'

const Questions = ({question,options,handleClick}) => {
  return (
    <div className='question'>
        <h2>{question}</h2>
        <ul className="options">
            {
                options?.map((x)=>(
                    <li className='option' key={x.value}>
                        <button onClick={()=>handleClick(x.isCorrect)}>{x.value}</button>
                    </li>
                ))
            }
        </ul>

    </div>
  )
}

export default Questions