import React, { useEffect, useState } from "react";
import InputText from "./InputText.jsx";
import TaskLi from "./TaskLi.jsx";
import CounterTasks from "./CounterTasks.jsx";

const ToDoList = () => {
	const [tasks, setTasks] = useState([{ label: "", done: false }]);

	async function newUser() {
		return fetch("https://assets.breatheco.de/apis/fake/todos/user/Felbf", {
			method: "POST",
			mode: "cors",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify([])
		})
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
			})
			.catch(function(error) {
				alert("Lo sentimos, el usuario no puede ser creado\n", error);
			});
	}

	async function getList() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Felbf", {
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				console.log(data); //here is were your code should start after the fetch finishes
				setTasks(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	useEffect(() => {
		if (tasks.length === 0) {
			newUser();
			getList();
		} else {
			getList();
		}
	}, []);

	async function updateList(tasks) {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Felbf", {
			method: "PUT",
			body: JSON.stringify(tasks),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	useEffect(() => {
		if (tasks.length !== 0) {
			updateList(tasks);
		}
	}, [tasks]);

	async function deleteList() {
		await fetch("https://assets.breatheco.de/apis/fake/todos/user/Felbf", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
		newUser();
		setTasks([]);
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
				<InputText tasks={tasks} setTasks={setTasks} />
				<ul className="tasks">
					{tasks.map((listTask, index) => (
						<TaskLi
							key={index}
							task={listTask.label}
							index={index}
							deleteTask={deleteTask}
						/>
					))}
				</ul>
				<div className="counterTasks">
					<CounterTasks tasks={tasks} />
					<button className="btn-deleteTodos" onClick={deleteList}>
						Borrar Lista
					</button>
				</div>
				<div id="page2"></div>
				<div id="page3"></div>
			</div>
		</div>
	);
};

export default ToDoList;
