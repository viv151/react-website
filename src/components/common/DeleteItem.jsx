import React from "react";

const DeleteItem = ({onDelete, onCancel, message}) => {
  return (
    <section className="flex flex-col gap-6">
      <p className="text-base text-gray-300 leading-1.5">{message}</p>

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

export default DeleteItem;
