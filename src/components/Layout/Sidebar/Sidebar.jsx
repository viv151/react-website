import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeList } from "../../../slices/todoSlice";

const Sidebar = ({
  children,
  onAddListClick,
  onDeleteListClick,
  setActiveListIdOnClick,
  showDeleteModal,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const lists = useSelector((state) => state.lists);
  console.log(lists);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="flex h-full">
      {/* {isOpen && (
        <div
          className="fixed top-0 left-0 h-full w-full z-50 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}

      {isOpen ? (
        <div className="fixed h-screen overflow-y-auto border-r-1 border-solid border-gray-500 px-8 py-5 flex-col flex justify-between items-center top-0 left-0 sidebar-menu open">
          <div className="w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-2xl font-semibold text-white">Taskly</h2>

              <button
                className="bg-transparent text-white p-0 cursor-pointer"
                onClick={toggleSidebar}
              >
                <i className="fa-solid fa-angles-left"></i>
              </button>
            </div>

            <div className="w-full mt-7 flex flex-col">
              <div>
                <div className="flex flex-col mt-5 border-t gap-2.5 border-solid border-b-gray-700">
                  <div className="flex justify-between items-center">
                    <div className="mt-5 mb-5">
                      <h3 className="text-xl">All Lists</h3>
                    </div>

                    <div className="add-new-list">
                      <button
                        className="bg-transparent font-medium p-0 w-full text-xl cursor-pointer"
                        onClick={() => {
                          onAddListClick();
                          // handleMobileSidebarClose();
                        }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  {lists.length > 0 &&
                    lists.map((list) => (
                      <button
                        key={list.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveListIdOnClick(list.id);
                        }}
                        className="bg-transparent text-white border-0 py-2.5 px-3 text-left rounded-md cursor-pointer sidebar-list-btn"
                      >
                        <span className="flex justify-between items-center">
                          <span className="text-base font-medium">
                            {list.listName}
                          </span>
                          <div>
                            <span
                              className="sidebar-delete-list-btn opacity-0 transition-opacity ease-in bg-none cursor-pointer mr-3 text-amber-50 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteListClick(list.id);
                                // showDeleteModal();
                                // handleMobileSidebarClose();
                              }}
                              aria-label="Delete list"
                            >
                              <i className="fa-regular fa-trash-can"></i>
                            </span>
                            <i className="fa-solid fa-angle-right"></i>
                          </div>
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed h-screen border-r-1 border-gray-500 px-8 py-5 top-0 left-0  sidebar-menu close border-none">
          <button
            className="bg-transparent text-white p-0 cursor-pointer"
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      )}
      <div
        className={`w-full flex justify-center sidebar-content ${
          isOpen ? "open" : "close"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Sidebar;
