import React from 'react'

const TodoList = ({todoList, deleteHandler}) => {
    return (
        <div>
            {todoList.map((todo, index) =>
                <div key={index}>
                    <h4>{todo} &nbsp; <button  className="deletebutton" onClick={()=>deleteHandler(index)}>Delete</button></h4>
                </div>)}
        </div>
    )
}

export default TodoList
