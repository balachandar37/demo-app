import {Component } from 'react'
import emailjs from '@emailjs/browser'



class AdminPage extends Component {
    state = {email:""}

    onEnterEmail = event => {
        this.setState({email: event.target.value})
    }

    onSubmitForm = event => {
        event.preventDefault()
        const {email} = this.state
        const template = {
            From: "Balachandar",
            Email: email,
        }
        if (email.endsWith("@gmail.com")) {
            emailjs.sendForm('service_p7bhz0b', template , event.target, 'yA-hjrlmU7L4boKDW')
            .then((result) => {
               console.log("email sent successfully")
            }, (error) => {
               console.log("email sent failed")
            })
        }
        else {
            console.log("please enter valid email address")
        }
    }

    render() {
        const {email} = this.state
        
        return(
            <div>
                <h1>Create Agent</h1>
                <form onSubmit={this.onSubmitForm}>
                    <label htmlFor='email'>Email Id:</label>
                    <input type="email" id="email" value={email} onChange={this.onEnterEmail} />
                    <button type="submit">Create Agent</button>
                </form>
            </div>
        )
    }
}

export default AdminPage