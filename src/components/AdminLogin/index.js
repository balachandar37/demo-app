import { Component } from "react";
import WithRouter from "../WithRouter"

class AdminLogin extends Component {
    state = {username: "", password: "", errorMessage: ""}
    onChangeUsername = event => {
        this.setState({username: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

    onSubmitForm = event => {
        event.preventDefault()
        const {username, password} = this.state
        const AdminUsername = 'Balachandar37'
        const AdminPassword = '12345678'
        if (username === AdminUsername && password === AdminPassword) {
            this.props.navigate('/adminpage')
        }
        else {
            this.setState({errorMessage: '*Please Enter a Valid Username or Password'})
        }
     }

    renderUsernameField = () => {
        const {username} = this.state
        return(
            <>
              <label htmlFor="username" >USERNAME</label>
              <input type="text" id="username" value={username} onChange={this.onChangeUsername} />
            </>
        )
    }
    
    renderPasswordField = () => {
        const {password} = this.state
        return(
            <>
              <label htmlFor="password">PASSWORD</label>
              <input type="password" id="password" value={password} onChange={this.onChangePassword} />
            </>
        )
    }

    render() {
        const  {errorMessage} = this.state
        return(
            <div>
                <h1>Welcome Admin</h1>
                <form onSubmit={this.onSubmitForm}>
                    <div>{this.renderUsernameField()}</div>
                    <div>{this.renderPasswordField()}</div>
                    <button type="submit">Login</button>
                    <p>{errorMessage}</p>
                </form>
            </div>
        )
    }
}

export default WithRouter(AdminLogin)