import React from "react";
import { useSelector } from "react-redux";

const TodoHeader = ({
  activeListTitle,
  selectedStatus,
  onAddTaskClick,
  onStatusChange,
  activeListId,
}) => {
  const lists = useSelector((state) => state.lists);

  return (
    <div className="items-start border-b border-solid border-b-gray-700 justify-between flex w-5xl fixed z-auto bg-black pt-10 px-5 pb-5 text-left">
      <div>
        <h2 className="text-2xl font-semibold text-white">{activeListTitle}</h2>
      </div>

      <div className="flex items-center gap-7">
        {activeListId && (
          <div className="relative inline-block w-36">
            <select
              name="filter"
              value={selectedStatus}
              onChange={onStatusChange}
              className="w-full appearance-none task-status-filter bg-gray-950 text-amber-50 border border-solid rounded-lg py-2 px-4 text-base outline-none cursor-pointer "
            >
              <option value="">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
            <i className="fa-solid fa-chevron-down select-icon"></i>
          </div>
        )}

        {lists && lists.length > 0 && activeListId && (
          <button
            className="bg-transparent gap-2.5 font-normal text-xl p-0 items-center cursor-pointer"
            onClick={() => onAddTaskClick()}
          >
            <i className="fa-solid fa-plus"></i>{" "}Add Task
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoHeader;
