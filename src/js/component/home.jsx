import React, { useEffect, useState } from "react";

//import components
import Input from "./input.jsx";
import TaskList from "./taskList.jsx";
import DeleteButton from "./deleteButton.jsx";

//create your first component
const Home = () => {

	//set variables
	let [taskList, setTaskList] = useState([]);

	//fetch

	//fetch when web loads
	useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/carlosavelazquezr")
      .then((response) => {
        return response.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((dataFetched) => {
		// console.log(dataFetched)
        setTaskList(dataFetched);
      });
  }, []);

	//fetch when the list is modified
  	useEffect(() => {
		//to follow every change in console
		console.log(taskList)

		//fetch
		fetch("https://assets.breatheco.de/apis/fake/todos/user/carlosavelazquezr",{
			method: "PUT",
			body: JSON.stringify(taskList),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((response) => {
			return response.json()
		})
		.then((dataFetched) =>{
			console.log(dataFetched)
		})
		.catch((err) => {
			console.log(err)
		})
	}, [taskList])

	//functions
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

	const cleanTaskList = () => {
		taskList=[]
		setTaskList([...taskList])
	}

	return (
		<div className="container-fluid text-center p-4">
			<h1>ToDo List</h1>
			<p className="text-start text-muted">Note: this is working with username: carlosavelazquezr for academic purposes only</p>

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

			<DeleteButton
			cleanTaskList={cleanTaskList}/>
			
		</div>
	);
};

export default Home;
