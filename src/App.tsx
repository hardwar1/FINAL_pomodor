import './App.css'
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks/redux';
import { addStoradgeTodo, addTodo, resetTodo } from './store/todoSlice';
import { addStoradgeStatistic } from './store/statisticSlice';

function App() {
  const dispatch = useAppDispatch();
  // dispatch(resetTodo());

  useEffect(() => {
    const todoListString = localStorage.getItem('todos');
    
    if (todoListString) {
      // const todoList = JSON.parse(todoListString)

      dispatch(addStoradgeStatistic(JSON.parse(todoListString)))
    }
  })

  useEffect(() => {
    const statistic = localStorage.getItem('statistic');
    
    if (statistic) {
      // const todoList = JSON.parse(todoListString)

      dispatch(addStoradgeTodo(JSON.parse(statistic)))
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


