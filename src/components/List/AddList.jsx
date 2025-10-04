import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../slices/todoSlice";
import { useEffect, useState } from "react";

const AddList = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const validateFields = () => {
    if (text.trim().length > 3 && desc.trim().length > 3) {
      setIsEnabled(true);
    }
  };

  // const todoList = useSelector((state) => state.lists);

  const addListHandler = (e) => {
    e.preventDefault();
    dispatch(addList({ listName: text, listDesc: desc }));
    setText("");
    setDesc("");
    onSubmit();
  };

  // useEffect(() => {
  //   console.log("Todos updated:", todoList);
  // }, [todoList]);

  useEffect(() => {
    validateFields();
  }, [text, desc]);

  return (
    <div className="flex">
      <form
        onSubmit={addListHandler}
        className="flex flex-col text-center mx-auto items-center list-form w-full"
      >
        <input
          type="text"
          value={text}
          placeholder="Enter text"
          onChange={(e) => setText(e.target.value)}
          className="my-3 p-0.5 ps-2 border-2 rounded-2xl"
        />
        <input
          type="text"
          value={desc}
          placeholder="Enter description"
          onChange={(e) => setDesc(e.target.value)}
          className="my-3 p-0.5 ps-2 border-2 rounded-2xl"
        />
        <button
          type="submit"
          disabled={!isEnabled}
          className="bg-transparent mt-4 p-2 w-fit ps-5 pe-5 cursor-pointer border-2 border-solid border-gray-600 text-gray-400 font-medium rounded-lg"
        >
          <i className="fa-solid fa-plus"></i> Add List
        </button>
      </form>
    </div>
  );
};

export default AddList;
