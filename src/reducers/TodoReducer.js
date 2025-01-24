const initialState = {
    todos:[]
}

const TodoReducer = (state=initialState, action)=>{
    const {type, payload} = action
    switch (type){
        case "ADD_TODO":
            return {todos:payload}
        case "REMOVE_TODO":
            return {todos:payload}
        default:
            return state
    }
}

export default TodoReducer