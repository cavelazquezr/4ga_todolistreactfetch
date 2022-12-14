import React, { useState } from "react";

//import components
import Input from "./input.jsx";
import TaskList from "./taskList.jsx";

//create your first component
const Home = () => {

	//set variables
	let [taskList, setTaskList] = useState([]);

	const addTask = (newTask) => {
		setTaskList([...taskList, newTask])
	}

	const removeTask = (index) => {
		taskList.splice(index, 1);
		setTaskList([...taskList])
	}

	const editObject = (array, index, key, newValue) => {
		array[index][key]=newValue
		setTaskList([...taskList])
	}

	return (
		<div className="container-fluid text-center p-4">
			<h1>ToDo List</h1>

			<Input
			taskList={taskList}
			addTask={addTask}
			/>

			<h4 className="text-start my-3">Tasks to do ({taskList.length})</h4>

			<TaskList
			taskList={taskList}
			removeTask={removeTask}
			editObject={editObject}
			/>
			
		</div>
	);
};

export default Home;
