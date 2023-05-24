check();
// A function to check if there are 0 tasks
function check(){
	let content = document.getElementById("task-box");
	if(Boolean(content.innerText)){
		var task = document.querySelector(".your-tasks").innerText = "Your Tasks";
	}
	else {
		var task = document.querySelector(".your-tasks").innerText = "No Tasks! Time to Rest";
		console.log(task)
	}
}

// A function to change text if there are 0 tasks.
function noUpcomingTasks(){
	
	console.log(task.style)
}

// Adding Tasks
var addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener('click', function(e){
	var taskName = prompt("Enter task: ");
	var taskTime = prompt("Enter time: ");
	var content = document.getElementById("task-box");
	content.innerHTML = content.innerHTML + "<div class='row task-items'><div class='col-sm-8'><h4 class='task-name'><i class='icofont-tasks-alt'></i>" + taskName + "</h4><h5 class='task-time'><i class='icofont-clock-time'></i>" + taskTime +"</h5></div><div class='task-finish-btn col-sm-4'><button onclick='vanish(this)'class='finish-btn'>Finish Task</button></div></div>"
	check();
})

// Removing Tasks
function vanish(c){
	confirm("Have you really finished your task?")?c.parentElement.parentElement.remove():false;
	check();
}
