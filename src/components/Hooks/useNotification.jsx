import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import CustomNotification from '../CustomNotification/CustomNotification';

function useNotification({location}) {
    const [notifications, setNotifications] = useState([]);
    const triggerNotification = useCallback((notificationProps)=>{
        const id = Date.now();
        const newNotification = {id,...notificationProps};
        setNotifications((prevState)=>([...prevState, newNotification]));
        setTimeout(()=>{
            setNotifications((prevState)=>prevState.filter((item)=>item.id!==id));
        },notificationProps.duration)

    },[]);
    const onClose = (id)=>{
        setNotifications((prevState)=>prevState.filter((item)=>item.id!==id));   
    }

    const NotificationComponent = notifications.length ? (<div className={` ${location} `}>
        {
            notifications.map((notification,i)=>(
                <CustomNotification key={i} {...notification} onClose={()=>onClose(notification.id)}/>
            ))
        }
    </div>) : null;

    return {triggerNotification, NotificationComponent}
}

export default useNotification