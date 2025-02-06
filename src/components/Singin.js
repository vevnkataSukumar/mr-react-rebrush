import React from "react";
import "./Singin.css";
import { myCredentials } from "../data";
import { withRouter } from "../util";
import { replace } from "react-router-dom";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (event) => {
        event.preventDefault(); // Prevent any default action
        if (
            myCredentials.email === this.state.email &&
            myCredentials.password === this.state.password
        ) {
            this.props.navigate('/enro', {state: { email: this.state.email } });
        }
        else {
            alert("You have entered wrong credentials")
        }
    }


    render() {
        const { email, password } = this.state;
        console.log('SignIn Page');
        return (
            <div className={'container'}>
                <h1>Login Form</h1>
                <form className="card">
                    <label className="label">Email</label>
                    <input className="input" required type="Email" name="email" placeholder="abc@example.com" size="50" value={email} onChange={this.handleChange}></input>
                    <br></br>
                    <label className="label">Password</label>
                    <input className="input" required type="password" size="50" name="password" value={password} onChange={this.handleChange}></input>
                    <br></br>
                    <button className="button" type="submit" onClick={this.handleSubmit}>Sign in</button>
                </form>
            </div>

        );
    }
}

const SignInPage = withRouter(SignIn);

export default SignInPage;