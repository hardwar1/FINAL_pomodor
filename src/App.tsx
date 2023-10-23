import './App.css'
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks/redux';
import { addStoradgeTodo, addTodo, resetTodo } from './store/todoSlice';

function App() {
  const dispatch = useAppDispatch();
  // dispatch(resetTodo());

  useEffect(() => {
    const todoListString = localStorage.getItem('todos');
    
    if (todoListString) {
      // const todoList = JSON.parse(todoListString)

      dispatch(addStoradgeTodo(JSON.parse(todoListString)))
    }
  })

  return (
    <>

      <Header />
      <Content />

    </>
  )
}

export default App

