import './App.css'
import { addTodo, toggleTodo, deleteTodo } from './features/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { TaskInput, Task } from './components/index.js'

function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const handleAddTodo = (e) => {
    e.preventDefault()
    if(e.target[0].value === "") return;
    dispatch(addTodo(e.target[0].value)); 
    e.target[0].value = ""; 
  }

  const handleToggle = (task_id) => {
    dispatch(toggleTodo(task_id))
  }
  
  const handleDelete = (task_id) => {
    dispatch(deleteTodo(task_id))
  }

  return (
    <div className='container'>
      <div className='todos-container'>
        <TaskInput
          handleAddTodo={handleAddTodo}
        />
        {
          todos.map((todo, index) => 
              <Task 
                key={todo.id}  
                task_id={todo.id}
                title={todo.title}
                completed={todo.completed}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
              />
          )
        }
        </div>
    </div>
  )
}

export default App
