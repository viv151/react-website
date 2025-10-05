import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "../Todo/TodoCard";
import TodoHeader from "../Todo/TodoHeader";
import Modal from "../Modal/Modal";
import AddTodo from "../Todo/AddTodo";

const Lists = ({ activeListId, setShowListForm }) => {
  const lists = useSelector((state) => state.lists);
  const [isAddTaskForm, setIsAddTaskForm] = useState(false);
  const [activeList, setIsActiveList] = useState({
    name: "",
    desc: "",
    tasks: [],
  });
  const [status, setStatus] = useState("");

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

  const tasks = activeList.tasks;

  const handleStatusFilter = (e) => {
    setStatus(e.target.value);
  };

  const filteredTasks =
    status === "completed" || status === "pending"
      ? tasks.filter((task) => task.completed === (status === "completed"))
      : tasks;

  // console.log(tasks, activeList.tasks);
  return (
    <>
      {lists && lists.length > 0 ? (
        <>
          <TodoHeader
            activeListTitle={activeList?.name || "No List Selected"}
            onAddTaskClick={() => setIsAddTaskForm(true)}
            activeListId={activeListId}
            onStatusChange={handleStatusFilter}
            selectedStatus={status}
          />
          <div className="mt-28 relative z-100">
            {filteredTasks &&
              filteredTasks.length > 0 &&
              filteredTasks.map((task) => (
                <TodoCard
                  key={task.id}
                  title={task.message}

                  // description={task.description}
                />
              ))}
          </div>
        </>
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

      {lists && lists.length > 0 && activeListId}
      <Modal
        isOpen={isAddTaskForm}
        onClose={() => setIsAddTaskForm(false)}
        title="Add task"
      >
        <AddTodo
          onSubmit={() => setIsAddTaskForm(false)}
          activeListId={activeListId}
        />
      </Modal>
    </>
  );
};

export default Lists;
