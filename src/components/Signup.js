import React from "react";
import "./Signup.css";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <h1>Register</h1>
                <form className="card">
                    <label>Firstname</label>
                    <br></br>
                    <input required type="text" size="50" className="input"></input>
                    <br></br>
                    <label>LastName</label>
                    <br></br>
                    <input required type="text" size="50" className="input"></input>
                    <br></br>
                    <label>Email</label>
                    <br></br>
                    <input required type="Email" size="50" className="input"></input>
                    <br></br>
                    <label>Gender</label>
                    <div className="radio-section">
                        <br></br>
                        <label>Male</label>
                        <br></br>
                        <input type="radio" name="Gender" id="male"></input>
                        <br></br>
                        <label>Female</label>
                        <br></br>
                        <input type="radio" name="Gender" id="female"></input>
                    </div>
                    <br></br>
                    <label>Phone Number</label>
                    <br></br>
                    <input required type="number" size="50" className="input"></input>
                    <br></br>
                    <label>Password</label>
                    <br></br>
                    <input required type="password" size="50" className="input"></input>
                    <br></br>
                    <button type="submit" className="button">Sign up</button>
                </form>
            </div>
        );
    }
}
export default SignUp;