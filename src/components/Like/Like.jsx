import React,{useState} from 'react'
import './Like.css'

const Like = () => {
    const [liked, setLiked] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClick = async()=>{
        setIsFetching(true)
        setError('')
        try {
            const promise = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    if(!isSuccess){
                        setIsSuccess(true);
                        resolve("success")
                    }
                    else{
                        setIsSuccess(false);
                        reject("error");
                    }
                },500);
            });

            const result = await promise;
            if(result === "success"){
                setLiked(prevState=>!prevState); 
            }
        } 
        catch (error) {
            setError("NetWork Error. PLease try again")
        }
        finally{
            setIsFetching(false)

        }
    }

  return (
    <div className='btn-container'>
        <button className={`like-btn ${liked?"liked":""}`} onClick={handleClick} disabled={isFetching}>
          {isFetching? "Loading" : liked?"Liked" : "like"}
        </button>
        {error && <p className='err-txt'>{error}</p>}
    </div>
  )
}

export default Like