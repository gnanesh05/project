import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate(-1)
        }, 2000);
    })
  return (
    <div>Page not found! Are you sure you're in the right place?</div>
  )
}

export default NotFound