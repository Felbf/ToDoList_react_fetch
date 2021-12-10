import React from "react";
import PropTypes from "prop-types";

//create your first component
const TaskLi = ({ task, index, deleteTask }) => {
	function deletedTask() {
		deleteTask(task);
	}
	return (
		<li className="task">
			<span>{task}</span>
			<span className="delete" onClick={deletedTask}>
				<i className="fas fa-times"></i>
			</span>
		</li>
	);
};

TaskLi.propTypes = {
	task: PropTypes.string,
	index: PropTypes.number,
	deleteTask: PropTypes.func
};

export default TaskLi;
