import React from 'react'
import TodoListItem from './TodoListItem'
import './style.css'

export default class TodoList extends React.Component{
    state = {
        list_title: "",
        curent_value:'',
        todos: [

        ]
    }
    render(){
        return(
            <div className="todo-list">
                <h2>Todo List</h2>
                <label>Title</label>
                <br />
                <input placeholder="Enter title..." type="Text" value={this.state.list_title} onChange={(event)=> {this.setState({list_title: event.target.value})}} />
                <br />

                {
                    this.state.todos.map(todo => {
                        return(
                            <TodoListItem title={todo.title} completed={todo.completed} />
                        )
                    })
                }

                <input placeholder="Todo Item Name..." type="text" value={this.state.curent_value} onChange={(event)=> {this.setState({curent_value: event.target.value})}} />
                <button onClick={() => {this.setState(prevState => ({todos: prevState.todos.concat({ title: this.state.current_value, completed: false })})) }}>Add item to list</button>
            </div>
        )
    }
}