import React, { useState } from 'react'

function Todo(props) {
    return (
        <>
            <h2>Todo Component</h2>
            {props.todos.map((val, index) => 
            {
                return 
                    <p 
                    key={index}>
                        {val}
                    </p>
            })}
        </>
    )
}

export default Todo;
