import React from 'react';

export default props => {
    return (
        <>
        <input 
        type='checkbox' 
        checked={props.todo.done}
        onChange={e => props.onDoneChangeHandler(props.index, e.target.checked)}/>
        {
            props.todo.done ? 
            <span style={{textDecoration:'line-through'}}>{props.todo.title}</span>
            :
            <span>{props.todo.title}</span>
        }
       
        <button onClick={() => props.onRemoveHandler(props.index)}>Remove</button>
        </>
    );
}