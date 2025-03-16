import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            count: 0,
            inputVal: ''
        };
        // console.log('constructor', props);
    }

    static getDerivedStateFromProps(props, state) {
        // console.log('getDerivedStateFromProps', props, state);
        return {name: state.name };
    }

    componentDidMount() {
        // fetch('')
        // .then()
        // .catch()

        setTimeout(() => {
            // Update state with the fetched data
            this.updateMyName("Mohan C");
          }, 1000); 
    }

    updateMyName(inputName) {
        this.setState({
            name: inputName || this.state.inputVal
        });
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement(){
        this.setState({
            count:this.state.count - 1
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {};
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount');
    }

    // Phases
    // Mounting ==> constructor, getDerivedStateFromProps, render, componentDidMount
    // Updating ==> getDerivedStateFromProps, shouldComponentUpdate, render, getSnapShotBeforeUpdate, componentDidUpdate
    // Ummounting ==> compomentWillUmmount

    render() {
        console.log('Home Page');
        return (
            <div>
                <div>
                    <input type="text" value={this.state.inputVal} onChange={(e) => {
                        this.setState({
                            inputVal: e.target.value
                        });
                    }}></input>
                    {/* <button className="linkButton" type="submit"  onClick={this.updateMyName.bind(this)}>Update</button> */}

                    <button className="linkButton" type="submit"  onClick={() => {
                        this.updateMyName()
                    }}>Update</button>
                </div>
                <h1>Hello {this.state.name}!</h1>
                <p>Count: {this.state.count}</p>
                <button type="submit" onClick={this.increment.bind(this)}>Increment</button>
                <button type="submit" onClick={this.decrement.bind(this)}>Decrement</button>

                <Link className="linkButton" to={'/signin'}>SignIn</Link>
            </div>
        );
    }

}

export default Page;