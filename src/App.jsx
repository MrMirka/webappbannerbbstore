
import './App.css'
import Auth from './components/base/Auth'
import Home from './components/base/Home'
import { useStore } from './service/state/Store'

function App() {
  const autarizationStatus = useStore((state)=>state.autorizationStatus)
  
  return (
    <>
     {autarizationStatus ? <Home/> : <Auth/>}
    </>
  )
}

export default App
