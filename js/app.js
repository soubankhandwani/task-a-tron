var taskId;
var removeId = 0;
var preLoaded = false;
check();
// A function to check if there are 0 tasks
function loadExistingTasks() {
	if (localStorage.length > 0 && preLoaded == false) {
		var task = document.querySelector(".your-tasks").innerText = "Your Tasks";
		var arrayOfKeys =[];
		for (var i = localStorage.length - 1; i >= 0; i--) {
			
			let localKey = localStorage.key(i);
			let localValue = localStorage.getItem(localKey);

			var keys = localKey.split("task");
			if(keys[1] == 'Id'){
				continue;
			}
			else {
				keys = Number(keys[1]);
				arrayOfKeys.push(keys);
			}
		}

		arrayOfKeys = arrayOfKeys.sort(function(a, b){return a - b})
		console.log(arrayOfKeys);
		var content = document.getElementById("task-box");

		for(var i = 0; i < arrayOfKeys.length ; i++){
			console.log(arrayOfKeys[i])
			var localValue = localStorage.getItem(`task${arrayOfKeys[i]}`);
			console.log(localValue)
			localValue = localValue.split(",");
			console.log(localValue);
			content.innerHTML = content.innerHTML + "<div id='task" + arrayOfKeys[i] + "'class='row task-items'><div class='col-sm-8'><h4 class='task-name'><i class='icofont-tasks-alt'></i>" + localValue[0] + "</h4><h5 class='task-time'><i class='icofont-clock-time'></i>" + localValue[1] + "</h5></div><div class='task-finish-btn col-sm-4'><button onclick='vanish(this)'class='finish-btn'>Finish Task</button></div></div>"
		}
		preLoaded = true;
	}
	else {
		preLoaded = false;
	}
}

function check() {
	let content = document.getElementById("task-box");

	if (Boolean(localStorage.key('taskId'))) {
		taskId = Number(localStorage.getItem('taskId'));
	}
	else {
		taskId = localStorage.setItem('taskId', null);
	}

	if (localStorage.length > 0 && preLoaded == false) {
		loadExistingTasks();
	}

	if (Boolean(content.innerText)) {
		var task = document.querySelector(".your-tasks").innerText = "Your Tasks";
	}
	else {
		var task = document.querySelector(".your-tasks").innerText = "No Tasks! Time to Rest";
	}
}

// A function to change text if there are 0 tasks.
// function noUpcomingTasks(){
// 	console.log(task)
// }

//Add Tasks
var addTaskBtn = document.getElementById("add-task-btn-modal");
addTaskBtn.addEventListener('click', function (e) {
	if (localStorage.getItem('taskId') === 'null') {
		taskId = 0;
	}
	var content = document.getElementById("task-box");
	var taskDesc = document.querySelectorAll("#task-form");
	console.log(taskDesc[0].value);
	taskId++;
	localStorage.setItem('taskId', taskId);
	content.innerHTML = content.innerHTML + "<div id='task" + taskId + "'class='row task-items'><div class='col-sm-8'><h4 class='task-name'><i class='icofont-tasks-alt'></i>" + taskDesc[0].value + "</h4><h5 class='task-time'><i class='icofont-clock-time'></i>" + taskDesc[1].value + "</h5></div><div class='task-finish-btn col-sm-4'><button onclick='vanish(this)'class='finish-btn'>Finish Task</button></div></div>"
	var localStorageTask = String(taskDesc[0].value + "," + taskDesc[1].value);
	console.log("Type: ", typeof (localStorageTask));
	localStorage.setItem(`task${taskId}`, localStorageTask);
	preLoaded = true;
	check();
})


//Function to remove task modal
function removeTask() {
	console.log("ID:", removeId);
	removeNode = document.getElementById(removeId);
	removeNode.remove()
	localStorage.removeItem(removeId);
	var closeModal = document.getElementById("remove-task-modal");
	closeModal.style.display = "none";
	check();
}

var yesBtn = document.getElementById("yes-confirm-btn");
yesBtn.addEventListener('click', function (event) {
	removeTask();
})

//Function to display the "are you sure? window"
function vanish(c) {
	var taskModal = document.getElementById("remove-task-modal");
	taskModal.style.display = "flex";
	removeId = c.parentElement.parentElement.id;
	check();
}

// Open Modal
var openModal = document.getElementById("add-task-btn");
openModal.addEventListener('click', function (e) {
	var taskModal = document.getElementById("task-modal");
	taskModal.style.display = "flex";
})


//Closing Modal
var closeModalBtn = document.getElementById("close-task-btn-modal");
closeModalBtn.addEventListener('click', function (event) {
	var modal = document.getElementById("task-modal");
	modal.style.display = "none";
})

var closeModalBtn = document.getElementById("confirm-close-btn");
closeModalBtn.addEventListener('click', function (event) {
	var modal = document.getElementById("remove-task-modal");
	modal.style.display = "none";
})
