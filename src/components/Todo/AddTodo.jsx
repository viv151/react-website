import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/todoSlice";

const AddTodo = ({ onSubmit, activeListId }) => {
  const disptach = useDispatch();
  const [message, setMessage] = useState("");

  const addTodo = () => {
    e.preventDefault();
    onSubmit()
    disptach(addTask({ id: activeListId, message }));
    setMessage("");
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
