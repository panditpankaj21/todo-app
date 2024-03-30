import {createSlice, nanoid} from '@reduxjs/toolkit'; 

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action)=>{
        const todo = {
          id: nanoid(),
          title: action.payload,
          completed: false,
        }
        state.todos.push(todo)
    },
    toggleTodo: (state, action)=>{
      const todo = state.todos.find(todo => todo.id === action.payload)
      if(todo){
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action)=>{
      state.todos =  state.todos.filter(todo => todo.id !== action.payload)
    },
  }
})

export const {
    addTodo,
    toggleTodo,
    deleteTodo,
} = todoSlice.actions

export default todoSlice.reducer