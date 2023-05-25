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

//Add Tasks
var addTaskBtn = document.getElementById("add-task-btn-modal");
addTaskBtn.addEventListener('click', function(e){
	var content = document.getElementById("task-box");
	var taskDesc = document.querySelectorAll("#task-form")
	console.log(taskDesc[0].value);
	content.innerHTML = content.innerHTML + "<div class='row task-items'><div class='col-sm-8'><h4 class='task-name'><i class='icofont-tasks-alt'></i>" + taskDesc[0].value + "</h4><h5 class='task-time'><i class='icofont-clock-time'></i>" + taskDesc[1].value +"</h5></div><div class='task-finish-btn col-sm-4'><button onclick='vanish(this)'class='finish-btn'>Finish Task</button></div></div>"
	check();
})


// Removing Tasks
function vanish(c){
	confirm("Have you really finished your task?")?c.parentElement.parentElement.remove():false;
	check();
}

// Open Modal
var openModal = document.getElementById("add-task-btn");
openModal.addEventListener('click', function(e){
	var taskModal = document.getElementById("task-modal");
	taskModal.style.display = "flex";
})


//Closing Modal
var closeModalBtn = document.getElementById("close-task-btn-modal");
closeModalBtn.addEventListener('click', function(event){
	var modal = document.getElementById("task-modal");
	modal.style.display = "none";
})
