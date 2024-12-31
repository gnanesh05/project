import React from 'react'

const Cell = ({isFilled, onClick, disabled}) => {
  return (
   <button onClick={onClick} disabled={disabled} className={isFilled? "cell cell-filled" : "cell"}/>
  )
}

export default Cell