import React from "react";
import "./enroll.css";
class Enroll extends React.Component{
    constructor(props){
        super(props);
        this.state={
            enli:[],
            Name:" ",
            Dateofbirth:" ",
            Place:" ",
        }
    }
    handleSubmit(){
        if(this.state.Name>0 && this.state.Dateofbirth>0 && this.state.Place>0){
            const arrVal=this.state.enli;
            arrVal.push(this.state.Name, this.state.Dateofbirth, this.state.Place);
            this.setState({
                enli:arrVal,
                Name:'',
                Dateofbirth:'',
                place:''
            }, function(){
                console.log(this.state.enli, this.state.Name, this.state.Dateofbirth, this.state.Place);
            });


        }

    }

    render() {
        return (
            <div className="enroll">
                <h1>Enroll user Data</h1>
                <label>Name</label>
                <br></br>
                <input required type="text" value={this.state.Name} onChange={(e)=>{
                    this.setState({
                        Name:e.target.value
                    })
                }} size="50" className="input"></input>
                <br></br>
                <label>Date of Birth</label>
                <br></br>
                <input required type="Date" value={this.state.Dateofbirth} onChange={(e)=>{
                    this.setState({
                        Dateofbirth:e.target.value
                    })
                }} size="50" className="input"></input>
                <br></br>
                <label>Place</label>
                <input required type="text" value={this.state.Place} OnChange={(e)=>{
                    this.setState({
                        Place:e.target.value
                    })
                }} size="50" className="input"></input>
                <button onClick={this.handleSubmit.bind(this)}>Enroll</button>
            </div>
        );
    }
}
export default Enroll;