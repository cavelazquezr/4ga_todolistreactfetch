import React from "react";

const DeleteButton = (props) => {
    return(
        <button type="button" className="btn btn-danger mt-4" onClick={props.cleanTaskList}>Delete all tasks</button>
    )
}

export default DeleteButton