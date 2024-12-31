import React,{useState} from 'react'
import questions from '../../../src/constants/questions.json'
import Questions from './Questions';
import Result from './Result';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleClick = (isCorrect)=>{
    setAnswers([...answers, isCorrect])
    setCurrentQuestion(prevState=>prevState+1);
  }

  const resetQuiz = ()=>{
    setCurrentQuestion(0);
    setAnswers([]);
  }

  return (
    <div className='quiz'>
        <h2>Quiz</h2>
        {
              currentQuestion <= questions.length-1 ?
              (<Questions question = {questions[currentQuestion]?.question} options = {questions[currentQuestion]?.options} handleClick={handleClick}/>)
             :
             <></>
        }
       {
        currentQuestion === questions.length ?
        (<Result userAnswers={answers} questions={questions.map(x=>x.question)} reset={resetQuiz}/>)
        :
        <></>
       }
    </div>
  )
}

export default Quiz