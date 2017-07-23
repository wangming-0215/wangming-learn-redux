import React from 'react';
import Todo from '../Todo';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map(todo => (
                <Todo {...todo} key={todo.id} onCLick={() => props.onTodoClick(todo.id)} />
            ))}
        </ul>
    )
};

export default TodoList;