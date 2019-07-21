import React from 'react'
import TodoList from './TodoList'

class App extends React.Component{
    render(){
        return(
            <div>My first component
            <TodoList />
            </div>
        )
    }
}

export default App