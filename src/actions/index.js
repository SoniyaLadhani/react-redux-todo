export const submitNewTodo = (payload) => {
    return {
        type: 'ADD_TODO',
        payload: payload
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload : id
    }
}

export const markTodoAsComplete = (id) => {
    return {
        type: 'COMPLETE_TODO',
        payload : id
    }
}

