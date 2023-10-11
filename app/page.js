"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue(""); // Clear the input field
  };

  // Update the input value when the user types
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelTodo=(i)=>{
    let newTodos=todos.filter((el)=> el ==! i)
  }

  return (
    <main className="container-fluid">
      <h1>ToDo App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          aria-label="Enter Todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <><li key={index} className="list-group-item">{todo}</li></>
        ))}
      
      </ul>
    </main>
  );
}

