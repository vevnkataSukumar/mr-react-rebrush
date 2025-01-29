import React, { useState } from "react";
import "./Singin.css";
/*function Greet(){
    const[count, setCount]=useState(0)
    return(
        <div>
            <h1>Count</h1>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
    )

}
/*const Greet=()=>{
    <h1>Hello Mohan</h1>
}*/


/*export default Greet;*/
const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill out both fields.');
        }
    }
    console.log('From Submitted:', { email, password });

    return (
        <div className="container">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit} className="card">
                <label className="label">Email</label>
                <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"></input>
                <label className="label">Password</label>
                <input required type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}></input>
                <div className="error">
                    {error && <p className="error-message">{error}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );

}
export default Loginpage;
