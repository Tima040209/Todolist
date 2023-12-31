import React,{useState} from 'react'
import ToDoForm from './ToDoForm'
import Todo from './Todo';

function ToDoList() {
    const[todos,setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text ){
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id!==id)
        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text ){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }
  return (
    <div>
        <h1>What's the plan for today?</h1>
        <ToDoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default ToDoList