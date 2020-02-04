import {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    GET_TASK,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types';

export default (state,action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks:[ {...action.payload}, ...state.tasks ]
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks:state.tasks.filter(item => item.id !== action.payload)
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                )
            };
        case SET_CURRENT:
            return {
                ...state,
                current:action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current:null
            };
        case GET_TASK:
            return {
                ...state,
            };
        default:
            return state;
    }
}