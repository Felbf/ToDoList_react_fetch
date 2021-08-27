import React from "react";
import PropTypes from "prop-types";

//create your first component
const TaskLi = ({ task, index, deleteTask }) => {
	return (
		<li className="task">
			<span>{task}</span>
			<span
				className="delete"
				onClick={() => {
					deleteTask(index);
				}}>
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
