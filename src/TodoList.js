import React from 'react'
import TodoListItem from './TodoListItem'
import './style.css'
import axios from 'axios'

export default class TodoList extends React.Component{
    
    constructor(){
        super()
        this.state = {
            list_title: "",
            curent_value: '',
            todos: []
        }
        
        this.deleteTodoByIndex = this.deleteTodoByIndex.bind(this)
    }

    deleteTodoByIndex(index){
        this.setState(prevState=> ({
            todos:
                [...prevState.todos.slice(0, index),
                ...prevState.todos.slice(index + 1)],
        }
        ))
    }

    componentDidMount(){
        axios.get("http://jsonplaceholder.typicode.com/todos/5")
        .then(data => this.setState({todos:[{id: data.data.id, title:data.data.title, complete:data.data.completed}]}))
        .catch(error => console.log(error))
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
                    this.state.todos.map((todo, index) => {
                        return(
                            <TodoListItem key={index} index={index} deleteTodoByIndex={this.deleteTodoByIndex} title={todo.title} completed={todo.completed} />
                        )
                    })
                }

                <input 
                placeholder="Todo Item Name..." 
                type="text" 
                value={this.state.curent_value} 
                onChange={(event)=> {this.setState({curent_value: event.target.value})}} />
                <button onClick={() => {this.setState(prevState => ({
                    todos: prevState.todos.concat({ title: this.state.curent_value, completed: false }
                        ),
                        curent_value: ''
            })) }}>Add item to list</button>
            </div>
        )
    }
}