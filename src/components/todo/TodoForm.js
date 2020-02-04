import React, { Fragment, useRef, useContext, useEffect } from 'react';
import TodoContext from '../../context/todoContext';

const TodoForm = () => {
    const todoContext = useContext(TodoContext);
    const {addTask, updateTask, current, clearCurrent} = todoContext;
    const inputAdd = useRef(null);

    const onAdd = () => {
        let inputadd = inputAdd.current.value;
        if(current === null)
        {
            addTask(inputadd);
        }
        else
        {
            let updateCurrent = {
                id:current.id,
                content:inputadd
            }
            updateTask(updateCurrent);
            clearCurrent();
        }
        inputAdd.current.value= '';
    };

    useEffect(()=>{
        if(current !== null)
        {
            inputAdd.current.value = current.content
        };
    },[current])

    return(
        <Fragment>
            <input type='text' placeholder='Add Task...' ref={inputAdd} />
            <button onClick={onAdd}>Add Task</button>
        </Fragment>
    )
}

export default TodoForm;