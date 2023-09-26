import React, { useState, useContext } from "react";
import "./Input.css";

// Context
import TodoContext from "../context/TodoContext";

const Input = () => {
  
  const { addTodoItem } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");


  // shows typed input value from user on UI
  const hanldeInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    // to prevent default behavior of submit
    event.preventDefault();

    if (inputValue !== "") {
      // function to add todo item to todo list
      addTodoItem(inputValue);
    }

    // setting empty string to input after adding item to list
    setInputValue("");
  };
  return (
    <div className="input_container">
      <div className="input_icon"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={inputValue}
          placeholder="Create a new todo..."
          onChange={hanldeInputValueChange}
        />
      </form>
    </div>
  );
};

export default Input;
