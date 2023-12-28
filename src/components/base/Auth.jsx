import { useStore } from "../../service/state/Store"
import AuthForm from "../elements/AuthForm"

function Auth() {
    const logIn = useStore((state) => state.logIn)
    return (
        <>
            <AuthForm logIn={logIn} />
        </>
    )
}

export default Auth
