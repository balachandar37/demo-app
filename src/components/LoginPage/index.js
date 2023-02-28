import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()
    const  onClickAdmin = () => {
        navigate('/adminlogin')
    }
    const onClickAgent = () => {
        navigate('/agentlogin')
    }
    return(
        <div>
          <h1>Welcome to Ticket Bookin App</h1>
          <button type="button" onClick={onClickAdmin} >Admin Login</button>
          <button type="button" onClick={onClickAgent} >Agent Login</button>
        </div>
    )
}

export default LoginPage