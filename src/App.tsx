import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks/redux';
import { resetTodo } from './store/todoSlice';
import { resetStat } from './store/statisticSlice';

// import './App.css'

function App() {
  const dispatch = useAppDispatch();
  // dispatch(resetTodo());
  // dispatch(resetStat());
  // console.log(localStorage.todos);

  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export default App




