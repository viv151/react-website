import { useMemo, useState } from "react";
import "./App.css";
import AddList from "./components/List/AddList";
import Modal from "./components/Modal/Modal";
import Lists from "./components/List/Lists";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import DeleteList from "./components/List/DeleteList";
import { useSelector } from "react-redux";

function App() {
  const [isListFormModalOpen, setListFormModalOpen] = useState(false);
  const [isDeleteListModalOpen, setIsDeleteListModalOpen] = useState(false);
  const [deleteListId, setDeleteListId] = useState(null);
  const [activeListId, setActiveListId] = useState("");

  //active selected list

  const lists = useSelector((state) => state.lists);

  const activeList = useMemo(() => {
    return lists.find((list) => list.id === activeListId);
  }, [activeListId]);

  return (
    <>
      <Sidebar
        onAddListClick={() => setListFormModalOpen(true)}
        onDeleteListClick={(id) => {
          setIsDeleteListModalOpen(true);
          setDeleteListId(id);
        }}
        setActiveListIdOnClick={(id) => setActiveListId(id)}
        // showDeleteModal={() => }
      >
        
        <Lists
          activeListId={activeListId}
          setShowListForm={() => setListFormModalOpen(true)}
        />
        <Modal
          isOpen={isListFormModalOpen}
          onClose={() => setListFormModalOpen(false)}
          title="Add List"
        >
          <AddList onSubmit={() => setListFormModalOpen(false)} />
        </Modal>
        <Modal
          isOpen={isDeleteListModalOpen}
          onClose={() => setIsDeleteListModalOpen(false)}
          title="Delete List"
        >
          <DeleteList
            onCancel={() => setIsDeleteListModalOpen(false)}
            deleteListId={deleteListId}
          />
        </Modal>
      </Sidebar>
    </>
  );
}

export default App;
