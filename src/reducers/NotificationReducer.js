const initialState = {
    notifications : {}
}

const NotificationReducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch(type){
        case 'ADD_NOTIFICATION':
            return {
                ...state,
                notifications:{
                    ...state.notifications,
                [payload.location]:[...(state.notifications[payload.location] || []), payload.notification]
                }
            }
        case 'REMOVE_NOTIFICATION':
            return {
                ...state,
                notifications:{
                ...state.notifications,
                [payload.location] : state.notifications[payload.location].filter(item=>item.id !== payload.id)
                }
            }
        default:
            return state;
    }
}

export default NotificationReducer;