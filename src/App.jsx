
import { useEffect } from 'react'
import './App.css'
import { useStore } from './service/state/Store'

function App() {
  const autarizationStatus = useStore((state)=>state.autorizationStatus)
  const token = useStore((state)=>state.token)

  const auth = useStore((state)=>state.auth)
  const logOut = useStore((state)=>state.logOut)


  return (
    <>
      <strong>{token}</strong>
      {autarizationStatus ? <h1>Ты в системе</h1> : <h1>Привет!</h1>}
      <button onClick={()=>{auth('aleshin.dev@gmail.com', '123456')}}>Войти</button>
      <button onClick={()=>{logOut()}}>Выйти</button>
    </>
  )
}

export default App
