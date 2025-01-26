import React from "react";
import "./TodoList.css";
class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasklist: [],
            inputVal: '',

        }
    }
    handleSubmit() {
        if (this.state.inputVal.length === 0) {
            return;
        }
        console.log('Step: ', this.state.tasklist, this.state.inputVal);
        if (this.state.inputVal.length > 0) {
            const arrVal = this.state.tasklist;
            arrVal.push(this.state.inputVal);
            this.setState({
                tasklist: arrVal,
                inputVal: ''
            }, function () {
                console.log('State update is Finished');
                console.log(this.state.tasklist, this.state.inputVal);
            });
        }
    }
    render() {
        return (
            <div className="todoo">
                <h1>To-Do List</h1>
                <input type="text" value={this.state.inputVal} onChange={(e) => {
                    this.setState({
                        inputVal: e.target.value
                    })
                }} size="50"></input>
                <button onClick={this.handleSubmit.bind(this)}>Add</button>

                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Todo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.tasklist.map(function(task,index){
                            return(
                            <tr key={'task-'+index}>
                                <td>{index}</td>
                                <td>{task}</td>
                            </tr>);

                        })
                    }
                    </tbody>
                </table>

            </div>
        );
    }




}

export default Todolist;