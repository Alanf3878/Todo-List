import React, { useState }  from 'react'
import Tasks from './components/Tasks.jsx'
import AddTask from './components/AddTask.jsx'
import Header from './components/Header'
import './App.css'
const App = () => {
  // let message = 'Hellow World'
  const [tasks, setTasks] = useState([
 
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task =>{
      if(task.id == taskId ) return {... task, completed: !task.completed} 

      return task;
    })
    setTasks(newTasks)
  }

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [ ...tasks, {
      title: taskTitle,
      id: Date.now(),
      completed: false,

    },
  ];
  setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <div className = "box-container">
     <div className ="container">
       <Header/>
       <AddTask handleTaskAdd={handleTaskAdd}/>
     <Tasks 
     tasks ={tasks}
      handleTaskClick={handleTaskClick}
      handleTaskDeletion={handleTaskDeletion}
      />
     </div>
    </div>

  )
}
export default App;