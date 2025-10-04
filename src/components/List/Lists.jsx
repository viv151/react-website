import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "../Todo/TodoCard";

const Lists = ({ activeListId, setShowListForm }) => {
  const lists = useSelector((state) => state.lists);
  const [activeList, setIsActiveList] = useState({
    name: "",
    desc: "",
    tasks: [],
  });

  useEffect(() => {
    const activeList = activeListId
      ? lists.find((list) => list.id === activeListId)
      : null;
    if (activeListId) {
      setIsActiveList({
        name: activeList.listName,
        desc: activeList.listDesc,
        tasks: activeList.listItems,
      });
    }
  }, [activeListId]);

  console.log(activeList);
  return (
    <div>
      {lists && lists.length > 0 && activeListId ? (
        <div className="mt-28 relative z-100">
          {activeList.tasks && activeList.tasks.length > 0 ? (
            activeList.tasks.map((task) => (
              <TodoCard
                id={task.id}
                title={task.title}
                description={task.description}
              />
            ))
          ) : (
            <p className="mb-6 text-lg text-gray-300">
              You don't have any tasks yet. Create your first task.
            </p>
          )}
        </div>
      ) : (
        <div className="py-6 flex items-center justify-center h-screen text-center w-full box-border">
          <div className="section-title">
            <h2 className="mb-5">Welcome to Taskly!</h2>
            <p className="mb-6 text-lg text-gray-300">
              You don't have any lists yet. Create your first list to start
              organizing your tasks.
            </p>
            <button
              className="secondary-btn"
              onClick={() => setShowListForm(true)}
            >
              <i className="fa-solid fa-plus"></i> Create Your First List
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lists;
