import React,{ Component } from "react";

class Task extends Component{

 

  render(){
            const {Id, Titulo, Descripcion, Asigned, done } = this.props.Task;
        return (
            <div className="col-6" key={Id} >
            <div className="card mb-3" style={{width: "100%"}}>
              <div className="row g-0">
                <div className="col-md-4" style={ done? { backgroundColor: "green" } : { backgroundColor: "red" }} >
                  <img src="https://www.computerhope.com/jargon/t/task.png" className="img-fluid rounded-start" alt="tasks"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{height: "150px"}}>
                    <h5 className="card-title">{Titulo}</h5>
                    <p className="card-text">{Descripcion}</p>
                    <p className="card-text"><small className="text-muted">Asignada: {Asigned}</small></p>
                  </div>
                  <div className="card-footer">
                      <div className="form-group">
                      <button className="btn-xs btn-success m-1" title="Approved" onClick={this.props.checkDone.bind(this, true,Id)} >Approved</button>
                      <button className="btn-xs btn-danger m-1" title="Rejected"  onClick={this.props.checkDone.bind(this, false,Id)}>Rejected</button>
                      <button className="btn-xs btn-danger m-1" title="Delete"  onClick={this.props.deleteTask.bind(this, Id)}>X</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
    }

}

export default Task;