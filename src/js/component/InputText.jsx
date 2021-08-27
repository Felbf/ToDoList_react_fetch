import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
const InputText = ({ onKeyDown, onChange }) => {
	const [value, setValue] = useState("");

	function valueChange(event) {
		setValue(event.target.value);
		onChange(event);
	}

	return (
		<input
			className="inputTask"
			type="text"
			placeholder="No tasks, add a task"
			onChange={valueChange}
			onKeyDown={onKeyDown}
			value={value}
		/>
	);
};

InputText.propTypes = {
	onKeyDown: PropTypes.func,
	onChange: PropTypes.func
};

export default InputText;
