import React from "react";
import { useDispatch } from "react-redux";
import { removeList } from "../../slices/todoSlice";

const DeleteList = ({ onCancel, deleteListId }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(removeList(deleteListId));
    onCancel();
  };

  return (
    <section className="flex flex-col gap-6 pt-5">
      <p className="text-base text-gray-300 leading-7">
        Are you sure you want to delete this list? This action cannot be undone.
      </p>

      <div className="flex justify-center gap-7.5">
        <button className="secondary-btn" onClick={onCancel}>
          Back
        </button>

        <button className="danger-btn" onClick={onDelete}>
          <i className="fa-solid fa-trash" style={{ marginRight: "6px" }}></i>
          Delete
        </button>
      </div>
    </section>
  );
};

export default DeleteList;
