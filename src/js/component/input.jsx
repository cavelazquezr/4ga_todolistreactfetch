import React from "react";

const Input = (props) => {

    const handleInput = (event) => {
        
        if(event.key ==="Enter"){
            props.addTask({name: event.target.value, priority: ""});
            event.target.value="";
        }
    }

    return(
        <div className="form-floating">
            <input type="text" onKeyUp={handleInput} className="form-control mb-2" placeholder="Type your task and press enter."></input>
            <label>Type your task and press enter.</label>
        </div>
    )
}

export default Input;