import React from "react";

const Input = (props) => {

    const handleInput = (event) => {
        
        if(event.key ==="Enter"){
            if(event.target.value.length===0){
                props.addTask({label: "Empty task", priority: "", done: false});
            }
            else{
                props.addTask({label: event.target.value, priority: "", done: false});
            }
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