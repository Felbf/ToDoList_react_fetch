import React, { useEffect, useState } from "react";
import InputText from "./InputText.jsx";
import TaskLi from "./TaskLi.jsx";
import CounterTasks from "./CounterTasks.jsx";

const ToDoList = () => {
	const [tasks, setTasks] = useState(["Your task"]);
	const [newTask, setNewTask] = useState("");
	const [taskExists, setTaskExist] = useState(false);

	function newTaskChange(event) {
		setNewTask(event.target.value);
	}

	useEffect(() => {
		let position = tasks.findIndex(task => task === newTask);
		if (position === -1) {
			setTaskExist(false) && newTask;
		} else {
			setTaskExist(true) && !newTask;
		}
	});

	function addNewTask(event) {
		if (event.key.toLowerCase() === "enter" && !taskExists) {
			setTasks([...tasks, newTask]);
		}
	}

	function deleteTask(indexRemove) {
		let newTask = [...tasks];
		newTask.splice(indexRemove, 1);
		setTasks(newTask);
	}

	return (
		<div>
			<h1 className="header">To do&apos;s</h1>
			<div className="bodyTodo">
				<InputText onKeyDown={addNewTask} onChange={newTaskChange} />
				<ul className="tasks">
					{tasks.map((task, index) => (
						<TaskLi
							key={index}
							task={task}
							index={index}
							deleteTask={deleteTask}
						/>
					))}
				</ul>
				<div className="counterTasks">
					<CounterTasks tasks={tasks} />
				</div>
				<div id="page2"></div>
				<div id="page3"></div>
			</div>
		</div>
	);
};

export default ToDoList;
