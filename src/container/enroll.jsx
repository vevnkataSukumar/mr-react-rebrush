import React from "react";
import "./enroll.css";
class Enroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            name: "",
            dateofbirth: "",
            place: "",
            errorName: "",
            errorDateofbirth: "",
            errorPlace: ""
        }
    }

    resetState = () => {
        this.setState({
            Name: '',
            Dateofbirth: '',
            Place: '',
        });
    }

    handleSubmit() {
        console.log(this.state);
        if (
            this.state.name.length === 0 && 
            this.state.dateofbirth.length === 0 && 
            this.state.place.length === 0
        ) {
            return;
        }
        
        if (
            this.state.name.length > 0 &&
            this.state.dateofbirth.length > 0 &&
            this.state.place.length > 0
        ) {
            const person = {
                name: this.state.name,
                dateofbirth: this.state.dateofbirth,
                place: this.state.place
            }
            const arrVal = this.state.userList;
            arrVal.push(person);
            this.setState({
                userList: arrVal,
                name: '',
                dateofbirth: '',
                place: '',
            }
            // , function () {
            //     console.log(this.state.userList);
            // }
            );
        }
        // this.setState({
        //     errorName: "",
        //     errorDateofbirth: "",
        //     errorPlace: ""
        // });
        // const { name, dateofbirth, place } = this.state;
        // let valid = true;

        // if (name.trim() === "") {
        //     this.setState({ errorName: "Name is required." });
        //     valid = false;
        // }
        // if (dateofbirth.trim() === "") {
        //     this.setState({ errorDateofbirth: "Date of Birth is Required." });
        //     valid = false;
        // }
        // if (place.trim() === "") {
        //     this.setState({ errorPlace: "Place is required." });
        //     valid = false;
        // }
        // if (!valid) {
        //     return;
        // }
    }

    render() {
        return (
            <div className="enroll">
                <h1>Enroll user Data</h1>
                <div className="card">
                    <label className="label">Name</label>
                    <input required type="text" value={this.state.name} onChange={(e) => {

                        this.setState({
                            name: e.target.value
                        })
                    }} size="50" className="input"></input>
                    <div className="error">{this.state.errorName}</div>
                    <label className="label">Date of Birth</label>
                    <input required type="Date" value={this.state.dateofbirth} onChange={(e) => {
                        this.setState({
                            dateofbirth: e.target.value
                        })
                    }} size="50" className="input"></input>
                    <div className="error">{this.state.errorDateofbirth}</div>
                    <label className="label">Place</label>
                    <input required type="text" value={this.state.place} onChange={(e) => {
                        this.setState({
                            place: e.target.value
                        })
                    }} size="50" className="input"></input>
                    <div className="error">{this.state.errorPlace}</div>
                    <button onClick={this.handleSubmit.bind(this)}>Enroll</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.userList.map(function (enrol, index) {
                                return (
                                    <tr key={'enrol-' + index}>
                                        <td>{index}</td>
                                        <td>{enrol.name}</td>
                                        <td>{enrol.dateofbirth}</td>
                                        <td>{enrol.place}</td>
                                    </tr>);
                            })
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}
export default Enroll;
