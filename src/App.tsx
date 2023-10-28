import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks/redux';
import { addStoradgeTodo } from './store/todoSlice';
import { addStoradgeStatistic } from './store/statisticSlice';
import { SaveStat } from './shared/save/SaveStat';
import { SaveTodos } from './shared/save/SaveTodos';

// import './App.css'

function App() {
  const dispatch = useAppDispatch();
  // dispatch(resetTodo());

  useEffect(() => {
    const todoListString = localStorage.getItem('todos');
    const statistic = localStorage.getItem('statistic');

    if (todoListString) {
      
      dispatch(addStoradgeStatistic(JSON.parse(todoListString)))
    }

    if (statistic?.length && statistic?.length > 0) {
      dispatch(addStoradgeTodo(JSON.parse(statistic)))
    }
  })

  return (
    <>
      <Header />
      <Content />

      <SaveStat />
      <SaveTodos />
    </>
  )
}

export default App


