export const AddTodoAction = (todo)=>(dispatch, getState)=>{
    const {
        Todo : {todos},
    } = getState();

    const hasTodo = todo?.name && todos.find(x=>x.name === todo.name)
    if(!hasTodo){
        dispatch({
            type: "ADD_TODO",
            payload:[...todos, todo]
        })
    }
};

export const RemoveTodoAction = (todo)=>(dispatch, getState)=>{
    const {
        Todo : {todos},
    } = getState();
    const hasTodo = todos.find(x=>x.name === todo.name)
    if(hasTodo){
        dispatch({
            type : "REMOVE_TODO",
            payload:todos.filter(x=>x.name !== todo.name)
        })
    }
}