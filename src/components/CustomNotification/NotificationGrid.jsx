import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useNotification from '../Hooks/useNotification'
import './CustomNotification.css'

function NotificationGrid() {
    const { triggerNotification: triggerTopRight, NotificationComponent: TopRightNotifications } = useNotification({ location: 'top-left' });
    const { triggerNotification: triggerBottomLeft, NotificationComponent: BottomLeftNotifications } = useNotification({ location: 'bottom-right' });
    const notifications = useSelector((state)=>state.notifications);
    const dispatch = useDispatch();

    const removeNotification = (id)=>{
        dispatch({
            type:"REMOVE_NOTIFICATION"
        })
    }
    
    return (
      <div>
        <button onClick={() => triggerTopRight({ type: 'success', message: 'Data save success', duration: 3000 })}>
          Trigger Top-Left Notification
        </button>
        <button onClick={() => triggerBottomLeft({ type: 'error', message: 'Data save failed', duration: 3000 })}>
          Trigger Bottom-Right Notification
        </button>
    
        {/* Render notification components */}
        {TopRightNotifications}
        {BottomLeftNotifications}
      </div>
    );
    
}

export default NotificationGrid