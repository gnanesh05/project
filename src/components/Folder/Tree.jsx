import React, { useState } from 'react'

const Tree = ({explorer}) => {
    const[display, setDisplay] = useState(false);

    if(explorer.isFolder){
        return (
            <div>
                <span onClick={()=>setDisplay(!display)}>
                    {explorer.name}
                    <br />
                </span>
    
                <div style={{display:display?"block":"none", paddingLeft:"50px"}}>
                    {explorer.contents.map((item,i)=>(
                        <Tree key={i} explorer={item}/>   
                    ))}
    
                </div>
            </div>
        )
    }
    else{
        return(
            <span style={{paddingLeft:"20px"}}>{explorer.name} <br /></span>
        )
    }
}

export default Tree