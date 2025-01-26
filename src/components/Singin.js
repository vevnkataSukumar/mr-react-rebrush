import React from "react";
import "./Singin.css";
import { createBrowserHistory } from 'history';

const myCredentials = {
    email: 'sukumar@gmail.com',
    password: '123456'
};

// Custom history object
const history = createBrowserHistory();

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
        };
    }
    handleChange=(event)=>{
        const {name, value}=event.target;
        this.setState({ [name]: value});
    };
    handleSubmit=(event)=>{
        // event.preventDefault();
        if(myCredentials.email===this.state.email && myCredentials.password===this.state.password){
            history.push('/home');
        }
        else{
            alert("You have entered wrong credentials")
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render(){
        const{ email, password}=this.state;
        return (
            <div className={'container'}>
                <h1>Login Form</h1>
                <form className="card">
                    <label className="label">Email</label>
                    <input className="input" required type="Email" name="email" placeholder="abc@example.com" size="50" value={email} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>
                    <label className="label">Password</label>
                    <input className="input"  required type="password" size="50" name="password" value={password} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>
                    <button  className="button" type="submit" onClick={this.handleSubmit}>Sign in</button>
                </form>
                <div className="submitted-data">
                    <p>Username:{email}</p>
                    <p>Password:{password}</p>
                </div>
            </div>

        );
    }
}
export default SignIn;