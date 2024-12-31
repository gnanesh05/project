import React,{useState} from 'react'
import Cell from './Cell'
import './Grids.css'

const Grid = () => {
    const [order, setOrder] = useState([]);
    const [isDeactivating, setIsDeactivating] = useState(false);
    const config = [
        [1,1,1],
        [1,1,0],
        [1,1,1],
    ]

  const deactivateCells = ()=>{
    setIsDeactivating(true)
    const timer = setInterval(()=>{
        setOrder((originalOrder)=>{
            const newOrder = [...originalOrder];
            newOrder.pop();

            if(newOrder.length === 0 ){
                clearInterval(timer);
                setIsDeactivating(false);
            }
            return newOrder
        })
    },300);
  }

  const activateCells = (index)=>{
    const newOrder = [...order,index]
    setOrder(newOrder);

    if(newOrder.length === config.flat(1).filter(Boolean).length) // deactivating logic
    {
        deactivateCells()

    }
  }

  return (
    <div className='wrapper'>
        <div className="grid" style={{gridTemplateColumns : `repeat(${config[0].length}, 1fr)`}}>
            {config.flat(1).map((value,index)=>{
               return value?<Cell key={index} onClick={()=>activateCells(index)} isFilled={order.includes(index)} 
                            disabled = {order.includes(index) || isDeactivating}
                            /> 
                :
                 <span></span>
        })}
        </div>
    </div>
  )
}

export default Grid