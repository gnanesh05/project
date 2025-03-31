import React, { useCallback} from 'react'
import { useDispatch } from 'react-redux';


function useNotification({location}) {

   const dispatch = useDispatch();
    const triggerNotification = useCallback((notificationProps)=>{
        const id = Date.now();
        const newNotification = {id,...notificationProps,location};
        dispatch({
            type:"ADD_NOTIFICATION",
            payload:{notification:newNotification, location:location}
        })
        setTimeout(()=>{
          dispatch({
            type:"REMOVE_NOTIFICATION",
            payload:{id, location}
          })
        },notificationProps.duration)

    },[dispatch]);

    return {triggerNotification}
}

export default useNotification