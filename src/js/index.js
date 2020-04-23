import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import TodoClass from './Dom.js'
import UndoRedoClass from './UndoRedo.js'
let Todo = new TodoClass()
window.Todo = Todo
let UndoRedo = new UndoRedoClass()
window.UndoRedo = UndoRedo
// remove undo redo items whene reload the page because we only use it if there are changes
window.onload = function () {
    localStorage.removeItem("tasks_undo");
    localStorage.removeItem("tasks_redo");
};
