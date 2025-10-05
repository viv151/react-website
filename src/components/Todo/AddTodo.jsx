import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/todoSlice";
import { useEffect } from "react";

const AddTodo = ({ onSubmit, activeListId }) => {
  const disptach = useDispatch();
  const [message, setMessage] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const validateFields = () => {
    if (message.trim().length > 3) {
      setIsEnabled(true);
    }
  };

  const addTodo = (e) => {
    e.preventDefault();
    disptach(addTask({ id: activeListId, message }));
    setMessage("");
    onSubmit();
  };

  useEffect(() => {
    validateFields();
  }, [message]);

  return (
    <form
      onSubmit={addTodo}
      className="flex flex-col text-center mx-auto items-center list-form w-full"
    >
      <input
        type="text"
        value={message}
        placeholder="Enter text"
        onChange={(e) => setMessage(e.target.value)}
        className="my-3 p-0.5 ps-2 border-2 rounded-2xl"
      />
      <button
        type="submit"
        disabled={!isEnabled}
        className="bg-transparent mt-4 p-2 w-fit ps-5 pe-5 cursor-pointer border-2 border-solid border-gray-600 text-gray-400 font-medium rounded-lg"
      >
        <i className="fa-solid fa-plus"></i> Add Task
      </button>
    </form>
  );
};

export default AddTodo;
