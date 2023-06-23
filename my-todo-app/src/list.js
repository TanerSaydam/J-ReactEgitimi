import React from 'react'

export default function List(props) {
  return (
    <ul ref={props.ulRef}>
      {
        props.todos.map((val,index)=> {
          return <li key={index}>
            {val}
            <button onClick={()=> props.get(index)}>Güncelle</button>
            <button onClick={()=> props.remove(index)}>Sil</button>
          </li>
        })
      }
    </ul>
  )
}
