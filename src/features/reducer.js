import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODO } from "./actionTypes.js"


const init = {todos:[]};
export const reducer = (state= init , {type, payload}) =>{

    switch (type) {

        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos, payload]
            };
        
        case EDIT_TODO:
            return{
                ...state,
                todos:[...state.todos],
            }

        case GET_TODO:
            return{
                ...state,
                todos:payload,
            }
        case DELETE_TODO:
            return{
                ...state,
                todos: payload,
            }
        default: return state
    }
};