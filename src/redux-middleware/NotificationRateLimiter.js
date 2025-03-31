const NotificationRateLimiter = (store)=>(next)=>(action)=>{
    if(action.type === "ADD_NOTIFICATION"){
        const maxNotifications = 5; 

        const notificationList = store.getState().Notifications.notifications;
        const notificationsByLocation = notificationList[action.payload.location] || [];
        if(notificationsByLocation.length >=maxNotifications){
            console.warn("Notification limit reached");
            return;
        }

    }
    return next(action);
}

export default NotificationRateLimiter;