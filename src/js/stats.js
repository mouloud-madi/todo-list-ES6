import moment from 'moment'
export default function todoStat() {
    let tasks = JSON.parse(localStorage.getItem('TASKS')) ?  JSON.parse(localStorage.getItem('TASKS')) :[]
    let Html = '';
    tasks.forEach((tasks, index) => {
        Html += `
      <tr class="${tasks.isImportant == true ? 'bg-dark text-white' : ''}">
      <td>
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheck${index}"
      onchange="toDo.isImportant(${index})" ${tasks.isImportant == true ? 'checked' : ''}>
      <label class="custom-control-label" for="customCheck${index}"></label>
      </div>
      </td>
      <td>${tasks.name}</td>
      <td>
      ${tasks.date}
      <br>
      ${tasks.date == moment().format("D/M/YYYY") ? `<span class="badge badge-info"> ALERT ! You are on the designated day to perform this task </span>` : ''}
      </td>
      <td>
      ${tasks.time}
       </td>
      <td>${tasks.status == undefined ? '------' : tasks.status == "Done" ? '<span class="badge badge-warning">Done</span>' : '<span class="badge badge-success">Todo</span>' }</td>
      <td>
      <div class="dropdown">
      <button class="btn btn-primary" type="button" id="triggerId" data-toggle="dropdown">
      &#8801; 
      </button>
      <div class="dropdown-menu" aria-labelledby="triggerId">
      <button class="dropdown-item text-danger" onclick="toDo.removeTodo(${index})">Delete</button>
      <button class="dropdown-item" onclick="toDo.isDone(${index})">Done</button>
      <button class="dropdown-item" onclick="toDo.isTodo(${index})">Todo</button>
      </div>
      </div>
      </td>
      </tr>
      `
    });
    document.getElementById('taskList').innerHTML = Html
}
//change the status every 5s
setInterval(todoStat, 5000);