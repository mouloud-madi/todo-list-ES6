import todoStat from './stats'
import moment from 'moment'
export default class Todo {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('TASKS')) ? JSON.parse(localStorage.getItem('TASKS')) : []
        this.newtaskstemporary =  []
        //call the function todoStat from todoStat.js
        todoStat()
    }

     //Add todo
    addTodo() {
        let name = document.getElementById('name').value
        let date = document.getElementById('date').value
        let time = document.getElementById('time').value
        let errMessage = document.getElementById('errMessage')
        if(name.length == 0){
            errMessage.innerHTML = "This field is required"
            document.getElementById('name').classList.add("is-invalid")
        }else{
              this.tasks.unshift({
                  name : name, 
                  date : date.length > 0 ? moment(date).format("D/M/YYYY") : moment().format("D/M/YYYY"), 
                  time : time.length > 0 ? time : moment().format("HH:mm"), 
                  isImportant : false, 
                  status : null, 
               })
               localStorage.setItem('TASKS', JSON.stringify(this.tasks))
  
 
              this.newtaskstemporary.unshift({
                name : name, 
                date : date.length > 0 ? moment(date).format("D/M/YYYY") : moment().format("D/M/YYYY"), 
                time : time.length > 0 ? time : moment().format("HH:mm"), 
                isImportant : false, 
                status : null, 
             })
             this.newtaskstemporary.length = Math.min(this.newtaskstemporary.length, 2)
             localStorage.setItem('NewTasksTemporary', JSON.stringify(this.newtaskstemporary))
             
             errMessage.innerHTML = ""
             document.getElementById('name').classList.remove("is-invalid")
             todoStat()
             myForm.reset();
             //remove the disable to undo button 
             document.getElementById('undo').disabled = false
        } 
    }

    //remove
    removeTodo(index) {
        this.tasks.splice(index, 1)
        localStorage.setItem('TASKS', JSON.stringify(this.tasks))
        todoStat()
    }

    //marque the status as important
    isImportant(index) {
        this.tasks[index].isImportant = !this.tasks[index].isImportant
        localStorage.setItem('TASKS', JSON.stringify(this.tasks))
        todoStat()
    }

    //changes the status as Todo
    isTodo(index) {
        this.tasks[index].status = "Todo"
        localStorage.setItem('TASKS', JSON.stringify(this.tasks))
        todoStat()
    }
    
    //changes the status as Done
    isDone(index) {
        this.tasks[index].status = "Done"
        localStorage.setItem('TASKS', JSON.stringify(this.tasks))
        todoStat()
    }

}