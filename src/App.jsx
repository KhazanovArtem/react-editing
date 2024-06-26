import ServiceAddList from './components/ServiceAddList'
import ServiceList from './components/ServiceList'
import SearchBar from './components/ServiceBar'
import { Provider } from 'react-redux'
import configureService from './redux/Store'
import './App.css'

function App() {

  return (
    <>
      <Provider store={configureService()}>
        <ServiceAddList />
        <SearchBar/>
        <ServiceList />
      </Provider>
    </>
  )
}

export default App
