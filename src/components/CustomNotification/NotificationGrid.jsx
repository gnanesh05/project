import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useNotification from '../Hooks/useNotification'
import './CustomNotification.css'
import CustomNotification from './CustomNotification';

function NotificationGrid() {
    const { triggerNotification: triggerTopRight } = useNotification({ location: 'top-right' });
    const { triggerNotification: triggerBottomRight } = useNotification({ location: 'bottom-right' });
    const {triggerNotification :triggerTopLeft} = useNotification({location:'top-left'});
    const {triggerNotification:triggerBottomLeft} = useNotification({location:'bottom-left'})
    const {notifications} = useSelector((state)=>state.Notifications);
    const dispatch = useDispatch();

    const removeNotification = (id)=>{
        dispatch({
            type:"REMOVE_NOTIFICATION",
            payload:id
        })
    }
    
    return (
      <div>
        <div className='notification-grid'>
            <button onClick={() => triggerTopRight({ type: 'success', message: 'Data save success', duration: 4000 })}>
            Trigger Top-Right Notification
            </button>
            <button onClick={() => triggerBottomLeft({ type: 'error', message: 'Data save failed', duration: 4000 })}>
            Trigger Bottom-Left Notification
            </button>
            <button onClick={() => triggerTopLeft({ type: 'info', message: 'Nothing to save', duration: 4000 })}>
            Trigger Top-Left Notification
            </button>
            <button onClick={() => triggerBottomRight({ type: 'warning', message: 'Save limit reached', duration: 4000 })}>
            Trigger Bottom-Right Notification
            </button>
        </div>
        
    
        {
            Object.entries(notifications).map(([location, notificationList])=>(
                <div key={location} className={`${location}`}>
                        {
                            notificationList.map((notification=>(
                                <CustomNotification {...notification} onClose={()=>removeNotification(notification.id)}/>
                            )))
                        }
                </div>
            ))
        }
      </div>
    );
    
}

export default NotificationGrid