import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload // INDEX of job todo
})

export const editTodo = (payload, index) => ({
    type: EDIT_TODO,
    payload, // INDEX of job todo
    index
})