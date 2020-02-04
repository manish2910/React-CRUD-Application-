import React, { Fragment, useContext } from 'react';
import TodoContext from '../../context/todoContext';

const TodoItem = (props) => {
    const todoContext = useContext(TodoContext);
    const { setCurrent, deleteTask } = todoContext; 

    let {content,id} = props;
    return(
        <Fragment>
            <div>
                {content}
            </div>
            <span onClick={()=>setCurrent(props)} > &#9997;</span>
            <span onClick={()=>deleteTask(id)} > &#9935;</span>
        </Fragment>
    )
}

export default TodoItem;