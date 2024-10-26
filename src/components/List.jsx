import React, { useState } from 'react'

const List = (props) => {
  const [showedit, setshowedit] = useState(false)
  const [newtodo, setnewtodo] = useState("")

  const handleDelete=(e, uid) =>{
    // let index = props.todos.findIndex(item=>{
    //   return item.id === uid
    // })
    // console.log(index)
    let newtodos = props.todos.filter(item=>{
      return item.id !== uid
    })
    props.settodos(newtodos)
  }

  const handleEdit=(e, uid) =>{
    setshowedit(!showedit)
    props.settodos(
      props.todos.map((item) =>
        item.id === uid ? { ...item, todo: newtodo } : item
      )
    )
  }

  const handleChange=(e) =>{
    setnewtodo(e.target.value)
  }
  return (
    <div className='list'>
        <div className="data">
          <input type="checkbox" />
          
          {!showedit? <p style={{margin:0}}>{props.title}</p>: ""}
          {showedit? <input onChange={handleChange} type="text" value= {newtodo} />: ""}
          
        </div>

        <div className="option">

            <button onClick={(e) => handleEdit(e,props.id)}>{showedit?"Save": "Edit"}</button>
            <button onClick={(e) => handleDelete(e,props.id)}>Delete</button>
        </div>
    </div>
  )
}

export default List
