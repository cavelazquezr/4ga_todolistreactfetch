import React, { useState } from "react";

const Task = (props) => {

    const handleClick = (event) => {
        props.removeTask(event.target.id)
    }

    const handlePriority = (event) => {
        props.editObject(props.taskList, props.index, "priority", event.target.value)
    }

    const badgeRender = (array, index) => {
        if(array[index]["priority"]==="Urgent"){
            return <span className="badge text-bg-danger">Urgent</span>
        }
        else if(array[index]["priority"]==="Important"){
            return <span className="badge text-bg-primary">Important</span>
        }
        else if(array[index]["priority"]==="Medium"){
            return <span className="badge text-bg-secondary">Medium</span>
        }
        else if(array[index]["priority"]==="Low"){
            return <span className="badge text-bg-info">Low</span>
        }
        else{
            return <span className="badge text-bg-secondary">Medium</span>
        }
    }

    return(
        <li className="list-group-item taskList">
            <div className="badge-size">
                <p className=" m-0 h-100 badge-size">{badgeRender(props.taskList, props.index)}</p>
            </div>
            <div className="w-50 text-start">
                <p className=" m-0">{props.item.name}</p>
            </div>
            <div className="">
                <select onChange={handlePriority} className="form-select" id={props.index} value={props.item.priority}>
                    <option value="">Choose priority</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Important">Important</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div>
                <button onClick={handleClick} id={props.index} type="button" className="btn-close" aria-label="Close"></button>
            </div>
        </li>
    )
    
}

export default Task;