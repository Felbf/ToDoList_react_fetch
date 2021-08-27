import React from "react";
import PropTypes from "prop-types";

//create your first component
const CounterTasks = ({ tasks }) => {
	function countTask() {
		return `${tasks.length} item left`;
	}
	return countTask();
};

CounterTasks.propTypes = {
	tasks: PropTypes.string
};

export default CounterTasks;
