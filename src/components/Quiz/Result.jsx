import React from 'react'

const Result = ({userAnswers,questions,reset}) => {
  const correctAnswers = userAnswers.filter((x)=>x).length;
  return (
    <div className='results'>
       <h2>Results</h2>
       <p>
        You answered {correctAnswers} out of {questions.length}
       </p>
       <span> <button onClick={reset}>Restart Quiz!</button></span>
       <ul>
        {questions.map((ques,i)=>(
            <li key={i} data-correct={userAnswers[i]}>
                Q{i+1} . {ques}
            </li>
        ))}
       </ul>
    </div>
  )
}

export default Result