import TodoList from './TodoLists.js'
export default class UndoRedoClass {
    constructor(){
        this.undoRedo_Max = 5
    }
   Undo(){
    let tasks_current = JSON.parse(localStorage.getItem('tasks_current')) ? JSON.parse(localStorage.getItem('tasks_current')) : []
    let tasks_undo = JSON.parse(localStorage.getItem('tasks_undo')) ? JSON.parse(localStorage.getItem('tasks_undo')) : []
    let tasks_redo = JSON.parse(localStorage.getItem('tasks_redo')) ? JSON.parse(localStorage.getItem('tasks_redo')) : []
    if(tasks_undo && tasks_undo.length>0){
      //unshift add new items to the beginning of an array 
      //Add a tasks_redo to save temporary data in localstorag when click undo button
      tasks_redo.unshift(tasks_current);
      tasks_redo.length = Math.min(tasks_redo.length,this.undoRedo_Max)
      localStorage.setItem('tasks_redo', JSON.stringify(tasks_redo));

      //update a current tasks  with the first  ellement off  (tasks_undo)=>(index0)
      tasks_current.length = 0;
      tasks_undo[0].push.apply(tasks_current, tasks_undo[0]);
      localStorage.setItem('tasks_current', JSON.stringify(tasks_undo[0]));

      //remove the first element of (tasks_undo)
      tasks_undo.splice(0, 1)
      localStorage.setItem('tasks_undo', JSON.stringify(tasks_undo))
      TodoList()
      }
    else{
      alert('There is no other data')
    }
}
       
  Redo(){
    let tasks_current = JSON.parse(localStorage.getItem('tasks_current')) ? JSON.parse(localStorage.getItem('tasks_current')) : []
    let tasks_undo = JSON.parse(localStorage.getItem('tasks_undo')) ? JSON.parse(localStorage.getItem('tasks_undo')) : []
    let tasks_redo = JSON.parse(localStorage.getItem('tasks_redo')) ? JSON.parse(localStorage.getItem('tasks_redo')) : []
    
    if(tasks_redo && tasks_redo.length>0){
      //unshift add new items to the beginning of an array 
      //Add a tasks_redo to save temporary data in localstorag when click redo button
      tasks_undo.unshift(tasks_current);
      tasks_undo.length = Math.min(tasks_undo.length,this.undoRedo_Max)
      localStorage.setItem('tasks_undo', JSON.stringify(tasks_undo));

      //update a current tasks  with the first  ellement off  (tasks_redo)=>(index0)
      tasks_current.length = 0;
      tasks_redo[0].push.apply(tasks_current, tasks_redo[0]);
      localStorage.setItem('tasks_current', JSON.stringify(tasks_redo[0]));

      //remove the first element of (tasks_redo)
      tasks_redo.splice(0, 1)
      localStorage.setItem('tasks_redo', JSON.stringify(tasks_redo))
      TodoList()
      }
    else{
      alert('There is no other data')
      
    }
  }
}