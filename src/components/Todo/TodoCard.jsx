import React from "react";

const TodoCard = ({ id, completed, title,  }) => {
  return (
    <section className="flex justify-center my-5 mx-auto">
      <div className={`task-card ${completed ? "completed" : ""}`}>
        <div className="flex items-baseline gap-3.5">
          <div className="relative flex items-center">
            <label className="round-checkbox">
              <input
                type="checkbox"
                checked={completed}
                // onChange={handleCheckboxChange}
                disabled={completed}
              />
              <span className="custom-circle">
                <i className="fa-solid fa-check check-icon"></i>
              </span>
            </label>
            {!completed && <div className="tooltip">Mark as completed</div>}
          </div>
          <div className="card-text-content">
            {" "}
            <div className="card-title">
              <h2 className={completed ? "strike" : ""}>{title}</h2>
            </div>
            {/* <div className="card-description">
              <p className={completed ? "dim-text" : ""}>{description}</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoCard;
