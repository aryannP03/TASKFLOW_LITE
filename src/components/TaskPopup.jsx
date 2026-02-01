import React from "react";

function TaskPopup({ onClose, children }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div style={{ background: "#fff", padding: "20px", width: "400px" }}>
        <button onClick={onClose} style={{ float: "right" }}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}

export default TaskPopup;
