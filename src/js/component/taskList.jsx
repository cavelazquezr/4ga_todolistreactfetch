import React from "react";

//import components
import Task from "./task.jsx";

const TaskList = (props) => {

    const taskListMap = props.taskList.map((item, index) => {
        return <Task
        item={item}
        taskList={props.taskList}
        key={index}
        index={index}
        removeTask={props.removeTask}
        editObject={props.editObject}
        />
    })

    return(
        <div>
            <ul className="list-group">
                {taskListMap}
            </ul>
        </div>
    )
    
}

export default TaskList;