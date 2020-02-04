import React , { Fragment, useContext } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoContext from '../../context/todoContext';

const Todo = () => {
    const todoContext = useContext(TodoContext);
    const { tasks } = todoContext; 
    return (
        <Fragment>
            <div>
                <TodoForm />
            </div>
            {tasks.map(task => {
               return <TodoItem key={task.id} id={task.id} content={task.content} />
            })}
        </Fragment>
    )
}

export default Todo;