import './App.css'
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { Provider } from 'react-redux'
import {setupStore} from './store/store'

const store = setupStore();

function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    </>
  )
}

export default App
