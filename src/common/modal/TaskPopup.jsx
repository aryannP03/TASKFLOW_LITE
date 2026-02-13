function TaskPopup({ children, onClose }) {
  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-5000 px-4">
      <div className="relative bg-transparent">
        
        <button
          onClick={onClose}
          className="absolute z-10 -top-4 -right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 shadow hover:bg-red-500 hover:text-white"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

export default TaskPopup