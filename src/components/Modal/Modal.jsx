const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <div
        className="modal-content text-white relative rounded-lg shadow-lg p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        <h1 className="font-bold text-2xl mb-1.5">{title}</h1>
        <button
          className="absolute top-2 right-2 text-gray-400 cursor-pointer text-lg"
          onClick={onClose}
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
