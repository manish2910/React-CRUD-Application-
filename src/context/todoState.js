import React , { useReducer } from 'react';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';
import {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    GET_TASK,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types';
import uuid from 'uuid/v4';


const TodoState = props => {
    const initialState = {
        tasks:[],
        current:null
    }

    const [state,dispatch] = useReducer(TodoReducer,initialState);

    // Get Task
    const getTask = (task) => {
        dispatch({type:GET_TASK,payload:task})
    };

    // Add Task
    const addTask = (task) => {
        let addTask = {
            id:uuid(),
            content:task
        }
        dispatch({type:ADD_TASK,payload:addTask})
    };

    // Update Task
    const updateTask = (task) => {
        dispatch({type:UPDATE_TASK,payload:task})
    };

    // Delete Task
    const deleteTask = (id) => {
        dispatch({type:DELETE_TASK,payload:id})
    };

    // Set Current
    const setCurrent = (task) => {
        dispatch({type:SET_CURRENT,payload:task})
    }

    // Clear Current
    const clearCurrent = () => {
        dispatch({type:CLEAR_CURRENT})
    }

    return (
        <TodoContext.Provider value={{
            tasks:state.tasks,
            current:state.current,
            getTask,
            deleteTask,
            updateTask,
            addTask,
            setCurrent,
            clearCurrent,
        }}>
            {props.children}
        </TodoContext.Provider>
    )

}

export default TodoState;