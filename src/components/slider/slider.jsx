import React, { useState } from 'react'
import './slider.css'

const IMAGES = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUPh9ozg-SJOnowELmqCJLeFQ-Z2yscwa2w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOp7zRrCyt0PXrK_0cGEmPSeoMlUCez7GEQ&s",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2F39TREFaLY6r-AyNbUDJQA4WK7gzcQhh3Q&s"
]
const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleNext = ()=>{
        const n = IMAGES.length
        if(index<n-1){
            setIndex(prevIndex=>prevIndex+1)
        }
        else
        setIndex(0)
    }
    const handlePrev = ()=>{
        if(index>0){
            setIndex(prevIndex=>prevIndex-1)
        }
        else
        setIndex(0)
    }
  return (
    <div className='slider'>
        <div className='holder'>
            <button onClick={handlePrev}>prev</button>
            <img src={IMAGES[index]} alt={`image - {index}`} />
            <button onClick={handleNext}>next</button>
        </div>
    </div>
  )
}

export default Slider