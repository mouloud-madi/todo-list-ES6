import moment from 'moment'
//change the stat every 5s
let reload_time = 5000
setInterval(TodoList, reload_time);
export default function TodoList() {
    let tasks_current = JSON.parse(localStorage.getItem('tasks_current')) ?  JSON.parse(localStorage.getItem('tasks_current')) :[]
    let Html = '';
    tasks_current.forEach((tasks, index) => {
        Html += `
      <tr class="${tasks.isImportant == true ? 'bg-dark text-white' : ''}">
      <td>
      <div class="custom-control custom-checkbox">
      <input type="checkbox" onchange='Todo.IsImportant(${index})' class="custom-control-input" id="customCheck${index}"
       ${tasks.isImportant == true ? 'checked' : ''}>
      <label class="custom-control-label" for="customCheck${index}"></label>
      </div>
      </td>
      <td>${tasks.name}</td>
      <td>
      ${tasks.date}
      <br>
      ${tasks.date == moment().format("D/M/YYYY") ? `<span class="badge badge-warning"> ALERT ! You are on the designated day to perform this task </span>` : ''}
      </td>
      <td>
      ${tasks.time}
       </td>
      <td>${tasks.status == undefined ? '' : tasks.status == "Done" ? '<span class="badge badge-warning">Done</span>' : '<span class="badge badge-success">Todo</span>' }</td>
      <td>
      <div class="btn-group">
      <button class="btn btn-danger btn-sm" type="button" onclick="Todo.Remove(${index})">
       Delete
      </button>
      <button class="btn btn-primary btn-sm" type="button" id="triggerId" data-toggle="dropdown" >
      &#8801; 
      </button>
      <div class="dropdown-menu" aria-labelledby="triggerId">
      <button class="dropdown-item" value="Done" onclick="Todo.ToggleStatus(${index},this.value)">Done</button>
      <button class="dropdown-item" value="Todo" onclick="Todo.ToggleStatus(${index},this.value)" >Todo</button>
      </div>
      </div>
      </td>
      </tr>
      `
    });
    document.getElementById('todoList').innerHTML = Html
}