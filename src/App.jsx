import ServiceAddList from './components/ServiceAddList'
import ServiceList from './components/ServiceList'
import { Provider } from 'react-redux'
import configureService from './redux/Store'
import './App.css'

function App() {

  return (
    <>
      <Provider store={configureService()}>
        <ServiceAddList />
        <ServiceList />
      </Provider>
    </>
  )
}

export default App
