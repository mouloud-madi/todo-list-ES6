import moment from 'moment'
import TodoList from './TodoLists.js'
export default class TodoClass {
    constructor() {
        this.tasks_current = JSON.parse(localStorage.getItem('tasks_current')) ? JSON.parse(localStorage.getItem('tasks_current')) : []
        TodoList()  
        this.undoRedo_Max = 5
    }
    //create new todo
    create(){
        let name = document.getElementById('name').value
        let date = document.getElementById('date').value
        let time = document.getElementById('time').value
        let errMessage = document.getElementById('errMessage')
        let tasks_undo = JSON.parse(localStorage.getItem('tasks_undo')) ? JSON.parse(localStorage.getItem('tasks_undo')) : []
         
        if(name.length == 0 ){
            errMessage.innerHTML  = "This field is required"
            document.getElementById('name').classList.add("is-invalid")
        }
        else{  
            //unshift Add new items to the beginning of an array 
            //Add a tasks_undo to save temporary data in localstorage
             tasks_undo.unshift(this.tasks_current);
             tasks_undo.length = Math.min(tasks_undo.length,this.undoRedo_Max)
             localStorage.setItem('tasks_undo', JSON.stringify(tasks_undo));
             this.tasks_current.unshift({
                name: name,
                date : date.length > 0 ? moment(date).format("D/M/YYYY") : moment().format("D/M/YYYY"), 
                time : time.length > 0 ? time : moment().format("HH:mm"), 
                isImportant: false,
                status: null,
            });
            //Add a tasks_current to save  data in localstorage
              localStorage.setItem('tasks_current', JSON.stringify(this.tasks_current));
              errMessage.innerHTML  = ""
              document.getElementById('name').classList.remove("is-invalid")
              myForm.reset()
              TodoList() 
        }
    }

  //remove single todo
   Remove(index) {
    if(confirm("You want to delete!")){
    let tasks_undo = JSON.parse(localStorage.getItem('tasks_undo')) ? JSON.parse(localStorage.getItem('tasks_undo')) : []  
    tasks_undo.unshift( this.tasks_current);
    tasks_undo.length = Math.min(tasks_undo.length,this.undoRedo_Max)
    localStorage.setItem('tasks_undo', JSON.stringify(tasks_undo));
    this.tasks_current.splice(index, 1)
    localStorage.setItem('tasks_current', JSON.stringify(this.tasks_current))
    TodoList() 
   }
   } 
   
   //mark todo as important
   IsImportant(index) {
    let tasks_undo = JSON.parse(localStorage.getItem('tasks_undo')) ? JSON.parse(localStorage.getItem('tasks_undo')) : [] 
    tasks_undo.unshift(this.tasks_current);
    tasks_undo.length = Math.min(tasks_undo.length,this.undoRedo_Max)
    localStorage.setItem('tasks_undo', JSON.stringify(tasks_undo));
    this.tasks_current[index].isImportant = !  this.tasks_current[index].isImportant
    localStorage.setItem('tasks_current', JSON.stringify( this.tasks_current))
    TodoList() 
   }
 
   //mark todo as Done or Todo
   ToggleStatus(index,value) {
     let tasks_undo = JSON.parse(localStorage.getItem('tasks_undo')) ? JSON.parse(localStorage.getItem('tasks_undo')) : [] 
     tasks_undo.unshift(this.tasks_current);
     tasks_undo.length = Math.min(tasks_undo.length,this.undoRedo_Max)
     localStorage.setItem('tasks_undo', JSON.stringify(tasks_undo));
     this.tasks_current[index].status = value
     localStorage.setItem('tasks_current', JSON.stringify( this.tasks_current))
     TodoList() 
   }

}