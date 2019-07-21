import React from 'react'
import TodoListItem from './TodoListItem'
import './style.css'

export default class TodoList extends React.Component{
    state = {
        list_title: "Hey, im title",
        todos: [
            {
                title: 'Go one',
                completed: false
            },{
                title: 'Go two',
                completed: true
            }
        ]
    }
    render(){
        return(
            <div className="todo-list">
                <h2>Todo List</h2>
                <label>Title</label>
                <br />
                <input placeholder="Enter title..." type="Text" value={this.state.list_title} />
                <br />

                {
                    this.state.todos.map(todo => {
                        return(
                            <TodoListItem title={todo.title} completed={todo.completed} />
                        )
                    })
                }

                <input placeholder="Todo Item Name..." type="text" />
                <button>Add item to list</button>
            </div>
        )
    }
}