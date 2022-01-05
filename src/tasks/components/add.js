import React,{ Component } from "react";
import TaskInterface from "./interfaces/Tasks";

class Add extends Component{

    constructor(props){
        super(props);
        this.state = TaskInterface;
    }

    onSubmit = e => {
        e.preventDefault();
    }
    
    onChange = e => {
        this.setState({
            Id: 1,
            [e.target.name] :e.target.value
            
        });
    }
    
    AddTask = e => {
        console.log(this.state.Titulo.trim().length);
        if (this.state.Titulo.trim().length === 0 || this.state.Descripcion.trim().length === 0 || this.state.Asigned.trim().length === 0) {
            return ;
        }
            this.props.AddTaskNew(this.state);
    
    }

    render(){
        return(
            <div className="container">
                <h2>Agregar:</h2>
                <form className="row" onSubmit={this.onSubmit}>
                <div className="col">
                    <input type="text"
                        className="form-control"
                        placeholder="Title task"
                        onChange={this.onChange}
                        name="Titulo" />
                </div>
                <div className="col">
                    <input type="text"
                        className="form-control"
                        placeholder="Description task"
                        onChange={this.onChange} 
                        name="Descripcion"/>
                </div>
                <div className="col">
                    <input type="text"
                        className="form-control"
                        placeholder="Asigned task" 
                        onChange={this.onChange}
                        name="Asigned"/>
                </div>
                <div className="col-2">
                    <input type="submit" className="form-control btn btn-success" value="Add task" onClick={this.AddTask} />
                </div>
                </form>
                <hr/>
            </div>
        );
    }
}

export default Add;