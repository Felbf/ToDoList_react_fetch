import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//create your first component
const InputText = ({ tasks, setTasks }) => {
	const [newTask, setNewTask] = useState("");
	const [taskExist, setTaskExist] = useState(false);

	useEffect(() => {
		let position = tasks.findIndex(task => task === newTask);
		if (position === -1) {
			setTaskExist(false) && newTask;
		} else {
			setTaskExist(true) && !newTask;
		}
	}, [newTask]);

	function valueChange(event) {
		setNewTask(event.target.value);
	}

	function addNewTask(event) {
		if (event.key.toLowerCase() === "enter" && !taskExist) {
			let position = tasks.findIndex(task => task.label === newTask);
			if (position === -1) {
				setTasks([...tasks, { label: newTask, done: false }]);
				setNewTask("");
			}
		}
	}

	// function newTaskChange(event) {
	// 	setNewTask(event.target.value);
	// }

	return (
		<input
			className="inputTask"
			type="text"
			placeholder="No tasks, add a task"
			onChange={valueChange}
			onKeyDown={addNewTask}
		/>
	);
};

InputText.propTypes = {
	tasks: PropTypes.array,
	setTasks: PropTypes.func
};

export default InputText;
