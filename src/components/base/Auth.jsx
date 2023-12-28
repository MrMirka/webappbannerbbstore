import { useStore } from "../../service/state/Store"
import AuthForm from "../elements/AuthForm"

function Auth() {
  const autarizationStatus = useStore((state)=>state.autorizationStatus)
  const token = useStore((state)=>state.token)

  const logIn = useStore((state)=>state.logIn)
  //const logOut = useStore((state)=>state.logOut)


  return (
    <>
     {/*  {autarizationStatus ? <h1>Ты в системе</h1> : <h1>Привет!</h1>}
      <button onClick={()=>{logIn('aleshin.dev@gmail.com', '123456')}}>Войти</button>
      <button onClick={()=>{logOut()}}>Выйти</button> */}
      <AuthForm logIn={logIn}/>
    </>
  )
}

export default Auth
