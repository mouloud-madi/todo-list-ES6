import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Todo from './dom.js'
import {undo,redo} from './undoRedo.js'
let toDo = new Todo()
window.toDo = toDo
window.undo = undo
window.redo = redo

//remove the item newTask whene reload the page
localStorage.removeItem("NewTasks")
localStorage.removeItem("NewTasksTemporary")

//add the disable to undo button
document.getElementById('undo').disabled = true
document.getElementById('redo').disabled = true