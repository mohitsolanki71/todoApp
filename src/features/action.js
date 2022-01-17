import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODO } from "./actionTypes.js"

export const addTodo=(data) =>{

    return{
        type:ADD_TODO,
        payload:data,
    };
};

export const editTodo=(id)=>{

    return{
        type:EDIT_TODO,
        payload:id,
    };
};

export const getTodo=(data) =>{

    return{
        type:GET_TODO,
        payload:data,
    };
};

export const deleteTodo=(id) =>{

    return{
        type:DELETE_TODO,
        payload:id,
    };
};