import React,{useState} from 'react'

const UserRating = () => {
  const [rating, setRating] = useState(0)
  const [hoveredIndices, setHoveredIndices] = useState(0)
  const changeRating = (rating)=>{
    setRating(rating)
  }
  const addIndex = (index)=>{
    setHoveredIndices(index)
  }
  const removeIndex = ()=>{
    setHoveredIndices(0)
  }


  const buttons = ['button1','button2','button3','button4','button5']
  
  return (
    <div className="card" onMouseLeave={removeIndex}>
      <h2>User Rating</h2>
        {
          buttons.map((button,i)=>(
            <button key={i} onMouseEnter={()=>addIndex(i+1)}
              className={i+1<=hoveredIndices|| i+1<=rating ?'hovered':''}
              onClick={()=>changeRating(i+1)}>
               X
            </button>
          ))
        }
        
        <p>
          Your Rating is {rating}
        </p>
      </div>
  )
}

export default UserRating