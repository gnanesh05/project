import React, { useEffect, useState } from 'react'
import "./SearchBar.css"

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [show, setShow] = useState(false);
    const [cache, setCache] = useState({});

    const fetchData = async()=>{
        try {
            if(cache[search]){
                console.log("getting from cache ", search)
                setRecipes(cache[search]);
                return;
            }
            const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
            const data = await res.json()
            console.log("getting from api ", search);
            setRecipes([...data?.recipes])
            setCache(prevState=>({...prevState,[search]:[...data?.recipes]}));
        } 
        catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        const timer = setTimeout(fetchData, 300);

        return ()=>{
            clearTimeout(timer)
        }
    },[search]);

  return (
    <div>
        <input id="search-bar" type="text" value={search} onChange={e=>setSearch(e.target.value)}
         onFocus={()=>setShow(true)} onBlur={()=>setShow(false)} />
         {
            show && <div id="results">
            {
             recipes.map((r)=>(
                    <span className='result' key={r.id}>
                        {r.name}
                    </span>
                ))
            }
        </div>
         }
        
    </div>
  )
}

export default SearchBar