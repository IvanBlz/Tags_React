import React,{ Component } from "react";

import tasks from "../services/tasks.json";

import Add from "./add";
import Task from "./task";

class Tasks extends Component {

    state = {
        tasks : tasks,
        showTask : true
      }

      AddTaskNew = (task) => {
          task.Id = this.state.tasks.length;
          console.log(task);
        this.setState({
            tasks: [...this.state.tasks,task]
        });
      }
    
      deleteTask = (id) => {
         const data =  this.state.tasks.filter(tasks => tasks.Id !== id);
         this.setState({
           tasks: data
         });
         console.log(data);
      }

    checkDone = (done,id) => {
        const UpdateTask = this.state.tasks.map(task => {
          if (task.Id === id) {
            task.done = done;
          }
          return task;
        });
        this.setState({
          tasks: UpdateTask
        });
    }
    render(){
            return( 
            <div >
              <h2> Tasks </h2>
             <hr/>
             <div className="row">   
          <Add AddTaskNew={this.AddTaskNew}/>
            { this.state.tasks.map( e =>  
               <Task Task={e}
                checkDone={this.checkDone} 
                deleteTask={this.deleteTask}
                key={e.Id}/> 
            )}
            </div>
            </div>
            )
    }

}

export default Tasks;