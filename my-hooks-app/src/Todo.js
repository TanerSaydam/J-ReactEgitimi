import React, { useEffect, useState } from 'react'

export default function Todo() {
    const [list, setList] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=> res.json())
        .then(data=> {
            setList(data)
        })
    }, [])
  return (
    <>
        <ul>
            {list.map((val,index)=> 
                <li key={index}>{val}</li>)}
        </ul>
    </>
  )
}
