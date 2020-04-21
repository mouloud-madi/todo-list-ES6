import todoStat from './stats'
export  function undo(){    
      let tasks = JSON.parse(localStorage.getItem('TASKS')) ? JSON.parse(localStorage.getItem('TASKS')) : []
      let newTasks = JSON.parse(localStorage.getItem('NewTasks')) ? JSON.parse(localStorage.getItem('NewTasks')) :[] 
      let NewTasksTemporary = JSON.parse(localStorage.getItem('NewTasksTemporary')) 
      
      document.getElementById('redo').disabled = false 
      newTasks.unshift({
      name : tasks[0].name, 
      date : tasks[0].date, 
      time : tasks[0].time, 
      isImportant : tasks[0].isImportant, 
      status : tasks[0].status, 
    })
    localStorage.setItem('NewTasks', JSON.stringify(newTasks))    
    tasks.splice(0,1)
    localStorage.setItem('TASKS', JSON.stringify(tasks))
    todoStat()

    if(NewTasksTemporary.length == newTasks.length){
        document.getElementById('undo').disabled = true
      }
 }

export  function redo(){
    let tasks = JSON.parse(localStorage.getItem('TASKS')) ? JSON.parse(localStorage.getItem('TASKS')) : []
    let newTasks = JSON.parse(localStorage.getItem('NewTasks')) ? JSON.parse(localStorage.getItem('NewTasks')) :[]
    tasks.unshift({
      name : newTasks[0].name, 
      date : newTasks[0].date, 
      time : newTasks[0].time, 
      isImportant : newTasks[0].isImportant, 
      status : newTasks[0].status, 
    })
    localStorage.setItem('TASKS', JSON.stringify(tasks))
    newTasks.splice(0,1)
    localStorage.setItem('NewTasks', JSON.stringify(newTasks))
    todoStat()  
    if(JSON.parse(localStorage.getItem('NewTasks')).length == 0){
        document.getElementById('redo').disabled = true
        document.getElementById('undo').disabled = false
    }
}


 