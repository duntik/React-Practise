import React from 'react'
import TodoListItem from './TodoListItem'

export default class TodoList extends React.Component{
    render(){
        return(
            <div>
                Todo List....
                <TodoListItem />
                <TodoListItem />
                <TodoListItem />
            </div>
        )
    }
}