import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Books = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const name = searchParams.get("name") || ""

  return (
    <div>
         <h2>Books</h2>
         <ul>
            <li> <Link to="/books/1">Book1</Link></li>
            <li> <Link to="/books/2">Book2</Link></li>
            <input type="text" value={name} onChange={e=>setSearchParams({name:e.target.value})} />
         </ul>

    </div>
  )
}

export default Books