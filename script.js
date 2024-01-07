function addToList(){
	var taskInput = $("#inputted-task");
	$("#task-list").append($("<li>").text(taskInput.val()));
	taskInput.val('');
}