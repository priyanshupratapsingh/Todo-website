import React from 'react'

const List = (props) => {
  const handleDelete=(e, uid) =>{
    let index = props.todos.findIndex(item=>{
      return item.id === uid
    })
    console.log(index)
    let newtodos = props.todos.filter(item=>{
      return item.id !== uid
    })
    props.settodos(newtodos)
  }
  return (
    <div className='list'>
        <div className="data">
          <input type="checkbox" />
          <p style={{margin:0}}>{props.title}</p>

        </div>

        <div className="option">
            {/* <p>...</p> */}
            <button>Edit</button>
            <button onClick={(e) => handleDelete(e,props.id)}>Delete</button>
        </div>
    </div>
  )
}

export default List
