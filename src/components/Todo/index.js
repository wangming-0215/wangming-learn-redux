import React from 'react';

const Todo = (props) => (
    <li onClick={props.onCLick}
        style={{ cursor: 'pointer', textDecoration: props.completed ? 'line-through' : 'none' }}>
        {props.text}
    </li>
);

export default Todo;