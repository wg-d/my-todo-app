import React, {useState} from 'react';
import './App.css';
import SubmitForm from './Components/SubmitForm/SubmitForm';
import TasksList from './Components/TasksList/TasksList'

function App () {
  //constructor(props){
    //super(props);
    const [tasks, setTasks] = useState([]);
//    this.state ={tasks: []}
    
    // this.addTask = this.addTask.bind(this);
    // this.removeTask = this.removeTask.bind(this);
  //}
  
  const addTask = (task) =>{
    // this.setState((prevState) => {
    //   return { 
    //     tasks: prevState.tasks.concat(task) 
    //   };
    // });
    setTasks(tasks.concat(task));
  }

  const removeTask = (id) => {
      // const tasks = this.state.tasks.filter(element => (element.id !== id));
      // this.setState({ tasks: tasks });
      const filteredTasks = tasks.filter(element => (element.id !== id));
      setTasks(filteredTasks);
  }

  // render(){
    return (
      <div className="App">
        <SubmitForm addTask={addTask}/>
        <TasksList tasks={tasks} removeTask={removeTask}/>
      </div>
    );
  // }
}

export default App;